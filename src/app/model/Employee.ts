export class Employee{
    constructor(
        public name?: string,
        public surname?: string,
        public dateOfBirth?: Date,
        public cuit?: number,
        public position?: string
    ){}
}