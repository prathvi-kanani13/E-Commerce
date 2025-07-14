import React from 'react';
import { AppBar, Toolbar, Typography, Button, Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar 
      position="static"
      sx={{
        backgroundColor: 'primary', // primary color
        boxShadow: 3,
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            letterSpacing: 1,
          }}
        >
          My E-Commerce
        </Typography>

        {/* Home Button */}
        <Button
          color="inherit"
          component={RouterLink}
          to="/"
          sx={{
            textTransform: 'none',
            fontWeight: 500,
            mx: 1,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
          }}
        >
          Home
        </Button>

        {/* Cart Button with Badge */}
        <IconButton
          color="inherit"
          component={RouterLink}
          to="/cart"
          sx={{
            ml: 1,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
          }}
        >
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCart fontSize="large" />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;