$('#game').toggle()


$('body').click( function(){
  $( '.screen-left' ).animate({
    opacity: 0.25,
    left: "+=50",
    width: "0%"
  }, 5000, function() {
    // Animation complete.
  });
  
  $( '.screen-right' ).animate({
    opacity: 0.25,
    left: "+=50",
    width: "0%"
  }, 5000, function() {
    // Animation complete.
  });
  
setTimeout(() => {
  $('#game').toggle()
  $('.screens').toggle()
  
}, 5100);
})



// canvas definitiom

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var size = 50
var p1 = new Player(ctx, 50, "red")

var width = canvas.width;
var height = canvas.height;

//////////////////////////////////////////

// obsticle generation

var ob1 = new Obsticle(ctx)
var ob2 = new Obsticle(ctx)
var ob3 = new Obsticle(ctx)
var ob4 = new Obsticle(ctx)
var ob5 = new Obsticle(ctx)
var ob6 = new Obsticle(ctx)
var ob7 = new Obsticle(ctx)
var ob8 = new Obsticle(ctx)
var ob9 = new Obsticle(ctx)
var ob10 = new Obsticle(ctx)
var ob11 = new Obsticle(ctx)
var ob12 = new Obsticle(ctx)
var ob13 = new Obsticle(ctx)

// for (var i = p1.size ; i < canvas.width; i + canvas.width/p1.size){
//   var ob
// }




function drawEverything() {
  ctx.clearRect(0,0,canvas.width, canvas.height)
  p1.draw()
}

function drawObjects(){
  ob1.drawObs()
  ob2.drawObs()
  
}

// function drawScore(){
//   ctx.fillText('player1: ' + p1.score, canvas.width - 300, 100,150 )

// }

function update() {
  drawEverything()
}

update()
drawObjects()

document.onkeydown = function (event) {
  event.preventDefault()
  switch (event.code) {
    case "ArrowUp":
      p1.move("up")
      break;
    case "ArrowRight":
      p1.move("right")
      break;
    case "ArrowDown":
      p1.move("down")
      break;
    case "ArrowLeft":
      p1.move("left")
      break;
  }
  update()
}