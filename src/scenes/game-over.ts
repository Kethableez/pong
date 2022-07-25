import SceneKey from '~/consts/scene-key';
import Label from '~/game/label';

export default class GameOver extends Phaser.Scene {

  private settings: any;
  private enterTime: null | number = null;
  
  constructor() {
    super(SceneKey.GAME_OVER);
  }

  init() {
    this.settings = this.registry.get('settings');
  }

  preload() {

  }

  create() { 
    new Label(this, this.scale.width / 2 , this.scale.height / 2 - 50, 'GAME OVER', this.settings.style.h1);
    new Label(this, this.scale.width / 2 , this.scale.height / 2 + 40, 'Press SPACE to restart', this.settings.style.h2);

    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.stop(SceneKey.GAME_OVER);
      this.scene.start(SceneKey.GAME);
    })
  }

  update(time: number, delta: number): void {
      if (!this.enterTime) this.enterTime = time;
      
      if (this.enterTime + 5000 < time) {
        this.scene.stop(SceneKey.GAME_OVER);
        this.scene.stop(SceneKey.GAME);
        this.scene.start(SceneKey.START);
      }
  }
}