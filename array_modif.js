function arrModif(arr){
    return arr.map(value => value % 2 ? value * 3 : value * 2);
}

console.log(arrModif([1, 2, 3, 4, 5]))
