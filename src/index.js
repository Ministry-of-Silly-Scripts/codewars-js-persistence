const persistence = (num) => {
  split_num = separateDigits(num)

  counter = 0;
  while (split_num.length !== 1) {
    multiply = split_num.reduce((a, b) => a * b)
    split_num = separateDigits(multiply)
    counter++;
  }

  return counter
};

const separateDigits = (num) => {
  return num.toString().split('').map(e => parseInt(e))
}

module.exports = {
  persistence,
  separateDigits
};
