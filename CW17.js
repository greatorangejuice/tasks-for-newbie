function domainName(url) {

  if ( url.indexOf('http://') != -1 & url.indexOf('www.') == -1 ) {
    let dot = url.indexOf('.');
    let comStr = url.slice(0, dot);
    console.log(url);
    comStr = comStr.split('http://');
    console.log("На выходе с http: " + comStr[1]);
    return comStr[1];

  } else if ( url.indexOf('www.') != -1 & url.indexOf('http://') == -1 & url.indexOf('https://') == -1 ) { 
    let dot = url.indexOf('.', 4);
    let comStr = url.slice(0, dot); 
    console.log(url);
    comStr = comStr.split('www.');
    console.log("На выходе с www " + comStr[1]);
    return comStr[1];

  } else if ( url.indexOf('https://') != -1 & url.indexOf('www.') == -1 ) {
    let dot = url.indexOf('.');
    let comStr = url.slice(0, dot);
    console.log(url);
    comStr = comStr.split('https://');
    console.log("На выходе с https: " + comStr[1]);
    return comStr[1];

  } else if (url.indexOf('http://www.') == 0 & url.indexOf('http://') == -1 ) {
    console.log( url.indexOf('http://www.') );
    let dot = url.indexOf('.', 11);
    console.log("Некст точка: " + dot);
    let comStr = url.slice(0, dot);
    console.log(url);
    comStr = comStr.split('http://www.');
    console.log("На выходе с http://www " + comStr[1]);
    return comStr[1];

  } else if (url.indexOf('https://www.') == 0 ) {
    let dot = url.indexOf('.', 12);
    console.log("Некст точка: " + dot);
    let comStr = url.slice(0, dot);
    console.log(url);
    comStr = comStr.split('https://www.');
    console.log("На выходе с https://www " + comStr[1]);
    return comStr[1];
  
  } else {
    let dot = url.indexOf('.');
    let comStr = url.slice(0, dot);
    console.log("Без префикса: " + comStr);
    return comStr;
  }
  
}

domainName("http://google.com");
domainName("www.google.com");
domainName("https://google.com");
domainName("http://www.google.com");
domainName("398d6q9tt.co/index.php");
domainName("https://www.ouly7ietp-k2g2w00okvo.io/warez/");