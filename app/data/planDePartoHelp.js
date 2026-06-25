export const planDePartoHelp = {
  sections: {
    personal: 'Estos datos identifican tu plan. No son obligatorios, pero ayudan a tu equipo a reconocer el documento y prepararse contigo.',
    trabajoParto: 'El trabajo de parto es la fase en la que el cuerpo se prepara para el nacimiento. Aquí expresas cómo te gustaría vivir esa etapa cuando todo evoluciona con normalidad.',
    manejoDolor: 'No existe una respuesta correcta: algunas personas prefieren evitar medicación, otras quieren analgesia desde el inicio. Lo importante es que conozcas opciones y puedas decidir informada.',
    parto: 'Estas preferencias aplican en el momento del nacimiento vaginal. Recuerda que tu equipo puede recomendar cambios si hay riesgo para ti o tu bebé.',
    postparto: 'Los primeros minutos tras el nacimiento influyen en el vínculo, la lactancia y la recuperación. Puedes indicar qué es prioritario para ti.',
    cesarea: 'Aunque planees un parto vaginal, conviene dejar por escrito tus preferencias por si surge una cesárea. Muchos centros ya permiten acompañante y contacto piel con piel en quirófano.',
    notas: 'Espacio libre para peticiones concretas, alergias, experiencias previas o temas que no encajan en otra sección.',
  },
  fields: {
    nombre: 'Tu nombre tal como se escribe en tu identificación. Será el documento que entregues a tu matrona, ginecólogo o equipo de sala.',
    acompanante: 'Persona que te acompañará (pareja, familiar, doula). Pregunta en tu centro cuántas personas pueden estar presentes y si necesitas autorización previa.',
    telefono: 'Número de contacto para que el equipo pueda localizarte o a tu acompañante si es necesario.',
    direccion: 'Tu domicilio. Puede ser útil si el centro necesita enviarte documentación o coordinar el alta.',
    alergia: 'Indica alergias a medicamentos, alimentos, látex u otras sustancias relevantes para tu atención durante el parto.',
    fechaParto: 'La FPP se calcula a partir de la última regla o ecografía precoz, normalmente alrededor de la semana 40. Solo el 5 % de los bebés nace en esa fecha exacta.',
    medico: 'Profesional que lleva tu embarazo o que te atenderá en el parto. Si aún no lo sabes, puedes completarlo más adelante.',
    lugarParto: 'Hospital, clínica o centro de parto elegido. Incluir el nombre ayuda a que el documento sea claro si lo compartes con distintos profesionales.',
    ambiente: 'Detalles que te ayuden a sentirte tranquila: luces tenues, música propia, privacidad, limitar visitas o interrupciones innecesarias.',
    personasPresentes: 'Quién quieres (o no quieres) en la habitación. Algunos centros restringen el número de acompañantes o las visitas durante el trabajo de parto.',
    movilidad: 'Moverse suele favorecer el progreso del parto y aliviar el dolor. Marca las opciones que te interesen y pregunta en tu centro cuáles están disponibles.',
    monitoreo: 'El monitoreo fetal registra el latido del bebé y tus contracciones. Si no hay riesgo, a veces se puede usar de forma intermitente para permitir más movilidad.',
    induccion: 'La inducción inicia el trabajo de parto con medicación cuando no avanza en los tiempoos esperados o hay indicación médica. Puedes pedir que te expliquen el motivo, el método y las alternativas antes de decidir. Se suele firmar un consentiimiento informado en algunos centros',
    manejoDolor: 'Puedes marcar varias opciones. Un plan de parto no obliga a rechazar analgesia: muchas personas prefieren probar métodos naturales primero y aceptar medicación si lo necesitan.',
    notasDolor: 'Alergias a medicamentos, experiencias previas, técnicas que quieres probar (agua, masaje, aromaterapia, calor local) o límites personales sobre la analgesia.',
    posicionesParto: 'Distintas posiciones pueden facilitar el descenso del bebé y tu comodidad. No todas están disponibles en todos los centros ni en todos los momentos del parto. Es bueno estar flexible a todas las posibilidades y cambios.',
    episiotomia: 'Corte quirúrgico del perineo. La evidencia ya no recomienda su uso rutinario; suele reservarse para situaciones concretas cuando hay indicación médica.',
    proteccionPerine: 'Técnicas como masaje perineal o compresas calientes pueden reducir el riesgo de desgarros. Indica si deseas que se utilicen durante el parto.',
    pujar: 'Pujar guiada por tu cuerpo respeta tus sensaciones y puede reducir desgarros. Pujar dirigida por el personal se usa en algunos casos cuando no sientes las contracciones por la anestesia.',
    instrumentos: 'Forceps y ventosa extraen al bebé cuando hay dificultad en el último tramo. Se usan con indicación médica, no de forma rutinaria, solo casos excepcionales.',
    pielConPiel: 'Colocar al bebé sobre tu pecho desnudo favorece la estabilidad térmica, el vínculo y suele facilitar el inicio de la lactancia.',
    cordon: 'El clampado tardío (esperar a que el cordón deje de latir) puede aumentar reservas de hierro del bebé. Algunas familias prefieren que el corte lo haga el acompañante.',
    lactancia: 'La primera toma en la primera hora mejora las probabilidades de lactancia exitosa. Puedes pedir apoyo de matrona o comadrona y posponer procedimientos no urgentes.',
    placenta: 'La placenta suele salir sola en los 30 minutos siguientes. Si tarda o hay sangrado, el personal puede administrar medicación; es un procedimiento habitual y seguro.',
    esterilizacion: 'La ligadura de trompas durante la cesárea es una decisión personal. Debe acordarse con antelación con tu equipo médico durante los controles prenatales.',
    acompananteRn: 'Algunos centros permiten que el acompañante esté presente durante las revisiones y procedimientos del recién nacido. Confírmalo con tu hospital.',
    cesareaAcompanante: 'Cada vez más hospitales permiten un acompañante en cesárea programada o urgente. Confírmalo con antelación en tu centro.',
    cesareaPiel: 'El contacto piel con piel en cesárea es posible en muchos centros si tú y el bebé están estables. A veces se realiza en recuperación en lugar del quirófano.',
    cesareaNotas: 'Peticiones como cortina baja, explicaciones en voz alta, fotografía, música o retrasar procedimientos no urgentes del recién nacido.',
    notasAdicionales: 'Cualquier otro deseo: alergias, idioma preferido, apoyo emocional, doula, rechazo de estudiantes sin tu consentimiento, etc.',
  },
}

