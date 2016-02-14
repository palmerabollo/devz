var loadState = {

    preload: function() {
        game.load.bitmapFont('desyrel', 'assets/fonts/desyrel.png', 'assets/fonts/desyrel.xml');

        game.load.image('dev', 'assets/img/dev_48.png');
        game.load.image('manager', 'assets/img/manager_48.png');
        game.load.image('wall', 'assets/img/wall_48.png');

        // https://freesound.org/people/RutgerMuller/sounds/50736/
        game.load.audio('collision', 'assets/snd/collision.wav');

        // http://www.opsound.org/artist/dhalius/
        game.load.audio('background', 'assets/snd/tremble.ogg');

        game.load.json('maps', 'assets/maps/maps.json');
    },

    create: function() {
        game.stage.setBackgroundColor('#0072bc');

        // TODO music = game.sound.play('background');

        game.state.start('game');
    }
};
