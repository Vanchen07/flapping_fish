import Level from './level';
import Bird from './bird';

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    
    this.click = this.click.bind(this);
    this.animate = this.animate.bind(this);
    canvas.addEventListener('mousedown', this.click)
    this.restart();
  }

  restart() {
    this.running = false;
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);

    this.animate();
  }

  animate() {
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);

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