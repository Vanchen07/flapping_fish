const CONSTANTS = {
  PIPE_SPEED: 2,
  // GAP_HEIGHT: 150,
  PIPE_WIDTH: 50,
  EDGE_BUFFER: 250,
  PIPE_SPACING: 220, //horizontal spacing btwn pipes
  WARM_UP_SECONDS: 1
};

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    
    const firstPipe = this.dimensions.width + (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.PIPE_SPEED);
    // console.log("first", firstPipe)
    this.pipes = [ 
      this.randomPipe(firstPipe), 
      this.randomPipe(firstPipe + CONSTANTS.PIPE_SPACING), 
      this.randomPipe(firstPipe + (CONSTANTS.PIPE_SPACING * 2))
    ];
  }

  randomPipe(x) {
    const heightRange = this.dimensions.height - (2 * CONSTANTS.EDGE_BUFFER)
    const gapTop = (Math.random() * heightRange) + CONSTANTS.EDGE_BUFFER;
    
    
    const pipe = {
      bottomPipe: {
        left: x,
        right: x + CONSTANTS.PIPE_WIDTH,
        top: gapTop,
        bottom: this.dimensions.height,
      }
    }
    
    // console.log("heightrange", heightRange)
    // console.log("gaptop", gapTop)
    // if (pipe.bottomPipe.bottom - pipe.bottomPipe.top > 400) console.log("diff", pipe.bottomPipe.bottom - pipe.bottomPipe.top)
    // console.log("canvas", this.dimensions)
    // console.log("pipe", pipe)
    // console.log(pipe.bottomPipe.left)
    return pipe
  }

  drawBackground(ctx) { 
    ctx.fillStyle = "lightseagreen";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  animate(ctx) {
    this.drawBackground(ctx);
    this.movePipes();
    this.drawPipes(ctx);
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

  drawPipes(ctx) {
    // console.log("pipes", this.pipes)
    this.pipes.forEach((pipe) => {
      ctx.fillStyle = "lightgrey";
      ctx.fillRect(
        pipe.bottomPipe.left,
        pipe.bottomPipe.top,
        CONSTANTS.PIPE_WIDTH,
        pipe.bottomPipe.bottom - pipe.bottomPipe.top
      );
    })
  }

  collidesWith(bird) {
    let collison = false;
    
    console.log("bird", bird)

    this.pipes.forEach((pipe) => {
      if (this.overlap(pipe.bottomPipe, bird)) collison = true
    })

    console.log("collison", collison)
    return collison;
  }

  overlap(pipe, bird) {
    if (bird.right >= pipe.left && bird.right <= pipe.right && bird.bottom >= pipe.top) {
      console.log("overlap")
      return true
    } 

    return false;

  }
}

