function validDate(
  date: string,
  minYear: number,
  maxYear: number = new Date().getFullYear()
) {
  const arr = date.split('-');
  const year = parseInt(arr[0]);

  return year >= minYear && year <= maxYear;
}

export default validDate;
