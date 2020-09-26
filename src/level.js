export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [this.x, this.x + 150];
  }

  drawBackground(ctx) {
    ctx.fillStyle = "lightseagreen";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  animate(ctx) {
    this.drawBackground(ctx);
  }
}