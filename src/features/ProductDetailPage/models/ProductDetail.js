import Product from "../../ProductPage/models/Product";

export class DetailProduct extends Product {
    constructor(data) {
        super(data);
        Object.keys(data).forEach(key => this[key] = data[key]);
    }
}