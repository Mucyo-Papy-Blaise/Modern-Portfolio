export const formatDat = (dateInput: string | Date) => {
  const date = new Date(dateInput)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short", 
    day: "numeric",
  })
}
export default formatDat