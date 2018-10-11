var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};


function sum(obj) {
    var max = 0;

    for (var key in obj) {

        if ( obj[key] > max ) {
            max = obj[key];
        }
        
    }
    return max ;
}
alert( sum(salaries) );