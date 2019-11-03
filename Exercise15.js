function groupAnimals(animals) {
    // you can only write your code here!
    var hasil = []
    var fill = 0
    animals.sort()
    for (var i = 0; i < animals.length; i++) {
      if (hasil.length === 0) {
        hasil.push([animals[i]])
      } else if ( hasil[fill][0][0] === animals[i][0]) {
        hasil[fill].push(animals[i])
      } else {
        hasil.push([animals[i]])
        fill++
      }
    }
    return hasil
  }



  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//   // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]