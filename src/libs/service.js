export function convert(value) {
  let reverse = value
    .toString()
    .split('')
    .reverse()
    .join('');
  return reverse
    .match(/\d{1,3}/g)
    .join('.')
    .split('')
    .reverse()
    .join('');
}