import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, CardActionArea } from '@mui/material';
import { useRouter } from 'next/router';

const FeaturedProductCard = ({ product }) => {
  const router = useRouter();
  
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: '0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }
      }}
    >
      <CardActionArea onClick={() => router.push(`/hostellor/product/${product.id}`)}>
        <CardMedia
          component="img"
          height="160"
          image={product.image || '/images/product-placeholder.png'}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom noWrap>
            {product.title}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body1" color="primary" fontWeight="bold">
              {product.price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FeaturedProductCard;
