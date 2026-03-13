let year = 0;
const result = ""

function isLeapYear(year) {
  if (year % 4 == 0 || year % 400 == 0 ) {
    console.log(result + `${year} is a leap year.`)
  } else {
    console.log(result + `${year} is not a leap year.`)
  }
            

            
}


isLeapYear (2024)
isLeapYear (2000)
isLeapYear (1900)
console.log(result)
