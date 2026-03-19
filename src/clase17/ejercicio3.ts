abstract class Figura{
    abstract calcularArea():void;
    abstract calcularPerimetro():void;
}

class Cuadrado extends Figura{
    lado:number;

    constructor(lado:number){
        super();
        this.lado = lado;
    }

    calcularArea():void {
        console.log(`El area del cuadrado es: ${this.lado * this.lado}`);        
    }

    calcularPerimetro(): void {
        console.log(`El perimetro del cuadrado es: ${this.lado * 4}`);
    }
}

class Rectangulo extends Figura{
    base:number;
    altura:number;

    constructor(base:number, altura:number){
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea():void {
        return console.log(`El area del rectangulo es: ${this.base * this.altura}`);        
    }

    calcularPerimetro(): void {
        console.log(`El perimetro del rectangulo es: ${this.base * 2 + this.altura * 2}`)
    }
}

class Circulo extends Figura{
    radio:number;

    constructor(radio:number){
        super();
        this.radio = radio;
    }
    calcularArea():void {
        return console.log(`El area del circulo es: ${Math.PI * this.radio**2}`);        
    }

    calcularPerimetro(): void {
        return console.log(`El perimetro del circulo es: ${2 * Math.PI * this.radio}`);
    }
}

const cuadrado = new Cuadrado(5)
const rectangulo = new Rectangulo(5, 10)
const circulo = new Circulo(5)
cuadrado.calcularArea()
rectangulo.calcularArea()
circulo.calcularArea()
cuadrado.calcularPerimetro()
rectangulo.calcularPerimetro()
circulo.calcularPerimetro()