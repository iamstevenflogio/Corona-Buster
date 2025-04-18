import Phaser from 'phaser'

import StartScene from './scenes/StartScene';
import CoronaBusterScene from "./scenes/CoronaBusterScene";
import GameOverScene from "./scenes/GameOverScene";

const config = {
	type: Phaser.AUTO,
	width: 400, //----------->1. canvas width 
	height: 620, //----------->2. canvas height 
	physics: {
	  default: "arcade",
	  arcade: {
		gravity: { y: 0 }, //--------> 3. 0 gravity so the plane doesn't crash
	  },
	},
	scene: [StartScene, CoronaBusterScene, GameOverScene], //4. -----> the scenes shown
  
	//---------- 5. create layout game centered ----------//
	scale: { 
	  mode: Phaser.Scale.FIT, 
	  autoCenter: Phaser.Scale.CENTER_BOTH,
	}
  
  };

export default new Phaser.Game(config)
