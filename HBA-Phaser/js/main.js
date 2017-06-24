function init(){
	
}

function preload(){
  game.load.image('background', 'images/background.png');
  //spawn platform sprites
    game.load.image('ground', 'images/ground.png');
    game.load.image('grass:8x1', 'images/grass_8x1.png');
    game.load.image('grass:6x1', 'images/grass_6x1.png');
    // ? - load the image for grass:4x1
    // ? - load the image for grass:2x1
    // ? - load the image for grass:1x1
    function preload() {
    // ...
    game.load.image('grass:1x1', 'images/grass_1x1.png');

    // load the hero image
    game.load.image('hero', 'images/hero_stopped.png');
};
};
function create(){
  game.add.image(0, 0, 'background');
  function loadLevel(data) {
};

function preload(){
	// game.load.image('background', 'images/background.png');
  game.load.json('level:1', 'data/level01.json'); 
  // ...
  //game.load.image('grass:1x1', 'images/grass_1x1.png');

    //Play a sound effect when jumping
    game.load.audio('sfx:jump', 'audio/jump.wav');
	
};

function create(){
	// game.add.image(0, 0, 'background');
  loadLevel(this.game.cache.getJSON('level:1'));
  //This sets the left and right keys as inputs for this game
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    // ? - create input for the rightKey
    // ...
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    // ? - Set the game input for the up key
     // ...
    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP); //add this line
    upKey.onDown.add(function(){
        // ? - Invoke the function 'jump'
        // game.add.image(0, 0, 'background');

    sfxJump = game.add.audio('sfx:jump');
    };
})
};
	
	
}

function update(){

}
//Create a game state
var game = new Phaser.Game(960, 600, Phaser.AUTO, 'game', {init: init, preload: preload, create: create, update: update});
function move(direction){
    // hero.body.velocity.x = direction * 200;
    if (hero.body.velocity.x < 0) {
        hero.scale.x = -1;
    }
    else if (hero.body.velocity.x > 0) {
        // ? - Change the hero scale when the velocity is more than 0
    }
}
function handleInput() {
    if (leftKey.isDown) { // move hero left
        // ...
    }
    else if (rightKey.isDown) { // move hero right
        // ...
    }
    else { // stop
        move(0);
    }
};
function spawnCharacters(data){
    //Make the main character use the physics engine for movement
    game.physics.enable(hero);

    //Prevent the main character to get out of the screen
    hero.body.collideWorldBounds = true;
}
function loadLevel(data){
    //Enable gravity
    game.physics.arcade.gravity.y = 1200;
    console.log(data);
}
function loadLevel(data) {
    // create all the groups/layers that we need
    platforms = game.add.group();
    //Make sure this line of code is after!
    data.platforms.forEach(spawnPlatform, this);
};
function spawnPlatform(platform) {
    game.add.sprite(platform.x, platform.y, platform.image);
    var sprite = platforms.create(platform.x, platform.y, platform.image);
    // ? - Enable the game physics for the sprite
};
function update(){
    handleCollisions();
    handleInput();
};
function handleCollisions(){
   game.physics.arcade.collide(hero, platforms);
};
function spawnPlatform(platform) {
    // game.physics.enable(sprite);
    sprite.body.allowGravity = false;
};
function spawnPlatform(platform) {
    // sprite.body.allowGravity = false;
    sprite.body.immovable = true;
};
function jump(){
    hero.body.velocity.y = -600;
    var canJump = hero.body.touching.down;
    //Ensures hero is on the ground or on a platform
    if (canJump) {
        hero.body.velocity.y = -600;
    }
    // ? - return the variable canJump
     var canJump = hero.body.touching.down;
    //Ensures hero is on the ground or on a platform
    if (canJump) {
        hero.body.velocity.y = -600;
        // ? - Call the method play from sfxJump
    }
    return canJump;

}
function preload() {
    // ...
    game.load.spritesheet('coin', 'images/coin_animated.png', 22, 22);
};