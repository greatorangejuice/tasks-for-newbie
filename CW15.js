function tickets(peopleInLine){
 
  var moneyInCashBox = 25;
  
  if (peopleInLine[0] != 25) {
      return "NO";
  }
  
  for ( let i = 1; i < peopleInLine.length; i++ ) {
      moneyInCashBox += 25;
      console.log("До сдачи: " + moneyInCashBox)
      
      if ( peopleInLine[i] > 25 ) {
          moneyInCashBox -= (peopleInLine[i] - 25);
           console.log("После сдачи: " + moneyInCashBox)
      }
      if (moneyInCashBox < 0) {return "NO"}
  }
  console.log(peopleInLine);
  if (moneyInCashBox > 0) {
  return "YES";
  } else {
  return "NO";
  }
}
