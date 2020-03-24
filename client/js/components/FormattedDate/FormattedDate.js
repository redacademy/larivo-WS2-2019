import React, {Fragment} from 'react'

const formatDate = (date) => {
  let newDate = new Date (date)
  const month = newDate.toLocaleString('default', { month: 'short' });
  const day = toOrdinalSuffix(newDate.getDay())
  return (month + '. ' + day + ' ' + newDate.getFullYear()).toUpperCase()
}

const toOrdinalSuffix = num => {
  const int = parseInt(num),
    digits = [int % 10, int % 100],
    ordinals = ['st', 'nd', 'rd', 'th'],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0] - 1]
    : int + ordinals[3];
}

const FormattedDate = ({createdAt}) => {
  return formatDate(createdAt)
}
export default FormattedDate