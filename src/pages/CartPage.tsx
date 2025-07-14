import React from 'react';
import { useCart } from '../context/CartContext';
import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, ListItemAvatar } from '@mui/material';

const CartPage: React.FC = () => {
    const { cartItems, removeFromCart } = useCart();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Cart
            </Typography>

            {cartItems.length === 0 ? (
                <Typography>Your cart is empty.</Typography>
            ) : (
                <>
                    <List>
                        {cartItems.map((item) => (
                            <React.Fragment key={item.id}>
                                <ListItem
                                    secondaryAction={
                                        <IconButton
                                            edge="end"
                                            aria-label="delete"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            variant="square"
                                            src={item.image}
                                            alt={item.name}
                                            sx={{ width: 56, height: 56, mr: 2 }}
                                        />
                                    </ListItemAvatar>

                                    <ListItemText
                                        primary={`${item.name} (x${item.quantity})`}
                                        secondary={`Price: ₹${item.price} | Subtotal: ₹${item.price * item.quantity}`}
                                    />
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </List>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Total: ₹{total}
                    </Typography>
                </>
            )}
        </Container>
    );
};

export default CartPage;
