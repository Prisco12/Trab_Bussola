import {describe, expect, test} from '@jest/globals';
import { Produto } from './Product';
import { ArrayRandomValues } from './ArrayRandNumb';


const produtos:Array<Produto> = [
    new Produto('computador', 5000, 3),
    new Produto('mouse', 200, 3),
    new Produto('teclado', 500, 1),
    new Produto('gabinete', 150, 0)
]

describe('Array random values', () => {

    test('Add produtos', () => {
        const arrayRandomValues = new ArrayRandomValues()
        const produto = new Produto('Headset', 350, 3)
        arrayRandomValues.addProductToArray(produto)

        const procutsArrayLength = arrayRandomValues.getProductsArrayLength()
        expect(procutsArrayLength).toBeGreaterThan(0)
    })

    test('aleatory number', () => {
        const arrayRandomValues = new ArrayRandomValues()
        arrayRandomValues.setProductsArray(produtos)

        const randomNumber = arrayRandomValues.generateRandomNumber()
        expect(typeof randomNumber).toBe('number')
    })

    test('Pegar produto aleatorio do array', () => {
        const arrayRandomValues = new ArrayRandomValues()
        arrayRandomValues.setProductsArray(produtos)

        const randomProduct = arrayRandomValues.getRandomProductFromArray()
        expect(randomProduct).toBeInstanceOf(Produto)
    })
})