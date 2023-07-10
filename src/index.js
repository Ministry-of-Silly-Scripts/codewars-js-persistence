const persistence = (num) => {
  return 0
};

const separateDigits = (num) => {
  return num.toString().split('').map(e => parseInt(e))
}

module.exports = {
  persistence,
  separateDigits
};
