import Direction from "~/consts/direction";

export class Bar extends Phaser.GameObjects.Rectangle {
  private bar: Phaser.GameObjects.Rectangle;
  private speed: number;
  private barDirection: Direction = Direction.NONE;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    length: number,
    color: number,
    speed?: number
  ) {
    super(scene, x, y);
    this.bar = scene.add.rectangle(x, y, width, length, color);
    this.speed = speed || 400;
    scene.physics.add.existing(this.bar);
    (this.bar.body as Phaser.Physics.Arcade.Body).setCollideWorldBounds(true);

    scene.add.existing(this);
  }

  getBar() {
    return this.bar;
  }

  preUpdate() {
    switch (this.barDirection) {
      case Direction.UP:
        this.bar.body.velocity.y = -this.speed;
        break;
      case Direction.DOWN:
        this.bar.body.velocity.y = this.speed;
        break;
      case Direction.NONE:
        this.bar.body.velocity.y = 0;
        break;
    }
  }

  changeDirection(direction: Direction) {
    this.barDirection = direction;
  }
}
