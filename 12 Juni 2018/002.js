/*
    PSEUDOCODE:

    FUNCTION soal2:
    parameter: param (data type: number)
    START
      STORE "hasil" with empty array
      STORE "subHasil" with empty array
      STORE and SET "abjad" with "abcdefghijklmnopqrstuvwxyz"
      STORE and SET "count" with 0

      IF param EQUALS to 0 DO
        RETURN "invalid input"

      ELSE

        FOR "i" to value of param
          FOR "j" to value of param

            IF "count" EQUALS to 26 DO
               "count" EQUALS to 0
            END IF

            add "abjad" index of "count" to "hasil"
            "count" increase by 1
          END FOR
          
          add "hasil" to "subHasil"
          "hasil" EQUALS to empty array
        
        END FOR
      END IF
      
      RETURN "subHasil"
    END FUNCTION  
*/

function soal2 (param) {
    var hasil = [];
    var subHasil = [];
    abjad = "abcdefghijklmnopqrstuvwxyz"
    count = 0

  if (param === 0) { // UNTUK TEST CASE 0
    return "invalid input"
  } else {
    for (var i = 0; i < param; i ++)
    {
      for (var j = 0; j < param; j ++)
      {
        if (count === 26) // Jumlah maksimal abjad mencapai 26
        {
          count = 0
        }
        hasil.push (abjad[count]) // Mengubah abjad menjadi bentuk Array
        count ++
      }
      subHasil.push (hasil)
      hasil = []
    }
    return subHasil
  }
}

console.log (soal2(8))
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log (soal2(2))
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

console.log (soal2(0)) // invalid input