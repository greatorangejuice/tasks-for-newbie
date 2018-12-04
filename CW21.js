function moveZeros(arr) {
  let zeroArr = arr.filter(function(zero) {
    return zero === 0;
  })

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      i--;
    }
  }
  
  arr = arr.concat(zeroArr);
  return arr;
}
var arr = [1,1,10,5,0,2,0,5,5,0,0,5];
alert( moveZeros() );



// not mine
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}