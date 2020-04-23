/**
 * Typescript Generics
 * 
 * Create a Generic class called Person which accepts a type T argument
 */
interface LengthWise {
    length: number
}

export class Employee<T extends LengthWise> {
    name: T;
    id: T;
    getEmployeeGreeting : (id : T, name : T) => T;
}
