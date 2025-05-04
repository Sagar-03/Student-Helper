const express = require('express');
const fs = require('fs');
const path = require('path');

// Function to search for route files
function findRouteFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findRouteFiles(filePath, fileList);
    } else if (file.endsWith('.js') && !file.includes('node_modules')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('router.') || content.includes('app.')) {
          fileList.push(filePath);
        }
      } catch (err) {
        console.error(`Error reading file ${filePath}:`, err);
      }
    }
  });
  
  return fileList;
}

// Improved function to validate route parameters
function validateRoute(route) {
  try {
    // Try to create a route with the pattern
    const app = express();
    app.get(route, (req, res) => res.send('test'));
    return { valid: true };
  } catch (error) {
    return { valid: false, error: error.message };
  }
}

// Main function to find issues
function findRouteIssues() {
  const routeFiles = findRouteFiles(__dirname);
  console.log(`Found ${routeFiles.length} potential route files`);
  
  // Enhanced list of suspicious patterns - including the specific error URL
  const suspiciousPatterns = [
    '/:',
    '/:/api',
    '/api/:/',
    '/:/',
    ':/',
    '/git.new/',
    'pathToRegexpError',
    'https://git.new/',
    'git.new'
  ];
  
  const issues = [];
  
  // Add a check for full URLs being used as routes - Express doesn't support this
  const fullUrlRegex = /['"`](https?:\/\/[^'"`]+)['"`]/;
  
  routeFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    lines.forEach((line, i) => {
      // Check for route definitions and examples in comments
      if ((line.includes('router.') || line.includes('app.') || 
           line.includes('// router.') || line.includes('// app.') ||
           line.includes('// Example:') || line.includes('Example:')) &&
          !line.trim().startsWith('*/')) {
        
        // Check for suspicious patterns
        suspiciousPatterns.forEach(pattern => {
          if (line.includes(pattern)) {
            issues.push({
              file,
              line: i + 1,
              content: line.trim(),
              issue: `Contains suspicious pattern: ${pattern}`
            });
          }
        });
        
        // Check for full URLs used as routes (which Express doesn't support)
        const fullUrlMatch = line.match(fullUrlRegex);
        if (fullUrlMatch) {
          issues.push({
            file,
            line: i + 1,
            content: line.trim(),
            issue: `Contains full URL which is not valid as an Express route: ${fullUrlMatch[1]}`
          });
        }
        
        // Extract route patterns for validation - now handling more quoted string formats
        const routeMatch = line.match(/['"`]([^'"`]+)['"`]/);
        if (routeMatch) {
          try {
            const route = decodeURIComponent(routeMatch[1]);
            
            // Improved check for malformed parameters like '/:' with no name after the colon
            // This regex specifically targets route params that don't have valid identifiers following the colon
            if (route.includes('/:')) {
              // Check for missing or invalid parameter names
              const paramRegex = /\/:[^a-zA-Z0-9_]/;
              if (paramRegex.test(route) || route.includes('/:') && route.match(/\/:[^\/]*/)[0] === '/:') {
                issues.push({
                  file,
                  line: i + 1,
                  content: line.trim(),
                  issue: 'Malformed parameter - missing name after colon'
                });
              }
            }
            
            // Validate the route pattern
            const validation = validateRoute(route);
            if (!validation.valid) {
              issues.push({
                file,
                line: i + 1,
                content: line.trim(),
                error: validation.error
              });
            }
          } catch (error) {
            // Catch issues with decodeURIComponent
            issues.push({
              file,
              line: i + 1,
              content: line.trim(),
              error: `Error processing route: ${error.message}`
            });
          }
        }
      }
      
      // Also check for routes in comments that might be causing issues
      // Improved regex that specifically looks for route parameters with no name after colon
      if (line.includes('/:') && !line.match(/\/:[a-zA-Z0-9_]/)) {
        issues.push({
          file,
          line: i + 1,
          content: line.trim(),
          issue: 'Possibly malformed parameter in comment'
        });
      }
    });
  });
  
  return issues;
}

