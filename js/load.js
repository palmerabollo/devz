var loadState = {

    preload: function() {

        /*
        Load all game assets
        Place your load bar, some messages.
        In this case of loading, only text is placed...
        */

        var loadingLabel = game.add.text(80, 150, 'Loading...', {font: '30px Courier', fill: '#fff'});

        //Load your images, spritesheets, bitmaps...
        game.load.image('splash', 'assets/img/dall.png');

        //Load your sounds, efx, music...
        // game.load.audio('background', 'assets/snd/rockas.wav');

        // http://www.opsound.org/artist/dhalius/
        game.load.audio('background', 'assets/snd/tremble.ogg');

        //Load your data, JSON, Querys...
        //Example: game.load.json('version', 'http://phaser.io/version.json');
    },

    create: function() {
        game.stage.setBackgroundColor('#000');
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

        music = game.sound.play('background');

        game.state.start('menu');
    }
};
