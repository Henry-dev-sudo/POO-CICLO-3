class POO {
    codigo:string;
    nombre:string;
    edad:number;
    laboratorio: number;
    parcial: number;

constructor(_codigo:string,_nombre:string,_edad:number,_laboratorio:number,_parcial:number){
    this.codigo=_codigo;
    this.nombre=_nombre;
    this.edad=_edad;
    this.laboratorio=_laboratorio;
    this.parcial=_parcial;
}

public mostrarDatos(): void{
    console.log("El estudiante: "+this.nombre);
    console.log("Codigo: "+this.codigo);
    console.log("Tiene las notas - Laboratorio: "+this.laboratorio
        +" Parcial: "+this.parcial);    
}

public mostrarNotas(): void{
    console.log("Lab: "+this.laboratorio+" Parcial: "+this.parcial);
}
}

//EJERCICIO DE LA CLASE:
class ejercicioClase{
    nombre:string;
    laboratorio1:number;
    laboratorio2:number;
    laboratorio3:number;
    parcial1:number;
    parcial2:number;
    parcial3:number;

constructor(nombre:string, laboratorio1:number, laboratorio2:number, laboratorio3:number, parcial1:number, parcial2:number, parcial3:number){
    this.nombre=nombre;
    this.laboratorio1=laboratorio1;
    this.laboratorio2=laboratorio2; 
    this.laboratorio3=laboratorio3;
    this.parcial1=parcial1;
    this.parcial2=parcial2;
    this.parcial3=parcial3;
}

public Notafinal(): void{
    let sumaLaboratorios = (this.laboratorio1 + this.laboratorio2 + this.laboratorio3) / 3;
    let sumaParciales = (this.parcial1 + this.parcial2 + this.parcial3) / 3;
    
    let notaDefinitiva = (sumaLaboratorios * 0.60) + (sumaParciales * 0.40);

    console.log("El estudiante "+this.nombre+ " su nota final de logica es: "+notaDefinitiva);
}
}

//Odjeto intanscia a POO
let estudiante1 = new POO('u20251250', 'Henry',19,10,10);
// estudiante1.mostrarDatos();
// estudiante1.mostrarNotas();
//Objeto intanscia a ejercicioClase
let estudiante2= new ejercicioClase('Henry', 8,9,8,10,10,8);
estudiante2.Notafinal();
