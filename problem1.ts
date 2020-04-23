//https://www.hackerrank.com/challenges/java-inheritance-1/problem

export class Animal {
    constructor(){
        console.log('Animal')   
    }
    walk(): void {
      console.log('I am walking');
    }
}
  
export  class Bird extends Animal {
    constructor(){
        super();
        console.log('Bird');
    }
    fly(): void {
      console.log('I am flying');
    }
  
    sing(): void {
      console.log('I am singing');
    }
}

