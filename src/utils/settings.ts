export const gameSettings = {
  game: {
    speed: 400,
    barLength: 100,
    maxPoints: 1,
  },
  style: {
    score: {
      fontFamily: '"Press Start 2P"',
      fontSize: '24px',
      color: '#ffffff'
    },
    hint: {
      fontFamily: '"Press Start 2P"',
      fontSize: '32px',
      padding: { left: 15, right: 15, top: 10, bottom: 10 },
      color: '#ffffff',
      backgroundColor: '#000000s'
    },
    title: {
      fontFamily: '"Press Start 2P"',
      fontSize: '72px',
      padding: { left: 15, right: 15, top: 10, bottom: 10 },
      color: '#000000',
      backgroundColor: '#ffffff'
    },
    h1: {
      fontFamily: '"Press Start 2P"',
      fontSize: '48px',
      padding: { left: 15, right: 15, top: 10, bottom: 10 },
      color: '#000000',
      backgroundColor: '#ffffff'
    },
    h2: {
      fontFamily: '"Press Start 2P"',
      fontSize: '32px',
      align: 'center',
      padding: { left: 15, right: 15, top: 10, bottom: 10 },
      color: '#000000',
      backgroundColor: '#ffffff'
    },
    background: 0x000000,
    primary: 0xffffff
  },
  controls: {
    P1: {
      up: Phaser.Input.Keyboard.KeyCodes.Q,
      down: Phaser.Input.Keyboard.KeyCodes.A
    },
    P2: {
      up: Phaser.Input.Keyboard.KeyCodes.P,
      down: Phaser.Input.Keyboard.KeyCodes.L
    }
  }
}