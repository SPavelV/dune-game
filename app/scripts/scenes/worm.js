export default class Worm extends Phaser.Scene {
  /**
   *  My custom scene.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Worm'});
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
    this.wormHead = null;
    this.wormSection = [];
    this.wormPath = [];
    this.numWormSection = 10;
    this.wormSpacer = 25;


    this.worm = this.physics.add.group(
      [
        {key: 'worm-head', frameQuantity: 1, setXY: { x: 100, y: 400}},
        {key: 'worm-section', frameQuantity: 5, setXY: {x: 100, y: 400+this.wormSpacer, stepY: this.wormSpacer}}
      ]
      );

    console.log('---', this.worm.getChildren());
    const wormChildren = this.worm.getChildren();


    this.worm = this.physics.add.image( 100, 400,'worm-head');
    this.cursor = this.add.image( 0, 0,'worm-section').setVisible(false);


    const moveWorm = (pointer) => {
      this.cursor.setVisible(true).setPosition(pointer.x, pointer.y);
      let self = this;
      console.log('---', self.worm.getChildren());
      self.physics.moveToObject(self.cursor, pointer, 240);

      //
      Phaser.Utils.Array.Each(
        wormChildren.getChildren(),
        self.physics.moveToObject,
        self.physics,
        pointer, 100);

    };

    this.input.on('pointermove', pointer => {
      moveWorm(pointer);
    }, this);
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
