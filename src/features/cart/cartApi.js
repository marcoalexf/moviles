const API_URL = 'https://front-test-api.herokuapp.com';

export const addToCartAsync = async (product) => {
    const payload = {
        id: product.id,
        colorCode: '1000',
        storageCode: '2000' 
        
    }
    const response = await fetch(`${API_URL}/api/cart`, {
        method: 'POST',
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        return response.json();
    } else {
        throw Error(response.json())
    }
}