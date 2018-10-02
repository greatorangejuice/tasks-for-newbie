function humanReadable(seconds) {
    var HH = seconds/3600 ^ 0;
    var MM = (seconds-HH*3600)/60 ^ 0;
    var SS = seconds - HH*3600 - MM*60;
    var newTime = (HH < 10 ? "0" + HH : HH) + ":" + (MM < 10 ? "0" + MM : MM) + ":" 
    + (SS < 10 ? "0" + SS : SS);
    return newTime;
  }
// осталось вывести результат


/*
Write a function, which takes a non-negative 
integer (seconds) as input and returns the time in 
a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */
