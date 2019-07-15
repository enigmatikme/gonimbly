function cToF(celsius) {
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr;
}

function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  return fToCel;
} 

const image = (cityTime) => {
  let images = {
    "morning": 'Moon',
    "afternoon": 'Sun',
    "evening": 'Blood'
  }
  //* morning = 5 - 12
  //* 12 - 6 
  //* 6 - 5
  let hour = parseInt(cityTime.substring(11,13));
  if (hour >= 5 && hour <= 11) {
    return images["morning"];
  } else if (hour >= 12 && hour <= 18) {
    return images["afternoon"];
  } else {
    return images["evening"];
  }
}

const convertDegrees = (temp, tempScale) => {
  if (tempScale === 'C') {
    return temp;
  } else {
    return cToF(temp);
  }
}

export { image, convertDegrees };