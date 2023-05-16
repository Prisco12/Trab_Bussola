import { ErrorMessages } from "./errorMessage.enum"

export class Matemagica{
    public x: number;
    public y: number;

    private Sum(){
        return this.x + this.y
    }

    public getSum(){
        return this.Sum()
    }

    private Sub(){
        return this.x - this.y
    }

    public getSub(){
        return this.Sub()
    }

    private Div(){
        return this.x / this.y
    }

    public getDiv(){
        return this.Div()
    }

    private Mul(){
        return this.x * this.y
    }

    public getMul(){
        return this.Mul()
    }

    public setX(x:Number){
        if(typeof x != 'number'){
            return ErrorMessages.INVALID_OPERATION
        }
        this.x = x
    }

    public setY(y:Number){
        if(typeof y != 'number'){
            return ErrorMessages.INVALID_OPERATION
        }
        this.y = y
    }

    public getX(){
        return console.log(this.x)
    }

    public getY(){
        return console.log(this.y)
    }



}