const choiceDefinitions = {
  movilidad: [
    {
      value: 'caminar',
      label: 'Caminar libremente',
      help: 'Caminar y mantenerse activa puede acortar el parto y reducir la sensación de dolor. Pregunta si tu centro dispone de monitor portátil.',
    },
    {
      value: 'cambiar-posicion',
      label: 'Cambiar de posición',
      help: 'Alternar posturas (de pie, de lado, apoyada) ayuda al bebé a descender y distribuye mejor la presión.',
    },
    {
      value: 'balon',
      label: 'Usar balón de parto o balón kinésico',
      help: 'El balón favorece la apertura de la pelvis y alivia presión en la zona lumbar. Muchas salas de parto ya lo tienen.',
    },
    {
      value: 'ducha',
      label: 'Ducha o baño',
      help: 'El agua caliente relaja la musculatura y alivia el dolor. No todos los centros tienen bañera; la ducha suele estar más disponible.',
    },
    {
      value: 'evitar-acostada',
      label: 'Evitar estar acostada todo el tiempo',
      help: 'Estar acostada por un tiempo prolongado puede ralentizar el parto. Puedes pedir alternativas si te sientes bien.',
    },
  ],
  monitoreo: [
    {
      value: 'intermitente',
      label: 'Monitoreo intermitente si es seguro',
      help: 'Registro periódico del latido fetal. Suele permitir más libertad de movimiento cuando no hay factores de riesgo.',
    },
    {
      value: 'continuo',
      label: 'Monitoreo continuo si es necesario',
      help: 'Monitorización constante mediante cinta abdominal o, en algunos casos, electrodos internos. Puede limitar la movilidad.',
    },
    {
      value: 'sin-preferencia',
      label: 'Sin preferencia',
      help: 'Confías en que el equipo elija el método más adecuado según cómo evolucione el parto.',
    },
  ],
  induccion: [
    {
      value: 'evitar',
      label: 'Preferiría evitarla si es posible',
      help: 'Indicas que prefieres esperar a que el parto comience de forma espontánea si no hay urgencia médica.',
    },
    {
      value: 'aceptar',
      label: 'Aceptarla si es médicamente necesaria',
      help: 'Aceptas la inducción cuando el equipo considere que los beneficios superan los riesgos.',
    },
    {
      value: 'sin-preferencia',
      label: 'Sin preferencia',
      help: 'Dejas la decisión en manos del equipo según la evolución clínica.',
    },
  ],
  manejoDolor: [
    {
      value: 'evitar-medicacion',
      label: 'Preferiría evitar medicación',
      help: 'Indica que quieres explorar primero métodos no farmacológicos. No impide aceptar analgesia más adelante si la necesitas.',
    },
    {
      value: 'epidural',
      label: 'Epidural si la necesito',
      help: 'Analgesia regional muy efectiva. Suele requerir vía intravenosa, monitorización continua y puede limitar la movilidad.',
    },
    {
      value: 'analgesia-iv-im',
      label: 'Analgesia endovenosa para el dolor con IV/IM',
      help: 'Medicación administrada por vía intravenosa (IV) o intramuscular (IM) para aliviar el dolor. Pregunta qué opciones ofrece tu centro.',
    },
    {
      value: 'respiracion',
      label: 'Analgesia de respiración / relajación',
      help: 'Incluye respiración, visualización, hipnobirthing o mindfulness. Complementan bien otros métodos.',
    },
    {
      value: 'conocer-opciones',
      label: 'Quiero conocer todas las opciones',
      help: 'Pide que te informen de analgesia farmacológica y no farmacológica antes de decidir en cada momento.',
    },
    {
      value: 'natural',
      label: 'Medicación natural (agua caliente, masajes, etc.)',
      help: 'Agua, masaje, calor local, aromaterapia o musicoterapia. Pregunta qué ofrece tu centro o qué puedes llevar tú.',
    },
  ],
  posicionesParto: [
    {
      value: 'vertical',
      label: 'Posición vertical',
      help: 'De pie o sentada favorece la gravedad y la apertura pélvica. Muy habitual en partos fisiológicos.',
    },
    {
      value: 'lado',
      label: 'De lado',
      help: 'Útil para descansar entre contracciones o si hay monitorización continua. Permite aliviar presión.',
    },
    {
      value: 'cuclillas',
      label: 'En cuclillas',
      help: 'Amplía el diámetro pélvico. Puede requerir apoyo de acompañante o barra de parto.',
    },
    {
      value: 'cuatro-apoyos',
      label: 'En cuatro apoyos',
      help: 'Alivia dolor de espalda, especialmente si el bebé está posterior. Facilita masajes en la zona lumbar.',
    },
    {
      value: 'comoda',
      label: 'Según me sienta cómoda',
      help: 'Dejas claro que quieres libertad para cambiar según cómo evolucione el parto, sin una posición fija impuesta.',
    },
  ],
  episiotomia: [
    {
      value: 'necesaria',
      label: 'Solo si es médicamente necesaria',
      help: 'Aceptas el procedimiento solo si hay indicación médica clara, no de forma rutinaria.',
    },
    {
      value: 'sin-preferencia',
      label: 'Sin preferencia',
      help: 'No tienes una preferencia definida sobre este procedimiento.',
    },
  ],
  proteccionPerine: [
    {
      value: 'si',
      label: 'Sí',
      help: 'Deseas que se utilicen técnicas de protección del perine durante el parto, como compresas calientes.',
    },
    {
      value: 'no',
      label: 'No',
      help: 'Prefieres no utilizar técnicas específicas de protección del perine.',
    },
  ],
  pujar: [
    {
      value: 'cuerpo',
      label: 'Guiado por mi cuerpo',
      help: 'Empujar cuando tu cuerpo lo indica, sin contener la urgencia ni forzar antes de tiempo.',
    },
    {
      value: 'personal',
      label: 'Guiado por el personal médico',
      help: 'Seguir las indicaciones del personal en la fase final, que a veces se usa cuando no sientes las contraccciones o para coordinar el nacimiento.',
    },
    {
      value: 'sin-preferencia',
      label: 'Sin preferencia',
      help: 'Te adaptas a lo que recomiende el equipo en el momento.',
    },
  ],
  instrumentos: [
    {
      value: 'evitar',
      label: 'Preferiría evitarlos si es posible',
      help: 'Prefieres intentar un parto instrumental solo si hay necesidad clínica demostrada.',
    },
    {
      value: 'necesario',
      label: 'Aceptarlos si son necesarios',
      help: 'Aceptas forceps o ventosa cuando el equipo considere que son necesarios para completar el parto.',
    },
    {
      value: 'sin-preferencia',
      label: 'Sin preferencia',
      help: 'Confías en la valoración del equipo si surge dificultad en la expulsión.',
    },
  ],
  pielConPiel: [
    {
      value: 'si',
      label: 'Sí, inmediatamente',
      help: 'Colocar al bebé sobre tu pecho en cuanto nazca, antes de procedimientos no urgentes como pesar o medir.',
    },
    {
      value: 'despues',
      label: 'Sí, en cuanto sea posible',
      help: 'Contacto piel con piel en cuanto terminen revisiones breves imprescindibles del recién nacido.',
    },
    {
      value: 'diferir',
      label: 'Diferir atención del bebé la primera hora de vida',
      help: 'Priorizar el contacto piel con piel y posponer procedimientos no urgentes del bebé durante la primera hora de vida.',
    },
    {
      value: 'sin-preferencia',
      label: 'Sin preferencia',
      help: 'Sin preferencia concreta sobre el momento exacto del contacto.',
    },
  ],
  cordon: [
    {
      value: 'retrasado',
      label: 'Esperar a que deje de latir',
      help: 'Esperar unos minutos antes de cortar puede beneficiar las reservas de hierro del bebé. Consulta si hay contraindicaciones en tu caso.',
    },
    {
      value: 'acompanante',
      label: 'Que lo corte mi acompañante',
      help: 'Algunos centros permiten que la pareja o acompañante corte el cordón simbólicamente, no hay riesgos para el bebé.',
    },
    {
      value: 'personal',
      label: 'Que lo corte el personal médico',
      help: 'Prefieres que lo corte el personal sanitario de forma habitual.',
    },
  ],
  lactancia: [
    {
      value: 'inmediata',
      label: 'Intentar lactancia inmediata',
      help: 'Ofrecer el pecho en la primera hora de vida, cuando el bebé suele estar más receptivo.',
    },
    {
      value: 'apoyo',
      label: 'Quiero apoyo para iniciar lactancia',
      help: 'Pides ayuda de matrona o comadrona para el agarre, posiciones y resolución de dificultades iniciales.',
    },
    {
      value: 'formula',
      label: 'Considerar fórmula si es necesario',
      help: 'Indicas apertura a suplementos si la lactancia no es posible o no es tu elección.',
    },
  ],
  placenta: [
    {
      value: 'natural',
      label: 'Expulsión natural',
      help: 'Esperar a que la placenta se expulse sola, sin medicación, si la evolución lo permite.',
    },
    {
      value: 'medicacion',
      label: 'Con medicación si es necesario',
      help: 'Aceptas oxitocina u otra medicación si la placenta tarda o hay riesgo de sangrado.',
    },
    {
      value: 'impresion',
      label: 'Impresión de placenta',
      help: 'Algunas familias conservan una impresión artística de la placenta como recuerdo del nacimiento.',
    },
    {
      value: 'llevar',
      label: 'Llevar placenta',
      help: 'Indica si deseas llevarte la placenta tras el parto. Consulta las normas de tu centro con antelación.',
    },
  ],
  esterilizacion: [
    {
      value: 'si',
      label: 'Sí',
      help: 'Deseas realizarte esterilización quirúrgica (ligadura de trompas) durante la cesárea, o después del parto según disponibilidad.',
    },
    {
      value: 'no',
      label: 'No',
      help: 'No deseas esterilización quirúrgica durante el parto.',
    },
  ],
  acompananteRn: [
    {
      value: 'si',
      label: 'Sí, quiero que esté presente',
      help: 'Quieres que tu acompañante esté presente durante las revisiones y cuidados del recién nacido.',
    },
    {
      value: 'no',
      label: 'Prefiero que no esté presente',
      help: 'Prefieres que el acompañante no esté presente durante la atención médica del bebé.',
    },
    {
      value: 'sin-preferencia',
      label: 'Sin preferencia',
      help: 'Sin preferencia definida sobre la presencia del acompañante.',
    },
  ],
  cesareaAcompanante: [
    {
      value: 'si',
      label: 'Sí, quiero que esté presente',
      help: 'Quieres que tu acompañante esté contigo en quirófano. Confirma con tu hospital si lo permiten.',
    },
    {
      value: 'no',
      label: 'Prefiero que no esté presente',
      help: 'Prefieres que el acompañante espere fuera del quirófano.',
    },
    {
      value: 'sin-preferencia',
      label: 'Sin preferencia',
      help: 'Sin preferencia definida sobre la presencia del acompañante.',
    },
  ],
  cesareaPiel: [
    {
      value: 'si',
      label: 'Sí, en el quirófano si es posible',
      help: 'Contacto piel con piel en el quirófano o inmediatamente después, si tú y el bebé estáis bien.',
    },
    {
      value: 'despues',
      label: 'Sí, en recuperación',
      help: 'Contacto piel con piel en la sala de recuperación, una vez finalizada la intervención.',
    },
    {
      value: 'sin-preferencia',
      label: 'Sin preferencia',
      help: 'Sin preferencia sobre el momento del contacto en cesárea.',
    },
  ],
}

