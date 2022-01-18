import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetail, selectProductDetail } from '../ProductPage/productsSlice';
import { DetailedView } from '../../components/DetailView/DetailedView';
import { addToCart } from '../cart/cartSlice';

export const ProductDetailPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector(selectProductDetail);
    const [id, setId] = useState();

    useEffect(() => {
        if (params.id) {
            setId(params.id);
            dispatch(fetchProductDetail(params.id));
        }
    }, []);

    useEffect(() => {
        console.log(productDetail);
    }, [productDetail])

    const handleAddToCart = itemId => {
        dispatch(addToCart(productDetail));
    }

    return (
        <DetailedView data={productDetail} onAddToCart={() => handleAddToCart()} />
    )
}
