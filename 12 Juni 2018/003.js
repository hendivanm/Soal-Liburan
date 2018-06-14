function soal3 (param) {
    var obj = {};
    var under20 = [];
    var over20 = [];

    for (var age of param) {
      if (age[1] < 20) { // INGAT UMUR DI INDEX 1
        under20.push (age[0]);
      } else {
        over20.push (age[0]);
      }
    }
  
    obj["under20"] = under20;
    obj["over20"] = over20;
    return obj;
}

console.log (soal3([
    ["dimas",17],
    ["akbar",28],
    ["rifki",30],
    ["dimitri",18],
    ["saitama",19]
]));

/*
    {
        under20:["dimas",'dimitri','saitama'],
        over20:["akbar","rifki"]
    }
*/