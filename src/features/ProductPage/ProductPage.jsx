import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { GridView } from '../../components/GridView/GridView'
import { selectProducts, fetchProducts } from './productsSlice';

export const ProductPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    const handleItemClick = (id) => {
        navigate(`/product/${id}`);
    }

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <GridView items={products} itemClick={(item) => handleItemClick(item)} />
    )
}
