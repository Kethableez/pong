export class Ball extends Phaser.GameObjects.Rectangle {
  private ball: Phaser.GameObjects.Rectangle;
  private dirAngle: number;
  private speed: number;
  private size: number;

  constructor(scene: Phaser.Scene, x: number, y: number, size: number, color: number, speed?: number) {
    super(scene, x, y);

    this.ball = scene.add.rectangle(x, y, size, size, color);
    this.size = size;
    this.speed = speed || 400;

    this.dirAngle = this.calculateAngle();

    scene.physics.add.existing(this.ball);
    (this.ball.body as Phaser.Physics.Arcade.Body).setCollideWorldBounds(true);
    (this.ball.body as Phaser.Physics.Arcade.Body).setBounce(1, 1);
    scene.add.existing(this);
    this.updateVelocity();
  }

  getBall() {
    return this.ball;
  }

  get position() {
    return this.ball.body.position;
  }

  stop() {
    this.ball.body.position.x = this.scene.scale.width / 2 - this.size / 2
    this.ball.body.position.y = this.scene.scale.height / 2 - this.size / 2
    this.ball.body.velocity.y =  0;
    this.ball.body.velocity.x = 0;
  }

  calculateAngle() {
    const opt = Phaser.Math.Between(0, 3);
    const ang = Phaser.Math.Between(0, 65);

    switch(opt) {
      case 0:
      default:
        return ang;
      case 1:
        return 360 - ang;
      case 2:
        return 180 - ang;
      case 3: 
        return 180 + ang;
    }
  }

  preUpdate() {

  }
  
  resetMove(reverseDir: boolean) {
    this.ball.body.position.x = this.scene.scale.width / 2;
    this.ball.body.position.y = this.scene.scale.height / 2;
    const ang = Phaser.Math.Between(20, 60);
    this.dirAngle = reverseDir ? ang + 180 : ang;
    this.updateVelocity();
  }

  bounce() {
    this.ball.body.velocity.x *= -1;
  }

  updateVelocity(speed?: number) {
    this.ball.body.velocity.y = Math.round(Math.sin(this.radAngle) * this.speed)
    this.ball.body.velocity.x = Math.round(Math.cos(this.radAngle) * this.speed)
  }

  get radAngle() {
    return this.dirAngle * Math.PI / 180;
  }
}