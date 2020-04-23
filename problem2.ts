//https://www.hackerrank.com/challenges/java-inheritance-2/problem
abstract class Arithmetic {
    abstract add(num1: number, num2: number) : number;
}

export class Adder extends Arithmetic {
    add(num1: number, num2: number): number {
        if(!num1 || !num2) throw new Error('Cannot perfrom add operation on values');
        return num1 + num2;
    }
    
}