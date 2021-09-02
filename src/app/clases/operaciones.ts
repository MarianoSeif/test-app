export class Operaciones {
    edad1: number;
    edad2:number;
    suma:number;
    promedio:number;

    /**
     *
     */
    constructor() {
        this.edad1 = 0;
        this.edad2 = 0;
        this.suma = 0;
        this.promedio = 0;
    }

    Calcular()
    {
        this.suma = this.edad1 + this.edad2;
        this.promedio = this.suma/2;
    }
}
