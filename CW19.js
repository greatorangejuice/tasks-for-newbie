function formatDuration (seconds) {
  var HH = seconds/3600 ^ 0;
  var MM = (seconds-HH*3600)/60 ^ 0;
  var SS = seconds - HH*3600 - MM*60;
  var newTime = (HH > 1 ? HH + " hours, " : HH + "hour, ") + (MM > 1 ? MM + " minutes" : MM + " minute") + " and " + (SS > 1 ? SS + " seconds" : SS + " second");
  if (SS == 0) {
    newTime = (HH > 1 ? HH + " hours, " : HH + " hour, ") + (MM > 1 ? MM + " minutes" : MM + " minute");
  }
  if (HH == 0) {
    newTime = (MM > 1 ? MM + " minutes" : MM + " minute") + " and " + (SS > 1 ? SS + " seconds" : SS + " second");
  }
  if (MM == 0) {
    newTime = (HH > 1 ? HH + " hours, " : HH + " hour, ") + " and " + (SS > 1 ? SS + " seconds" : SS + " second");
  }
  if (HH == 0 && MM == 0) {
    newTime = SS > 1 ? SS + " seconds" : SS + " second";
  }
  if (HH == 0 && SS == 0) {
    newTime = MM > 1 ? MM + " minutes" : MM + " minute";
  }
  if (MM == 0 && SS == 0 ) {
    newTime = HH > 1 ? HH + " hours " : HH + " hour ";
  }

  return newTime;
}
alert( formatDuration(3600) );
// еще дни и года добавить. Через условия слишком объёмно. Нужно проще

/*
Test.assertEquals(formatDuration(1), "1 second");
Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
Test.assertEquals(formatDuration(120), "2 minutes");
Test.assertEquals(formatDuration(3600), "1 hour");
Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
*/
