
var colors = ['blue','red','green','yellow','black']


function randomArray (size){
 return new Array(size).fill(0).map(function(){
   
   return Math.floor(Math.random()*20+1)
 }) 
}

function blankArray (size){
 return new Array(size).fill(0) 
}
var wallsY = randomArray(20)
var wallsX = randomArray(20)


function structuredArray (array){
  for (var col = 0 ; col < 20; col++){
    for (var row = 0; row < 20; row++){
      if(col < wallsY[randomNumber(20)] && col > wallsX[randomNumber(20)]){
        array[col][row] = 1;
      }
      
    }
  }
  return array
}

var newGridArray = []

function createNewGridArray(){
for (var i = 0 ; i <20 ; i++) {
newGridArray.push(blankArray(20))
}
return newGridArray
}


function randomNumber(range){
  return Math.floor(Math.random()*range)
}



var specialCd = []
function generateSpecial(){
  var special = [randomNumber(10),randomNumber(10)+10]
  return specialCd = special;
}
generateSpecial()
createNewGridArray()
structuredArray(newGridArray)

var specialColor = 4
var specialCdY = specialCd[0]*40
var specialCdX = specialCd[1]*40



console.log(specialCd)
console.log(specialCdX,specialCdY)

// var specialCd = [0,2]


// console.log(createNewGridArray())