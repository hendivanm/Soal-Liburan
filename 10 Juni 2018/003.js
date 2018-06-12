function Abjad (arr) {
    arr.sort(); // Sort Ascending
    var match = []; // Menampung abjad yang sesuai
    var noMatch = []; // Menampung abjad yang tidak sesuai
    var result = [];

    for (var i = 0; i <= arr.length; i++) {
      var alphabet = arr[0][0]; // A
      for (var j = 0; j < arr.length; j++) {
        if (arr[j][0] === alphabet) {
          match.push (arr[j]);
        } else {
          noMatch.push (arr[j]);
        }
      }
      result.push (match);
      match = [];
      arr = noMatch;
      noMatch = [];
      i = 0;
    }
   return result;
}
  
function soal3 (param)
{ 
    var arr = Abjad (param);
    var obj = {};
    for (var i in arr) {
      obj[arr[i][0][0]] = arr[i];
    }
    return obj;
}
  
console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
  /*
      {
          A:['Ayam'],
          B:['Bebek','Babi'],
          C:['Cacing','Curut'],
          K:['Kucing'],
          M:['Monyet'],
          S:['Sapi']
      }
  */
  
console.log(soal3(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak']));
  
  /*
      {
          A:['Anjing','Anoa'],
          L:['Lipan','Landak'],
          K:['Kuda','Kudanil'],
          Z:['Zebra']
      }
  */