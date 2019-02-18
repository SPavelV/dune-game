export default class Intro extends Phaser.Scene {
  /**
   *  My custom scene.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Intro'});
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

  /**
   *  Responsible for setting up game objects on the screen.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  create(/* data */) {
    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;

    this.add.image(x, y, 'sky');

    const flameParticle = this.add.particles('red');
    const flame = flameParticle.createEmitter({
      speed: 100,
      scale: {start: 1, end: 0},
      blendMode: 'ADD'
    });

    const logo = this.physics.add.image(x, 100, 'logo')
      .setVelocity(100, -100)
      .setBounce(1, 1)
      .setCollideWorldBounds(true);
    flame.startFollow(logo);

    //  Add a text label.
    const label = this.add.text(x, 400, 'START!!', {
      font: '64px Arial',
      color: 'white',
      stroke: 'black',
      strokeThickness: 6
    });

    //  Move the origin point to the center, make the label interactive.
    label
      .setOrigin(0.5, 0.5)
      .setInteractive();
    label.on('pointerup', () => this.scene.start('Game'));

  }

  /**
   *  Handles updates to game logic, physics and game objects.
   *
   *  @protected
   *  @param {number} t - Current internal clock time.
   *  @param {number} dt - Time elapsed since last update.
   */
  update(/* t, dt */) {
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
