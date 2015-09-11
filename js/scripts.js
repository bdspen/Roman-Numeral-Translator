var convertToRomanNumeral = function(limit) {

  var finalNumeral
  var temp = "";

  var romanAssoc = {
    1000 : "M",
    500 : "D",
    100 : "C",
    50 : "L",
    10 : "X",
    5 : "V",
    1 : "I"
  };

  while(limit >= 1) {

    var difference = checkArray(romanAssoc, limit);

    if(limit >= difference) {
        temp = temp.concat(romanAssoc[difference]);
    }
    limit -= difference;
  }

  if(temp.length > 4) {
    finalNumeral = format(temp, romanAssoc);
  } else {
    finalNumeral = temp;
  }


  return finalNumeral;
}


var checkArray = function(incomingObject, numberToCompare) {
  var incomingArray = Object.keys(incomingObject);
  incomingArray.reverse();
  for(var i = 0; i < incomingArray.length; i++) {
    if(numberToCompare >= incomingArray[i]) {
      return parseInt(incomingArray[i]);
    }
  }
}


var format = function(numeralString, arr) {
  numeralString = reverseString(numeralString);
  // var keys = Object.values(arr);
  var values = [];
  var needle;
  var result = "";
  var recursive;

  for(var key in arr) {
      values.push(arr[key]);
  }

  // for(var i = 0; i < arr.length; i++) {
  //   values.push(arr[keys[i]]);
  // }

  needle = numeralString.substring(4,5);
  recursive = numeralString.substring(5);

  do {
    result = result.concat(values[values.indexOf(needle)-1]);
    result = result.concat(values[values.indexOf(needle)+1]);
    numeralString = numeralString.substring(5);
  } while (numeralString.substring(0,3) === numeralString.substring(0));

  return result;
}

var reverseString = function(s) {
    return s.split("").reverse().join("");
}
