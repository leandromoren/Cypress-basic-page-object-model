export class RandomStringFunction
{
    static generateRandomString = (length = 10) =>
    {
        const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const caracteresLength = caracteres.length;
        let counter = 0;
        let resultado = "";
        while (counter < length) {
          resultado += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
          counter += 1
        }
        return resultado;
    }
}