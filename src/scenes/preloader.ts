import SceneKey from '~/consts/scene-key';
import FontLoader from '~/utils/font-loader';
import { gameSettings } from '~/utils/settings';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super(SceneKey.PRELOADER)
  }

  preload() {
    this.load.addFile(new FontLoader(this.load, 'Press Start 2P'))
  }

  create() {
    this.registry.set('settings', gameSettings);
    this.scene.start(SceneKey.START);
  }
}