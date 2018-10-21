
var colors = ['blue','red','green','yellow','black']


function randomArray (size){
 return new Array(size).fill(0).map(function(){
   
   return Math.floor(Math.random()*4)
 }) 
}

var newGridArray = []

function createNewGridArray(){
for (var i = 0 ; i <10 ; i++) {
newGridArray.push(randomArray(10))
}
return newGridArray
}


function randomNumber(range){
  return Math.floor(Math.random()*range)
}



var specialCd = []
function generateSpecial(){
  var special = [randomNumber(10),randomNumber(10)]
  return specialCd = special;
}
generateSpecial()
createNewGridArray()

var specialColor = 4
var specialCdY = specialCd[0]*80
var specialCdX = specialCd[1]*80



console.log(specialCd)
console.log(specialCdX,specialCdY)

// var specialCd = [0,2]


// console.log(createNewGridArray())