function checkboxState(groupKey) {
  return choiceDefinitions[groupKey].map(({ value, label, help }) => ({
    value,
    label,
    help,
    checked: false,
  }))
}

function radioOptions(groupKey) {
  return choiceDefinitions[groupKey].map(({ value, label, help }) => ({
    value,
    label,
    help,
  }))
}

export function createPlanDePartoForm() {
  return {
    nombre: '',
    acompanante: '',
    telefono: '',
    direccion: '',
    alergia: '',
    fechaParto: '',
    medico: '',
    lugarParto: '',
    ambiente: '',
    personasPresentes: '',
    movilidad: checkboxState('movilidad'),
    monitoreo: '',
    monitoreoOptions: radioOptions('monitoreo'),
    induccion: '',
    induccionOptions: radioOptions('induccion'),
    manejoDolor: checkboxState('manejoDolor'),
    notasDolor: '',
    posicionesParto: checkboxState('posicionesParto'),
    episiotomia: '',
    episiotomiaOptions: radioOptions('episiotomia'),
    proteccionPerine: '',
    proteccionPerineOptions: radioOptions('proteccionPerine'),
    pujar: '',
    pujarOptions: radioOptions('pujar'),
    instrumentos: '',
    instrumentosOptions: radioOptions('instrumentos'),
    pielConPiel: '',
    pielConPielOptions: radioOptions('pielConPiel'),
    cordon: checkboxState('cordon'),
    lactancia: checkboxState('lactancia'),
    placenta: checkboxState('placenta'),
    esterilizacion: '',
    esterilizacionOptions: radioOptions('esterilizacion'),
    acompananteRn: '',
    acompananteRnOptions: radioOptions('acompananteRn'),
    cesareaAcompanante: '',
    cesareaAcompananteOptions: radioOptions('cesareaAcompanante'),
    cesareaPiel: '',
    cesareaPielOptions: radioOptions('cesareaPiel'),
    cesareaNotas: '',
    notasAdicionales: '',
  }
}
