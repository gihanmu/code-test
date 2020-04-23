//https://www.hackerrank.com/challenges/java-abstract-class/problem

export abstract class Book{
    title: string;
    abstract setTitle(s: string) : void;
    getTitle(): string {
        return this.title;
    }
}

export class MyBook extends Book {
    setTitle(s: string) : void {
        this.title = s;
    }
}

