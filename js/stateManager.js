var w = 720; // XXX window.innerWidth * window.devicePixelRatio;
var h = 480; // XXX

var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('game', gameState);

game.state.start('boot');
