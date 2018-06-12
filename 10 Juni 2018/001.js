/*
    Analisa sendiri dengan apa yang diminta soal melalui Test Case. 
    Wajib menggunakan pseudocode

    PSEUDOCODE HERE:

    FUNCTION soal1
      parameter: param (data type: number) 
    START
      STORE AND SET "i" with 1
      STORE "result" with empty array
      STORE AND SET "exclamation" with "!"
      STORE AND SET "at" with "@"
      STORE AND SET "hashtag" with "#"

      IF param > 0 DO
        FOR "i" to length of param
          IF "result" length EQUALS 0 OR last value of "result" EQUALS value of "hashtag" THEN
            ADD "exclamation" index of 0 to "result"
          ELSE IF "result" length EQUALS 1 OR last value of "result" EQUALS value of "exclamation" THEN
            ADD "at" index of 1 to "result"
          ELSE IF "return" length EQUALS 2 OR last value of "result" EQUALS value of "at" THEN
            ADD "hashtag" index of 2 to "result"
        END IF
        ELSE 
            RETURN "invalid input"
      END IF

    END FUNCTION
*/

function soal1 (param) {
    result = [];
    var exclamation = "!";
    var at = "@";
    var hashtag = "#";

  if (param > 0)
    for (var i = 1; i <= param; i++)
    {
      if (result.length === 0 || result[result.length - 1] === hashtag)
      {
        result.push (exclamation)
      }
      else if (result.length === 1 || result[result.length - 1] === exclamation)
      {
        result.push (at)
      }
      else if (result.length === 2 || result[result.length - 2] === at)
      {
        result.push (hashtag)
      }
    }
    
    else
    {
      return ("invalid input")
    }
    return result
}

console.log(soal1(3)); // output : ['!','@','#']

console.log(soal1(6)); // output : ['!','@','#','!','@','#']

console.log(soal1(4)); // output : ['!','@','#','!']

console.log(soal1(0)); // invalid input