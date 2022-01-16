export class ProductsStatus {
    static LOADED = new ProductsStatus('LOADED');
    static LOADING = new ProductsStatus('LOADING');
    static ERROR_LOADING = new ProductsStatus('ERROR_LOADING');
    static EMPTY = new ProductsStatus('EMPTY');

    constructor(name) {
        this.name = name;
    }
}
