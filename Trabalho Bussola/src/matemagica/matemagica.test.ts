import {describe, expect, test} from '@jest/globals';
import { ErrorMessages } from './errorMessage.enum'
import { Matemagica } from './matemagica';


describe('Somar dois números', () => {
    test('Deve somar dois números', () => {
        const matemagica = new Matemagica()
        matemagica.setX(1)
        matemagica.setY(2)

        expect(matemagica.getSum()).toBe(3)
    })

    test('Deve subtrair dois números', () => {
        const matemagica = new Matemagica()
        matemagica.setX(2)
        matemagica.setY(1)

        expect(matemagica.getSub()).toBe(1)
    })

    test('Deve dividir dois números', () => {
        const matemagica = new Matemagica()
        matemagica.setX(2)
        matemagica.setY(1)

        expect(matemagica.getDiv()).toBe(2)
    })

    test('Deve multiplicar dois números', () => {
        const matemagica = new Matemagica()
        matemagica.setX(2)
        matemagica.setY(1)

        expect(matemagica.getMul()).toBe(2)
    })

    test('Deve retornar um erro, string + number', () => {
        const matemagica = new Matemagica()
        // @ts-ignore
        expect(matemagica.setX('erro')).toBe(ErrorMessages.INVALID_OPERATION)
        // @ts-ignore
        expect(matemagica.setY('erro2')).toBe(ErrorMessages.INVALID_OPERATION)
    })
})