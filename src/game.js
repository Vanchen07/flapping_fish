import Level from './level';
import Bird from './bird';

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    
    this.frameCount = 0;

    //images
    this.water = new Image();
    this.water.src = './dist/assets/water.png';
    this.back = new Image();
    this.back.src = './dist/assets/back.png';
    this.middle = new Image();
    this.middle.src = './dist/assets/middle.png';
    this.front = new Image();
    this.front.src = './dist/assets/front.png';
    this.backBoat = new Image();
    this.backBoat.src = './dist/assets/boat-far.png';
    this.frontBoat = new Image();
    this.frontBoat.src = './dist/assets/boat-middle.png';
    this.obstacle = new Image();
    this.obstacle.src = './dist/assets/spikes.png';


    this.click = this.click.bind(this);
    this.animate = this.animate.bind(this);

    canvas.addEventListener('mousedown', this.click);

    window.onload = () => {
      this.restart();
    }
  }

  restart() {
    this.running = false;
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);


    this.animate();
  }

  animate() {
    // this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
    
    this.level.animate(this.ctx, this.water, this.back, this.middle, this.front, this.backBoat, this.frontBoat, this.obstacle);
    this.bird.animate(this.ctx, this.frameCount);

    this.frameCount++

    if (this.frameCount > 15) {
      this.frameCount = 0;
    }

    if (this.gameOver()) {
      alert("You've lost")
      this.restart();
    }

    if (this.running) {
      requestAnimationFrame(this.animate)
    }
  }

  gameOver() {
    return (
      this.level.collidesWith(this.bird.getBounds()) || this.bird.outOfBounds()
    );
  }

  play() {
    this.running = true;
    this.animate();
  }

  click() {
    if (!this.running) {
      this.play();
    }
    this.bird.flap();
  }
}