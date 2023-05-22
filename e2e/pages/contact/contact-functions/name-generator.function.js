export class NameGenerator
{
    static nameGenerator()
    {
        const names = ['Ana', 'Juan', 'María', 'Pedro', 'Luisa', 'Carlos', 'Laura', 'José', 'Marta', 'Andrés'];
        const name = names[Math.floor(Math.random() * names.length)];
        return name
    }
}