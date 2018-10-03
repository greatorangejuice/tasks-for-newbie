function tribonacci(signature,n) {
  var a = signature[0];
  var b = signature[1];
  var c = signature[2];
  var e = a + b + c;   // I used letters because they are not constantly
  var array = [a, b, c, e];
  
  for (var i = 0; i < n; i++) {
    a = b;
    b = c;
    c = e;
    e = a + b + c;
    array.push(e);
  }
  array = array.slice(0,n);
  return array;
}
