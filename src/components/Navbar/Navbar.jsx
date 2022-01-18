import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { cartItemsNumber } from '../../features/cart/cartSlice'

export const Navbar = () => {
    const numItemsInCart = useSelector(cartItemsNumber);
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    flexGrow={1}
                >
                    Moviles
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <ShoppingCartIcon />
                    </IconButton>
                    {numItemsInCart > 0 && (<Typography>{numItemsInCart}</Typography>)}
                </Box>
            </Toolbar>
        </AppBar>
    )
}
