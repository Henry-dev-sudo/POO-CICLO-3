// Ejercicio 7 Sistema de Transporte
// Crear una clase abstracta Transporte con el método calcularCosto(). El usuario
// seleccionará entre Taxi, Autobús o Uber e ingresará la distancia recorrida para calcular el
// costo del viaje.

abstract class Transporte {
    abstract calcularCosto(distancia: number): number;
}

class Taxi extends Transporte {
    calcularCosto(distancia: number): number {
        return distancia * 2.5;
    }
}

class Autobus extends Transporte {
    calcularCosto(distancia: number): number {
        return distancia * 1.2;
    }
}

class Uber extends Transporte {
    calcularCosto(distancia: number): number {
        return distancia * 2.0;
    }
}


const distancia = 70; 

const taxi = new Taxi();
console.log(`Costo en Taxi: $${taxi.calcularCosto(distancia).toFixed(2)}`);

const autobus = new Autobus();
console.log(`Costo en Autobus: $${autobus.calcularCosto(distancia).toFixed(2)}`);

const uber = new Uber();
console.log(`Costo en Uber: $${uber.calcularCosto(distancia).toFixed(2)}`);