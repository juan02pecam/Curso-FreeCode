let year = 2024;
let result;

function isLeapYear(year) {
  if (year % 400 == 0) {
    return `${year} is a leap year.`
  } 
  
  if(year % 100 == 0) {
    return `${year} is not a leap year.`
  } 
  
  if(year % 4 == 0){
    return `${year} is a leap year.`
  }
  
  return `${year} is not a leap year.`
       
}
//esto almacena el resultado de la función en la variable result, pero no se muestra en consola
result = isLeapYear(year);

console.log(isLeapYear(2024));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(result)
