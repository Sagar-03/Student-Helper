import React, { useState } from 'react';
import { Container, Typography, Box, Button, Grid, Paper, Divider, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { useRouter } from 'next/router';
import NightlightIcon from '@mui/icons-material/Nightlight';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FeaturedProductCard from '../../components/FeaturedProductCard';

const NightMarket = () => {
  const router = useRouter();
  const [featuredProducts] = useState([
    {
      id: 1,
      title: 'Study Lamp',
      price: '₹299',
      image: '/images/products/lamp.jpg',
    },
    {
      id: 2,
      title: 'Guitar',
      price: '₹1999',
      image: '/images/products/guitar.jpg',
    },
    {
      id: 3,
      title: 'Second-hand Textbooks',
      price: '₹499',
      image: '/images/products/books.jpg',
    },
    {
      id: 4,
      title: 'Bicycle',
      price: '₹2999',
      image: '/images/products/cycle.jpg',
    },
  ]);

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box sx={{ position: 'relative', mb: 6, overflow: 'hidden', borderRadius: 3 }}>
        <Box
          sx={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/night-market-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 4,
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <NightlightIcon sx={{ fontSize: 40, mr: 1 }} />
            <Typography variant="h2" component="h1" sx={{ fontWeight: 700 }}>
              Night Market
            </Typography>
          </Box>
          <Typography variant="h5" sx={{ mb: 3, maxWidth: '800px' }}>
            Your campus marketplace for buying and selling items within the student community
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<LocalMallIcon />}
              onClick={() => router.push('/hostellor/sell')}
              sx={{ 
                backgroundColor: '#f50057', 
                '&:hover': { backgroundColor: '#ff4081' },
                fontWeight: 'bold',
                py: 1.5,
                px: 3
              }}
            >
              I Want to Sell
            </Button>
            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingBasketIcon />}
              onClick={() => router.push('/hostellor/buy')}
              sx={{ 
                backgroundColor: '#4caf50',
                '&:hover': { backgroundColor: '#45a049' },
                fontWeight: 'bold',
                py: 1.5,
                px: 3
              }}
            >
              Browse Products
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <AccessTimeIcon sx={{ mr: 1 }} /> About Night Market
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              The Night Market is a student-run marketplace exclusive to our campus community. 
              It provides a safe and convenient platform for students to buy and sell second-hand 
              items, handmade goods, and services to each other.
            </Typography>
            <Typography variant="body1" paragraph>
              Whether you're moving out and need to sell some items, looking for affordable textbooks, 
              or wanting to showcase your creative projects, Night Market is the perfect place to connect 
              with other students.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Night Market Hours
            </Typography>
            <Typography variant="body1">
              • Online: 24/7 through this platform<br />
              • Physical Market: Every Friday 6PM-10PM at the Student Center
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                backgroundColor: '#f5f5f5', 
                borderRadius: 2,
                border: '1px solid #e0e0e0'
              }}
            >
              <Typography variant="h6" gutterBottom>How It Works</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Box sx={{ 
                    backgroundColor: '#3f51b5', 
                    color: 'white', 
                    width: 36, 
                    height: 36, 
                    borderRadius: '50%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    fontWeight: 'bold'
                  }}>1</Box>
                  <Typography variant="body1">
                    List your item with photos, description, and price
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Box sx={{ 
                    backgroundColor: '#3f51b5', 
                    color: 'white', 
                    width: 36, 
                    height: 36, 
                    borderRadius: '50%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    fontWeight: 'bold'
                  }}>2</Box>
                  <Typography variant="body1">
                    Connect with interested buyers through our messaging system
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Box sx={{ 
                    backgroundColor: '#3f51b5', 
                    color: 'white', 
                    width: 36, 
                    height: 36, 
                    borderRadius: '50%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    fontWeight: 'bold'
                  }}>3</Box>
                  <Typography variant="body1">
                    Meet on campus to exchange the item and payment
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Box sx={{ 
                    backgroundColor: '#3f51b5', 
                    color: 'white', 
                    width: 36, 
                    height: 36, 
                    borderRadius: '50%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    fontWeight: 'bold'
                  }}>4</Box>
                  <Typography variant="body1">
                    Rate your experience to help build community trust
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <StorefrontIcon sx={{ mr: 1 }} /> Featured Items
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Grid container spacing={3}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <FeaturedProductCard product={product} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button 
            variant="outlined" 
            color="primary" 
            size="large"
            onClick={() => router.push('/hostellor/buy')}
          >
            View All Items
          </Button>
        </Box>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <ShoppingBasketIcon sx={{ mr: 1 }} /> Categories
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={2}>
          {['Electronics', 'Books', 'Furniture', 'Clothing', 'Sports', 'Music', 'Art', 'Services'].map((category) => (
            <Grid item xs={6} sm={3} key={category}>
              <Card 
                sx={{ 
                  height: '100px', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <CardActionArea 
                  sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  onClick={() => router.push(`/hostellor/buy?category=${category}`)}
                >
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {category}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default NightMarket;
