export const formatDateToEn = (date?: string | Date | number) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

  const weeks = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

  const now = new Date(date) || new Date()
  const year = now.getFullYear()
  const month = months[now.getMonth()]
  const week = weeks[now.getDay()]
  const day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
  return `${week},${day} ${month}${year}`
}
