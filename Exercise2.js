var hasil = ''
function balikKata(kata) {
    for (var i = 1; i<= kata.length; i++) {
        hasil = hasil + kata[kata.length-i]        
    }
    return hasil
   
}

console.log(balikKata('!dlrow olleh'))