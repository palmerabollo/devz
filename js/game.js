var gameState = {

  create: function() {
    // game.add.plugin(Phaser.Plugin.Debug);
    // game.add.plugin(Phaser.Plugin.Inspector);

    var text = game.add.bitmapText(0, 0, 'desyrel', 'Devz!', 64);
    text.x = game.width / 2 - (text.textWidth * 0.5);

    game.physics.p2.setImpactEvents(true); // receive callbacks
    game.physics.p2.restitution = 0.5;
    game.physics.p2.setBoundsToWorld(true, true, true, true, false);

    var DAMPING = 0.7;

    var scaleRatio = 1; // TODO global scale window.devicePixelRatio;

    var dev1 = game.add.sprite(game.world.randomX, game.world.randomY, 'dev');
    game.physics.p2.enableBody(dev1, false);
    dev1.scale.setTo(scaleRatio, scaleRatio);
    dev1.body.setCircle(dev1.width / 2 * scaleRatio);
    dev1.body.damping = DAMPING;
    dev1.body.fixedRotation = true;

    var dev2 = game.add.sprite(game.world.randomX, game.world.randomY, 'dev');
    game.physics.p2.enableBody(dev2, false);
    dev2.scale.setTo(scaleRatio, scaleRatio);
    dev2.body.setCircle(dev2.width / 2 * scaleRatio);
    dev2.body.damping = DAMPING;
    dev2.body.fixedRotation = true;

    var manager = game.add.sprite(game.world.randomX, game.world.randomY, 'manager');
    game.physics.p2.enableBody(manager, false);
    manager.scale.setTo(scaleRatio, scaleRatio);
    manager.body.setCircle(manager.width / 2 * scaleRatio);
    manager.body.damping = DAMPING;
    manager.body.fixedRotation = true;

    var wall = game.add.sprite(game.world.randomX, game.world.randomY, 'wall');
    game.physics.p2.enableBody(wall, false);
    wall.scale.setTo(scaleRatio, scaleRatio);
    wall.body.damping = DAMPING;
    wall.body.static = true;

    wall.inputEnabled = true;
    wall.input.enableDrag();

    wall.events.onDragStart.add(dragStart);
    wall.events.onDragUpdate.add(dragUpdate);
    wall.events.onDragStop.add(dragStop);

    var graphics;
    function dragStart(sprite, pointer, dragX, dragY) {
        graphics = game.add.graphics(0, 0);
        graphics.lineStyle(6, 0x909090, 0.3);
        graphics.drawCircle(sprite.x, sprite.y, 200);
    }

    function dragUpdate(sprite, pointer, dragX, dragY, snapPoint) {
        // console.log(arguments);
    }

    function dragStop() {
        graphics.kill();
    }

    var collisionGroup = game.physics.p2.createCollisionGroup();

    dev1.body.setCollisionGroup(collisionGroup);
    dev2.body.setCollisionGroup(collisionGroup);
    manager.body.setCollisionGroup(collisionGroup);
    wall.body.setCollisionGroup(collisionGroup);

    dev1.body.collides(collisionGroup, onCollision, this);
    dev2.body.collides(collisionGroup, onCollision, this);
    manager.body.collides(collisionGroup, onCollision, this);
    wall.body.collides(collisionGroup, onCollision, this);

    function onCollision(event) {
      game.sound.play('collision');
    }

    var checkGroup = game.add.group();
    checkGroup.add(dev1);
    checkGroup.add(dev2);
    checkGroup.add(manager);

    checkGroup.setAll('inputEnabled', true);
    checkGroup.setAll('input.useHandCursor', true);

    game.physics.p2.updateBoundsCollisionGroup();

    // setup our demo keyboard handler
    var spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spacebar.onDown.add(function() {
      checkGroup.forEachExists(function(sprite) {
        // sprite.reset(sprite.x, 128);
        sprite.body.angle = Math.random() * 360;
        sprite.body.velocity.x = Math.random() * 1000 - 500;
        sprite.body.velocity.y = Math.random() * 1000 - 500;
      });
    });
  }
};
