const API_URL = 'https://front-test-api.herokuapp.com';
export const fetchProductsAsync = async () => {
    const response = await fetch(`${API_URL}/api/product`);
    if (response.ok) {
        return response.json();
    } else {
        throw Error(response.json())
    }
}

export const fetchProductDetailAsync = async (id) => {
    const response = await fetch(`${API_URL}/api/product/${id}`);
    if (response.ok) {
        return response.json();
    } else {
        throw Error(response.json())
    }
}