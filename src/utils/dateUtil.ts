export const convertDateToUTC = (date: Date): Date => {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
}

export const checkDateInRange = (
  date: Date,
  initialDate: Date,
  finalDate: Date
): boolean => {
  if (
    date.valueOf() >= initialDate.valueOf() &&
    date.valueOf() <= finalDate.valueOf()
  ) {
    return true
  } else {
    return false
  }
}
