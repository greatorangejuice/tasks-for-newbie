function titleCase(title, minorWords) {
  var arr = title.split();
  console.log(typeof(arr));
  return arr;
 
}
alert ( titleCase("раз два три пять"));
/*
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/
