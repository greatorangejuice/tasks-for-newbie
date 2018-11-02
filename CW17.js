function domainName(url){
  //your code here
}


Test.assertEquals(domainName("http://google.com"), "google");
Test.assertEquals(domainName("http://google.co.jp"), "google");
Test.assertEquals(domainName("www.xakep.ru"), "xakep");
Test.assertEquals(domainName("https://youtube.com"), "youtube");
