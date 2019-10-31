function pasanganTerbesar(num) {
    // you can only write your code here!
    var stock = []
    var numStr = String(num)
    for (var i = 0; i < numStr.length ; i++) {
        var rangkaian = ''
        for (var j = i; j < i + 2; j++) {
            rangkaian += numStr[j]
        } 
        // stock = stock + rangkaian
        rangkaian = Number(rangkaian)
        stock.push(rangkaian)
    }    
    stock.pop()
    return Math.max(...stock)    
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
//   console.log(pasanganTerbesar(12783456)); // 83
//   console.log(pasanganTerbesar(910233)); // 91
//   console.log(pasanganTerbesar(71856421)); // 85
//   console.log(pasanganTerbesar(79918293)); // 99