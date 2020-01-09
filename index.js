function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i = 0; i < 4; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
   }
  return array;
}

function johnLennonFacts(array){
  var newArray = []
  let n = 0
  while (array.length < 4){
    n++
    array[n] = `${array[n]}!!!`
 }
  return newArray

}

// function iLoveTheBeatles(number){
//   var array = []
//     do {array.push('I love the Beatles')}
//     while (number < 15) {
//
//     }
//
//     return array
// }
