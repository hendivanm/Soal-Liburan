function soal1 (param) {
    var hasil = "";
    
    for (var i = 0; i < param.length; i ++) {
      if (param[i] === " ") { // " " => Tidak ada jarak atau spasi
        hasil = hasil + ""
        } else {
        hasil = hasil + param[i]
      }
    }

    for (var j = hasil.length - 1; 0 <= j; j --) { // Membaca huruf dari belakang
      console.log (hasil[j])
    }
}

(soal1 ("Aries Dimas Yudhistira"));
/*
    a
    r
    i
    t
    s
    i
    h
    d
    u
    Y
    s
    a
    m
    i
    D
    s
    e
    i
    r
    A
*/