class Player {
  constructor(ctx, size, color) {
    this.ctx = ctx
    this.size = size
    this.color = color
    this.x = 0
    this.y = 0
    this.score = 0
  }
  move(direction) {
    var xMin = -this.size;
    var xMax = this.ctx.canvas.width;
    var yMin = -this.size;
    var yMax = this.ctx.canvas.height;

    switch (direction) {
      case "up":
        this.y -= this.size /5
        if (this.y == yMin){
          this.y = yMax;
        }
        break;
      case "right":
        this.x += this.size /5;
        if (this.x == xMax){
          this.x = xMin+10
        }
        break;
      case "down":
        this.y += this.size /5
        if (this.y == yMax){
          this.y = yMin
        }
        break;
      case "left":
        this.x -= this.size /5
        if (this.x < xMin){
          this.x = xMax-10
        }
        break;
    }
  }
  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.size, this.size)
  }
}