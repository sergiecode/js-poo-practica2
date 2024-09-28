class Animal {
    constructor(nombre, sonido){
        this.nombre = nombre
        this.sonido = sonido
    }

    hacerSonido(){
        console.log(`${this.nombre} hace: ${this.sonido}`)
    }
}

class Perro extends Animal {
    constructor(nombre){
        // La palabra reservada super hace referencia al llamado del constructor del Padre del que hereda
        super(nombre, "Guau")
    }

    moverCola(){
        console.log(`${this.nombre} está moviendo la cola felizmente`)
    }
}

class Gato extends Animal{
    constructor(nombre){
        super(nombre, "Miau")
    }

    ronronear(){
        console.log(`${this.nombre} está ronroneando contento`)
    }
}

const perrito = new Perro("Manchita")
const gatito = new Gato("Pelusa")

// Hacer Sonido lo puedo usar en ambos ya que lo heredan de Animal
perrito.hacerSonido()
perrito.moverCola()

gatito.hacerSonido()
gatito.ronronear()