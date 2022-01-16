export default class Product {
    constructor(data) {
        this.brand = data.brand;
        this.id = data.id;
        this.imgUrl = data.imgUrl;
        this.model = data.model;
        this.price = data.price;
    }
}