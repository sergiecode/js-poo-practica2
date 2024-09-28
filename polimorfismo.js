class Instrumento {
    constructor(nombre){
        // Propiedad o característica
        this.nombre = nombre
    }

    // Método
    tocar(){
        console.log(`${this.nombre} está produciendo un sonido`)
    }
}

class Guitarra extends Instrumento{
    constructor(){
        super('Guitarra')
    }

    // POLIFORMISMO: es la capacidad de múltiples clases a responder distinto a una misma función o método

    // Sobreescribir o pisar [OVERRIDE] el método heredado
    tocar(){
        console.log("\x1b[31m%s\x1b[0m", `¡La ${this.nombre} está haciendo un solo impresionante!`)
    }
}

class Bateria extends Instrumento{
    constructor(){
        super('Batería')
    }

    // POLIFORMISMO: es la capacidad de múltiples clases a responder distinto a una misma función o método

    // Sobreescribir o pisar [OVERRIDE] el método heredado
    tocar(){
        console.log("\x1b[32m%s\x1b[0m", `¡La ${this.nombre} está tocando los tambores a un gran ritmo!`)
    }
}

class Piano extends Instrumento{
    constructor(){
        super('Piano')
    }

    // POLIFORMISMO: es la capacidad de múltiples clases a responder distinto a una misma función o método

    // Sobreescribir o pisar [OVERRIDE] el método heredado
    tocar(){
        console.log("\x1b[34m%s\x1b[0m", `¡El ${this.nombre} está haciendo unas hermosas notas pentatónicas de blues!`)
    }
}

function showBanda(instrumento){
    instrumento.tocar()
}

const guitarra = new Guitarra()
const bateria = new Bateria()
const piano = new Piano()


showBanda(guitarra)
showBanda(bateria)
showBanda(piano)

