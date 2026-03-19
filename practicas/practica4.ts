// abstract class ProcesarArchivos{
//     public nombreArchivo: string;
//     public estadoArchivo: string;

//     constructor(nombreArchivo:string, estadoArchivo: string){
//          this.nombreArchivo = nombreArchivo;
//          this.estadoArchivo = estadoArchivo;
//         }

//         abstract convertir(archivo: string): string;
// }

// //convertirde de png a jpg
// class ProcedadorImagenes extends ProcesarArchivos { 
//     public nombreArchivoImg: string;
   
//     constructor(nombreArchivo: string, estadoArchivo: string){
//        super(nombreArchivo, estadoArchivo)
//        this.validacion(nombreArchivo)
//        this.nombreArchivoImg = nombreArchivo;
//     }

//     public convertir(archivo: string): string { 
//         let nombreArchivo: string[] = archivo.split('.')
//         this.nombreArchivoImg = nombreArchivo[0] + ".JPG";
//         return this.nombreArchivoImg;
//     }

//     private validacion(nombreArchivo: string){
//         let formato: string[] = nombreArchivo.split( "." )
//         if (formato[-1] === "PNG" || formato[-1] === "png"){
//             throw new Error("El archivo no es de formato PNG")
//         }
//     }
// }

// const convertidorDeImagenes = new ProcedadorImagenes("imagenes.png", "");
// console.log(convertidorDeImagenes.convertir("captura.png"));


// Ejercicio 2: 

