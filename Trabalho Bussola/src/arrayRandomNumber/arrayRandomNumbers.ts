const produtos: any = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.99 },
    { nome: 'Mochila', qtde: 6, preco: 150.99 },
    { nome: 'Teclado', qtde: 4, preco: 500.99 },
    { nome: 'Mouse', qtde: 3, preco: 78.99 },
    { nome: 'Tenis', qtde: 2, preco: 350.99 },
    { nome: 'Meias', qtde: 10, preco: 19.99 },
]

export class ArrayRandomValue {  
    private array: [];
    private randomQuantity: number;
    
    public setArray(_array: [])  {
        this.array = _array
    }

    public getArray() {
        return this.array
    }

    public setRamdomQuantity(quantity: number) {
        this.randomQuantity = quantity
    }

    public getRandomQuantity() {
        return this.randomQuantity
    }

    public randomValues() {
        let Quantity = this.getRandomQuantity()
        let Array = this.getArray()
        if(Quantity > Array.length) return console.log('Quantidade maior que o array')
        return this.randomValue(Array, Quantity)
    }   
    
    private randomValue(array: [], randomQuantity: number) {
        if(randomQuantity > array.length) return console.log('Erro')
        let randomProducts:any = []
    
        while(randomProducts.length < randomQuantity) {
            let randomNumber: any = Math.floor(Math.random() * array.length)
            if(!randomProducts.includes(array[randomNumber])) {
                randomProducts.push(array[randomNumber])
            }
        }
        return randomProducts
    }
}

function main() {
    const random = new ArrayRandomValue()
    random.setArray(produtos)
    random.setRamdomQuantity(10)
    console.log(random.randomValues())
}

main()
