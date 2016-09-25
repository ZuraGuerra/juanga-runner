/***********************
***** DEFINITIONS
************************/

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload,
                                                                        create: create,
                                                                        update: update,
                                                                        render: render });

var startJuanga;
var startJuangaTween;
var startText;

var firstBuilding;
var firstBuildingTween;

var juanga;
var juangaTween;

/***********************
***** PRELOAD
************************/

function preload() {

  game.forceSingleUpdate = true;
  preloadStartScreen();
  preloadGame();

}

/***********************
***** CREATE
************************/

function create() {

  drawStartText();
  drawStartJuanga();

  game.stage.setBackgroundColor(0x2d2d2d);

}

/***********************
***** UPDATE
************************/

function update() {

  startScreenHandler();

}

/***********************
***** RENDER
************************/

function render() {

  return;

}

/***********************
***** START SCREEN
************************/

function preloadStartScreen() {

  game.load.image('startJuanga', 'http://www.juangabriel.cl/images/img0026.png');

}

function drawStartText() {

  startText = game.add.text(game.world.centerX, game.world.centerY, "PRESS TO START", {
      font: "40px Arial",
      fill: "#ff0044",
      align: "left"
  });

  startText.anchor.setTo(0.9, 0.5);
  startText.visible = false;

  game.input.onDown.addOnce(startGame, this);

}

function drawStartJuanga() {

  startJuanga = game.add.sprite(-600, 30, 'startJuanga');
  startJuangaTween = game.add.tween(startJuanga);
  startJuangaTween.to({ x: 700 }, 5000, 'Linear', true, 0);

}

function startScreenHandler() {

  startJuanga.anchor.setTo(0.7, 0);
  if (startJuanga.x > 650) { startText.visible = true; }

}

/***********************
***** GAME SCREEN
************************/

function preloadGame() {

  game.load.image('firstBuilding', 'http://vignette2.wikia.nocookie.net/disney/images/e/e2/Building_small_menu.png/revision/latest?cb=20130804225344');
  game.load.image('juanga', 'http://rs1263.pbsrc.com/albums/ii631/Pokemon-Vampire-Knight-lover/pikachu_.gif~c200');

}

function startGame() {

  game.world.removeAll()
  game.input.onDown.add(juangaJump, this);

  firstBuilding = game.add.sprite(200, 50, 'firstBuilding');
  firstBuildingTween = game.add.tween(firstBuilding);
  firstBuildingTween.to({ x: 700 }, 5000, 'Linear', true, 0);

  juanga = game.add.sprite(300, 150, 'juanga');
  juangaTween = game.add.tween(juanga);
  juangaTween.to({ x: 700 }, 5000, 'Linear', true, 0);

}

/***********************
***** GAME MECHANICS
************************/

function juangaJump() {

  juanga.y = juanga.y - 50;
  juanga.x = juanga.x - 50;

}
