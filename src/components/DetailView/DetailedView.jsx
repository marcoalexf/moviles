import { Box, Button, Container, Typography } from '@mui/material';
import PropsTypes from 'prop-types';
import React from 'react';
import { JSONTree } from 'react-json-tree';
import { DetailProduct } from '../../features/ProductDetailPage/models/ProductDetail';

export const DetailedView = ({data = {}, onAddToCart = () => { console.log('Add to cart called') }, ...props}) => {
    const detailedProduct = new DetailProduct(data);

    return (
        <Container>
            <Box display="flex" height="100%" alignItems="center" justifyContent="center">
                <Box>
                    <img src={detailedProduct.imgUrl}/>
                </Box>
                <Box display="flex" flexDirection="column">
                    <Box display="flex" flexDirection="column">
                        <Typography>Marca: {detailedProduct.brand}</Typography>
                        <Typography>Modelo: {detailedProduct.model}</Typography>
                        <Typography>Precio: {detailedProduct.price}</Typography>
                        <Typography>CPU: {detailedProduct.cpu}</Typography>
                        <Typography>RAM: {detailedProduct.ram}</Typography>
                        <Typography>Sistema Operativo: {detailedProduct.os}</Typography>
                        <Typography>Resolucion de Pantalla: {detailedProduct.displayResolution}</Typography>
                        <Typography>Bateria: {detailedProduct.battery} </Typography>
                        <Typography>Cameras:{detailedProduct.primaryCamera} | {(detailedProduct.secondaryCamera ?? '-')}</Typography>
                        <Typography>Dimensiones: {detailedProduct.dimentions}</Typography>
                        <Typography>Peso: {!detailedProduct.weight || detailedProduct.weight === "No informacion" ? 'No informacion' : detailedProduct.weight}</Typography>
                    </Box>
                    <Box display="flex">
                        <Button variant='outlined' onClick={() => onAddToCart(detailedProduct.id)}>Buy</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

DetailedView.propTypes = {
    data: PropsTypes.object.isRequired
}