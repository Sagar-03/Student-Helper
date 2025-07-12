# PDF Notes Setup Guide

## Overview
This guide explains how to add PDF notes for each unit in the semester components.

## Current Setup
- Each semester component now has PDF viewing functionality
- PDFs are organized by subject and unit
- Sample HTML files are used for demonstration

## Adding Real PDF Files

### 1. File Structure
Place your PDF files in the following structure:
```
frontend/public/pdfs/
├── physics1/
│   ├── unit1/
│   │   ├── thermodynamics.pdf
│   │   ├── heat_work.pdf
│   │   └── ...
│   ├── unit2/
│   └── ...
├── math1/
├── chemistry/
└── ...
```

### 2. Updating PDF Paths
In each semester component file (e.g., `1.jsx`), update the `pdfData` object:

```javascript
const pdfData = {
  "Subject Name": {
    "UNIT - I": [
      { name: "Topic Name", path: "/pdfs/folder/unit1/filename.pdf" },
      // Add more PDFs for this unit
    ],
    "UNIT - II": [
      // Add PDFs for unit 2
    ],
    // Continue for all units
  },
  // Add other subjects
};
```

### 3. PDF File Requirements
- **Format**: PDF files work best
- **Size**: Keep files under 10MB for better loading
- **Naming**: Use descriptive, kebab-case names (e.g., `thermodynamics-basics.pdf`)
- **Location**: Must be in the `public/pdfs/` directory

### 4. Features Available
- ✅ Unit-wise PDF organization
- ✅ PDF viewer in iframe
- ✅ Grid layout for PDF selection
- ✅ Responsive design
- ✅ Loading states
- ✅ Error handling for missing files

### 5. Testing
1. Place your PDF files in the correct directory structure
2. Update the paths in the component
3. Navigate to Notes > B.Tech > CSE > Semester X
4. Click on "Notes" tab
5. Select a subject and unit
6. Click on any PDF to view

### 6. Supported File Types
- PDF files (recommended)
- HTML files (for formatted content)
- Images (PNG, JPG - will display in iframe)

## Sample Content
The current setup includes a sample HTML file (`sample-note.html`) that demonstrates the PDF viewer functionality. You can replace these with actual PDF files.

## Tips for Organization
1. **Consistent Naming**: Use consistent naming conventions
2. **Subject Codes**: Consider using subject codes in folder names
3. **Version Control**: Keep track of PDF versions
4. **File Size**: Optimize PDFs for web viewing
5. **Backup**: Always keep backup copies of your PDF files

## Future Enhancements
- PDF download functionality
- PDF bookmarking
- Search within PDFs
- PDF annotations
- Offline PDF access
