var bootState = {

    create: function() {
        game.physics.startSystem(Phaser.Physics.P2JS);

        game.stage.disableVisibilityChange = true;

        game.state.start('load');
    }
};
