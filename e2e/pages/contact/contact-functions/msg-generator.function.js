export class MsgGenerator
{
    static msgGenerator()
    {
        const mensajes = [
            "¡Hola! ¿Cómo estás?",
            "Buenos días. ¿Qué planes tienes para hoy?",
            "Recuerda que el éxito se logra con esfuerzo y perseverancia.",
            "No dejes que los obstáculos te detengan. Sigue adelante.",
            "El tiempo es valioso. Aprovecha cada momento al máximo.",
            "Sonríe y contagia alegría a quienes te rodean.",
            "La creatividad no tiene límites. Deja volar tu imaginación.",
            "El aprendizaje es un viaje interminable. Nunca dejes de aprender.",
            "La paciencia es una virtud. Todo llega en su debido tiempo.",
            "El cambio es la única constante en la vida. Adáptate y crece.",
          ];
          const indiceAleatorio = Math.floor(Math.random() * mensajes.length);
          const mensajeAleatorio = mensajes[indiceAleatorio];
          return mensajeAleatorio;
    }
}