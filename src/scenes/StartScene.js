import Phaser from "phaser";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super("start-scene");
  }

  init(data) {
    this.replayButton = undefined;
    this.score = data.score; // Fill in the score property with the score value sent from the corona buster scene

  }

  preload() {
    this.load.image("background", "images/bg_layer1.png");
    this.load.image("start-button", "images/start.png");
  }

  create() {
    this.add.image(200, 320, "background");
    this.startButton = this.add.image(200, 400, 'start-button').setInteractive().setScale(0.5);
    this.startButton.once("pointerup", () => {
        this.scene.start("corona-buster-scene"); // This is the code to switch scenes. Filled with the key written in the super code in the constructor method
    },this);
  }
}