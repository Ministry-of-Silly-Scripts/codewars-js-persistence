const persistence = (num) => {
  split_num = separateDigits(num)

  if (split_num.length === 2) {
    multiply = split_num[0] * split_num[1]
    split_num = separateDigits(multiply)
    if (split_num.length === 1) return 1;
  }

  return 0
};

const separateDigits = (num) => {
  return num.toString().split('').map(e => parseInt(e))
}

module.exports = {
  persistence,
  separateDigits
};
