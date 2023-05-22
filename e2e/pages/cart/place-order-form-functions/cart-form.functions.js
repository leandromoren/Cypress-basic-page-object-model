export class CartFormFunctions
{
    static generarNumeroTarjeta()
    {
        const longitud = 16;
        let numeroTarjeta = "";
        for (let i = 0; i < longitud; i++)
        {
            numeroTarjeta += Math.floor(Math.random() * 10);
        }
        numeroTarjeta = this.aplicarAlgoritmoLuhn(numeroTarjeta);
        return numeroTarjeta.toString();
    }

    static aplicarAlgoritmoLuhn(numero)
    {
        const digitos = numero.split('').map(Number);
        for (let i = digitos.length - 2; i >= 0; i -= 2) {
            let doble = digitos[i] * 2;
            if (doble > 9) {
                doble -= 9;
            }
            digitos[i] = doble;
        }
        const sumaDigitos = digitos.reduce((total, valor) => total + valor);
        const digitoVerificador = (10 - (sumaDigitos % 10)) % 10;
        const oficialValue = numero + digitoVerificador;
        return oficialValue;
    }

    static generarAnioAleatorio()
    {
        const anioActual = new Date().getFullYear();
        const anioInicial = 1900;
        const rangoAnios = anioActual - anioInicial + 1;
        const anioAleatorio = (Math.floor(Math.random() * rangoAnios) + anioInicial).toString();
        return anioAleatorio;
    }
}