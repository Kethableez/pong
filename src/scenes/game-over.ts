import SceneKey from '~/consts/scene-key';
import Label from '~/game/label';

export default class GameOver extends Phaser.Scene {

  private settings: any;
  
  constructor() {
    super(SceneKey.GAME_OVER);
  }

  init() {
    this.settings = this.registry.get('settings');
    console.log('create 1');
  }

  preload() {
    console.log('create 2');
  }

  create() { 
    new Label(this, this.scale.width / 2 , this.scale.height / 2 - 50, 'GAME OVER', this.settings.style.h1);
    new Label(this, this.scale.width / 2 , this.scale.height / 2 + 40, 'Press SPACE to restart', this.settings.style.h2);
    new Label(this, this.scale.width / 2 , this.scale.height / 2 + 100, 'Press Q to quit', this.settings.style.h2);


    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.stop(SceneKey.GAME_OVER);
      this.scene.start(SceneKey.GAME);
    })

    this.input.keyboard.once('keydown-Q', () => {
      this.scene.stop(SceneKey.GAME_OVER);
      this.scene.stop(SceneKey.GAME);
      this.scene.start(SceneKey.START);
    })
  }
}