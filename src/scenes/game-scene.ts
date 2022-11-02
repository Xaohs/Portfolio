import { Box } from '../objects/box';
import { Brick } from '../objects/brick';
import { Collectible } from '../objects/collectible';
import { Goomba } from '../objects/goomba';
import { Mario } from '../objects/mario';
import { Platform } from '../objects/platform';
import { Portal } from '../objects/portal';

export class GameScene extends Phaser.Scene {
  // tilemap
  private map: Phaser.Tilemaps.Tilemap;
  private groundTiles: Phaser.Tilemaps.Tileset;
  private backgroundLayer: Phaser.Tilemaps.TilemapLayer;
  private groundLayer: Phaser.Tilemaps.TilemapLayer;
  private foregroundLayer: Phaser.Tilemaps.TilemapLayer;

  // game objects
  private boxes: Phaser.GameObjects.Group;
  private bricks: Phaser.GameObjects.Group;
  private collectibles: Phaser.GameObjects.Group;
  private enemies: Phaser.GameObjects.Group;
  private platforms: Phaser.GameObjects.Group;
  private player: Phaser.Physics.Arcade.Sprite;
  private portals: Phaser.GameObjects.Group;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super({
      key: 'GameScene'
    });
  }

  init(): void {}

  preload(): void {
    this.load.pack('preload', './assets/pack.json', 'preload');

    this.load.image('coin', 'assets/collectibles/coinGold.png');
  }

  create(): void {
    // *****************************************************************
    // SETUP TILEMAP
    // *****************************************************************

    // create our tilemap from Tiled JSON
    this.map = this.make.tilemap({ key: "map" });

    // add our tileset and layers to our tilemap
    this.groundTiles = this.map.addTilesetImage('tiles');
    // create the ground layer
    this.groundLayer = this.map.createLayer('World', this.groundTiles, 0, 0);
    // the player will collide with this layer
    this.groundLayer.setCollisionByExclusion([-1]);
    // set the boundaries of our game world
    this.physics.world.bounds.width = this.groundLayer.width;
    this.physics.world.bounds.height = this.groundLayer.height;

    // create the player sprite
    this.player = this.physics.add.sprite(200, 200, 'player');
    this.player.setBounce(0.2); // our player will bounce from items
    this.player.setCollideWorldBounds(true); // don't go out of the map

    this.physics.add.collider(this.groundLayer, this.player);
    this.cursors = this.input.keyboard.createCursorKeys();
    // *****************************************************************
    // CAMERA
    // *****************************************************************
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(
      0,
      0,
      this.map.widthInPixels,
      this.map.heightInPixels
    );

    // this.anims.create({
    //   key: 'walk',
    //   frames: this.anims.generateFrameNames('player', {prefix: 'p1_walk', start: 1, end: 11, zeroPad: 2}),
    //   frameRate: 10,
    //   repeat: -1
    // });
  }

  update(): void {
    if (this.cursors.left.isDown)
    {
      this.player.body.velocity.x = -200; // move left
      // this.player.anims.play('walk', true); // play walk animation
      this.player.flipX= true; // flip the sprite to the left
    }
    else if (this.cursors.right.isDown)
    {
      this.player.body.velocity.x = 200; // move right
      // this.player.anims.play('walk', true); // play walk animatio
      this.player.flipX = false; // use the original sprite looking to the right
    } else {
      this.player.body.velocity.x = 0;
      // this.player.anims.play('idle', true);
    }
    if (this.cursors.up.isDown)
    {
      this.player.body.velocity.y = -400;
    }
  }
}
