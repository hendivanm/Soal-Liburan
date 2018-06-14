function soal1 (param) {
  var hasil = [];
    for (var i = 1; i <= param; i++) {
      if (i % 4 === 0 && i % 7 === 0) {
        hasil.push ("FizzBuzz")
      } else if (i % 4 === 0) {
        hasil.push ("Fizz")
      } else if (i % 7 === 0) {
        hasil.push ("Buzz")
      } else {
        hasil.push (" ");
      }
    }
  return hasil
}

console.log(soal1(20))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz']

console.log(soal1(10))
// ['','','','Fizz','','','Buzz','Fizz','','']

console.log(soal1(30))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz','Buzz','','','Fizz','','','','FizzBuzz','','']