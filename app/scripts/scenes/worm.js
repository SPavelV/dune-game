export default class Worm extends Phaser.Scene {
  /**
   *  My custom scene.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Worm'});

    this.wormHead = null;
    this.wormSection = [];
    this.wormPath = [];
    this.numWormSection = 10;
    this.wormSpacer = 6;
  }

  /**
   *  Called when this scene is initialized.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  init(/* data */) {
  }

  /**
   *  Used to declare game assets to be loaded using the loader plugin API.
   *
   *  @protected
   */
  preload() {
  }

  addWorm() {

  }

  /**
   *  Responsible for setting up game objects on the screen.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  create(/* data */) {

    this.cursors = this.input.keyboard.createCursorKeys();

    this.wormHead = this.physics.add.sprite(100,200, 'worm-head').setVelocity(100, -100)
      .setBounce(1, 1)
      .setCollideWorldBounds(true);

    // this.wormHead.anchor.setTo(0.5);

    // Секции червя
    for (let i = 0; i < this.numWormSection; i++) {
      this.wormSection[i] = this.add.sprite(100,200, 'worm-section');
    }

    //Путь червя:
    for(let i = 0; i <= this.numWormSection * this.wormSpacer; i++) {
      this.wormPath[i] = new Phaser.Geom.Point(100,200);
    }

  }

  /**
   *  Handles updates to game logic, physics and game objects.
   *
   *  @protected
   *  @param {number} t - Current internal clock time.
   *  @param {number} dt - Time elapsed since last update.
   */
  update(/* t, dt */) {
    this.wormHead.body.velocity.setTo(0, 0);
    this.wormHead.body.angularVelocity = 0;

    if (this.cursors.up.isDown)
    {
      // this.wormHead.body.velocity.copyFrom(this.game.physics.arcade.velocityFromAngle(this.wormHead.angle, 300));
      // Everytime the snake head moves, insert the new location at the start of the array, 
      // and knock the last position off the end

      let part = this.wormPath.pop();

      part.setTo(this.wormHead.x, this.wormHead.y);

      this.wormPath.unshift(part);

      for (let i = 1; i <= this.numWormSection - 1; i++)
      {
        this.wormSection[i].x = (this.wormPath[i * this.wormSpacer]).x;
        this.wormSection[i].y = (this.wormPath[i * this.wormSpacer]).y;
      }
    }

    if (this.cursors.left.isDown)
    {
      this.wormHead.body.angularVelocity = -300;
    }
    else if (this.cursors.right.isDown)
    {
      this.wormHead.body.angularVelocity = 300;
    }
  }

  /**
   *  Called after a scene is rendered. Handles rendenring post processing.
   *
   *  @protected
   */
  render() {
  }

  /**
   *  Called when a scene is about to shut down.
   *
   *  @protected
   */
  shutdown() {
  }

  /**
   *  Called when a scene is about to be destroyed (i.e.: removed from scene
   *  manager). All allocated resources that need clean up should be freed up
   *  here.
   *
   *  @protected
   */
  destroy() {
  }
}
