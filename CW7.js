function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
 
   if (enteredCode == correctCode & new Date(currentDate) <= new Date(expirationDate) ) {
       return true;
   }
   return false;
}
alert( checkCoupon('123','123','September 5, 2014','October 1, 2014') );
// Это божественно
// return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)




