// Clase ABSTRACTA Maquina de Café
class MaquinaDeCafe{
    constructor(){
        if(new.target === MaquinaDeCafe){
            throw new Error("No se puede instanciar la clase Máquina de Café por que es Abstracta")
        }
    }

    //Métodos abstractos
    seleccionarBebida(){
        throw new Error("Este método debe ser implementado")
    }

    prepararBebida(){
        console.log("Preparando el brevaje")
    }

    servirBebida(){
        console.log("Sirviendo el café en el vaso")
    }

    // Método público que va a definir el comportamiento y flujo general (abstracción)
    hacerCafe(){
        this.seleccionarBebida()
        this.prepararBebida()
        this.servirBebida()
    }

}


class ExpressoMachine extends MaquinaDeCafe{
    seleccionarBebida(){
        console.log("Has seleccionado un expreso")
    }
}

class CappuccinoMachine extends MaquinaDeCafe {
    seleccionarBebida(){
        console.log("Has seleccionado un Cappuccino")
    }

    prepararBebida(){
        console.log("Realizando espuma")
        super.prepararBebida()
    }
}

const expresso = new ExpressoMachine()
const cappuccino = new CappuccinoMachine()

expresso.hacerCafe()
console.log("-----------------------")
cappuccino.hacerCafe()