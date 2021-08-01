var getLucky = function(s, k) {
    let newValue = s
  if(Number(newValue)) {
    newValue = String(newValue)
    newValue = newValue.split('').map((elem) => Number(elem)).reduce((acc, val) => acc + val, 0)
  }
  else {
    newValue = newValue.split('').map((elem) => elem.charCodeAt() - 96).reduce((acc, val) => acc + val, '')
  }
  return (k == 0) ? newValue : getLucky(newValue, k - 1)
};


console.log(getLucky("abcdez",2));