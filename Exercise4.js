var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

input.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
console.log(input)

var tanggal = (input[3]).split("/")
var tanggal1 = (input[3]).split("/")
var bulan = tanggal[1]

switch (bulan) {
    case '01' : 
        console.log('Januari');
        break;
    case '02' : 
        console.log('Februari');
        break;
    case '03' : 
        console.log('Maret');
        break;
    case '04' : 
        console.log('April');
        break;
    case '05' : 
        console.log('Mei');
        break;
    case '06' : 
        console.log('Juni') ;
        break;
    case '07' : 
        console.log('Juli');
        break;
    case '08' : 
        console.log('Agustus');
        break;
    case '09' :
        console.log('September');
        break;
    case '10' : 
        console.log('Oktober');
        break;
    case '11' : 
        console.log('November');
        break;
    case '12' : 
        console.log('Desember');
        break;
    default :
        console.log('Bulan tak terdifinisi');
    }


tanggal.sort(function(a, b) { return b - a });
console.log(tanggal);



var tanggalBaru = tanggal1.join ("-");
console.log(tanggalBaru);


var nama = (input[1]).slice(0, 15);
console.log(nama);
