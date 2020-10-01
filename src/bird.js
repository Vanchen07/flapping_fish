
const CONSTANTS = {
    BIRD_WIDTH: 30,
    BIRD_HEIGHT: 40,
    scale: 3,
    width: 32,
    height: 32,
}

export default class Bird {
    constructor(dimensions) {
        this.velocity = 0;
        this.dimensions = dimensions;
        this.x = (1/3)*(this.dimensions.width);
        this.y = (1/2)*(this.dimensions.height);

        this.character = new Image();
        this.character.src = './dist/assets/character.png';

        this.drawFrame = this.drawFrame.bind(this)
        this.drawBird = this.drawBird.bind(this)

        this.currentLoopIndex = 0;
    }
    
    drawBird(ctx, frameCount) {
        // ctx.fillStyle = "yellow";
        // ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
        // this.drawFrame(0, 0, this.x, this.y, ctx);
        // this.drawFrame(1, 0, this.x, this.y, ctx);
        // this.drawFrame(2, 0, this.x, this.y, ctx);
        // this.drawFrame(3, 0, this.x, this.y, ctx);

        const cycleLoop = [0, 1, 2, 3];

        // ctx.clearRect(this.x, this.y, CONSTANTS.width, CONSTANTS.height);

        this.drawFrame(cycleLoop[this.currentLoopIndex], 0, this.x, this.y, ctx);
        
        console.log(cycleLoop[this.currentLoopIndex])
        
        if (frameCount === 1) {
            this.currentLoopIndex++;
        }

        if (this.currentLoopIndex >= cycleLoop.length) {
            this.currentLoopIndex = 0;
        }

        // requestAnimationFrame(() => this.drawBird(ctx));
    }
    

    drawFrame(frameX, frameY, canvasX, canvasY, ctx) {
        const scaledWidth = CONSTANTS.scale * CONSTANTS.width;
        const scaledHeight = CONSTANTS.scale * CONSTANTS.height;
        

        ctx.drawImage(this.character, frameX * CONSTANTS.width, frameY * CONSTANTS.height, CONSTANTS.width, CONSTANTS.height, canvasX, canvasY, scaledWidth, scaledHeight)
    }

    animate(ctx, frameCount) {
        this.move();
        // this.character.onload = () => this.drawBird(ctx);
        this.drawBird(ctx, frameCount);
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