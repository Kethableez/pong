export default class Score extends Phaser.GameObjects.Container {

  private score: number = 0;
  private label: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene, x: number, y: number, style: Phaser.Types.GameObjects.Text.TextStyle) {
    super(scene, x, y);
    this.label = scene.add.text(x, y, this.getParsedScore(), style).setOrigin(0.5);
  }

  increment() {
    this.score++;
    this.label.text = this.getParsedScore();
  }

  getScore() {
    return this.score;
  }

  getParsedScore() {
    return this.score <= 9 && this.score >= 0 ? `0${this.score}` : `${this.score}`;
  }
}