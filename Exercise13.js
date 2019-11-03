function targetTerdekat(arr) {
    // you can only write your code here!
    var posisiO = 0
    var posisiX = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            posisiO = i
        } else if (arr[i] === 'x') {
            posisiX.push(i)
        } 
    }
    
    var jarak = []
    for (var j = 0; j < posisiX.length; j++) {
        var selisih = 0
        if (posisiO < posisiX[j]) {
            selisih = posisiX[j] - posisiO
            jarak.push(selisih)
        } else if (posisiX[j] < posisiO) {
            selisih = posisiO - posisiX[j]
            jarak.push(selisih)
        }     
        var minNumber = jarak[0];
        for ( var k = 1; k < jarak.length; k++){
            if (jarak[k] < minNumber) {
                minNumber = jarak[k]
            }
        }
    }
    if (posisiX.length === 0) {
        var hasil = 0
        return hasil
    }
    return minNumber
    }
    // console.log(jarak)
 

  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2