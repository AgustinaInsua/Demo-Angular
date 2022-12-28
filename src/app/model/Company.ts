import { Employee } from "./Employee";

export class Company{
    constructor(
        public name?: string,
        public razonSocial?: string,
        public cuit?: number,
        public employees?: Employee[]
    ){}
}