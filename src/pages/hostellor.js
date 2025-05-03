import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { useRouter } from 'next/router';

const Hostellor = () => {
  const router = useRouter();

  const cards = [
    { id: 1, title: 'Night Market', description: 'Buy and sell items within the campus community', link: '/hostellor/night-market', image: '/path/to/marketplace-icon.png' },
    { id: 2, title: 'Library', description: 'Access books and resources', link: '/hostellor/library' },
    { id: 3, title: 'Cafeteria', description: 'Check out the menu and order food', link: '/hostellor/cafeteria' },
  ];

  return (
    <Grid container spacing={3}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={4} key={card.id}>
          <Card
            onClick={() => {
              router.push(card.link);
            }}
          >
            {card.image && (
              <CardMedia
                component="img"
                image={card.image}
                alt={card.title}
              />
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Hostellor;