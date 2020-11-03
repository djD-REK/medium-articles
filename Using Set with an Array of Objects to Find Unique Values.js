const yearsArray = [{ year: 1999 }, { year: 2000 }, { year: 1999 }]
const arrayOfOnlyYears = yearsArray.map((object) => object.year)
const uniqueYears = [...new Set(arrayOfOnlyYears)]
console.log(uniqueYears) // [1999,2000]
