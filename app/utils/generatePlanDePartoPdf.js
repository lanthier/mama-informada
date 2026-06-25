function formatCheckboxList(items) {
  const selected = items.filter((item) => item.checked)
  if (selected.length === 0) return 'Sin preferencia indicada'
  return selected.map((item) => item.label).join(', ')
}

function formatRadio(options, value) {
  const match = options.find((option) => option.value === value)
  return match?.label || 'Sin preferencia indicada'
}

function section(title, entries) {
  return [
    { text: title, style: 'sectionTitle', margin: [0, 16, 0, 8] },
    {
      ul: entries.map(([label, value]) => ({
        text: [{ text: `${label}: `, bold: true }, value || '—'],
        margin: [0, 2, 0, 2],
      })),
      margin: [0, 0, 0, 4],
    },
  ]
}

export async function generatePlanDePartoPdf(form) {
  const pdfMakeModule = await import('pdfmake/build/pdfmake')
  const pdfFontsModule = await import('pdfmake/build/vfs_fonts')

  const pdfMake = pdfMakeModule.default ?? pdfMakeModule
  const pdfFonts = pdfFontsModule.default ?? pdfFontsModule

  if (pdfMake.addVirtualFileSystem) {
    pdfMake.addVirtualFileSystem(pdfFonts)
  } else {
    pdfMake.vfs = pdfFonts.pdfMake?.vfs ?? pdfFonts.vfs
  }

  const docDefinition = {
    info: {
      title: 'Plan de Parto',
      author: form.nombre || 'Mama Informada',
      subject: 'Plan de parto personalizado',
    },
    pageMargins: [48, 56, 48, 56],
    defaultStyle: {
      font: 'Roboto',
      fontSize: 10,
      lineHeight: 1.35,
      color: '#333333',
    },
    styles: {
      title: {
        fontSize: 22,
        bold: true,
        color: '#1e4238',
        alignment: 'center',
        margin: [0, 0, 0, 4],
      },
      subtitle: {
        fontSize: 11,
        color: '#666666',
        alignment: 'center',
        margin: [0, 0, 0, 20],
      },
      sectionTitle: {
        fontSize: 12,
        bold: true,
        color: '#1e4238',
      },
      footer: {
        fontSize: 8,
        color: '#888888',
        alignment: 'center',
        italics: true,
      },
    },
    content: [
      { text: 'Plan de Parto', style: 'title' },
      {
        text: 'Documento de preferencias para el nacimiento de mi bebé',
        style: 'subtitle',
      },
      ...section('Datos personales', [
        ['Nombre', form.nombre],
        ['Acompañante', form.acompanante],
        ['Teléfono', form.telefono || '—'],
        ['Dirección', form.direccion || '—'],
        ['Alergias', form.alergia || '—'],
        ['Fecha probable de parto', form.fechaParto],
        ['Médico o matrona', form.medico],
        ['Lugar del parto', form.lugarParto],
      ]),
      ...section('Durante el trabajo de parto', [
        ['Ambiente deseado', form.ambiente || 'Sin preferencia indicada'],
        ['Personas presentes', form.personasPresentes || 'Sin preferencia indicada'],
        ['Movilidad y posiciones', formatCheckboxList(form.movilidad)],
        ['Monitoreo fetal', formatRadio(form.monitoreoOptions, form.monitoreo)],
        ['Inducción del parto', formatRadio(form.induccionOptions, form.induccion)],
      ]),
      ...section('Preferencias', [
        ['Opciones seleccionadas', formatCheckboxList(form.manejoDolor)],
        ['Notas', form.notasDolor || 'Sin preferencia indicada'],
      ]),
      ...section('Durante el parto', [
        ['Posiciones preferidas', formatCheckboxList(form.posicionesParto)],
        ['Episiotomía', formatRadio(form.episiotomiaOptions, form.episiotomia)],
        ['Protección del perine', formatRadio(form.proteccionPerineOptions, form.proteccionPerine)],
        ['Pujar', formatRadio(form.pujarOptions, form.pujar)],
        ['Uso de forceps o ventosa', formatRadio(form.instrumentosOptions, form.instrumentos)],
      ]),
      ...section('En caso de cesárea', [
        ['Acompañante presente', formatRadio(form.cesareaAcompananteOptions, form.cesareaAcompanante)],
        ['Contacto piel con piel', formatRadio(form.cesareaPielOptions, form.cesareaPiel)],
        ['Preferencias adicionales', form.cesareaNotas || 'Sin preferencia indicada'],
      ]),
      ...section('Después del nacimiento', [
        ['Contacto piel con piel', formatRadio(form.pielConPielOptions, form.pielConPiel)],
        ['Corte del cordón', formatCheckboxList(form.cordon)],
        ['Lactancia', formatCheckboxList(form.lactancia)],
        ['Expulsión de la placenta', formatCheckboxList(form.placenta)],
        ['Esterilización quirúrgica', formatRadio(form.esterilizacionOptions, form.esterilizacion)],
        ['Acompañante en atención del recién nacido', formatRadio(form.acompananteRnOptions, form.acompananteRn)],
      ]),
      ...section('Notas adicionales', [
        ['Comentarios', form.notasAdicionales || '—'],
      ]),
      {
        text: 'Generado con Mama Informada. Este documento refleja preferencias personales y no sustituye la orientación médica profesional.',
        style: 'footer',
        margin: [0, 24, 0, 0],
      },
    ],
  }

  const fileName = form.nombre
    ? `plan-de-parto-${form.nombre.trim().replace(/\s+/g, '-').toLowerCase()}.pdf`
    : 'plan-de-parto.pdf'

  pdfMake.createPdf(docDefinition).download(fileName)
}
