const MS_PER_DAY = 1000 * 60 * 60 * 24

function parseDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function daysBetween(from, to) {
  return Math.floor((startOfDay(to) - startOfDay(from)) / MS_PER_DAY)
}

export function calcularDesdeFum(fumDateStr, today = new Date()) {
  const fum = parseDate(fumDateStr)
  const totalDays = daysBetween(fum, today)
  return gestationalAgeFromDays(totalDays, fum)
}

export function calcularDesdeEcografia(ecografiaDateStr, semanasEnEcografia, today = new Date()) {
  const ecografiaDate = parseDate(ecografiaDateStr)
  const daysAtScan = semanasEnEcografia * 7
  const fum = new Date(ecografiaDate)
  fum.setDate(fum.getDate() - daysAtScan)

  const totalDays = daysBetween(fum, today)
  return gestationalAgeFromDays(totalDays, fum)
}

function gestationalAgeFromDays(totalDays, fum) {
  if (totalDays < 0) {
    return { weeks: 0, days: 0, totalDays: 0, dueDate: addDays(fum, 280), fum, error: 'future' }
  }

  const weeks = Math.floor(totalDays / 7)
  const days = totalDays % 7
  const dueDate = addDays(fum, 280)

  return { weeks, days, totalDays, dueDate, fum, error: null }
}

function addDays(date, days) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export function formatDateEs(date) {
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function formatGestationalAge(weeks, days) {
  if (days === 0) return `${weeks} semanas`
  return `${weeks} semanas y ${days} ${days === 1 ? 'día' : 'días'}`
}
