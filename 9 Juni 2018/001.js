function soal1 (param) {
  var result = [];
  if (param === 0) { // 0
    return "invalid input";
  } else if (param % 2 !== 0) { // Ganjil
    var mid = (param - 1 ) / 2;
    for (var i = 0; i < param; i++) {
        if (i === mid) {
          result.push ("*");
        } else {
          result.push(" ");
        }
    }
  } else { // Genap
    var evenMid = Math.floor ((param -1 ) / 2); // Mengembalikan bilangan bulat terbesar yang kurang dari atau sama dengan bilangan yang diberikan
    var evenMid2 = Math.ceil ((param -1) / 2); // Pembulatan ke atas dari sebuah bilangan integer yang di berikan
    for (var i = 0; i < param; i++) {
        if (i === evenMid || i === evenMid2) {
          result.push ("*");
        } else {
          result.push (" ");
        }
    }
  }
  return result;
}

console.log (soal1(5)) //  ['','','*','','']
console.log (soal1(4)) // ['','*','*','']
console.log (soal1(7)) // ['','','','*','','','']
console.log (soal1(10)) // ['','','','','*','*','','','','']
console.log (soal1(0)) // invalid input 
console.log (soal1(1)) // ['*']