import Player from './player';

document.addEventListener("DOMContentLoaded", () => {
  // set up the canvas
  const gameCanvas = document.getElementById("game-canvas");
  gameCanvas.width = 320;
  gameCanvas.height = 224;
  const ctx = gameCanvas.getContext('2d');

  // set up the player in the middle of the board

  const frog = new Image();
  frog.src = '../images/88720.png';
  const player = new Player({
    canvas: gameCanvas,
    image: frog,
    sX: 24,
    sY: 21,
    sWidth: 13,
    sHeight: 10,
    startX: gameCanvas.width / 2,
    startY: gameCanvas.height / 2,
    speed: 1,
    width: 13,
    height: 10
  });

  // render, draw every 10 ms
  var interval = setInterval(draw, 10);
  function draw() {
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    player.draw(ctx);
    // ctx.fillStyle = "purple";
    // ctx.fillRect(0,0,10,10);
  }





});




// movement:
// https://www.kirupa.com/canvas/moving_shapes_canvas_keyboard.htm

