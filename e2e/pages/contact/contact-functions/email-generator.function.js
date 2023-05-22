export class EmailGenerator
{
    static emailGenerator()
    {
        const dominios = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "example.com"];
        const nombres = ["john", "jane", "doe", "smith", "emma", "liam", "olivia", "noah", "sophia"];
        const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
        const dominioAleatorio = dominios[Math.floor(Math.random() * dominios.length)];
        const emailAleatorio = `${nombreAleatorio}@${dominioAleatorio}`;
        return emailAleatorio;
    }
}