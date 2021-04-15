function arrModif(arr){
  let text = ''
  arr.forEach(item => {
      if (item % 3 === 0 && item % 7 === 0) {
        text += 'Link Aja \n'
      } else if (item % 3 === 0) {
        text += 'Link \n'
      } else if (item % 7 === 0) {
        text += 'Aja \n'
      } else {
        text += item + '\n'
      }
  })
  return text;
}

console.log(arrModif([23, 2, 45, 98, 27, 4,28, 8, 30, 70, 16, 15, 21, 14, 42]))
