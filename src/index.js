import FlappyBird from './game';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('bird-game');
    let game = new FlappyBird(canvas);
    game.restart();
});