import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';

export const GridItem = ({data = {}, ...props}) => {
    return (
        <Card sx={{
            height: '100%'
        }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {data.brand}
                </Typography>
                <Typography variant="h5" component="div">
                {data.model}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {data.price}$
                </Typography>
                <img height="100px" src={data.imgUrl} alt="image" />
            </CardContent>
        </Card>
    )
}

GridItem.propTypes = {
    data: PropTypes.object.isRequired
}
