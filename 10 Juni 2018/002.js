// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga

function soal2 (param) {
    var result = [];
    var subResult = [];
    for (var i = 0; i <= param.length; i++) {
        if (param.length === 1) {
         param.push ("Instruktur");
        }

        var first = param.shift(); 
        var last = param.pop();
        subResult.push (first, last);
        result.push (subResult);
        subResult = [];
        i = 0;
    }
    return result;
}

console.log (soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"]))
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log (soal2(['A','B','C','D','E']))
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log (soal2(['Susan','Albert','Erithiana','Zaki','Sisijoan','Henry',"Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]