export default class Bird {
    constructor(dimensions) {
        this.velocity = 0;
        this.dimensions = dimensions;
        this.x = (1/3)*(this.dimensions.width);
        this.y = (1/2)*(this.dimensions.height);
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, 30, 40);
    }

    animate(ctx) {
        this.drawBird(ctx);
    }
}