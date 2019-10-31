function palindrome(kata) {
    var kataPisah = kata.split ('');
    var kataBalik = '';
    for ( var i = 1; i <= kata.length; i++) {
        kataBalik = kataBalik + kataPisah[kata.length - i]
    }
    if (kataBalik === kata) {
        return true
    }
    else {
        return false
    }
    

    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false