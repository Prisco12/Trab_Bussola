import { Produto } from "./Product";


export class ArrayRandomValues {

    private productsArray:Array<Produto> = [];

    public addProductToArray(produto:Produto) {
        this.productsArray.push(produto)
    }

    public getProductsArray() {
        return this.productsArray
    }

    public getProductsArrayLength() {
        return this.productsArray.length
    }

    public setProductsArray(array:Array<Produto>) {
        this.productsArray = array
    }

    public generateRandomNumber() {
        return Number(Math.floor(Math.random() * this.productsArray.length))
    }

    public getRandomProductFromArray() {
        const randomNumber = this.generateRandomNumber()
        return this.productsArray[randomNumber]
    }
}