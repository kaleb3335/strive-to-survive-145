enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const rock = SpriteKind.create()
    export const grass = SpriteKind.create()
    export const rock2 = SpriteKind.create()
    export const stick = SpriteKind.create()
    export const lightsource = SpriteKind.create()
    export const craftbench = SpriteKind.create()
    export const tirmitetower = SpriteKind.create()
    export const tirmit = SpriteKind.create()
    export const firepit = SpriteKind.create()
    export const chicken = SpriteKind.create()
    export const chickenbullet = SpriteKind.create()
    export const cave = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    timer.throttle("action", 1000, function () {
        statusbar2.value += -10
        scene.cameraShake(4, 500)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, sprites.castle.tileGrass1)
        carrot += 1
    }
})
function make_graval3 () {
    for (let index = 0; index < 10; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 75), randint(0, 75)), sprites.castle.tilePath5)
        for (let place_graval of tiles.getTilesByType(sprites.castle.tilePath5)) {
            tiles.setTileAt(place_graval.getNeighboringLocation(CollisionDirection.Left), sprites.castle.tilePath5)
            tiles.setTileAt(place_graval.getNeighboringLocation(CollisionDirection.Top), sprites.castle.tilePath5)
            tiles.setTileAt(place_graval.getNeighboringLocation(CollisionDirection.Right), sprites.castle.tilePath5)
            tiles.setTileAt(place_graval.getNeighboringLocation(CollisionDirection.Bottom), sprites.castle.tilePath5)
        }
    }
}
function make_fire_pit () {
    fire_pit = sprites.create(img`
        ........................
        ........................
        .bbbbbbbbbbbbbbbbbbbbbb.
        .bbbbbbbbbbbbbbbbbbbbbb.
        .bbddddddddddddddddddbb.
        .bbddddddddd22dddddddbb.
        .bbdddcddd22222ddddcdbb.
        .bbddddd222442222ddddbb.
        .bbdddd2224444222ddcdbb.
        .bbdcdd22444444222dddbb.
        .bbdddd244444444222ddbb.
        .bbddd2244445444422ddbb.
        .bbdd22444455544442ddbb.
        .bbdd224445555444442dbb.
        .bbdd224455555544442dbb.
        .bbdd244455555554442dbb.
        .bbdd245555555555442dbb.
        .bbcdeeeeeeeeeeeeeeedbb.
        .bbdddcddddddddddddddbb.
        .bbbbbbbbbbbbbbbbbbbbbb.
        .bbbbbbbbbbbbbbbbbbbbbb.
        ........................
        ........................
        ........................
        `, SpriteKind.firepit)
    tiles.placeOnTile(fire_pit, player_1.tilemapLocation())
    multilights.addLightSource(fire_pit, 40)
    extraEffects.createSpreadEffectOnAnchor(fire_pit, myEffect, -1)
}
function make_forest3 () {
    for (let index = 0; index < 10; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 75), randint(0, 75)), sprites.castle.tileDarkGrass1)
        for (let place_forest3 of tiles.getTilesByType(sprites.castle.tileDarkGrass1)) {
            tiles.setTileAt(place_forest3.getNeighboringLocation(CollisionDirection.Left), sprites.castle.tileDarkGrass1)
            tiles.setTileAt(place_forest3.getNeighboringLocation(CollisionDirection.Top), sprites.castle.tileDarkGrass1)
            tiles.setTileAt(place_forest3.getNeighboringLocation(CollisionDirection.Right), sprites.castle.tileDarkGrass1)
            tiles.setTileAt(place_forest3.getNeighboringLocation(CollisionDirection.Bottom), sprites.castle.tileDarkGrass1)
        }
    }
}
function make_rocks3 () {
    for (let index = 0; index < 1; index++) {
        place_rocks = sprites.create(assets.tile`myTile3`, SpriteKind.rock2)
        tiles.placeOnRandomTile(place_rocks, sprites.castle.tileGrass1)
    }
}
controller.combos.attachCombo("a a a a", function () {
    game.showLongText(" wood " + get_wood + " grass " + claypast + " rope " + has_rope, DialogLayout.Bottom)
    game.showLongText(" stone " + get_rock_1 + " sticks " + get_stick, DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rock2, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        make_rocks3()
        sprites.destroy(otherSprite, effects.disintegrate, 200)
        get_rock_1 += 1
    }
})
function make_tirmites () {
    for (let index = 0; index < 30; index++) {
        turmit_tower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . e e e e . . . . 
            . . . . . . . e e e e e e . . . 
            . . . . . . e e e e e e e e . . 
            . . . . . e e e e e e f e e . . 
            . . . . e e e e e e e e e e . . 
            . . . . e e e e f e e e e e e . 
            . . . . e e e e e e e e e e e . 
            . . . . e e e e e e e e e e e . 
            . . . e e e e e e e e f e e e e 
            . . . e e e e e e e e e e e e e 
            . . e e e e e e e e e e e f e e 
            . . e e f e e e e e e e e e e e 
            . . e e e e e e e e e e e e e e 
            `, SpriteKind.tirmitetower)
        tiles.placeOnRandomTile(turmit_tower, assets.tile`myTile6`)
    }
}
function make_forest2 () {
    for (let index = 0; index < 16; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 100), randint(0, 100)), sprites.castle.tileDarkGrass1)
        for (let place_forest of tiles.getTilesByType(sprites.castle.tileDarkGrass1)) {
            tiles.setTileAt(place_forest.getNeighboringLocation(CollisionDirection.Left), sprites.castle.tileDarkGrass1)
            tiles.setTileAt(place_forest.getNeighboringLocation(CollisionDirection.Top), sprites.castle.tileDarkGrass1)
            tiles.setTileAt(place_forest.getNeighboringLocation(CollisionDirection.Right), sprites.castle.tileDarkGrass1)
            tiles.setTileAt(place_forest.getNeighboringLocation(CollisionDirection.Bottom), sprites.castle.tileDarkGrass1)
        }
    }
}
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Food, 500, function (sprite) {
    if (has_been_made == 1) {
        if (spriteutils.distanceBetween(sprite, player_1) <= 48) {
            sprite.setVelocity(randint(-100, 100), randint(-100, 100))
        } else {
            timer.throttle("action", 500, function () {
                sprite.setVelocity(randint(0, 0), randint(0, 0))
            })
        }
    }
})
function game_manual () {
    game.showLongText("5 deferent biomes lakes randomly generated worlds biome specific recourses day and night termite hills in the dessert biome pigs you can hunt farming and 3 different world sizes to chose from stuff you can craft like crop plot(dont need any thing to craft it) used for planting carrots axe( 1 stone 2 sticks and 1 rope) used for mining trees pickaxe(3 stone, 3 sticks, 3 rope) use for mining big rocks rope(3 grass per rope) used for crafting some tools wood floor(1 wood ) used for decoration camp fire, ( 3 wood, 3 sticks) used to light up your camp at night only lasts 2 nights or 10 min bow(1 rope 5 sticks 10 claypast) used to kill pigs shovel( 5 sticks 5 rocks) a tool used to mine termite mounds firepit(3 wood 3 sticks and 12 rocks) a relightable camp fir controls wasd/ arrow keys to move A to collect recourses/ confirm craft b to open crafting menu up/up/a/a to go into build mode menu to open build menu when in build mode down/down/a/a to get out of build mode dubble tap a to eat carrots or meat to bring your hunger and health up  planed updates things that will kill you other than termites more things to farm building more things to craft more animals to hunt crafting more weapons heat and taming animals  recourses grass(biome specific to grass lands) used to craft rope sticks(biome specific to swamps) used for making tools and fires wood(get from mining trees) use for making fires and wood flooring) loose rocks(rocks you can pick up from the ground, biome specific to grass lands) used for tools and fire pits big rocks(found in gravel biome. mine with pick axe) used to get rocks fast termite mounds(found in desert infested with termites mined with shovel) used to get claypast claypast(used mor making bows carrots(use for food and farming found any were) meat(drops from pigs used as food) pigs(hunt these with a bow)  how to farm and relight fire pits to farm you have to craft a crop plot and go in to build mode open build menu and select crop plot then if you have carrots over lap the crop plot and press a it should plant the carrot. then when it grows over lap that tile and press a to harvest it. to relight a fire pit first of all you have to craft one and when it goes out. if you have wood over lap the fire pit and press a to relight it.  that is all right now hope you like it.", DialogLayout.Bottom)
}
function make_trees3 () {
    for (let index = 0; index < 100; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 100), randint(0, 100)), assets.tile`myTile`)
        for (let wall of tiles.getTilesByType(assets.tile`myTile`)) {
            tiles.setTileAt(wall.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile1`)
            tiles.setTileAt(wall.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile1`)
            tiles.setTileAt(wall.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile1`)
            tiles.setTileAt(wall.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile1`)
        }
    }
}
function make_swomp2 () {
    for (let index = 0; index < 16; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 100), randint(0, 100)), sprites.dungeon.darkGroundCenter)
        for (let place_swomp of tiles.getTilesByType(sprites.dungeon.darkGroundCenter)) {
            tiles.setTileAt(place_swomp.getNeighboringLocation(CollisionDirection.Left), sprites.dungeon.darkGroundCenter)
            tiles.setTileAt(place_swomp.getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.darkGroundCenter)
            tiles.setTileAt(place_swomp.getNeighboringLocation(CollisionDirection.Right), sprites.dungeon.darkGroundCenter)
            tiles.setTileAt(place_swomp.getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.darkGroundCenter)
        }
    }
}
function make_desert3 () {
    for (let index = 0; index < 10; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 75), randint(0, 75)), assets.tile`myTile6`)
        for (let place_desert of tiles.getTilesByType(assets.tile`myTile6`)) {
            tiles.setTileAt(place_desert.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile6`)
            tiles.setTileAt(place_desert.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile6`)
            tiles.setTileAt(place_desert.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile6`)
            tiles.setTileAt(place_desert.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile6`)
        }
    }
}
function make_grass3 () {
    for (let index = 0; index < 30; index++) {
        grass2 = sprites.create(sprites.swamp.swampTile1, SpriteKind.grass)
        tiles.placeOnRandomTile(grass2, sprites.castle.tileGrass1)
    }
}
function make_swomp () {
    for (let index = 0; index < 16; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 150), randint(0, 150)), sprites.dungeon.darkGroundCenter)
        for (let place_swomp2 of tiles.getTilesByType(sprites.dungeon.darkGroundCenter)) {
            tiles.setTileAt(place_swomp2.getNeighboringLocation(CollisionDirection.Left), sprites.dungeon.darkGroundCenter)
            tiles.setTileAt(place_swomp2.getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.darkGroundCenter)
            tiles.setTileAt(place_swomp2.getNeighboringLocation(CollisionDirection.Right), sprites.dungeon.darkGroundCenter)
            tiles.setTileAt(place_swomp2.getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.darkGroundCenter)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.cave, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (game.ask("do you want enter cave ")) {
            cave_map_1 = tilemap`level14`
            make_cave_walls()
            tiles.setCurrentTilemap(cave_map_1)
            tiles.placeOnRandomTile(player_1, assets.tile`myTile15`)
        } else {
        	
        }
    }
    if (player_1.overlapsWith(cave_enterance_1)) {
    	
    }
})
function make_carrot3 () {
    for (let index = 0; index < 50; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 75), randint(0, 75)), assets.tile`myTile7`)
    }
}
function make_cave () {
    for (let index = 0; index < 10; index++) {
        cave_enterance_1 = sprites.create(assets.tile`myTile13`, SpriteKind.cave)
        tiles.placeOnRandomTile(cave_enterance_1, sprites.castle.tileGrass1)
    }
}
function make_rocks5 () {
    for (let index = 0; index < 30; index++) {
        place_rocks = sprites.create(sprites.castle.rock0, SpriteKind.rock)
        tiles.placeOnRandomTile(place_rocks, sprites.castle.tilePath5)
    }
}
controller.combos.attachCombo("down down a a", function () {
    in_build = 0
})
function make_trees () {
    for (let index = 0; index < 100; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 150), randint(0, 150)), assets.tile`myTile`)
        for (let wall2 of tiles.getTilesByType(assets.tile`myTile`)) {
            tiles.setTileAt(wall2.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile1`)
            tiles.setTileAt(wall2.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile1`)
            tiles.setTileAt(wall2.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile1`)
            tiles.setTileAt(wall2.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile1`)
        }
    }
}
function make_tirmites2 () {
    for (let index = 0; index < 10; index++) {
        turmit_tower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . e e e e . . . . 
            . . . . . . . e e e e e e . . . 
            . . . . . . e e e e e e e e . . 
            . . . . . e e e e e e f e e . . 
            . . . . e e e e e e e e e e . . 
            . . . . e e e e f e e e e e e . 
            . . . . e e e e e e e e e e e . 
            . . . . e e e e e e e e e e e . 
            . . . e e e e e e e e f e e e e 
            . . . e e e e e e e e e e e e e 
            . . e e e e e e e e e e e f e e 
            . . e e f e e e e e e e e e e e 
            . . e e e e e e e e e e e e e e 
            `, SpriteKind.tirmitetower)
        tiles.placeOnRandomTile(turmit_tower, assets.tile`myTile6`)
    }
}
function make_trees4 () {
    for (let index = 0; index < 75; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 75), randint(0, 75)), assets.tile`myTile`)
        for (let wall4 of tiles.getTilesByType(assets.tile`myTile`)) {
            tiles.setTileAt(wall4.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile1`)
            tiles.setTileAt(wall4.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile1`)
            tiles.setTileAt(wall4.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile1`)
            tiles.setTileAt(wall4.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile1`)
        }
    }
}
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Enemy, 500, function (sprite) {
    if (spriteutils.distanceBetween(sprite, fire) == 80) {
        sprites.destroy(sprite, effects.fire, 500)
    }
    if (spriteutils.distanceBetween(sprite, fire_pit) < 80) {
        sprites.destroy(sprite, effects.fire, 500)
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (in_build == 1) {
        if (controller.menu.isPressed()) {
            build_menu = miniMenu.createMenu(
            miniMenu.createMenuItem("wood floor" + wood_floor, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("crop plot=" + crop_plot, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("exit")
            )
            build_menu.setFlag(SpriteFlag.RelativeToCamera, true)
            build_menu.onButtonPressed(controller.A, function (selection, selectedIndex) {
                if (selectedIndex == 0) {
                    if (wood_floor >= 1) {
                        destroy_build()
                        place = 1
                    }
                } else if (selectedIndex == 1) {
                    if (crop_plot >= 1) {
                        destroy_build()
                        place = 2
                    }
                } else if (selectedIndex == 2) {
                    destroy_build()
                }
            })
        }
    }
    if (in_build == 0) {
        inventory = miniMenu.createMenu(
        miniMenu.createMenuItem("sticks " + get_stick),
        miniMenu.createMenuItem("grass " + get_grass),
        miniMenu.createMenuItem("stone " + get_rock_1),
        miniMenu.createMenuItem("wood " + get_wood),
        miniMenu.createMenuItem("rope " + has_rope),
        miniMenu.createMenuItem("carrot " + carrot),
        miniMenu.createMenuItem("meat " + has_meat),
        miniMenu.createMenuItem("crop plots " + crop_plot),
        miniMenu.createMenuItem("shovel " + has_shoval),
        miniMenu.createMenuItem("pick axe " + has_pick_axe),
        miniMenu.createMenuItem("exit"),
        miniMenu.createMenuItem("next page")
        )
        inventory.setDimensions(100, 100)
        inventory.setFrame(img`
            ..bbabbaabbaabbaabbbbb..
            .bddbaddbaddbaddbabbddb.
            addddbaddbaddbaddbadddda
            addddbbaabbaabbaabbdddda
            abddbbbbbbbbbbbbbbbbddba
            bbabbbbbbbbbbbbbbbbbbbab
            babbbbbbbbbbbbbbbbbbbadb
            abdabbbbbbbbbbbbbbbbadda
            addabbbbbbbbbbbbbbbbadba
            bdabbbbbbbbbbbbbbbbbbbab
            babbbbbbbbbbbbbbbbbbbadb
            abdabbbbbbbbbbbbbbbbadda
            addabbbbbbbbbbbbbbbbadba
            bdabbbbbbbbbbbbbbbbbbbab
            babbbbbbbbbbbbbbbbbbbadb
            abdabbbbbbbbbbbbbbbbadda
            addabbbbbbbbbbbbbbbbadba
            bdabbbbbbbbbbbbbbbbbbbab
            babbbbbbbbbbbbbbbbbbbabb
            abddbbbbbbbbbbbbbbbbddba
            addddbbaabbaabbaabbdddda
            addddabddabddabddabdddda
            .addbbabddabddabddabdda.
            ..aaabbaabbaabbaabbaaa..
            `)
        animation.runMovementAnimation(
        inventory,
        animation.animationPresets(animation.flyToCenter),
        1000,
        false
        )
        inventory.setFlag(SpriteFlag.RelativeToCamera, true)
        inventory.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 0)
        inventory.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (selectedIndex == 11) {
                sprites.destroy(inventory)
                inventory = miniMenu.createMenu(
                miniMenu.createMenuItem("bow " + has_bow),
                miniMenu.createMenuItem("fire pit " + made_fire_pit),
                miniMenu.createMenuItem("axe " + has_axe),
                miniMenu.createMenuItem("fire " + has_fire),
                miniMenu.createMenuItem("previous page")
                )
                inventory.setFrame(img`
                    ..bbabbaabbaabbaabbbbb..
                    .bddbaddbaddbaddbabbddb.
                    addddbaddbaddbaddbadddda
                    addddbbaabbaabbaabbdddda
                    abddbbbbbbbbbbbbbbbbddba
                    bbabbbbbbbbbbbbbbbbbbbab
                    babbbbbbbbbbbbbbbbbbbadb
                    abdabbbbbbbbbbbbbbbbadda
                    addabbbbbbbbbbbbbbbbadba
                    bdabbbbbbbbbbbbbbbbbbbab
                    babbbbbbbbbbbbbbbbbbbadb
                    abdabbbbbbbbbbbbbbbbadda
                    addabbbbbbbbbbbbbbbbadba
                    bdabbbbbbbbbbbbbbbbbbbab
                    babbbbbbbbbbbbbbbbbbbadb
                    abdabbbbbbbbbbbbbbbbadda
                    addabbbbbbbbbbbbbbbbadba
                    bdabbbbbbbbbbbbbbbbbbbab
                    babbbbbbbbbbbbbbbbbbbabb
                    abddbbbbbbbbbbbbbbbbddba
                    addddbbaabbaabbaabbdddda
                    addddabddabddabddabdddda
                    .addbbabddabddabddabdda.
                    ..aaabbaabbaabbaabbaaa..
                    `)
                animation.runMovementAnimation(
                inventory,
                animation.animationPresets(animation.flyToCenter),
                1000,
                false
                )
                inventory.setFlag(SpriteFlag.RelativeToCamera, true)
                inventory.onButtonPressed(controller.A, function (selection, selectedIndex) {
                    if (selectedIndex == 4) {
                        sprites.destroy(inventory)
                        inventory = miniMenu.createMenu(
                        miniMenu.createMenuItem("sticks " + get_stick),
                        miniMenu.createMenuItem("grass " + get_grass),
                        miniMenu.createMenuItem("stone " + get_rock_1),
                        miniMenu.createMenuItem("wood " + get_wood),
                        miniMenu.createMenuItem("rope " + has_rope),
                        miniMenu.createMenuItem("carrot " + carrot),
                        miniMenu.createMenuItem("meat " + has_meat),
                        miniMenu.createMenuItem("crop plots " + crop_plot),
                        miniMenu.createMenuItem("shovel " + has_shoval),
                        miniMenu.createMenuItem("pick axe " + has_pick_axe),
                        miniMenu.createMenuItem("exit"),
                        miniMenu.createMenuItem("next page")
                        )
                        inventory.setDimensions(100, 100)
                        inventory.setFrame(img`
                            ..bbabbaabbaabbaabbbbb..
                            .bddbaddbaddbaddbabbddb.
                            addddbaddbaddbaddbadddda
                            addddbbaabbaabbaabbdddda
                            abddbbbbbbbbbbbbbbbbddba
                            bbabbbbbbbbbbbbbbbbbbbab
                            babbbbbbbbbbbbbbbbbbbadb
                            abdabbbbbbbbbbbbbbbbadda
                            addabbbbbbbbbbbbbbbbadba
                            bdabbbbbbbbbbbbbbbbbbbab
                            babbbbbbbbbbbbbbbbbbbadb
                            abdabbbbbbbbbbbbbbbbadda
                            addabbbbbbbbbbbbbbbbadba
                            bdabbbbbbbbbbbbbbbbbbbab
                            babbbbbbbbbbbbbbbbbbbadb
                            abdabbbbbbbbbbbbbbbbadda
                            addabbbbbbbbbbbbbbbbadba
                            bdabbbbbbbbbbbbbbbbbbbab
                            babbbbbbbbbbbbbbbbbbbabb
                            abddbbbbbbbbbbbbbbbbddba
                            addddbbaabbaabbaabbdddda
                            addddabddabddabddabdddda
                            .addbbabddabddabddabdda.
                            ..aaabbaabbaabbaabbaaa..
                            `)
                        animation.runMovementAnimation(
                        inventory,
                        animation.animationPresets(animation.flyToCenter),
                        1000,
                        false
                        )
                        inventory.setFlag(SpriteFlag.RelativeToCamera, true)
                        inventory.onButtonPressed(controller.A, function (selection, selectedIndex) {
                            if (selectedIndex == 10) {
                                sprites.destroy(inventory)
                            }
                        })
                    }
                })
            } else if (selectedIndex == 10) {
                sprites.destroy(inventory)
            }
        })
    }
})
function make_make_lake2 () {
    for (let index = 0; index < 15; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 100), randint(0, 100)), assets.tile`myTile8`)
    }
    for (let index = 0; index < 10; index++) {
        for (let make_river3 of tiles.getTilesByType(assets.tile`myTile8`)) {
            if (Math.percentChance(25)) {
                tiles.setTileAt(make_river3.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile8`)
            } else if (Math.percentChance(25)) {
                tiles.setTileAt(make_river3.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile8`)
            } else if (Math.percentChance(25)) {
                tiles.setTileAt(make_river3.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile8`)
            } else if (Math.percentChance(25)) {
                tiles.setTileAt(make_river3.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile8`)
            }
        }
    }
}
function make_rocks4 () {
    for (let index = 0; index < 1; index++) {
        place_rocks = sprites.create(sprites.castle.rock0, SpriteKind.rock)
        tiles.placeOnRandomTile(place_rocks, sprites.castle.tilePath5)
    }
}
controller.combos.attachCombo("up up a a ", function () {
    in_build = 1
})
function make_rocks () {
    for (let index = 0; index < 50; index++) {
        place_rocks = sprites.create(sprites.castle.rock0, SpriteKind.rock)
        tiles.placeOnRandomTile(place_rocks, sprites.castle.tilePath5)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile0`)
        player_1.sayText("harvested 2 carots", 1000, true)
        carrot += 2
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (has_been_made == 1) {
        if (tiles.tileAtLocationEquals(player_1.tilemapLocation(), assets.tile`myTile0`)) {
            if (carrot >= 1) {
                tiles.setTileAt(player_1.tilemapLocation(), assets.tile`myTile9`)
                player_1.sayText("planted carrot", 1000, true)
                carrot += -1
            }
        }
    }
})
function makeplayer () {
    player_1 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........fff22fff........
        .......fff2222fff.......
        ......fffeeeeeefff......
        ......ffe222222eef......
        ......fe2ffffff2ef......
        ......ffffeeeeffff......
        .....ffefbf44fbfeff.....
        .....fee41fddf14eef.....
        ......ffffdddddeef......
        .....fddddf444eef.......
        .....fbbbbf2222f4e......
        .....fbbbbf2222fd4......
        ......fccf45544f44......
        .......ffffffff.........
        .........ff..ff.........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(player_1, sprites.castle.tileGrass1)
    controller.moveSprite(player_1, 100, 100)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.setColor(4, 15)
    scene.cameraFollowSprite(player_1)
    has_been_made = 1
    statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar2.setColor(2, 15)
    statusbar3 = statusbars.create(50, 4, StatusBarKind.Health)
    statusbar3.setColor(2, 9)
    statusbar3.setPosition(25, 2)
    statusbar2.setPosition(10, 7)
    statusbar.setPosition(10, 12)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.tirmit, function (sprite, otherSprite) {
    timer.throttle("action", 1000, function () {
        statusbar2.value += -10
        scene.cameraShake(4, 500)
    })
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.lightsource, 500, function (sprite) {
    if (spriteutils.distanceBetween(player_1, sprite) < 80) {
        switch_heat = 1
        if (switch_heat == 1) {
            if (statusbar3.value < 60) {
                statusbar3.value += 2
            }
            if (heat < 60) {
                heat += 2
            }
        }
    }
    if (spriteutils.distanceBetween(player_1, sprite) < 20) {
        if (switch_heat == 1) {
            if (statusbar3.value < 100) {
                statusbar3.value += 2
            }
            if (heat < 100) {
                heat += 2
            }
        }
    }
    if (spriteutils.distanceBetween(player_1, sprite) > 80) {
        if (switch_heat == 1) {
            if (time >= 14) {
                switch_heat = 0
            } else {
                switch_heat = 2
            }
        }
    }
})
function make_rocks6 () {
    for (let index = 0; index < 30; index++) {
        place_rocks = sprites.create(assets.tile`myTile3`, SpriteKind.rock2)
        tiles.placeOnRandomTile(place_rocks, sprites.castle.tileGrass1)
    }
}
function make_animals () {
    for (let index = 0; index < 10; index++) {
        pig = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 1 f 3 3 3 f 1 3 e 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f e 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 3 e e e e e 3 3 3 3 3 f 
            f 3 3 3 3 e f e f e 3 3 e 3 3 f 
            f 3 3 3 3 e e e e e 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 e 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 e 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(pig, sprites.castle.tileGrass1)
        frog = sprites.create(img`
            . . f f . . . . . . f f . . 
            . f 7 f f . . . . f f 7 f . 
            f 7 7 7 f . . . . f 7 7 7 f 
            . f 7 7 f . . . . f 7 6 f . 
            . f 7 7 f . . . . f 7 7 f . 
            . f 7 7 f f f f f f 7 7 f . 
            . f 6 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f 7 7 7 6 7 7 f f f . 
            . . . f 7 6 7 7 7 7 f . . . 
            . . . f 7 7 7 7 7 7 f . . . 
            . . . f 7 7 7 7 1 8 f . . . 
            . . . f 8 1 7 7 7 7 f . . . 
            . . f 7 f 7 7 7 7 f 7 f . . 
            . f 7 7 f f f f f f 7 7 f . 
            . . f f . . . . . . f f . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(frog, assets.tile`myTile8`)
        chicken1 = sprites.create(img`
            ....................
            ....................
            .........2.2........
            ........2222........
            ......11111111......
            ......1f211111......
            .....511111111...1e1
            ......11111111..1111
            ...fffdddd1e1111111.
            .....ddddd111111111.
            .....f11111111111e..
            ......1e111111......
            ....................
            ....................
            ....................
            ....................
            `, SpriteKind.chicken)
        tiles.placeOnRandomTile(chicken1, sprites.castle.tileDarkGrass1)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
    make_animals2()
    has_meat += 1
})
function make_rocks2 () {
    for (let index = 0; index < 50; index++) {
        place_rocks = sprites.create(assets.tile`myTile3`, SpriteKind.rock2)
        tiles.placeOnRandomTile(place_rocks, sprites.castle.tileGrass1)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.stick, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(otherSprite)
        get_stick += 1
        make_sticks2()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    timer.throttle("action", 200, function () {
        animation.runImageAnimation(
        player_1,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........fff22fff........
            .......fff2222fff.......
            ......fffeeeeeefff......
            ......ffe222222eef......
            ......fe2ffffff2ef......
            ......ffffeeeeffff......
            .....ffefbf44fbfeff.....
            .....fee41fddf14eef.....
            ......ffffdddddeef......
            .....fddddf444eef.......
            .....fbbbbf2222f4e......
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........fff22fff........
            .......fff2222fff.......
            ......fffeeeeeefff......
            ......ffe222222eef......
            ......fe2ffffff2ef......
            ......ffffeeeeffff......
            .....ffefbf44fbfeff.....
            .....fee41fddf14eef.....
            ......ffffdddddeef......
            .....fddddf444eef.......
            .....fbbbbf2222f4e......
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........fff22fff........
            .......fff2222fff.......
            ......fffeeeeeefff......
            ......ffe222222eef......
            ......fe2ffffff2ef......
            ......ffffeeeeffff......
            .....ffefbf44fbfeff.....
            .....fee41fddf14eef.....
            ......ffffdddddeef......
            .....fddddf444eef.......
            .....fbbbbf2222f4e......
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........fff22fff........
            .......fff2222fff.......
            ......fffeeeeeefff......
            ......ffe222222eef......
            ......fe2ffffff2ef......
            ......ffffeeeeffff......
            .....ffefbf44fbfeff.....
            .....fee41fddf14eef.....
            ......ffffdddddeef......
            .....fddddf444eef.......
            .....fbbbbf2222f4e......
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        true
        )
        player_1.startEffect(effects.bubbles, 200)
    })
})
function make_carrot () {
    for (let index = 0; index < 100; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 150), randint(0, 150)), assets.tile`myTile7`)
    }
}
function make_forest () {
    for (let index = 0; index < 16; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 150), randint(0, 150)), sprites.castle.tileDarkGrass1)
        for (let place_forest2 of tiles.getTilesByType(sprites.castle.tileDarkGrass1)) {
            tiles.setTileAt(place_forest2.getNeighboringLocation(CollisionDirection.Left), sprites.castle.tileDarkGrass1)
            tiles.setTileAt(place_forest2.getNeighboringLocation(CollisionDirection.Top), sprites.castle.tileDarkGrass1)
            tiles.setTileAt(place_forest2.getNeighboringLocation(CollisionDirection.Right), sprites.castle.tileDarkGrass1)
            tiles.setTileAt(place_forest2.getNeighboringLocation(CollisionDirection.Bottom), sprites.castle.tileDarkGrass1)
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (has_been_made == 1 && in_menu == 0) {
        in_menu = 1
        craft_menu = miniMenu.createMenu(
        miniMenu.createMenuItem("craft crop plot"),
        miniMenu.createMenuItem("craft axe"),
        miniMenu.createMenuItem("craft pick axe"),
        miniMenu.createMenuItem("craft rope"),
        miniMenu.createMenuItem("craft fire"),
        miniMenu.createMenuItem("craft bow"),
        miniMenu.createMenuItem("craft wood floor"),
        miniMenu.createMenuItem("craft shoval"),
        miniMenu.createMenuItem("craft fire pit"),
        miniMenu.createMenuItem("exit")
        )
        craft_menu.setDimensions(120, 100)
        craft_menu.setFrame(img`
            ..bbabbaabbaabbaabbbbb..
            .bddbaddbaddbaddbabbddb.
            addddbaddbaddbaddbadddda
            addddbbaabbaabbaabbdddda
            abddbbbbbbbbbbbbbbbbddba
            bbabbbbbbbbbbbbbbbbbbbab
            babbbbbbbbbbbbbbbbbbbadb
            abdabbbbbbbbbbbbbbbbadda
            addabbbbbbbbbbbbbbbbadba
            bdabbbbbbbbbbbbbbbbbbbab
            babbbbbbbbbbbbbbbbbbbadb
            abdabbbbbbbbbbbbbbbbadda
            addabbbbbbbbbbbbbbbbadba
            bdabbbbbbbbbbbbbbbbbbbab
            babbbbbbbbbbbbbbbbbbbadb
            abdabbbbbbbbbbbbbbbbadda
            addabbbbbbbbbbbbbbbbadba
            bdabbbbbbbbbbbbbbbbbbbab
            babbbbbbbbbbbbbbbbbbbabb
            abddbbbbbbbbbbbbbbbbddba
            addddbbaabbaabbaabbdddda
            addddabddabddabddabdddda
            .addbbabddabddabddabdda.
            ..aaabbaabbaabbaabbaaa..
            `)
        craft_menu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
        craft_menu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollSpeed, 200)
        craft_menu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 3)
        craft_menu.setFlag(SpriteFlag.RelativeToCamera, true)
        craft_menu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (selectedIndex == 0) {
                sprites.destroy(craft_menu)
                player_1.sayText("crafted crop plot", 1000, true)
                in_menu = 0
                crop_plot += 1
            } else if (selectedIndex == 1) {
                if (get_rock_1 >= 1 && (get_stick >= 2 && has_rope >= 1)) {
                    sprites.destroy(craft_menu)
                    player_1.sayText("crafted axe", 1000, true)
                    in_menu = 0
                    has_axe = 1
                    get_rock_1 = 1
                    get_stick = 1
                    has_rope = 1
                }
            } else if (selectedIndex == 2) {
                if (get_rock_1 >= 3 && (get_stick >= 3 && has_rope >= 3)) {
                    sprites.destroy(craft_menu)
                    player_1.sayText("crafted pick axe", 1000, true)
                    in_menu = 0
                    has_pick_axe = 1
                    has_rope += -3
                    get_stick += -3
                    get_rock_1 += -3
                }
            } else if (selectedIndex == 3) {
                if (get_grass >= 3) {
                    sprites.destroy(craft_menu)
                    player_1.sayText("crafted rope", 1000, true)
                    in_menu = 0
                    has_rope += 1
                    get_grass += -3
                }
            } else if (selectedIndex == 4) {
                if (get_wood >= 3 && get_stick >= 3) {
                    sprites.destroy(craft_menu)
                    player_1.sayText("crafted fire", 1000, true)
                    in_menu = 0
                    get_wood += -3
                    get_stick += -3
                    make_fire()
                }
            } else if (selectedIndex == 5) {
                if (has_rope >= 1 && (get_stick >= 5 && claypast >= 10)) {
                    sprites.destroy(craft_menu)
                    player_1.sayText("crafted bow", 1000, true)
                    in_menu = 0
                    get_stick += -5
                    has_rope += -1
                    claypast += -10
                    has_bow = 1
                }
            } else if (selectedIndex == 6) {
                if (get_wood >= 1) {
                    sprites.destroy(craft_menu)
                    player_1.sayText("crafted wood floor", 1000, true)
                    in_menu = 0
                    wood_floor += 3
                    get_wood += -1
                }
            } else if (selectedIndex == 7) {
                if (get_stick >= 5 && get_rock_1 >= 5) {
                    sprites.destroy(craft_menu)
                    player_1.sayText("crafted shoval", 1000, true)
                    in_menu = 0
                    get_stick += -5
                    get_rock_1 += -5
                    has_shoval = 1
                }
            } else if (selectedIndex == 8) {
                if (get_wood >= 3 && (get_stick >= 3 && get_rock_1 >= 12)) {
                    make_fire_pit()
                    sprites.destroy(craft_menu)
                    player_1.sayText("crafted fire pit", 1000, true)
                    in_menu = 0
                    get_wood += -3
                    get_stick += -3
                    get_rock_1 += -12
                    made_fire_pit += 1
                }
            } else if (selectedIndex == 9) {
                sprites.destroy(craft_menu)
                in_menu = 0
            }
        })
    }
})
function make_sticks () {
    for (let index = 0; index < 50; index++) {
        place_sticks = sprites.create(assets.tile`myTile4`, SpriteKind.stick)
        tiles.placeOnRandomTile(place_sticks, sprites.dungeon.darkGroundCenter)
    }
}
function make_sticks2 () {
    for (let index = 0; index < 1; index++) {
        place_sticks = sprites.create(assets.tile`myTile4`, SpriteKind.stick)
        tiles.placeOnRandomTile(place_sticks, sprites.dungeon.darkGroundCenter)
    }
}
sprites.onOverlap(SpriteKind.chickenbullet, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.warmRadial, 100)
    scene.cameraShake(4, 500)
    statusbar2.value += -5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.grass, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(otherSprite)
        make_grass2()
        get_grass += 1
    }
})
controller.combos.attachCombo("a a", function () {
    if (carrot >= 1) {
        player_1.sayText("yum carrot", 1000, true)
        statusbar.value += 20
        statusbar2.value += 10
        carrot += -1
    }
    if (has_meat >= 1) {
        player_1.sayText("yum meat", 1000, true)
        statusbar.value += 40
        statusbar2.value += 20
        has_meat += -1
    }
})
function make_make_lake () {
    for (let index = 0; index < 10; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 75), randint(0, 75)), assets.tile`myTile8`)
    }
    for (let index = 0; index < 10; index++) {
        for (let make_river of tiles.getTilesByType(assets.tile`myTile8`)) {
            if (Math.percentChance(25)) {
                tiles.setTileAt(make_river.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile8`)
            } else if (Math.percentChance(25)) {
                tiles.setTileAt(make_river.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile8`)
            } else if (Math.percentChance(25)) {
                tiles.setTileAt(make_river.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile8`)
            } else if (Math.percentChance(25)) {
                tiles.setTileAt(make_river.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile8`)
            }
        }
    }
}
function make_animals2 () {
    for (let index = 0; index < 1; index++) {
        pig = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 1 f 3 3 3 f 1 3 e 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f e 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 3 e e e e e 3 3 3 3 3 f 
            f 3 3 3 3 e f e f e 3 3 e 3 3 f 
            f 3 3 3 3 e e e e e 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 e 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 e 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(pig, sprites.castle.tileGrass1)
        frog = sprites.create(img`
            . . f f . . . . . . f f . . 
            . f 7 f f . . . . f f 7 f . 
            f 7 7 7 f . . . . f 7 7 7 f 
            . f 7 7 f . . . . f 7 6 f . 
            . f 7 7 f . . . . f 7 7 f . 
            . f 7 7 f f f f f f 7 7 f . 
            . f 6 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f 7 7 7 6 7 7 f f f . 
            . . . f 7 6 7 7 7 7 f . . . 
            . . . f 7 7 7 7 7 7 f . . . 
            . . . f 7 7 7 7 1 8 f . . . 
            . . . f 8 1 7 7 7 7 f . . . 
            . . f 7 f 7 7 7 7 f 7 f . . 
            . f 7 7 f f f f f f 7 7 f . 
            . . f f . . . . . . f f . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(frog, assets.tile`myTile8`)
        chicken1 = sprites.create(img`
            ....................
            ....................
            .........2.2........
            ........2222........
            ......11111111......
            ......1f211111......
            .....511111111...1e1
            ......11111111..1111
            ...fffdddd1e1111111.
            .....ddddd111111111.
            .....f11111111111e..
            ......1e111111......
            ....................
            ....................
            ....................
            ....................
            `, SpriteKind.chicken)
        tiles.placeOnRandomTile(chicken1, sprites.castle.tileDarkGrass1)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.chicken, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    has_meat += 2
})
function make_graval2 () {
    for (let index = 0; index < 16; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 100), randint(0, 100)), sprites.castle.tilePath5)
        for (let place_graval3 of tiles.getTilesByType(sprites.castle.tilePath5)) {
            tiles.setTileAt(place_graval3.getNeighboringLocation(CollisionDirection.Left), sprites.castle.tilePath5)
            tiles.setTileAt(place_graval3.getNeighboringLocation(CollisionDirection.Top), sprites.castle.tilePath5)
            tiles.setTileAt(place_graval3.getNeighboringLocation(CollisionDirection.Right), sprites.castle.tilePath5)
            tiles.setTileAt(place_graval3.getNeighboringLocation(CollisionDirection.Bottom), sprites.castle.tilePath5)
        }
    }
}
function make_trees2 () {
    for (let index = 0; index < 1; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 150), randint(0, 150)), assets.tile`myTile`)
        for (let wall3 of tiles.getTilesByType(assets.tile`myTile`)) {
            tiles.setTileAt(wall3.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile1`)
            tiles.setTileAt(wall3.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile1`)
            tiles.setTileAt(wall3.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile1`)
            tiles.setTileAt(wall3.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile1`)
        }
    }
}
function make_graval () {
    for (let index = 0; index < 16; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 150), randint(0, 150)), sprites.castle.tilePath5)
        for (let place_graval2 of tiles.getTilesByType(sprites.castle.tilePath5)) {
            tiles.setTileAt(place_graval2.getNeighboringLocation(CollisionDirection.Left), sprites.castle.tilePath5)
            tiles.setTileAt(place_graval2.getNeighboringLocation(CollisionDirection.Top), sprites.castle.tilePath5)
            tiles.setTileAt(place_graval2.getNeighboringLocation(CollisionDirection.Right), sprites.castle.tilePath5)
            tiles.setTileAt(place_graval2.getNeighboringLocation(CollisionDirection.Bottom), sprites.castle.tilePath5)
        }
    }
}
function destroy_build () {
    sprites.destroy(build_menu)
}
function make_fire () {
    fire = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . 2 2 . . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 4 4 2 2 2 2 . . . 
        . . . 2 2 2 4 4 4 4 2 2 2 . . . 
        . . . 2 2 4 4 4 4 4 4 2 2 2 . . 
        . . . 2 4 4 4 4 4 4 4 4 2 2 2 . 
        . . 2 2 4 4 4 4 5 4 4 4 4 2 2 . 
        . 2 2 4 4 4 4 5 5 5 4 4 4 4 2 . 
        . 2 2 4 4 4 5 5 5 5 4 4 4 4 4 2 
        . 2 2 4 4 5 5 5 5 5 5 4 4 4 4 2 
        . 2 4 4 4 5 5 5 5 5 5 5 4 4 4 2 
        . 2 4 5 5 5 5 5 5 5 5 5 5 4 4 2 
        e e e e e e e e e e e e e e e e 
        `, SpriteKind.lightsource)
    has_fire = 1
    tiles.placeOnTile(fire, player_1.tilemapLocation())
    multilights.addLightSource(fire, 30)
    extraEffects.createSpreadEffectOnAnchor(fire, myEffect, -1)
}
function make_grass2 () {
    for (let index = 0; index < 1; index++) {
        grass2 = sprites.create(sprites.swamp.swampTile1, SpriteKind.grass)
        tiles.placeOnRandomTile(grass2, sprites.castle.tileGrass1)
    }
}
function make_swomp3 () {
    for (let index = 0; index < 10; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 75), randint(0, 75)), sprites.dungeon.darkGroundCenter)
        for (let place_swomp3 of tiles.getTilesByType(sprites.dungeon.darkGroundCenter)) {
            tiles.setTileAt(place_swomp3.getNeighboringLocation(CollisionDirection.Left), sprites.dungeon.darkGroundCenter)
            tiles.setTileAt(place_swomp3.getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.darkGroundCenter)
            tiles.setTileAt(place_swomp3.getNeighboringLocation(CollisionDirection.Right), sprites.dungeon.darkGroundCenter)
            tiles.setTileAt(place_swomp3.getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.darkGroundCenter)
        }
    }
}
function make_desert2 () {
    for (let index = 0; index < 15; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 100), randint(0, 100)), assets.tile`myTile6`)
        for (let place_desert3 of tiles.getTilesByType(assets.tile`myTile6`)) {
            tiles.setTileAt(place_desert3.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile6`)
            tiles.setTileAt(place_desert3.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile6`)
            tiles.setTileAt(place_desert3.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile6`)
            tiles.setTileAt(place_desert3.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile6`)
        }
    }
}
function make_cave_walls () {
    for (let index = 0; index < 16; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 30), randint(0, 30)), assets.tile`myTile14`)
    }
    for (let index = 0; index < 10; index++) {
        for (let cave_wall of tiles.getTilesByType(assets.tile`myTile14`)) {
            tiles.setTileAt(cave_wall.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile14`)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (has_axe == 1) {
        if (controller.A.isPressed()) {
            tiles.setWallAt(location, false)
            tiles.setTileAt(location, sprites.castle.tileGrass1)
            tiles.setTileAt(location.getNeighboringLocation(CollisionDirection.Left), sprites.castle.tileGrass1)
            tiles.setTileAt(location.getNeighboringLocation(CollisionDirection.Top), sprites.castle.tileGrass1)
            tiles.setTileAt(location.getNeighboringLocation(CollisionDirection.Right), sprites.castle.tileGrass1)
            tiles.setTileAt(location.getNeighboringLocation(CollisionDirection.Bottom), sprites.castle.tileGrass1)
            make_trees2()
            get_wood += 1
        }
    }
})
function make_carrot2 () {
    for (let index = 0; index < 80; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 100), randint(0, 100)), assets.tile`myTile7`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.firepit, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (get_wood >= 1) {
            fire_pit.setImage(img`
                ........................
                ........................
                .bbbbbbbbbbbbbbbbbbbbbb.
                .bbbbbbbbbbbbbbbbbbbbbb.
                .bbddddddddddddddddddbb.
                .bbddddddddd22dddddddbb.
                .bbdddcddd22222ddddcdbb.
                .bbddddd222442222ddddbb.
                .bbdddd2224444222ddcdbb.
                .bbdcdd22444444222dddbb.
                .bbdddd244444444222ddbb.
                .bbddd2244445444422ddbb.
                .bbdd22444455544442ddbb.
                .bbdd224445555444442dbb.
                .bbdd224455555544442dbb.
                .bbdd244455555554442dbb.
                .bbdd245555555555442dbb.
                .bbcdeeeeeeeeeeeeeeedbb.
                .bbdddcddddddddddddddbb.
                .bbbbbbbbbbbbbbbbbbbbbb.
                .bbbbbbbbbbbbbbbbbbbbbb.
                ........................
                ........................
                ........................
                `)
            multilights.addLightSource(fire_pit, 30)
            extraEffects.createSpreadEffectOnAnchor(fire_pit, myEffect, -1)
        }
    }
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.chicken, 500, function (sprite) {
    if (has_been_made == 1) {
        if (spriteutils.distanceBetween(sprite, player_1) <= 48) {
            sprite.setImage(img`
                ..........2.........
                ..........2.........
                ....................
                ..........2.........
                ....................
                ....................
                .........2.2........
                ........2222........
                ......11111111......
                ......1f211111......
                .....511111111...1e1
                ......11111111..1111
                ...fffdddd1e1111111.
                .....ddddd111111111.
                .....f11111111111e..
                ......1e111111......
                `)
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, sprite, 50, 50)
            projectile2.setKind(SpriteKind.chickenbullet)
            sprite.sayText("cluck", 1000, true)
            sprite.follow(player_1, randint(60, 70))
            extraEffects.createSpreadEffectOnAnchor(projectile2, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), 100)
            projectile2.follow(player_1, 200)
        } else {
            sprite.setImage(img`
                ....................
                ....................
                .........2.2........
                ........2222........
                ......11111111......
                ......1f211111......
                .....511111111...1e1
                ......11111111..1111
                ...fffdddd1e1111111.
                .....ddddd111111111.
                .....f11111111111e..
                ......1e111111......
                ....................
                ....................
                ....................
                ....................
                `)
            sprite.follow(player_1, 0)
        }
    }
})
function make_make_lake3 () {
    for (let index = 0; index < 20; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 150), randint(0, 150)), assets.tile`myTile8`)
    }
    for (let index = 0; index < 10; index++) {
        for (let make_river2 of tiles.getTilesByType(assets.tile`myTile8`)) {
            if (Math.percentChance(25)) {
                tiles.setTileAt(make_river2.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile8`)
            } else if (Math.percentChance(25)) {
                tiles.setTileAt(make_river2.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile8`)
            } else if (Math.percentChance(25)) {
                tiles.setTileAt(make_river2.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile8`)
            } else if (Math.percentChance(25)) {
                tiles.setTileAt(make_river2.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile8`)
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.rock, function (sprite, otherSprite) {
    if (has_pick_axe == 1) {
        if (controller.A.isPressed()) {
            timer.throttle("action", 300, function () {
                otherSprite.startEffect(effects.disintegrate, 500)
                get_rock_1 += 1
            })
        }
    }
})
function make_sticks3 () {
    for (let index = 0; index < 30; index++) {
        place_sticks = sprites.create(assets.tile`myTile4`, SpriteKind.stick)
        tiles.placeOnRandomTile(place_sticks, sprites.dungeon.darkGroundCenter)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.tirmitetower, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (has_shoval == 1) {
            timer.throttle("action", 200, function () {
                otherSprite.startEffect(effects.disintegrate, 500)
                claypast += 1
            })
        }
    }
    timer.throttle("action", 500, function () {
        for (let index = 0; index < 5; index++) {
            tirmit2 = sprites.create(img`
                2 e e e f 
                2 e e e f 
                `, SpriteKind.tirmit)
            tiles.placeOnTile(tirmit2, otherSprite.tilemapLocation())
            tirmit2.follow(player_1, 80)
        }
    })
})
function make_desert () {
    for (let index = 0; index < 15; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 150), randint(0, 150)), assets.tile`myTile6`)
        for (let place_desert2 of tiles.getTilesByType(assets.tile`myTile6`)) {
            tiles.setTileAt(place_desert2.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile6`)
            tiles.setTileAt(place_desert2.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile6`)
            tiles.setTileAt(place_desert2.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile6`)
            tiles.setTileAt(place_desert2.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile6`)
        }
    }
}
function make_grass () {
    for (let index = 0; index < 50; index++) {
        grass2 = sprites.create(sprites.swamp.swampTile1, SpriteKind.grass)
        tiles.placeOnRandomTile(grass2, sprites.castle.tileGrass1)
    }
}
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Player, 500, function (sprite) {
    if (heat >= 95) {
        sprite.sayText("hot!", 100, true)
        statusbar2.value += -1
        scene.cameraShake(4, 500)
    }
    if (switch_heat == 2) {
        if (time <= 14) {
            if (tiles.tileAtLocationEquals(sprite.tilemapLocation(), sprites.castle.tilePath5) || tiles.tileAtLocationEquals(sprite.tilemapLocation(), sprites.castle.tileGrass1)) {
                if (statusbar3.value < 70) {
                    statusbar3.value += 1
                } else if (statusbar3.value > 70) {
                    statusbar3.value += -1
                }
                if (heat < 70) {
                    heat += 1
                } else if (heat > 70) {
                    heat += -1
                }
            }
            if (tiles.tileAtLocationEquals(sprite.tilemapLocation(), sprites.castle.tileDarkGrass1)) {
                if (statusbar3.value < 60) {
                    statusbar3.value += 1
                } else if (statusbar3.value > 60) {
                    statusbar3.value += -1
                }
                if (heat < 60) {
                    heat += 1
                } else if (heat > 60) {
                    heat += -1
                }
            }
            if (tiles.tileAtLocationEquals(sprite.tilemapLocation(), sprites.dungeon.darkGroundCenter)) {
                if (statusbar3.value < 50) {
                    statusbar3.value += 1
                } else if (statusbar3.value > 50) {
                    statusbar3.value += -1
                }
                if (heat < 50) {
                    heat += 1
                } else if (heat > 50) {
                    heat += -1
                }
            }
            if (tiles.tileAtLocationEquals(sprite.tilemapLocation(), assets.tile`myTile6`)) {
                if (statusbar3.value < 90) {
                    statusbar3.value += 1
                } else if (statusbar3.value > 90) {
                    statusbar3.value += -1
                }
                if (heat < 90) {
                    heat += 1
                } else if (heat > 90) {
                    heat += -1
                }
                if (tiles.tileAtLocationEquals(sprite.tilemapLocation(), assets.tile`myTile8`)) {
                    if (statusbar3.value < 40) {
                        statusbar3.value += 1
                    } else if (statusbar3.value > 40) {
                        statusbar3.value += -1
                    }
                    if (heat < 40) {
                        heat += 1
                    } else if (heat > 40) {
                        heat += -1
                    }
                }
            }
        }
    }
})
let projectile: Sprite = null
let skeleton: Sprite = null
let grow_time = 0
let tirmit2: Sprite = null
let projectile2: Sprite = null
let place_sticks: Sprite = null
let craft_menu: miniMenu.MenuSprite = null
let in_menu = 0
let chicken1: Sprite = null
let frog: Sprite = null
let pig: Sprite = null
let time = 0
let heat = 0
let statusbar3: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let has_fire = 0
let has_axe = 0
let made_fire_pit = 0
let has_bow = 0
let has_pick_axe = 0
let has_shoval = 0
let has_meat = 0
let get_grass = 0
let inventory: miniMenu.MenuSprite = null
let place = 0
let crop_plot = 0
let wood_floor = 0
let build_menu: miniMenu.MenuSprite = null
let fire: Sprite = null
let in_build = 0
let cave_enterance_1: Sprite = null
let cave_map_1: tiles.TileMapData = null
let grass2: Sprite = null
let has_been_made = 0
let turmit_tower: Sprite = null
let get_stick = 0
let get_rock_1 = 0
let has_rope = 0
let claypast = 0
let get_wood = 0
let place_rocks: Sprite = null
let player_1: Sprite = null
let fire_pit: Sprite = null
let carrot = 0
let statusbar2: StatusBarSprite = null
let switch_heat = 0
let myEffect: SpreadEffectData = null
let myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("large world"),
miniMenu.createMenuItem("medeum world"),
miniMenu.createMenuItem("small world"),
miniMenu.createMenuItem("game manual")
)
stats.turnStats(true)
myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
    if (selectedIndex == 0) {
        sprites.destroy(myMenu, effects.disintegrate, 500)
        timer.debounce("action", 500, function () {
            tiles.setCurrentTilemap(tilemap`level1`)
            make_swomp()
            make_desert()
            make_graval()
            make_forest()
            make_make_lake3()
            make_grass()
            make_rocks()
            make_rocks2()
            make_tirmites()
            make_sticks()
            make_trees()
            make_carrot()
            make_animals()
            makeplayer()
        })
    } else if (selectedIndex == 1) {
        sprites.destroy(myMenu, effects.disintegrate, 500)
        timer.debounce("action", 500, function () {
            tiles.setCurrentTilemap(tilemap`level7`)
            make_graval2()
            make_swomp2()
            make_desert2()
            make_forest2()
            make_make_lake2()
            make_grass()
            make_rocks()
            make_rocks2()
            make_tirmites()
            make_sticks()
            make_carrot2()
            make_trees3()
            make_animals()
            makeplayer()
        })
    } else if (selectedIndex == 2) {
        sprites.destroy(myMenu, effects.disintegrate, 500)
        timer.debounce("action", 500, function () {
            tiles.setCurrentTilemap(tilemap`level7`)
            make_graval3()
            make_swomp3()
            make_forest3()
            make_desert3()
            make_make_lake()
            make_tirmites2()
            make_grass3()
            make_rocks5()
            make_rocks6()
            make_sticks3()
            make_trees4()
            make_carrot3()
            make_cave()
            make_animals()
            makeplayer()
        })
    } else if (selectedIndex == 3) {
        game_manual()
    }
})
myEffect = extraEffects.createCustomSpreadEffectData(
extraEffects.createPresetColorTable(ExtraEffectPresetColor.Smoke),
true,
extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Cloud),
extraEffects.createPercentageRange(10, 20),
extraEffects.createPercentageRange(10, 20),
extraEffects.createTimeRange(2000, 5000),
randint(-50, 50),
-50,
extraEffects.createPercentageRange(50, 100),
0,
10,
500
)
let myeffect_2 = extraEffects.createCustomSpreadEffectData(
extraEffects.createPresetColorTable(ExtraEffectPresetColor.Smoke),
true,
extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Spark),
extraEffects.createPercentageRange(10, 20),
extraEffects.createPercentageRange(10, 20),
extraEffects.createTimeRange(2000, 5000),
0,
0,
extraEffects.createPercentageRange(50, 100),
0,
0,
500
)
switch_heat = 2
scene.setBackgroundImage(img`
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff22222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffeeeeeceeceeeceeeee76557575ddddddbbbddddbbbbbbbbbb655ccccccccccccfccccfffff
    ffff22222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffeeeeeeeceeceeeceeeee77657755ddddddbbdddddbbbbbbbbbb76577ccfccccccccfcccfffff
    ffff22222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffeceeeeeeeceeceeeceeeee7776775ddddddddbbbbbddbbbbbbbb77767756ccccccccccfccfffff
    ffff22222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffeeeceeeeeeeceeceeeceeeee7777777dddddbbbbbbbbbddbbbbbbd7777777777cccccccccccfffff
    ffffffffffffffffffffffffffffffffffffffcccccffffffffffffffffffffffffffffffffffffeeeceeeeeeeceeceeeceeeee7777777dddddbbbbbbbbbddddddddd7777777777cccccccccccfffff
    ffff2222222222222222222fffffffffffffffffcccffffffffffffffffffffffffffffffffceeceeeceeeeeeeceeceeeceeeee7777777dddddbbbbbbbbbddddddddd77777777777777cccccccfffff
    ffff2222222222222222222fffffffffffffffcccccffffffffffffffffffffffffffffffffceeceeeceeeeeeeceeceeeceeeee7777777dddddbbbbbbbbbddddddddd77777777777777cccccccfffff
    ffff2222222222222222222fffffffffffffffcccccfffffffffffffffffffffffffffffffcceeceeeceeeeeeeceeceeeceeeee7777777dddddbbbbbbbbbdddddddd7777777777777777ccccccfffff
    ffffffffffffffffffffffffffffffffffffcccccccffffffffffffffffffffffffffffffeeceeceeeceeeeeeeceeceeeceeeee77757777ddddbbbbbdddddddddddd77775777777777777cccccfffff
    ffff444444444444444effffffffffffffffcccccccffffffffffffffffffffffffffffceeeceeceeeceeeeeeeceeceeeceeeee77777777ddddddddbbddddddddddb7777777777777777777cccfffff
    ffff4444444444444444fffffffffffffffccccccccfffffffffffffffffffffffffffceeeeceeceeeceeeeeeeceeceeeceeeee77777777ddddddddbbbdddddddddb77777777777777777777ccfffff
    ffff4444444444444444ffffffffffffffffcccccccfffffffffffffffffffffffffeeeeeeeceeceeeceeeeeeeceeceeeceeeee77777777dddddddbbbbddbbbbd1db7777777777777777777777fffff
    ffff4444444444444444ffffffffffffffcccccccccfffffffffffffffffffffffffeeeeeeeceeceeeceeeeeeeceeceeeceeece77777777ddddddddbbddbbbbbbdd77777777777777777777777fffff
    fffffffffffffffffffffffffffffffffffccccccccfffffffffffffffffffffffffeeeeeeeceeceeeceeeeeeeceeceeeceeeee77775777ddddddddddddbbbbbbd1d7777757777777777ccccccfffff
    fffffffffffffffffffffffffffffffffccccccccccffffffffffffffffffffffffceeeceeeceeceeeceeeeeeeceeceeeceeeee77575577dddddddddd11bbbbbbd11b775755777777777ccccccfffff
    ffffffffffffffffffffffffffffffffffcccccccccfffffffffffffffffffffffeceeeeeeeceeceeeceeeeeeeceeceeeceeeee7675757ddddddddddd11bbbbbbd11d767575757777777ccbcccfffff
    ffffffffffffffffffffffffffffffffccccfccccccfffffffffffffffffffffffeceeeceeeceeceeeceeeeeeeceeceeeceeeee776777dddddddddddd11bbbbbbd11d776777556777777ccccccfffff
    fffffffffffffffffffffffffffffffffccfcccccccfffffffffffffffffffffeeeceeeeeeeceeceeeceeeeeeeceeceeeceeeee777677dddddddddddddddbdddd111d777677767777777ccccccfffff
    ffffffffffffffffffffffffffffffffcccccccccccffffffffffffffffffffffeeceeeeeeeceeceeeceeeceeeceeceeeceeeee77777ddddddddddbbbbbbbd111111d777777777777577ccccccfffff
    fffffffffffffffffffffffffffffffccccccccccccffffffffffffffffffffceeeceeeceeeceeceeeceeeeeeeceeceeeceeeee77777dddddddddbbbbbbbbbd11111d777777777777777ccccccfffff
    ffffffffffffffffffffffffffffffcccccccccccccfffffffffffffffffffcceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeee77777dddddddddbbbbbbbbbb1111d7777777777777777ccccccfffff
    fffffffffffffffffffffffffffffffccccccccccccfffffffffffffffffffcceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeee7777ddddddddddbbbbbbbbbb111d77777777777777777ccccccfffff
    fffffffffffffffffffffffffffffffccccccccccccfffffffffffffffffceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeee77ddddddddddddbbbbbbbbbb11d777777777777777777ccccccfffff
    ffffffffffffffffffffffffffffffcccccccccccccfffffffffffffffffceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeee77ddddddddddddbbbbbbbbbbbb7777777577777777777ccccccfffff
    ffffffffffffffffffffffffffffffcfcccccccccccffffffffffffffeeeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeee7dddddddddddddbbbbbbbbbb777777777677777777777ccccccfffff
    ffffffffffffffffffffffffffffffcccccccccccccfffffffffffffceeeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeee7dddddddddddddbbbbbbbbbb777777777777777777777ccbcccfffff
    ffffffffffffffffffffffffffffcccccccccccccccffffffffffffeeeeeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeee7dddddbdddddddbbbbbbbbbd777777777777777777777ccccccfffff
    ffffffffffffffffffffffffffffcccccccccccccccfffffffffffeeeeeeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeee7dddddbbbddddddbbbbbbb1d777777777777777777777ccccccfffff
    fffffffffffffffffffffffffffccccccccccccccccffffffffffeeeeeeeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeee7dddddbbbddddddddddddb1d777777cccccccccccccccccccccfffff
    fffffffffffffffffffffffffffccccccccccccccccffffffffffeeeeeeeceeceeeceeeeee4444ceeeceeeeee4444ceeeceeece7ddddddbbbddddddddddb11d777777cccccccccbcccccccccccfffff
    ffffffffffffffffffffffffffffcccccccccccccccffcffffeeceeeeeee7eeceeeceeeeee4774ceeeceeeeee4774ceeeceeeee7ddddddddddddddddddd111d777777ccbccccccccccccccbcccfffff
    ffffffffffffffffffffffffffffccfcccccfccccccffcffffeeceeeeeee7eeceeeceeeeee4774ceeeceeeeee4774ceeeceeeee7dddddddddddddddddddd11d777777cccccccccccccccccccccfffff
    fffffffffffffffffffffffffffccccccccfcccccccffffffeeeceeeeeeeceeceeeceeeeeeee44ceeeeeeeeeeee44ceeeeeeeee7dddddddddddddddddbbd11d777777cccccccccccccccccccccfffff
    fffffffffffffffffffffffffffccccccccccccccccfffffceeeceeeeeeeceeceeeceeeeeeeceec4444eeeeeeeceec4444eeeee7d1ddddddddddddddbbbb117777577ccccccbccccccccccccccfffff
    ffffffffffffffffffffffffffcccccccccccccccccfffeece7eceeeeeeeceece7eceeeeeeeceec4774eeeeeeeceec4774eeeee7d11ddddddbbbbbbddbbb1d7777777cccccccccccccccccccccfffff
    ffffffffffffffffffffffffffcccccccccccccccccfffeeceeeceeeeeeeceeceeeceeeeeeeceec4444eeeeeeeceec4444eeeee7d11ddddddbbbbbbddddd177777777cccccccccccccccccccccfffff
    fffffffffffffffffffffffffccccccccccccccccccfffeeceeeceeeeeeeceeceeeceeeeeeeceeceeeeeeeeeeeceeceeeeeeeeebdd11dddddbbbbbbddddd177777777cccccccccccccccccccccfffff
    fffffffffffffffffffffffffccccccccccccccccccfcceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeeebdbbbdddddbbbbbbdddd1177777777cccccccccccccccccccccfffff
    ffffffffffffffffffffffffffcccccccccccccccccceceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeeebbbbbbddddbbbbbbddd11177777777cccccccccccccccccccccfffff
    fffffffffffffffffffffffffccccccfcccccccccccfcceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeebbbbbbbbddddbbbbbdd111177777777cccccccccccccccccccccfffff
    ffffffffffffffffffffffffcccccccccccccccccccfcceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeebbbbbbbbddddbbbbdd1111777777777ccbccccccccccccccbcccfffff
    fffffffffffffffffffffffcccccccccccccccccccceeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeebbbbbbbbdddddddddd111d777777777cccccccbcccccccccccccfffff
    fffffffffffffffffffffffcccccccccccccccccccceeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeebbbbbbbbdddddddddd11dd777777777cccccccccccccccccccccfffff
    ffffffffffffffffffffffffccccccccccccccccccceeeeeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeebbbbbbbbddddddddddddddccccccccccccccccccccccccccccccfffff
    ffffffffffffffffffffffffcccccccccccccccccc7e4444ceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeebbbbbbbbddddddddddddddcccbccccccccccccccbcccccccccccfffff
    fffffffffffffffffffffffccccccccccccccccccc7e4774ceeeceeeeeee7eeceeeceeeeeee7eeceeeceeeeeee7eeceeeceeeebbbbbbbbddddddddddddddcccccccccccbccccccccccccccbcccfffff
    ffffffffffffffffffffffccccccccfcccccfcccc77e4774ceeeceeeeeee7eeceeeceeeeeee7eeceeeceeeeeee7eeceeeceeeeddbbbbbbbdddddddddddddccccccccccccccccccccccccccccccfffff
    fffffffffffffffffffffffccccccccccccfcccccc7eee44ceeeeeeeeeeeceeceeeceeeeeeeceeceeeceeeeeeeceeceeeceeeed1dddddddddddddddddddbccccccccccccccccccccccccccccccfffff
    fffffffffffffffffffffffccccccccccccccccce77eeceec4444eeeeeeeceeceeeceeeeeeececccceceeeeeeeceeceeeceeeeb11111111dbbbbbbdddddcccccccccccccccccccccccccccccccfffff
    fffffffffffffffffffffccccccccccccccccccc777eeceec4774eeeeeeeceece7eceeeeeeeccfeeffceeeeeeeceece7eceeeeeb1111111ddddddddddddcccccccccccccccccccccccccccccccfffff
    fffffffffffffffffffffffcccccccccccccccccc77eeceec4444eeeeeeeceeceeeceeeeeecff2222ffceeeeeeceeceeeceeeee77111111ddddddddddddcccccccccccccccccccccccccccccccfffff
    fffffffffffffffffffffffccccccccccccccccc777eeceeceeeeeeeeeeeceeceeeceeeeecfffeeeefffceeeeeceeceeeceeeee77111111dddddddddddbbccccccccccccccbccccccccccccccbfffff
    ffffffffffffffffffffffcccccccccccccccccc777eeceeceeeceeeeeeeceeceeeceeeeeffe222222ecfeeeeeceeceeeceeeee7411111111ddddddddbccccccccccccccccccccccccccccccccfffff
    ffffffffffffffffffffffccccccccccccccccccc77eeceeceeeceeeeeeeceeceeeceeeeeff2effffe2cfeeeeeceeceeeceeeee744d111111dddddddbcccccccccccccccccccccccccccccccccfffff
    fffffffffffffffffffffccccccccccfccccccccc77eeceeceeeceeeeeeeceeceeeceeeeeffffeeeeffffeeeeeceeceeeceeeee742d11111111111bcccccccccccccccccccccccccccccccccccfffff
    fffffffffffffffffffffccccccccccccccccccce77eeceeceeeceeeeeeeceeceeeceeeecfcfcf44fcfcfcceeeceeceeeceeeee744411111111113ecbccccccccccccccbccccccccccccccbcccfffff
    ffffffffffffffffffffffcccccccccccccccccc777eeceeceeeceeeeeeeceeceeeceeeecce4dfddfd4eccceeeceeceeeceeeee7e4555111111d42eccccccbccccccccccccccbcccccccccccccfffff
    ffffffffffffffffffffffcccccccccccccccccc777eeceeceeeceeeeeeeceeceeeceeeeeffffdddddeefcceeeceeceeeceeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccfffff
    fffffffffffffffffffffcccccccccccccccccccc7777775777777777777775777777777ebdddf444eee7777777757777777777666666666666666ccccccccccccccccccccccccccccccccccccfffff
    fffffffffffffffffffffcccccccccccccccccccc7777575577777777777575577777777ecbbbf2222f4e777775755777777777667777677776666cccccccccbccccccccccccccbcccccccccccfffff
    ffffffffffffffffffffffccccccccccccccccccc7777757575777777777757575777777eccbcc4422f44777777575757777777666677777766766ccbccccccccccccccbccccccccccccccbcccfffff
    ffffffffffffffffffffffccccccccfcccccfccc777776777576777777776777576777777eccfe44eee47777776777576777777676666666666667ccccccccccccccccccccccccccccccccccccfffff
    fffffffffffffffffffffffccccccccccccfcccc7777777777777777777777777777777777eeffccff777777777777777777777676667666676667ccccccccccccccccccccccccccccccccccccfffff
    fffffffffffffffffffffcccccccccccccccccccc77777777777777577777777777777577777ee77ee777577777777777777577677666666666677ccccccccccccccccccccccccccccccccccccfffff
    fffffffffffffffffffffccccccccccccccccccc677777777777777777777777777777777777777777777777777777777777777666666666666666ccccccccccccccccccccccccccccccccccccfffff
    fffffffffffffffffffffffcccccccccccccccccc77777777777777777777777777777777777777777777777777777777777777666666666676666ccccccccccccccccccccccccccccccccccccfffff
    fffffffffffffffffffffffccccccccccccccccccc7777777777777777777777777777777777777777777777777777777777777666666776666667cccccbccccccccccccccbccccccccccccccbfffff
    fffffffffffffffffffffcccccccccccccccccccc77777577777777777777577777777777777577777777777777577777777777676666776666676ccccccccccccccccccccccccccccccccccccfffff
    ffffffffffffffffffffffffcccccccccccccccccc7777577777777777777577777777777777577777777777777577777777777676666666666676ccccccccccccccccccccccccccccccccccccfffff
    ffffffffffffffffffffffffcccccccfcccccccccc7777677777777777777677777777777777677777777777777677777777777667666666667666ccccccccccccccccccccccccccccccccccccfffff
    ffffffffffffffffffffffffccccccccccccccccccc777777777777777777777777777777777777777777777777777777777777667677666667666ccbccccccccccccccbccccccccccccccbcccfffff
    fffffffffffffffffffffffcccccccccccccccccccc777777777777777777777777777777777777777777777777777777777777666676676667666cccccccbccccccccccccccbcccccccccccccfffff
    fffffffffffffffffffffffcccccccccccccccccccc777777777777777777777777777777777777777777777777777777777777666666667777666ccccccccccccccccccccccccccccccccccccfffff
    ffffffffffffffffffffffffcccccccccccccccccccc77757777777777666666666666666777757777777777666666666666666666666666666666666666666666666cccccccccccccccccccccfffff
    fffffffffffffffffffffffffccccccccccccccccccc75755777777777667777677776666775755777777777667777677776666667777677776666667777677776666cccccccccbcccccccccccfffff
    ffffffffffffffffffffffffffcccccccccccccccccc67575757777777666677777766766777575757777777666677777766766666677777766766666677777766766ccbccccccccccccccbcccfffff
    fffffffffffffffffffffffffcccccfcccccccccccccc67775777777776766666666666677767775777777776766666666666676766eeeeeee6667676666666666667cccccccccccccccccccccfffff
    fffffffffffffffffffffffffccccccccccccccccccccc777777777777677667666776667777777777777777677667666776667677eeeeeeeec667677667666776667cccccccccccccccccccccfffff
    ffffffffffffffffffffffffffcccccccccccccccccccc777777777577677666666666677777777777777577677666666666677677eeeeeeeec677677666666666677cccccccccccccccccccccfffff
    fffffffffffffffffffffffffffccccccccccccccccccc777777777777666666666666666777777777777777666666666666666666eeeeeeeec666666666666666666cccccccccccccccccccccfffff
    fffffffffffffffffffffffffffccccccccccccccccccccc7777777777666666666676666777777777777777666666666676666666eeeeeeeec666666666666676666cccccccccccccccccccccfffff
    fffffffffffffffffffffffffffcccccccccccccccccccccc777777777666666777666667777777777777777666666777666667666eeeeeeeec667666666777666667cccccbcccccbccccccccbfffff
    ffffffffffffffffffffffffffffcccccccccccccccccccccc77777777676666776666676777577777777777676666776666676676ceeeeeeec676676666776666676cccccccccccccccccccccfffff
    ffffffffffffffffffffffffffffcccccccccccccccccccccc777777776766666666666767775777777777776766666666666766766eeeeeec6676676666666666676cccccccccccccccccccccfffff
    ffffffffffffffffffffffffffffcccfccccccccccccccfcccccc77777667666666667666777677777777777667666666667666667666666666666667666666667666cccccccccccccccccccccfffff
    fffffffffffffffffffffffffffffcccccccccccccccccccccccc77777667677666667666777777777777777667677666667666667666666666666667677666667666ccbccccccccccccccbcccfffff
    ffffffffffffffffffffffffffffffcccccccccccccccccccccccc7777666676676667666777777777777777666676676667666666666676666666666676676667666cccccccbcccccccccccccfffff
    ffffffffffffffffffffffffffffffccccccccccccccccccccccccc777666666667777666777777777777777666666667777666666666667777666666666667777666cccccccccccccccccccccfffff
    ffffffffffffffffffffffffffffffcccccccccccccfffffffffffff66666666666666666666666666666666ccccccccccccccc666666666666666ccccccccccccccccccccccccccccccccccccfffff
    ffffffffffffffffffffffffffffffffcccccccccccffccccfcccfffc6667777677766666667777677766666cccccccccbccccc667777677766666cccccccccbccccccccccccccbcccccccccccfffff
    fffffffffffffffffffffffffffffffffccccccccccffffccccccffccffc6677777766766666677777766766ccbcccccccccccc666677777766766ccbccccccccccccccbccccccccccccccbcccfffff
    ffffffffffffffffffffffffffffffffcccccccccccfcffffffffffffcfccceeeeeee6667676666666666667ccccccccccccccc676666666666667ccccccccccccccccccccccccccccccccccccfffff
    ffffffffffffffffffffffffffffffffffcccccccccfccffcfffccfffcfccfffceeeec667677667666776667ccccccccccccccc677667666776667ccccccccccccccccccccccccccccccccccfffffff
    fffffffffffffffffffffffffffffffffffccccccccfccfffffffffffcfccfffffeeec677677666666666677ccccccccccccccc677666666666677ccccccccccccccccccccccccccccccccfffffffff
    ffffffffffffffffffffffffffffffffffcccccccccfffffffffffffffffffffffffffc66666666666666666ccccccccccccccc666666666666666cccccccccccccccccccccccccccccccffffffffff
    ffffffffffffffffffffffffffffffffffffcccccccffffffffffcffffffffffffffffffcff6666666676666ccccccccccccccc666666666676666cccccccccccccccccccccccccccccffffffffffff
    ffffffffffffffffffffffffffffffffffffffcccccffffffcccfffffcffffffffffffffcfc6666777666667cccccbcccccbccc666666777666667cccccbcccccbccccccccbcccccbccffffffffffff
    fffffffffffffffffffffffffffffffffffffffccccfcffffccfffffcffcfffffffffffcffc6666776666676ccccccccccccccc676666776666676ccccccccccccccccccccccccccccfffffffffffff
    ffffffffffffffffffffffffffffffffffffffcccccfcfffffffffffcffcfffffffffffcffcffff666666676ccccccccccccccc676666666666676cccccccccccccccccccccccccffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffcccffcffffffffcfffffcffffffffffffffcfff666667666ccccccccccccccc667666666667666cccccccccccccccccccccccccffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffccffcfccfffffcfffffcffffffffffffffcfccff6667666ccbcccccccccccc667677666667666ccbccccccccccccccbcccccffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffcffffcffcffccffffffffffcfffffffffffcffcff67666cccccccbccccccc666676676677666cccccccbcccccccccccccffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffccccfffffffffffccccfffffffffffcccc666ccccccccccccccc666666667777666cccccccccccccccccccffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffcccccccccccccffccccfcccfffffffffffffffffffffccccccccbccccccccccccccbccccccccccccccbcccccffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffcccccccccccccffffcccccfffccffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffcccfcccccccfcffffffffffffcfffffffffffffffffffffffccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffcccccccccccfccffccffccfffcffffffffffffffffffffffffffccccccccccbccccccccccccfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffccccccccccfccfffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffccccccccffffffffffcfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffccccccccffffffcccfffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.onUpdateInterval(200, function () {
    grow_time += 1
    if (grow_time == 31) {
        grow_time = 0
    }
})
game.onUpdateInterval(500, function () {
    if (has_been_made == 1) {
        if (tiles.tileAtLocationEquals(player_1.tilemapLocation(), sprites.castle.tileDarkGrass1) || (tiles.tileAtLocationEquals(player_1.tilemapLocation(), sprites.castle.tilePath5) || (tiles.tileAtLocationEquals(player_1.tilemapLocation(), sprites.dungeon.darkGroundCenter) || (tiles.tileAtLocationEquals(player_1.tilemapLocation(), sprites.castle.tileGrass1) || tiles.tileAtLocationEquals(player_1.tilemapLocation(), assets.tile`myTile6`))))) {
            animation.runImageAnimation(
            player_1,
            [img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........fff22fff........
                .......fff2222fff.......
                ......fffeeeeeefff......
                ......ffe222222eef......
                ......fe2ffffff2ef......
                ......ffffeeeeffff......
                .....ffefbf44fbfeff.....
                .....fee41fddf14eef.....
                ......ffffdddddeef......
                .....fddddf444eef.......
                .....fbbbbf2222f4e......
                .....fbbbbf2222fd4......
                ......fccf45544f44......
                .......ffffffff.........
                .........ff..ff.........
                ........................
                ........................
                ........................
                ........................
                `],
            100,
            true
            )
        }
    }
})
game.onUpdateInterval(500, function () {
    if (switch_heat == 0) {
        if (time >= 14) {
            if (statusbar3.value >= 20) {
                statusbar3.value += -1
            }
            if (heat >= -80) {
                heat += -1
            }
        }
    }
})
game.onUpdateInterval(10000, function () {
    time += 1
    if (time >= 24) {
        time = 0
    }
})
forever(function () {
    if (time == 0) {
        multilights.toggleLighting(false)
        multilights.removeLightSource(player_1)
    } else if (time == 14) {
        multilights.toggleLighting(true)
        multilights.addLightSource(player_1, 30)
    } else if (time == 18) {
        multilights.bandWidthOf(player_1, 20)
    } else if (time == 20) {
        multilights.bandWidthOf(player_1, 10)
    } else if (time == 22) {
        multilights.bandWidthOf(player_1, 5)
    }
})
forever(function () {
    if (grow_time == randint(8, 10)) {
        tileUtil.replaceAllTiles(assets.tile`myTile9`, assets.tile`myTile10`)
    } else if (grow_time == randint(18, 20)) {
        tileUtil.replaceAllTiles(assets.tile`myTile10`, assets.tile`myTile12`)
    } else if (grow_time == randint(28, 30)) {
        tileUtil.replaceAllTiles(assets.tile`myTile12`, assets.tile`myTile11`)
    }
})
game.onUpdateInterval(600000, function () {
    if (has_fire == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.lightsource)
        multilights.removeLightSource(fire)
    }
    if (made_fire_pit >= 1) {
        fire_pit.setImage(img`
            ........................
            ........................
            .bbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbb.
            .bbddddddddddddddddddbb.
            .bbddddddddddddddddddbb.
            .bbdddcddddddddddddcdbb.
            .bbdddddddddddddcddddbb.
            .bbddddddddddddddddcdbb.
            .bbdcddddddddddddddddbb.
            .bbddddddddddddddddddbb.
            .bbddddddddddddddddddbb.
            .bbdddddddcddddddddddbb.
            .bbddddddddddddddddcdbb.
            .bbdddddddddddcddddddbb.
            .bbdddddddcddddddddddbb.
            .bbdddddddcddddddddddbb.
            .bbcdddddddddddddddddbb.
            .bbdddcddddddddddddddbb.
            .bbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbb.
            ........................
            ........................
            ........................
            `)
        multilights.removeLightSource(fire_pit)
        extraEffects.createSpreadEffectOnAnchor(fire_pit, myeffect_2, -1)
    }
})
game.onUpdateInterval(5000, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.tirmit)
})
game.onUpdateInterval(5000, function () {
    if (has_been_made == 1) {
        statusbar.value += -1
    }
})
game.onUpdateInterval(5000, function () {
    if (time >= 14) {
        if (Math.percentChance(20)) {
            skeleton = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            multilights.addLightSource(skeleton, 5)
            tiles.placeOnRandomTile(skeleton, sprites.dungeon.darkGroundCenter)
            skeleton.follow(player_1, 80)
        }
    } else if (time < 14) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    }
})
forever(function () {
    if (has_been_made == 1) {
        if (has_bow == 1) {
            if (controller.A.isPressed()) {
                timer.throttle("action", 500, function () {
                    if (characterAnimations.matchesRule(player_1, characterAnimations.rule(Predicate.FacingRight))) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . d . . . 
                            . . . . . . e e e e e e e d d . 
                            . . . . . . . . . . . . d . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, player_1, 150, 0)
                    } else if (characterAnimations.matchesRule(player_1, characterAnimations.rule(Predicate.FacingLeft))) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . d . . . 
                            . . . . . . e e e e e e e d d . 
                            . . . . . . . . . . . . d . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, player_1, -150, 0)
                    } else if (characterAnimations.matchesRule(player_1, characterAnimations.rule(Predicate.FacingUp))) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . d . . . . . . . 
                            . . . . . . . . d . . . . . . . 
                            . . . . . . . d e d . . . . . . 
                            . . . . . . . . e . . . . . . . 
                            . . . . . . . . e . . . . . . . 
                            . . . . . . . . e . . . . . . . 
                            . . . . . . . . e . . . . . . . 
                            . . . . . . . . e . . . . . . . 
                            . . . . . . . . e . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, player_1, 0, -150)
                    } else if (characterAnimations.matchesRule(player_1, characterAnimations.rule(Predicate.FacingDown))) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . e . . . . . . . . 
                            . . . . . . . e . . . . . . . . 
                            . . . . . . . e . . . . . . . . 
                            . . . . . . . e . . . . . . . . 
                            . . . . . . . e . . . . . . . . 
                            . . . . . . . e . . . . . . . . 
                            . . . . . . d e d . . . . . . . 
                            . . . . . . . d . . . . . . . . 
                            . . . . . . . d . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, player_1, 0, 150)
                    }
                })
            }
        }
    }
})
forever(function () {
    if (has_been_made == 1) {
        if (statusbar2.value == 0) {
            game.gameOver(false)
        }
    }
})
forever(function () {
    if (has_been_made == 1) {
        if (statusbar.value >= 50) {
            controller.moveSprite(player_1, 100, 100)
        } else if (statusbar.value < 50) {
            controller.moveSprite(player_1, 50, 50)
            if (statusbar.value <= 30) {
                blur.SetBlurFilter(2)
                Zoom.SetZoomFilter(2, Mode.Center)
            }
            if (statusbar.value <= 10) {
                timer.throttle("action", 10000, function () {
                    scene.cameraShake(4, 500)
                    statusbar2.value += -10
                })
            }
        }
    }
})
forever(function () {
    if (heat <= -80) {
        timer.throttle("action", 5000, function () {
            player_1.sayText("im cold", 1000, true)
            scene.cameraShake(4, 500)
            statusbar2.value += -10
        })
    }
})
forever(function () {
    if (in_build == 1) {
        if (controller.A.isPressed()) {
            timer.debounce("action", 100, function () {
                if (place == 1) {
                    if (wood_floor >= 1) {
                        tiles.setTileAt(player_1.tilemapLocation(), assets.tile`myTile5`)
                        wood_floor += -1
                    }
                } else if (place == 2) {
                    if (crop_plot >= 1) {
                        tiles.setTileAt(player_1.tilemapLocation(), assets.tile`myTile0`)
                        crop_plot += -1
                    }
                }
            })
        }
    }
})
