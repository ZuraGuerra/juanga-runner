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

/***********************
***** PRELOAD
************************/

function preload() {

  game.forceSingleUpdate = true;
  preloadStartScreen();

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
}

function drawStartJuanga() {

  startJuanga = game.add.sprite(-600, 30, 'startJuanga');
  startJuangaTween = game.add.tween(startJuanga);
  startJuangaTween.to({ x: 700 }, 5000, 'Linear', true, 0);

}

function startScreenHandler() {

  startJuanga.anchor.setTo(0.7, 0);
  if (startJuanga.x > 650) { startText.visible = true; }
  game.input.onDown.addOnce(startGame, this);

}

function startGame() {

  startText.style.fill = "blue";
  startText.setText(startText.text);

}
