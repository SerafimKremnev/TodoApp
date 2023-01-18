export const dateDMY = (ms) => {
  const date = new Date(Number(ms))
  const m = date.getMonth() + 1
  const d = date.getDate();
  return `${d < 10 ? '0'+d : d}.${m < 10 ? '0'+m : m}.${date.getFullYear()}`
}