// Run the function and display results with more context
const issues = findRouteIssues();
console.log('\nPotential route issues found:');
if (issues.length === 0) {
  console.log('No obvious issues found. Check manually for more complex route configurations.');
} else {
  console.log(`Found ${issues.length} potential issues:`);
  issues.forEach((issue, i) => {
    console.log(`\nIssue ${i + 1}:`);
    console.log(`File: ${issue.file}`);
    console.log(`Line: ${issue.line}`);
    console.log(`Content: ${issue.content}`);
    if (issue.error) {
      console.log(`Error: ${issue.error}`);
    }
    if (issue.issue) {
      console.log(`Issue: ${issue.issue}`);
    }
    
    // Show context - lines before and after
    try {
      const content = fs.readFileSync(issue.file, 'utf8');
      const lines = content.split('\n');
      const startLine = Math.max(0, issue.line - 3);
      const endLine = Math.min(lines.length - 1, issue.line + 2);
      
      console.log('\nContext:');
      for (let j = startLine; j <= endLine; j++) {
        const prefix = j === issue.line - 1 ? '>>> ' : '    ';
        console.log(`${prefix}${j + 1}: ${lines[j].trim()}`);
      }
    } catch (error) {
      console.log('Could not load context');
    }
    
    // Suggest a fix if possible
    if (issue.content.includes('/:') && !issue.content.match(/\/:[a-zA-Z0-9_]+/)) {
      console.log('\nSuggested fix:');
      console.log(`Replace '/:' with '/:paramName' - All route parameters must have names`);
    } else if (issue.issue && issue.issue.includes('Malformed parameter')) {
      console.log('\nSuggested fix:');
      console.log('Add a parameter name after the colon, for example:');
      
      // Extract the route pattern and suggest a fixed version
      const routeMatch = issue.content.match(/['"`]([^'"`]+)['"`]/);
      if (routeMatch) {
        const route = routeMatch[1];
        
        // Determine appropriate parameter name based on route context
        let fixedRoute;
        if (route.includes('product')) {
          fixedRoute = route.replace(/\/:(\/|$|\?|&|$)/g, '/:productId$1');
        } else if (route.includes('course')) {
          fixedRoute = route.replace(/\/:(\/|$|\?|&|$)/g, '/:courseId$1');
        } else if (route.includes('api')) {
          fixedRoute = route.replace(/\/:(\/|$|\?|&|$)/g, '/:resource$1');
        } else {
          fixedRoute = route.replace(/\/:(\/|$|\?|&|$)/g, '/:paramName$1');
        }
        
        console.log(`Original: ${route}`);
        console.log(`Fixed:    ${fixedRoute}`);
      } else {
        console.log(`Example: "/:id" instead of "/:" - Each parameter needs a name`);
      }
    } else if (issue.issue && issue.issue.includes('Contains full URL')) {
      console.log('\nSuggested fix:');
      console.log('Express routes should not contain full URLs with protocol and domain.');
      console.log('Instead use relative paths starting with "/" for your routes.');
      
      // Extract the URL and suggest path-only version
      const urlMatch = issue.content.match(/['"`](https?:\/\/[^\/]+\/[^'"`]*)['"`]/);
      if (urlMatch) {
        const fullUrl = urlMatch[1];
        try {
          const url = new URL(fullUrl);
          const pathOnly = url.pathname + url.search + url.hash;
          console.log(`Original: "${fullUrl}"`);
          console.log(`Fixed:    "${pathOnly}"`);
        } catch (e) {
          console.log(`Try changing "${urlMatch[1]}" to a path-only route`);
        }
      }
    } else if (issue.error) {
      console.log('\nPossible fix:');
      console.log('Check for syntax errors in the route pattern');
      console.log('Make sure all route parameters have names (e.g., "/:id" not "/:")`');
      
      // Special handling for the pathToRegexpError URL
      if (issue.error.includes('pathToRegexpError') || issue.content.includes('pathToRegexpError')) {
        console.log('\nSpecific issue: The URL "https://git.new/pathToRegexpError" is being used as a route.');
        console.log('This is not valid in Express as routes should be paths, not full URLs.');
        console.log('Suggested fix: Use a path like "/git/new" instead of a full URL');
      }
    }
  });
  
  console.log('\nRun this script after making changes to verify the fixes.');
}
