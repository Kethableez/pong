export default class Label extends Phaser.GameObjects.Container {

  constructor(scene: Phaser.Scene, x: number, y: number, text: string, style: Phaser.Types.GameObjects.Text.TextStyle) {
    super(scene, x, y);
    scene.add.text(x, y, text, style).setOrigin(0.5);
  }
}