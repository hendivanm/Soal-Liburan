function persegi (param1,param2) {
   var hasil = "";
   if (param1 === 0 || param2 === 0) {
     return "Invalid Value";
   }

   for (var i = 0; i < param2; i++) {
     var hashtag = "";
     for (var j = 0; j < param1; j++) {
       if (i === 0 || i === param2 - 1 ) {
         hashtag += "#"; 
       } else {
         if ( j === 0 || j === param1 - 1) {
           hashtag += "#";
         } else {
           hashtag += " "; // Untuk karakter kosong
         }
       }
     }
      hasil += hashtag + "\n"; // New line, bisa juga pakai \r untuk return
   }
   return hasil;
}

console.log (persegi(5,7))


/*
    #####
    #   #
    #   #
    #   #
    #   #
    #   #
    #####
*/

console.log (persegi(6,3))

// /*
//     ######
//     #    #
//     ######
// */


console.log(persegi(0,7)) // invalid value 
console.log(persegi(4,0)) // invalid value 