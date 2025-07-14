import React from 'react';
import { products } from '../data/products';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useCart } from '../context/CartContext';

const HomePage: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 2, sm: 4, md: 4 }}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1" color="text.secondary">
                  ₹{product.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 1 }}
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;