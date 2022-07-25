import SceneKey from '~/consts/scene-key';
import { Ball } from '~/game/ball';
import Label from '~/game/label';

export default class Start extends Phaser.Scene {
  private settings: any;
  private colors = [
    0x990000,
    0x99FF33,
    0x66B2FF,
    0x99004C
  ]
  constructor() {
    super(SceneKey.START)
  }

  preload() {
    
  }

  init() {
    this.settings = this.registry.get('settings');
  }

  create() {
    this.add.rectangle(this.width / 2, this.height / 2, this.width, this.height, 0x000000);
    this.drawLine();
    this.drawBalls();
    
    new Label(this, this.scale.width / 2 , 100, 'PONG!', this.settings.style.title);
    new Label(this, this.scale.width / 2 , this.scale.height / 2, 'Press ENTER to begin', this.settings.style.h1);

    new Label(this, this.scale.width / 2, this.scale.height - 200, `Controls:\n\nP1:\nUP   - Q\nDOWN - A\n\nP2:\nUP   - P\nDOWN - L`, this.settings.style.hint);

    this.input.keyboard.once('keydown-ENTER', () => {
      this.scene.stop(SceneKey.START);
      this.scene.run(SceneKey.GAME);
    })

  }

  private get width() {
    return this.scale.width;
  };

  private get height() {
    return this.scale.height;
  }

  private drawLine() {
    const step = 20;

    for (let i = 0; i <= this.height; i += step) {
      this.add.rectangle(this.width / 2, i * 2, 5, 20, 0xffffff);
    }
  }

  private drawBalls() {
    for (let i = 0; i < 20; i++) {
      new Ball(this, this.width / 2, this.height / 2, 20, this.randomColor, 150 * i);
    }   
  }

  get randomColor() {
    return this.colors[Phaser.Math.Between(0, this.colors.length - 1)];
  }
}