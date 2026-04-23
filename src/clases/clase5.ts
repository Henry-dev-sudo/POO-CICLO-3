// //Ejemplo 1:

// class Gym { 
//     peso: number;
//     estatura: number;
//     constructor(peso: number, estatura: number) {
//         this.peso = peso;
//         this.estatura = estatura;
//     }
//     public IMC(): void { 
//         let imc = this.peso / (this.estatura ** 2)
//         console.log(`El IMC es: ${imc.toFixed(2)}`);
//         let estado;
//         if (imc < 18.5) {
//             estado = "Bajo peso";
//         }else if (imc >= 18.5 && imc < 25) {
//             estado = "Peso normal";
//         }else if (imc >= 25 && imc < 30) {
//             estado = "Sobrepeso";
//         }else {
//             estado = "Obesidad";
//         }
//         console.log(`Estado: ${estado}`);
//     }
// }
// let cliente = new Gym(105, 1.76);
// cliente.IMC();

// //Ejempo 2:

// class ConvertorTemperatura {
//     temperatura: number;
//     constructor(temperatura: number) {
//         this.temperatura=temperatura
//     }
//     public FahrenheitACelcius(): void {
//         let celcius = (this.temperatura - 32) * (5 / 9);
//         console.log(`La temperatura en Celcius es: ${celcius.toFixed(2)} °C`);
//     }

//     public CelsiusAFahrenheit(): void {
//         let fahrenheit = (this.temperatura * (9 / 5)) + 32;
//         console.log(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)} °F`);
//     }
    
//     public kelvinAFanhrenheit(): void{ 
//         let fahrenheit = (this.temperatura - 273.15) * (9/5) + 32;
//         console.log('La temperatura en Fahrenheit es: ' + fahrenheit.toFixed(2) + ' °F');
//     }

//     public kelvinACelcius(): void{
//         let celcius = this.temperatura -273.15;
//         console.log('La temperatura en Celcius es: ' + celcius.toFixed(2) + ' °C');
//     }
// }

// let temp = new ConvertorTemperatura(100);
// temp.FahrenheitACelcius();
// temp.CelsiusAFahrenheit();
// temp.kelvinAFanhrenheit();
// temp.kelvinACelcius();


//Ejemplo 3:

class Uni{
    monto: number;
    nam: string;
    constructor(monto: number, nam: string){
        this.monto = monto;
        this.nam = nam;
    }
    public seleccion(): void{
        if(this.monto==1){
            console.log(`Has llegado tarde ${this.nam} debes pagar por esa infraccion: $1.00`);   
        }else if(this.monto==2){
            console.log(`Has caminado por los pasillos en horas de clase ${this.nam} debes pagar por esa infraccion: $3.00`);
        } else if(this.monto==3){
            console.log(`Has usado vestimenta inapropiada ${this.nam} debes pagar por esa infraccion: $5.00`);
        }else if(this.monto==4){
            console.log(`No hacer uso adecuado de las instalaciones ${this.nam} debes pagar por esa infraccion: $10.00`);
        }
    }
}

let estudiante = new Uni(2, "Carlos");
estudiante.seleccion();