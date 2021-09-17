function repeatStringNumTimes (str, num) {
  // write your code here
  if (num < 0) {
    return '';
  }
  let result = '';
  for (let i = 0; i < num; i += 1) {
    result += str;
  }
  return result;
}

module.exports = repeatStringNumTimes
