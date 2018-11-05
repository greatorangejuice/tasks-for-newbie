function domainName(url) {

  if ( url.indexOf('http://') != -1 ) {
    var dot = url.indexOf('.');
    var comStr = url.slice(0, dot);
    console.log("Убираем все после точки: " + comStr);
    comStr = comStr.split('http://');
    console.log("На выходе с http: " + comStr[1]);
    return comStr[1];

  } else if ( url.indexOf('www.') != -1 ) {
    var dot = url.indexOf('.', 4);
    var comStr = url.slice(0, dot); 
    console.log("Убираем все после точки: " + comStr);
    comStr = comStr.split('www.');
    console.log("На выходе с www " + comStr[1]);
    return comStr[1];

  } else if ( url.indexOf('https://') != -1 ) {
    var dot = url.indexOf('.');
    var comStr = url.slice(0, dot);
    console.log("Убираем все после точки: " + comStr);
    comStr = comStr.split('https://');
    console.log("На выходе с https: " + comStr[1]);
    return comStr[1];

  } else if (url.indexOf('http://www.') == 0 ) {
    console.log( url.indexOf('http://www.') );
    var dot = url.indexOf('.', 11);
    console.log("Некст точка: " + dot);
    var comStr = url.slice(0, dot);
    console.log("Убираем все после точки: " + comStr);
    comStr = comStr.split('http://www.');
    console.log("На выходе с www " + comStr[1]);
    return comStr[1];
  }
   // http://www. - на это начинает срабатыать начальный блок кода
}

domainName("http://google.com");
domainName("www.google.com");
domainName("https://google.com");
domainName("http://www.google.com");


// Test.assertEquals(domainName("http://google.com"), "google");
// Test.assertEquals(domainName("http://google.co.jp"), "google");
// Test.assertEquals(domainName("www.xakep.ru"), "xakep");
// Test.assertEquals(domainName("https://youtube.com"), "youtube");
