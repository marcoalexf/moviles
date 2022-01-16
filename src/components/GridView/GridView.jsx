import React from 'react'
import PropTypes from 'prop-types'
import { GridItem } from '../GridItem/GridItem'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

const styles = makeStyles({
    hoverable: {
        "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.01)',
        },
    }
})

export const GridView = ({ items = [], itemClick = () => {}, ...props}) => {
    const classes = styles();
    return (
        <Grid container spacing={2} p={1}>
            {
                items.map(item => <Grid onClick={() => itemClick(item.id)} className={classes.hoverable} item xs={1} key={item.id}><GridItem data={item} key={item.id} onClick={() => itemClick(item)}/> </Grid>)
            }
        </Grid>
    )
}

GridView.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    itemClick: PropTypes.func.isRequired,
}