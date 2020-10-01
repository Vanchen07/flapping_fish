const CONSTANTS = {
  PIPE_SPEED: 2,
  // GAP_HEIGHT: 150,
  // PIPE_WIDTH: 50,
  PIPE_WIDTH: 32,
  PIPE_HEIGHT: 32,
  EDGE_BUFFER: 250,
  PIPE_SPACING: 220, //horizontal spacing btwn pipes
  WARM_UP_SECONDS: 1,
  SCALE: 3
};

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    
    const firstPipe = this.dimensions.width + (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.PIPE_SPEED);
 
    this.pipes = [ 
      this.randomPipe(firstPipe), 
      this.randomPipe(firstPipe + CONSTANTS.PIPE_SPACING), 
      this.randomPipe(firstPipe + (CONSTANTS.PIPE_SPACING * 2))
    ];

  }

  randomPipe(x) {
    const heightRange = this.dimensions.height - (2 * CONSTANTS.EDGE_BUFFER)
    const gapTop = (Math.random() * heightRange) + CONSTANTS.EDGE_BUFFER;
    const scaledWidth = CONSTANTS.SCALE * CONSTANTS.PIPE_WIDTH;
    const scaledHeight = CONSTANTS.SCALE * CONSTANTS.PIPE_HEIGHT;

    const pipe = {
      bottomPipe: {
        left: x,
        right: x + scaledWidth,
        top: gapTop,
        bottom: gapTop + scaledHeight,
      }
    }
    
    return pipe
  }

  drawBackground(ctx, water, back, middle, front, backBoat, frontBoat) { 
    // ctx.fillStyle = "lightblue";
    // ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    
    // ctx.clearRect(0,0, this.dimensions.width, this.dimensions.height)
      ctx.drawImage(water, 0, 0, 288, 208, 0, 0, this.dimensions.width, this.dimensions.height )
      ctx.drawImage(back, 0, 0, 32, 112, 0, 0.6 * this.dimensions.height, this.dimensions.width, 0.6 * this.dimensions.height )
      ctx.drawImage(backBoat, 0, 0, 44, 36, 0.6 * this.dimensions.width, 0.57 * this.dimensions.height, 44, 36 )
      ctx.drawImage(middle, 0, 0, 64, 112, 0, 0.65 * this.dimensions.height, this.dimensions.width, 0.65 * this.dimensions.height )
      ctx.drawImage(frontBoat, 0, 0, 76, 59, 0.10 * this.dimensions.width, 0.7 * this.dimensions.height, 76, 59 )
      // ctx.drawImage(front, 0, 0, 144, 80, 0, 0.75 * this.dimensions.height, this.dimensions.width, 0.75 * this.dimensions.height )
    //
  }

  animate(ctx, water, back, middle, front, backBoat, frontBoat, obstacle) {
    this.drawBackground(ctx, water, back, middle, front, backBoat, frontBoat);
    this.movePipes();
    this.drawPipes(ctx, obstacle);
  }

  movePipes() {
    this.pipes.forEach((pipe) => {
      pipe.bottomPipe.left -= CONSTANTS.PIPE_SPEED;
      pipe.bottomPipe.right -= CONSTANTS.PIPE_SPEED;
    })

    if (this.pipes[0].bottomPipe.right <= 0) {
      this.pipes.shift();
      const newX = this.pipes[1].bottomPipe.left + CONSTANTS.PIPE_SPACING;
      this.pipes.push(this.randomPipe(newX));
    }
  }

  drawPipes(ctx, obstacle) {
    // console.log("pipes", this.pipes)
    this.pipes.forEach((pipe) => {
      // ctx.fillStyle = "lightgrey";
      // ctx.fillRect(
      //   pipe.bottomPipe.left,
      //   pipe.bottomPipe.top,
      //   CONSTANTS.PIPE_WIDTH,
      //   pipe.bottomPipe.bottom - pipe.bottomPipe.top
      //   );

      // console.log(pipe)
      const scaledWidth = CONSTANTS.SCALE * CONSTANTS.PIPE_WIDTH;
      const scaledHeight = CONSTANTS.SCALE * CONSTANTS.PIPE_HEIGHT;
      ctx.drawImage(obstacle, 0, 0, 32, 32, pipe.bottomPipe.left, pipe.bottomPipe.top, scaledWidth, scaledHeight)
    })
  }

  collidesWith(bird) {
    let collison = false;

    this.pipes.forEach((pipe) => {
      if (this.overlap(pipe.bottomPipe, bird)) collison = true
    })

    return collison;
  }

  overlap(pipe, bird) {
    if (bird.right >= pipe.left && bird.right <= pipe.right && bird.bottom >= pipe.top && bird.bottom <= pipe.bottom) {
      // console.log("overlap")
      console.log("pipe", pipe)
      console.log("bird", bird)
      return true
    } //else if (bird.right >= pipe.left && bird.right <= pipe.right && bird.top >= pipe.top || bird.top <= pipe.bottom ) {
    //   console.log("pipe", pipe)
    //   console.log("bird", bird)
    //   return true
    // }

    return false;

  }
}

