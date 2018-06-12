/*
    Membuat bendera scotlandia.
    Output hanya menggunakan console.log string yang isinya hanya berupa spasi kosong dan char *
    Petunjuk : 
    - input harus lebih dari 3, jika tidak maka "invalid input"
    - input harus bernilai ganjil, jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param)
{
  var result = "";
  var firstStar = 0; 
  var secondStar = param - 1; // Membuat "*" setiap - 1
 
  if (param <= 3 || param % 2 === 0) // Input harus lebih dari 3, dan harus bernilai ganjil
  {
    return "invalid input"
  } 
  else 
  {
    for (var i = 0; i < param; i++) 
    {
      for ( var j = 0; j < param; j++) 
      {
        if (j === firstStar || j === secondStar) // Menyilang bintang seperti Test Case
        {
          result = result + "*"
        } 
        else (result = result + " ")
      }
      firstStar++ // Meletakkan "*" agar bisa menjadi X
      secondStar-- // Meletakkan "*" agar bisa menjadi X
      console.log (result)
      result = ""
    }
    return result
  }
}

console.log(scotlandFlag(5))
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

console.log(scotlandFlag(9))
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/