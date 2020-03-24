var config = {
  type: Phaser.AUTO,
  width: 300,
  height: 500,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};


var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('sky', 'assets/sky.png');
  this.load.image('ground', 'assets/platform.png');
  this.load.image('star', 'assets/star.png');
  this.load.image('bomb', 'assets/bomb.png');
  //this.load.spritesheet('dude',
  //'assets/dude.png',
//  { frameWidth: 32, frameHeight: 48 }
//);
this.load.spritesheet('testchar',
'assets/spritetest1.png',
{ frameWidth: 26, frameHeight: 57 }
);
}

var platforms;

function create ()
{
  this.add.image(400, 300, 'sky');
  platforms = this.physics.add.staticGroup();
  platforms.create(400, 300, 'ground').setScale(2).refreshBody();
//  player = this.physics.add.sprite(50, 50, 'dude');
player = this.physics.add.sprite(50,50,'testchar');
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

//  this.physics.add.collider(player, platforms);
//  this.anims.create({
  //  key: 'left',
  //  frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
  //  frameRate: 10,
  //  repeat: -1
  //});
  this.physics.add.collider(player, platforms);
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('testchar', { start: 87, end: 95 }),
    frameRate: 10,
    repeat: -1
  });
  this.anims.create({
    key: 'turn',
    frames: [ { key: 'testchar', frame: 8 } ],
    frameRate: 20
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('testchar', { start: 77, end: 69 }),
    frameRate: 10,
    repeat: -1
  });

  stars = this.physics.add.group({
    key: 'star',
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 }
  });

  stars.children.iterate(function (child) {

    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

  });

}

function update ()
{
  cursors = this.input.keyboard.createCursorKeys();
  if (cursors.left.isDown)
  {
    player.setVelocityX(-160);

    player.anims.play('left', true);
  }
  else if (cursors.right.isDown)
  {
    player.setVelocityX(160);

    player.anims.play('right', true);
  }
  else
  {
    player.setVelocityX(0);

    player.anims.play('turn');
  }

  if (cursors.up.isDown && player.body.touching.down)
  {
    player.setVelocityY(-330);
  }
}
