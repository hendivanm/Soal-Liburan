function rocket (param) {
  var result = [];
  var subResult = [];

  for (var i = 0; i < param; i ++) {
    for (var j = 0; j < param; j ++) {
      if (param % 2 !== 0) // UNTUK GANJIL
      {
        if (i === Math.floor ((param - 1) / 2) && j === Math.ceil ((param - 1) / 2)) // PENTING!
        {
          result.push ("*");
        }
        else {
          result.push("");
        }
      }
      
      else if (param === 2) // UNTUK TEST CASE DENGAN JUMLAH 2
      {
        result.push("*");
      }
      
      else if (param % 2 === 0) // UNTUK GENAP
      {
        if (i === 0 || i === param - 1) {
          result.push ("");
        }
        else
        {
          if (j === 0 || j === param - 1)
          {
            result.push ("");
          }
          else
          {
            result.push ("*");
          }
        }
      }
    }

  subResult.push (result)
  result = [];

  }
  return subResult
}

console.log (rocket(5))
/*
  [
      ['','','','',''],
      ['','','','',''],
      ['','','*','',''],
      ['','','','',''],
      ['','','','','']
  ]
*/

console.log (rocket(3))
/*
  [
      ['','',''],
      ['','*',''],
      ['','',''],
    
  ]
*/

console.log (rocket(4))
/*
  [
      ['','','',''],
      ['','*','*',''],
      ['','*','*',''],
      ['','','',''],
      
  ]
*/

console.log (rocket(2))
/*
  [
      ['*','*'],
      ['*','*'],
  ]
*/

console.log (rocket(1))
/*
  [
      ['*']
  ]
*/