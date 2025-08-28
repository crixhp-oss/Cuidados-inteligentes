
export const IEC_QUESTIONS = [
  "¿Tiene trastornos de sueño (Ej. por estar pendiente de las necesidades de su familiar, porque el paciente se acuesta y se levanta o pasea por la casa de noche)?",
  "¿Cuidar le supone un inconveniente (Ej. porque la ayuda consume mucho tiempo o cree no estar preparado para proporcionar los cuidados necesarios)?",
  "¿Representa un esfuerzo físico (Ej. hay que sentarlo, levantarlo de una silla, asearlo...)?",
  "¿Supone una restricción (Ej. porque ayudar limita el tiempo libre o no puede salir sin tener la preocupación de volver rápidamente para atenderlo)?",
  "¿Ha habido modificaciones en la familia (Ej. porque la ayuda ha roto la rutina o no hay intimidad)?",
  "¿Ha habido cambios en los planes personales (Ej. se tuvo que rechazar un trabajo o no se pudo ir de vacaciones)?",
  "¿Ha habido otras exigencias de mi tiempo (Ej. por parte de otros miembros de la familia, se siente la responsable de comunicar y gestionar los cuidados)?",
  "¿Ha habido cambios emocionales (Ej. causa de fuertes discusiones, tristeza)?",
  "¿Algunos comportamientos son molestos (Ej. la incontinencia, al paciente le cuesta recordar las cosas, el paciente acusa a los demás de quitarle las cosas)?",
  "¿Es molesto darse cuenta de que el paciente ha cambiado tanto comparado con antes (Ej. es un persona diferente de antes, no la reconozco)?",
  "¿Ha habido modificaciones en el trabajo (Ej. a causa de la necesidad de reservarse tiempo para la ayuda, solicitar reducción de jornada...)?",
  "¿Es una carga económica?",
  "¿Nos ha desbordado totalmente en algún momento (Ej. por la preocupación acerca de la persona cuidada o preocupaciones sobre cómo continuar el tratamiento)?",
];

export const ZARIT_QUESTIONS = [
  "¿Se siente inseguro acerca de lo que hacer con su familiar?",
  "¿Siente que debería hacer más?",
  "¿Cree que podría cuidar a su familiar mejor?",
  "¿Siente que su familiar depende de usted?",
  "¿Siente que ya no dispone de tiempo para usted?",
  "¿Se siente agobiado al estar cerca de su familiar?",
  "¿Siente que su salud se ha resentido?",
  "¿Siente que no tiene vida privada?",
  "¿Se ha visto afectada su vida social?",
  "¿Se siente incómodo al invitar amigos a casa?",
  "¿Se siente tenso cuando tiene que cuidar a su familiar?",
  "¿Se siente avergonzado por la conducta de su familiar?",
  "¿Se siente enfadado cuando está cerca de su familiar?",
  "¿Siente que su familiar solicita más ayuda de la que realmente necesita?",
  "¿Cree que la situación le afecta negativamente a su relación con los demás?",
  "¿Cree que su familiar espera que usted le cuide como si fuera la única persona que puede hacer esto?",
  "¿Cree que no dispone de dinero suficiente para cuidar de su familiar?",
  "¿Siente temor por el futuro que le espera a su familiar?",
  "¿Siente que no será capaz de cuidar a su familiar por más tiempo?",
  "¿Siente que ha perdido el control de su vida?",
  "¿Desearía encargar el cuidado de su familiar a otras personas?",
  "¿Se siente muy sobrecargado por tener que cuidar a su familiar?",
];

export const ZARIT_OPTIONS = [
    { label: "Nunca", value: 0 },
    { label: "Casi Nunca", value: 1 },
    { label: "A Veces", value: 2 },
    { label: "Bastantes Veces", value: 3 },
    { label: "Casi Siempre", value: 4 },
];

export const MESSAGES = {
  high: {
    title: "Resultado: Esfuerzo Elevado / Sobrecarga Intensa",
    text: "Gracias por confiar en este espacio. Su resultado indica una sobrecarga intensa, lo que significa que necesita apoyo especializado cuanto antes. Le proponemos concertar una videoconsulta gratuita con enfermería para planificar una intervención completa y aliviar su carga. Su bienestar también importa. Reserve su primera cita sin coste y empiece a recuperar su equilibrio.",
    color: "red"
  },
  moderate: {
    title: "Resultado: Sobrecarga Leve/Moderada",
    text: "Gracias por compartir su situación. Su resultado muestra signos de sobrecarga leve o moderada. Aunque no es grave, es el momento ideal para actuar y evitar que se intensifique. Le invitamos a una videoconsulta gratuita con enfermería para diseñar un plan de apoyo personalizado. Un pequeño paso hoy puede marcar una gran diferencia mañana.",
    color: "orange"
  },
  low: {
    title: "Resultado: Sin Sobrecarga Significativa",
    text: "Gracias por participar en esta valoración. Su resultado indica que no hay sobrecarga significativa en este momento. ¡Eso es una buena noticia! Aun así, le ofrecemos recursos informativos y herramientas para que siga cuidando sin descuidarse. Si en algún momento siente que lo necesita o la carga aumenta, recuerde que puede solicitar una videoconsulta gratuita. Cuidarse también es parte del cuidado. Estamos aquí para usted.",
    color: "green"
  },
  declined: {
    title: "Evaluación Pausada",
    text: "Entendemos. No hay problema, estamos para ayudarle cuando lo necesite. Puede volver a iniciar la evaluación en cualquier momento. ¡Hasta pronto!",
    color: "gray"
  }
};
