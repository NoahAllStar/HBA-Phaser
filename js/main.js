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

    sfxJump = game.add.audio('sfx:jump')
  function loadLevel(data) {
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
    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    upKey.onDown.add(function(){
        // ? - Invoke the function 'jump'
        // game.add.image(0, 0, 'background');
};

function preload(){
	// game.load.image('background', 'images/background.png');
  game.load.json('level:1', 'data/level01.json'); 
  // ...
  //game.load.image('grass:1x1', 'images/grass_1x1.png');

    //Play a sound effect when jumping
    game.load.audio('sfx:jump', 'audio/jump.wav');
	
};
	

function update(){

}
//Create a game state
var game = new Phaser.Game(960, 600, Phaser.AUTO, 'game', 
    {init: init, preload: preload, create: create, update: update});
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
    else { 
        move(0);
    }
};
function spawnCharacters(data){
    game.physics.enable(hero);

    hero.body.collideWorldBounds = true;
}
function loadLevel(data);
    game.physics.arcade.gravity.y = 1200;
    console.log(data);
}
function loadLevel(data) {
    platforms = game.add.group();
    data.platforms.forEach(spawnPlatform, this);
};
function spawnPlatform(platform) {
    game.add.sprite(platform.x, platform.y, platform.image);
    var sprite = platforms.create(platform.x, platform.y, platform.image);
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
// ...
    game.load.spritesheet('spider', 'images/spider.png', 42, 32);
function loadLevel(data) {
    // ...
    // ? - add a group and set as value of 'spiders'
    spawnCharacters({hero: data.hero, spiders: data.spiders});
}
function spawnCharacters(data){
    // ...
    data.spiders.forEach(function (spider){
        var sprite = game.add.sprite(spider.x, spider.y, 'spider');
        spiders.add(sprite);
        sprite.anchor.set(0.5);
        // animation
        sprite.animations.add('crawl', [0, 1, 2], 8, true);
        sprite.animations.add('die', [0, 4, 0, 4, 0, 4, 3, 3, 3, 3, 3, 3], 12);
        sprite.animations.play('crawl');
        game.physics.enable(sprite);
        sprite.body.collideWorldBounds = true;
        // ? - Set the sprite.body.velocity.x to value 100
    })
}
function handleCollisions() {
    // game.physics.arcade.collide(hero, platforms);
    // game.physics.arcade.overlap(hero, coins, onHeroVsCoin,
        null, this;
    // ? - Set the collision between spiders and platforms
    // ...
};
function preload() {
    // game.load.spritesheet('spider', 'images/spider.png', 42, 32);
    // Add invisible "walls" so the spiders don't fall off platforms
    game.load.image('invisible-wall', 'images/invisible_wall.png');
    // ...
};
function loadLevel(data) {
    // platforms = game.add.group();
    // spiders = game.add.group();
    enemyWalls = game.add.group();
    // ...
};
function spawnPlatform(platform) {
    // ...
    spawnEnemyWall(platform.x, platform.y, 'left');
    spawnEnemyWall(platform.x + sprite.width, platform.y, 'right');
};
function spawnEnemyWall(x, y, side){
    var sprite = enemyWalls.create(x, y, 'invisible-wall');
    sprite.anchor.set(side === 'left' ? 1 : 0, 1);
    game.physics.enable(sprite);
    sprite.body.immovable = true;
    sprite.body.allowGravity = false;
}
function handleCollisions() {
    // game.physics.arcade.collide(spiders, platforms);
    // ? - Add collisions between spiders and enemyWalls
    // ...
};