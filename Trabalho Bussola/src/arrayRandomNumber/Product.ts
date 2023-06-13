export class Produto {

    private nome:string;
    private valor:number;
    private qtde:number;

    constructor(nome: string, valor: number, qtde: number) {
        this.nome = nome
        this.valor = valor
        this.qtde = qtde
    }

    public getNome() {
        return this.nome
    }

    public getValor() {
        return this.valor
    }

    public getQtde() {
        return this.qtde
    }

    public setNome(nome:string) {
        this.nome = nome
    }

    public setValor(valor:number) {
        this.valor = valor
    }

    public setQtde(qtde:number) {
        this.qtde = qtde
    }
}