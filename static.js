// El modificador static se utiliza para que propiedad y métodos sean de la CLASE y no de las instancias
// ¿Qué significa? Que vamos a poder acceder directo a ellas sin instanciar

class Calculadora {
    static sumar(a, b) {
        return a + b
    }
    static restar(a, b) {
        return a - b
    }
    static multiplicar(a, b) {
        return a * b
    }
    static dividir(a, b) {
        if (b == 0) {
            throw new Error("No se puede dividir por cero")
        }
        return a / b
    }
}


console.log(Calculadora.sumar(2,3))
console.log(Calculadora.restar(6,3))
console.log(Calculadora.multiplicar(2,3))
console.log(Calculadora.dividir(10,5))