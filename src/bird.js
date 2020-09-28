
const CONSTANTS = {
    BIRD_WIDTH: 30,
    BIRD_HEIGHT: 40
}

export default class Bird {
    constructor(dimensions) {
        this.velocity = 0;
        this.dimensions = dimensions;
        this.x = (1/3)*(this.dimensions.width);
        this.y = (1/2)*(this.dimensions.height);
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
        // console.log(this.x, this.y)
    }

    animate(ctx) {
        this.move()
        this.drawBird(ctx);
    }

    move() {
        let gravity = 0.5;
        this.y += this.velocity;
        this.velocity += gravity;
    }

    flap() {
        this.velocity = -8;
    }

    getBounds() {
        // console.log({
        //     left: this.x,
        //     right: this.x + CONSTANTS.BIRD_WIDTH,
        //     top: this.y,
        //     bottom: this.y + CONSTANTS.BIRD_HEIGHT,
        // })

        return ({
            left: this.x,
            right: this.x + CONSTANTS.BIRD_WIDTH,
            top: this.y, 
            bottom: this.y + CONSTANTS.BIRD_HEIGHT,
        })
    }

    outOfBounds() {
        let bounds = this.getBounds();

        let overTop = bounds.top < 0;
        let belowBottom = bounds.bottom >= this.dimensions.height;
        // console.log("bird height", this.y + CONSTANTS.BIRD_HEIGHT)
        // console.log("height", this.dimensions.height)
        return overTop || belowBottom;
    }
}