// class Usuario {
//     public nombre: string;

// constructor(nombre: string) {
//     this.nombre = nombre;           
// }  
// }

// const u = new Usuario("juan");
// console.log(u.nombre);

// class Usuario { 
//     private password: string;
    
//     constructor(pass: string) {
//         this.password = pass;           
//     }

//     validar(pass: string): boolean {
//         return this.password === pass;
//     }
// }
// const u = new Usuario("1234");
// console.log(u.validar("1234"));

// class persona{ 
//     protected edad: number;

//     constructor(edad: number) {
//         this.edad = edad; ;           
//     }
// }

// class Estudiante extends persona {
//     mostrarEdad(){
//        return this.edad;
//     }
// }

// const e = new Estudiante(20);
// console.log(e.mostrarEdad());

//Ejercicios Practicos

//EJERCICIO 1:
// class Usuario {
//   public username: string;
//   private password: string;

//   constructor(username: string, password: string) {
//     this.username = username;
//     this.password = password;
//   }

//   login(pass: string): string {
//     if (pass === this.password) {
//       return "Acceso concedido";
//     } else {
//       return "Contraseña incorrecta";
//     }
//   }
// }

// const u = new Usuario("juan", "1234");
// console.log(u.login("1234")); 

//EJERCICIO 2:
// class Producto {
//   constructor(
//     public nombre: string,
//     private precio: number
//   ) {}

//   evaluarPrecio(): string {
//     if (this.precio < 10) {
//       return "Producto barato";
//     } else if (this.precio <= 50) {
//       return "Precio normal";
//     } else {
//       return "Producto caro";
//     }
//   }
// }

// const p = new Producto("polera", 25);
// console.log(p.evaluarPrecio());

//EJERCICIO 3:

// class Empleado {
//   constructor(
//     public nombre: string,
//     protected salario: number
//   ) {}
// }

// class Gerente extends Empleado {
//   bono(): number {
//     if (this.salario > 1000) {
//       return this.salario * 0.2;
//     } else {
//       return this.salario * 0.1;
//     }
//   }
// }

// const g = new Gerente("Carlos", 500);
// console.log(g.bono());

//EJERCICIO 4:
// class Sistema {
//   verificarRol(rol: string): string {
//     switch (rol) {
//       case "admin":
//         return "Acceso total";
//       case "editor":
//         return "Acceso limitado";
//       case "usuario":
//         return "Acceso básico";
//       default:
//         return "Rol no válido";
//     }
//   }
// }

// const s = new Sistema();
// console.log(s.verificarRol("admin"));

//EJERCICIO 5:

class CuentaBancaria {
  constructor(
    public titular: string,
    private saldo: number
  ) {}

  operacion(tipo: string, monto: number): string {
    switch (tipo) {
      case "depositar":
        this.saldo += monto;
        return `Saldo actual: ${this.saldo}`;

      case "retirar":
        if (monto > this.saldo) {
          return "Fondos insuficientes";
        } else {
          this.saldo -= monto;
          return `Saldo actual: ${this.saldo}`;
        }

      default:
        return "Operación no válida";
    }
  }
}

const c = new CuentaBancaria("Ana", 1000);
console.log(c.operacion("depositar", 500)); 
console.log(c.operacion("retirar", 200)); 
console.log(c.operacion("retirar", 1500));

