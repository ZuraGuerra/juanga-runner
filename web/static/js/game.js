var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload,
                                                                        create: create,
                                                                        update: update,
                                                                        render: render });

var prev = -400;
var t = Date.now();
var startJuanga;
var startJuangaTween;
var startText;

function preload() {

    game.forceSingleUpdate = true;

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('startJuanga', 'http://www.juangabriel.cl/images/img0026.png');
    // game.load.image('einstein', 'assets/sprites/chunk.png');
}

function create() {

    startJuanga = game.add.sprite(-600, 30, 'startJuanga');
    startJuangaTween = game.add.tween(startJuanga);

    //  The object defines the properties to tween.
    //  In this case it will move to x 600
    //  The 6000 is the duration in ms - 6000ms = 6 seconds
    // tween.to({ x: 500, y: 500 }, 5000, 'Linear', true, 2000);
    startJuangaTween.to({ x: 700 }, 5000, 'Linear', true, 0);

    //  And this starts it going
    // tween.start();

    game.stage.setBackgroundColor(0x2d2d2d);

    startText = game.add.text(game.world.centerX, game.world.centerY, "PRESS TO START", {
        font: "65px Arial",
        fill: "#ff0044",
        align: "center"
    });

    startText.anchor.setTo(0.5, 0.5);

}

function update() {

    startJuanga.anchor.setTo(0.7, 0);

    game.input.onDown.addOnce(startGame, this);

}

function startGame() {

    startText.style.fill = "blue";
    startText.setText(startText.text);

}

function render() {

    return;
}
