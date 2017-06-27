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

    sfxJump = game.add.audio('sfx:jump')
	
	
	

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
function loadLevel(data) {
    // ...
    enemyWalls = game.add.group();
    // ? - Set the visibility of the enemyWalls to false
    // ...
};
function moveSpider(){
    spiders.forEach(function (spider){
        if (spider.body.touching.right || spider.body.blocked.right) {
            spider.body.velocity.x = -100; // turn left
        }
        else if (spider.body.touching.left || spider.body.blocked.left) {
            // ? - Change spiders velocity to turn right
        }
    })
}
function create() {
	//...
	//? - Load the audio 'sfx:stomp' from 'audio/stomp.wav'
};
function preload() {
    // ...
    // ? - Load the audio 'sfx:stomp' from 'audio/stomp.wav'
};
function handleCollisions() 
    // ...
    if (hero.body.velocity.y > 0) { // kill enemies when hero is falling
        hero.body.velocity.y = -200;
        die(enemy);
        sfxStomp.play();
    }
else { // game over -> restart the game
        sfxStomp.play();
        game.state.restart();
    }
}
function onHeroVsEnemy(hero, enemy){
    if (hero.body.velocity.y > 0) { // kill enemies when hero is falling
        hero.body.velocity.y = -200;
    }
}  
function spawnCharacters(data){

    data.spiders.forEach(function (spider){
        // ...
        sprite.animations.add('die', [0, 4, 0, 4, 0, 4, 3, 3, 3, 3, 3, 3], 12);
    // ...
    })
}
function spawnSpider(){
    spider = spiders.create(spider.x, spider.y, 'spider');
    spider.anchor.set(0.5);
    spider.animations.add('crawl', [0, 1, 2], 8, true);
    spider.animations.add('die', [0, 4, 0, 4, 0, 4, 3, 3, 3, 3, 3, 3], 1);
    spider.animations.play('crawl');

    // physic properties
    game.physics.enable(spider);
    spider.body.collideWorldBounds = true;
    spider.body.velocity.x = Spider.speed;
}
function onHeroVsEnemy(hero, enemy) {
    // ...
    if (hero.body.velocity.y > 0) {
        // make sure you remove enemy.kill() !!!
        die(enemy);
    }
    // ...
};
var coinPickupCount = 0;

function onHeroVsCoin(hero, coin){
    coinPickupCount++;
}
function preload() {
    // ...
    // ? - load the image 'images/coin_icon.png' and set as 'icon:coin'
    // ...
};
function create() {
    coinIcon = game.make.image(40, 0, 'icon:coin');

    hud = game.add.group();
    hud.add(coinIcon);
    hud.position.set(10, 10);
};
function preload() {
    // game.load.image('icon:coin', 'images/coin_icon.png');
    // ? - load the image 'images/numbers.png' and set as 'font:numbers'
    // ...
};
function create() {
    // ...
    // ? - Declare a variable 'NUMBERS_STR' and set its value as string '0123456789X '
    coinFont = game.add.retroFont('font:numbers', 20, 26, NUMBERS_STR, 6);
    // ...
};
function create() {
    // let coinIcon = ...
    var coinScoreImg = game.make.image(100 + coinIcon.width, coinIcon.height / 2, coinFont);
    coinScoreImg.anchor.set(1, 0.5);

    // ...
    hud.add(coinScoreImg);
};
function onHeroVsCoin(hero, coin){
    // ...
    coinFont.text = `x${this.coinPickupCount}`;
};
function preload () {
    // delete this line below
    game.load.image('hero', 'images/hero_stopped.png');
};
function preload() {
    // ...
    game.load.spritesheet('hero', 'images/hero.png', 36, 42);
    // ...
};
function spawnCharacters(data){
    // add hero sprite to game
    hero = game.add.sprite(data.hero.x, data.hero.y, 'hero');
    hero.anchor.set(0.5, 0.5);

    hero.animations.add('stop', [0]);
    hero.animations.add('run', [1, 2], 8, true); // 8fps looped
    hero.animations.add('jump', [3]);
    hero.animations.add('fall', [4]);
}
function getAnimationName(){
    var name = 'stop';
    // jumping
    if (hero.body.velocity.y < 0) {
        name = 'jump';
    }
    // falling
    else if (hero.body.velocity.y >= 0 && !hero.body.touching.down) {
        name = 'fall';
    }
    else if (hero.body.velocity.x !== 0 && hero.body.touching.down) {
        name = 'run';
    }
    return name;
}
function update() {
    var animationName = getAnimationName();
    if (hero.animations.name !== animationName) {
        hero.animations.play(animationName);
    }
}
function move(direction){
    hero.body.velocity.x = direction * 200;
    if (hero.body.velocity.x < 0) {
        hero.scale.x = -1;
    }
    else if (hero.body.velocity.x > 0) {
        hero.scale.x = 1;
    }
}
function preload() {
    // ...
    game.load.spritesheet('door', 'images/door.png', 42, 66);
};
function loadLevel(data) {
    bgDecoration = game.add.group();
    // ...
};
function spawnDoor(x, y){
    door = bgDecoration.create(x, y, 'door');
    door.anchor.setTo(0.5, 1);
    game.physics.enable(door);
    door.body.allowGravity = false;
}
function _loadLevel(data) {
    // ...
    // after spawning the coins in this line:
    // data.coins.forEach(spawnCoin, this);
    spawnDoor(data.door.x, data.door.y);
    // ...
};
function preload() {
    // ...
    game.load.image('key', 'images/key.png');
};
function spawnKey(x, y){
    key = bgDecoration.create(x, y, 'key');
    key.anchor.set(0.5, 0.5);
    game.physics.enable(key);
    key.body.allowGravity = false;
}
function loadLevel(data) {
    // ...
    // add it below the call to spawnDoor
    // spawnDoor(data.door.x, data.door.y);
    spawnKey(data.key.x, data.key.y);
    // ...
};
function preload() {
    // ...
    game.load.audio('sfx:key', 'audio/key.wav');
    game.load.audio('sfx:door', 'audio/door.wav');
};
function create(){
    sfxKey = game.add.audio('sfx:key');
    sfxDoor = game.add.audio('sfx:door');
}
function handleCollisions() {
    // ...
    game.physics.arcade.overlap(hero, key, onHeroVsKey, null, this)
};
function onHeroVsKey(hero, key){
    sfxKey.play();
    key.kill();
    hasKey = true;
}
function handleCollisions() {
    // ...
    game.physics.arcade.overlap(hero, door, onHeroVsDoor,
        // ignore if there is no key or the player is on air
        function (hero, door) {
            return hasKey && hero.body.touching.down;
        });
};
function onHeroVsDoor(hero, door){
    sfxDoor.play();
    game.state.restart();
}
function preload() {
    // ...
    game.load.spritesheet('icon:key', 'images/key_icon.png', 34, 30);
}
function create() {
    keyIcon = game.make.image(0, 19, 'icon:key');
    keyIcon.anchor.set(0, 0.5);
    // ...
    hud.add(keyIcon);
};
function create() {
    // ...
    // remove the previous let coinIcon = ... line and use this one instead
    coinIcon = game.make.image(40, 0, 'icon:coin');
    // ...
};
function update() {
    // ...
    //Add the key icon
    keyIcon.frame = hasKey ? 1 : 0;
};