import { BootScene } from "./scenes/boot-scene";
import { GameScene } from "./scenes/game-scene";
import { HUDScene } from "./scenes/hud-scene";
import { MenuScene } from "./scenes/menu-scene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: "Portfolio",
  width: window.innerWidth,
  height: 700,
  scene: [GameScene],
  input: {
    keyboard: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 475 },
      debug: false,
    },
  },
  backgroundColor: "#4c0061",
  render: { antialias: true },
};
