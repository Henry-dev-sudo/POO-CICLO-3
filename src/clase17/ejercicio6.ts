// Ejercicio 6 Sistema de Notificaciones
// Crear una clase abstracta Notificación con el método enviar(). El sistema debe permitir
// enviar notificaciones por Email, SMS o WhatsApp. Cada clase implementará su forma de
// envío.

abstract class Notis {
    abstract enviar(): void;
}

class Email extends Notis {
    constructor(private correo: string) {
        super();
    }

    enviar(): void {
        console.log(`Enviando Email a ${this.correo}: Tu reporte está listo.`);
    }
}

class SMS extends Notis {
    constructor(private numero: string) {
        super();
    }

    enviar(): void {
        console.log(`Enviando SMS al número ${this.numero}: Código de verificación: 1234`);
    }
}

class WhatsApp extends Notis {
    constructor(private numero: string) {
        super();
    }

    enviar(): void {
        console.log(`Enviando WhatsApp a ${this.numero}: Hola Henry, revisa el sistema.`);
    }
}

class GestorNotificaciones {
    enviarNotificacion(notificacion: Notis) {
        console.log("Procesando notificación...");
        notificacion.enviar();
        console.log("Notificación enviada.\n");
    }
}

const gestor = new GestorNotificaciones();

const email = new Email("henry@example.com");
const sms = new SMS("+50370000000");
const whatsapp = new WhatsApp("+50370000000");

gestor.enviarNotificacion(email);
gestor.enviarNotificacion(sms);
gestor.enviarNotificacion(whatsapp);