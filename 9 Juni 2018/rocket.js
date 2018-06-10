/*
    Soal : 
    Buatlah bendera inggris pada abad pertengahan dan era perang salib dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris dengan berbagai ukuran yang ditentukan
    oleh input.
    Bendera berbentuk persegi. Output hanya menggunakan console.log string yang isinya hanya berupa spasi kosong dan char *
    
    Petunjuk : 
    - input harus bernilai ganjil, jika tidak ganjil maka "invalid input"
*/

function benderaInggris (param) {
  var mid = (param - 1) / 2;

  var result = "";
    if (param % 2 === 0) {
      return "invalid input";
    } else {
      for (var i = 0; i < param; i++) {
        for (var j = 0; j < param; j++) {
          if (i === mid) {
            result += "*";
          } else if (j === mid) {
            result += "*";
          } else {
            result += " ";
          }
        }
        result += "\n"; // Untuk spasi ke bawah
      }
    }
return result;
}
console.log (benderaInggris(9))
/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/

console.log (benderaInggris(5))
/*
    '  *  '
    '  *  '
    '*****'
    '  *  '
    '  *  '
*/

console.log (benderaInggris(4)) // invalid input