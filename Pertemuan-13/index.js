// 1. Calculating Age and Retirement Year
function calculateAge(birthYear) {
    return 2019 - birthYear;
  }
  
  function yearUntilRetirement({ year, firstName }) {
    var age = calculateAge(year);
    var retirement = 60 - age;
  
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
    } else {
      console.log(`${firstName} is already retired.`);
    }
  }
  
  yearUntilRetirement({ year: 1987, firstName: 'Va' });
  
  // 2. Adding Numbers with an Array
  const addNumber = (...numbers) => {
    return numbers.reduce((acc, current) => acc + current, 0);
  };
  
  console.log(addNumber(1, 2, 3, 4, 5, 6, 7)); // Output: 28
  
  // 3. Calculating Area of a Circle
  var phi = 3.14;
  var power = 2;
  var radius = 0;
  
  var calculateArea = function ({ radius, power }) {
    return phi * Math.pow(radius, power);
  };
  
  radius = 21;
  var area21 = calculateArea({ radius: radius, power: 2 });
  
  radius = 7;
  var area7 = calculateArea({ radius: radius, power: 2 });
  
  console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);
  
  // 4. Making an AJAX Request
  const makeAjaxRequest = ({ url, method = 'GET' }) => {
    console.log(url, method);
  };
  
  makeAjaxRequest({ url: 'www.google.com' });