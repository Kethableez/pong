import Phaser, { NONE } from 'phaser';
import Direction from '~/consts/direction';
import SceneKey from '~/consts/scene-key';
import { Ball } from '~/game/ball';
import { Bar } from '~/game/bar';
import Score from '~/game/score';

export default class Game extends Phaser.Scene {

  private settings: any;
  bars: any[] = [];
  lBar!: Bar;
  rBar!: Bar;
  ball!: Ball;
  
  private controls!: {
    P1: {
      up: Phaser.Input.Keyboard.Key,
      down: Phaser.Input.Keyboard.Key
    },
    P2: {
      up: Phaser.Input.Keyboard.Key,
      down: Phaser.Input.Keyboard.Key
    }
  }

  lScore!: Score;
  rScore!: Score;

  constructor() {
    super(SceneKey.GAME);
    
  }

  preload() {
  }

  init() {
    this.settings = this.registry.get('settings');
  }

  create() { 
    this.add.rectangle(this.width / 2, this.height / 2, this.width, this.height, 0x000000);

    this.lBar = new Bar(this, 10, this.height / 2, 10, 100, 0xffffff, this.settings.game.speed);
    this.rBar = new Bar(this, this.width - 10, this.height / 2, 10, 100, 0xffffff, this.settings.game.speed);
    this.ball = new Ball(this, this.width / 2, this.height / 2, 20, 0xffffff, this.settings.game.speed)
    this.lScore = new Score(this, (this.width / 2) - 50, 20, this.settings.style.score);
    this.rScore = new Score(this, (this.width / 2) + 50, 20, this.settings.style.score);

    this.drawLine();
    this.addKeys();
    this.addEvents();
    this.addOverlap();
  }

  update(time: number, delta: number): void {
    const rightEdge = this.ball.position.x + 20
    const leftEdge = this.ball.position.x - 10;


    if (rightEdge >= this.width) {
      this.lScore.increment();
      this.ball.resetMove(false);
    }
    else if (leftEdge <= 0) {
      this.rScore.increment();
      this.ball.resetMove(true);
    }

    if (this.rScore.getScore() === this.settings.game.maxPoints || this.lScore.getScore() === this.settings.game.maxPoints) {
      this.ball.stop();
      this.scene.run(SceneKey.GAME_OVER);
    }
  }

  private get width() {
    return this.scale.width;
  };

  private get height() {
    return this.scale.height;
  }

  private addOverlap() {
    this.physics.add.overlap(
      this.lBar.getBar(),
      this.ball.getBall(),
      () => this.ball.bounce()
    )

    this.physics.add.overlap(
      this.rBar.getBar(),
      this.ball.getBall(),
      () => this.ball.bounce()
    )
  }

  private addEvents() {
    this.controls.P1.up.on('down', () => this.lBar.changeDirection(Direction.UP))
    this.controls.P1.up.on('up', () => {
      if (!this.controls.P1.down.isDown && !this.controls.P1.up.isDown) {
        this.lBar.changeDirection(Direction.NONE)
      }
    })
    this.controls.P1.down.on('down', () => this.lBar.changeDirection(Direction.DOWN))
    this.controls.P1.down.on('up', () => {
      if (!this.controls.P1.down.isDown && !this.controls.P1.up.isDown) {
        this.lBar.changeDirection(Direction.NONE)
      }
    })

    this.controls.P2.up.on('down', () => this.rBar.changeDirection(Direction.UP))
    this.controls.P2.up.on('up', () => {
      if (!this.controls.P2.down.isDown && !this.controls.P2.up.isDown) {
        this.rBar.changeDirection(Direction.NONE)
      }
    })
    this.controls.P2.down.on('down', () => this.rBar.changeDirection(Direction.DOWN))
    this.controls.P2.down.on('up', () => {
      if (!this.controls.P2.down.isDown && !this.controls.P2.up.isDown) {
        this.rBar.changeDirection(Direction.NONE)
      }
    })
  }

  private addKeys() {
    this.controls = {
      P1: {
        up: this.input.keyboard.addKey(this.settings.controls.P1.up),
        down: this.input.keyboard.addKey(this.settings.controls.P1.down)
      },
      P2: {
        up: this.input.keyboard.addKey(this.settings.controls.P2.up),
        down: this.input.keyboard.addKey(this.settings.controls.P2.down)
      },
    }
  }

  private drawLine() {
    const step = 20;

    for (let i = 0; i <= this.height; i += step) {
      this.add.rectangle(this.width / 2, i * 2, 5, 20, 0xffffff);
    }
  }
}