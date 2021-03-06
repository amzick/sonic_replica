import GameObject from './game_object';


class Moveable extends GameObject {
  constructor(options) {
    // need a reference to the canvas?
    super(options);
    this.canvas = options.canvas;
    // eventually I'll have a sprite
    this.image = options.image;
    this.sX = options.sX;
    this.sY = options.sY;
    this.sWidth = options.sWidth;
    this.sHeight = options.sHeight;
    // need to keep track of the objects x and y pos
    this.startX = options.startX;
    this.startY = options.startY;
    // speed in x and y
    this.speed = options.speed || 1;
    this.dX = options.dX || 0;
    this.dY = options.dY || 0;
    // width and height
    this.width = options.width;
    this.height = options.height;
    // default posX and posY
    // this.posX = options.posX || this.canvas.width / 2;
    // this.posY = options.posY || this.canvas.height / 2;

    this.posX = this.startX + (this.dX * this.speed);
    this.posY = this.startY + (this.dY * this.speed);

    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);

    this.tickCount = 0;
    this.ticksPerFrame = 15;
    this.update = this.update.bind(this);
  }


  draw(ctx) {
    ctx.drawImage(this.image, this.sX, this.sY, this.sWidth, this.sHeight, this.posX, this.posY, this.width, this.height);
    this.move();
    this.update();
  }

  collides() {
    // will I call super collides and then have rules depending on the object?
    // and just define what happens here?
  }

  move() {
    // redefined in each child class since they'll have unique patterns
  }

  update() {
    // redefined in each child. some won't update (arrows)
  }
}

export default Moveable;