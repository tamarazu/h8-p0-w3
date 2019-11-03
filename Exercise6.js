
function angkaPalindrome(num) {   
  var numStr = String(num)
  var status = true
  while (status) {
    var numBack = ""
    for (var i = numStr.length-1; i >= 0; i--) {
      numBack += numStr[i]
    } if (numBack === numStr) {
      status = false
      return Number(numStr)
    } else {
      numNumb = Number(numStr) + 1
      numStr = String(numNumb)
    }
  }
  }



  // TEST CASES
  console.log(angkaPalindrome(21)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001