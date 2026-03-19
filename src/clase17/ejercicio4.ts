// Ejercicio 4 Sistema de Empleados
// Crear una clase abstracta Empleado con el método calcularSalario(). El sistema debe
// permitir registrar empleados por horas, empleados fijos y empleados por comisión. Cada
// tipo de empleado debe implementar su propio cálculo de salario.

abstract class Empleado { 
    nombre: string;
    horasTrabajadas: number;
    salarioBase: number;



    constructor(nombre: string, horasTrabajadas: number, salarioBase: number){
        this.nombre = nombre;
        this.salarioBase = salarioBase;
        this.horasTrabajadas = horasTrabajadas;

    }

    abstract calcularSalario(): void;
}

class EmpleadosHora extends Empleado{ 
    constructor(nombre: string, horasTrabajadas: number, salarioBase: number) {
        super(nombre, horasTrabajadas, salarioBase);
    }

    calcularSalario(): void {
        const salario = this.horasTrabajadas * this.salarioBase;
        console.log("El salrio del Emlepado por horas " + this.nombre + " es: " + salario);
    }
}

class EmpleadosFijos extends Empleado { 
     constructor(nombre: string, horasTrabajadas: number, salarioBase: number) {
        super(nombre, horasTrabajadas, salarioBase);
    }

    calcularSalario(): void {
        console.log("El salerio fijo del Empleado " + this.nombre + " es: " + this.salarioBase);
    }
}

class EmpleadosComision extends Empleado { 
    ventasRealizadas: number;
    constructor(nombre: string, horasTrabajadas: number, salarioBase: number, ventasRealizadas: number) {
        super(nombre, horasTrabajadas, salarioBase);
        this.ventasRealizadas = ventasRealizadas;
    }

    calcularSalario(): void {
        const salario = this.salarioBase + (this.ventasRealizadas * 0.1);
        console.log("El salerio del empleado por comision " + this.nombre + " es:" + salario);
    }
}

const empleadoHoras = new EmpleadosHora("Henry", 60, 30)
empleadoHoras.calcularSalario();
const empleadoFijo = new EmpleadosFijos("Henry", 0, 400);
empleadoFijo.calcularSalario();
const empleadoComision = new EmpleadosComision("Henry", 0, 100, 500);
empleadoComision.calcularSalario()