import Phaser from 'phaser'
import Game from './scenes/game'
import GameOver from './scenes/game-over'
import Preloader from './scenes/preloader'
import Start from './scenes/start'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: window.innerWidth,
	height: window.innerHeight,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
		}
	},
	scene: [ Preloader, Start, Game, GameOver ]
}

export default new Phaser.Game(config)
