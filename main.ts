namespace SpriteKind {
    export const one = SpriteKind.create()
}
/**
 * 6  2  7
 * 
 * 4  1  5
 * 
 * 8  3  9
 */
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    seeker,
    [img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . f f f c c c c c c f f . 
        f f c c c c c c c c c f f 
        f c c c c f c c c c c c f 
        . f f f f c c c c f c c f 
        . f f f f c c f c c c f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e f 
        . . 4 c 7 7 7 7 7 e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . . f f c c c c c c f f . 
        . f f f c c c c c c c f f 
        f f f c c c c c c c c c f 
        f f c c c f c c c c c c f 
        . f f f f f c c c f c f f 
        . f f f f c c f f c f f f 
        . . f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f e . 
        . f e f f f f f f f f e . 
        . e 4 4 e 7 7 7 7 7 c 4 . 
        . . e e f f f f f f f e . 
        . . . . . . . . f f f . . 
        `],
    50,
    true
    )
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.stairNorth, function (sprite, location) {
    if (currentTilemap == 6) {
        currentTilemap = 4
        tiles.placeOnTile(seeker, tiles.getTileLocation(7, 2))
    } else if (currentTilemap == 2) {
        currentTilemap = 1
        tiles.placeOnTile(seeker, tiles.getTileLocation(7, 2))
    } else if (currentTilemap == 7) {
        currentTilemap = 5
        tiles.placeOnTile(seeker, tiles.getTileLocation(7, 2))
    } else if (currentTilemap == 4) {
        currentTilemap = 8
        tiles.placeOnTile(seeker, tiles.getTileLocation(7, 2))
    } else if (currentTilemap == 1) {
        currentTilemap = 3
        tiles.placeOnTile(seeker, tiles.getTileLocation(7, 2))
    } else {
        currentTilemap = 9
        tiles.placeOnTile(seeker, tiles.getTileLocation(7, 2))
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    seeker,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    50,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    seeker,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    50,
    true
    )
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.stairSouth, function (sprite, location) {
    if (currentTilemap == 9) {
        currentTilemap = 5
        tiles.placeOnTile(seeker, tiles.getTileLocation(8, 13))
    } else if (currentTilemap == 3) {
        currentTilemap = 1
        tiles.placeOnTile(seeker, tiles.getTileLocation(8, 13))
    } else if (currentTilemap == 8) {
        currentTilemap = 4
        tiles.placeOnTile(seeker, tiles.getTileLocation(8, 13))
    } else if (currentTilemap == 5) {
        currentTilemap = 7
        tiles.placeOnTile(seeker, tiles.getTileLocation(8, 13))
    } else if (currentTilemap == 1) {
        currentTilemap = 2
        tiles.placeOnTile(seeker, tiles.getTileLocation(8, 13))
    } else {
        currentTilemap = 6
        tiles.placeOnTile(seeker, tiles.getTileLocation(8, 13))
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    seeker,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        f f f f f f f c c f f f c 
        f f f f c f f f f f f f c 
        . c c c f f f e e f f c c 
        . f f f f f e e f f c c f 
        . f f f b f e e f b f f f 
        . f f 4 1 f 4 4 f 1 4 f f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 7 7 7 e 4 4 4 e 
        . e 4 f 7 7 7 7 e 4 4 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f c f f f f f f . . 
        c f f f c c f f f f f f f 
        c f f f f f f f c f f f f 
        c c f f e e f f f c c c . 
        f c c f f e e f f f f f . 
        f f f b f e e f b f f f . 
        f f 4 1 f 4 4 f 1 4 f f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e 7 7 7 b f e f . 
        . e 4 4 e 7 7 7 7 f 4 e . 
        . . e e 6 6 6 6 6 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    50,
    true
    )
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.stairWest, function (sprite, location) {
    if (currentTilemap == 6) {
        currentTilemap = 2
        tiles.placeOnTile(seeker, tiles.getTileLocation(2, 8))
    } else if (currentTilemap == 4) {
        currentTilemap = 1
        tiles.placeOnTile(seeker, tiles.getTileLocation(2, 8))
    } else if (currentTilemap == 8) {
        currentTilemap = 3
        tiles.placeOnTile(seeker, tiles.getTileLocation(2, 8))
    } else if (currentTilemap == 2) {
        currentTilemap = 7
        tiles.placeOnTile(seeker, tiles.getTileLocation(2, 8))
    } else if (currentTilemap == 1) {
        currentTilemap = 5
        tiles.placeOnTile(seeker, tiles.getTileLocation(2, 8))
    } else {
        currentTilemap = 9
        tiles.placeOnTile(seeker, tiles.getTileLocation(2, 8))
    }
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.stairEast, function (sprite, location) {
    if (currentTilemap == 1) {
        currentTilemap = 4
        tiles.placeOnTile(seeker, tiles.getTileLocation(13, 8))
    } else if (currentTilemap == 2) {
        currentTilemap = 6
        tiles.placeOnTile(seeker, tiles.getTileLocation(13, 8))
    } else if (currentTilemap == 3) {
        currentTilemap = 8
        tiles.placeOnTile(seeker, tiles.getTileLocation(13, 8))
    } else if (currentTilemap == 7) {
        currentTilemap = 2
        tiles.placeOnTile(seeker, tiles.getTileLocation(13, 8))
    } else if (currentTilemap == 5) {
        currentTilemap = 1
        tiles.placeOnTile(seeker, tiles.getTileLocation(13, 8))
    } else {
        currentTilemap = 3
        tiles.placeOnTile(seeker, tiles.getTileLocation(13, 8))
    }
})
let seeker: Sprite = null
let currentTilemap = 0
let ListOfTilemaps = [
tilemap`level1`,
tilemap`level13`,
tilemap`level6`,
tilemap`level7`,
tilemap`level8`,
tilemap`level9`,
tilemap`level10`,
tilemap`level11`,
tilemap`level12`
]
let listsOfListsOfCoordinatesX = [
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
]
]
let ListsOfListsOfCoordinatesY = [
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
]
]
for (let index = 0; index <= 8; index++) {
    listsOfListsOfCoordinatesX[index] = [
    randint(0, 15),
    randint(0, 15),
    randint(0, 15),
    randint(0, 15),
    randint(0, 15),
    randint(0, 15)
    ]
}
for (let index = 0; index <= 8; index++) {
    ListsOfListsOfCoordinatesY[index] = [
    randint(0, 15),
    randint(0, 15),
    randint(0, 15),
    randint(0, 15),
    randint(0, 15),
    randint(0, 15)
    ]
}
currentTilemap = 1
seeker = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
let _1r1 = sprites.create(img`
    ................86..................
    ...........6688867886...............
    ...........8666877688868............
    ............868777767768............
    .........688667777776688............
    ........67767777777778666...........
    .........6776667767666868...........
    ..........866667667677688...........
    .........8666666666667778...........
    ........667766666666666676..........
    .......67766667666776667776.........
    ......886667776676777666688.........
    .....67766777667767777666768........
    ....6776666666777667776666776.......
    .....8667776667766676677776776......
    ......8777666666667776777776688.....
    ....6887766776677677777777776776....
    ..8866666677767777777777766666778...
    .86666666777667767777766666776668...
    ..88677666666777677677666667776668..
    ..86776677666666666666667776666668..
    886666677766667666666776677766668...
    6668666676667766767767766677666668..
    88866666666777677677667666666776668.
    .86668866666766776776666667766666668
    .86688666666666776666667667776666688
    .668866666666666666666677666666688..
    ..8866686666666666677667776666668...
    ...866886666666666677667776666668...
    ...86886668666666667666666666888....
    ....88866886686666666666666668......
    ......86886668666866668666868.......
    ......88866688668866688866888.......
    ........8888888688888ce868..........
    ..............e88e88.ec.8...........
    ...............eeee..e..............
    ...............ceef.ce..............
    ...............ceefcec..............
    ...............feefce...............
    ...............fceeec...............
    ...............ffceec...............
    `, SpriteKind.Player)
_1r1.setScale(0.5, ScaleAnchor.Middle)
let _1r2 = sprites.create(img`
    ...............cc...............
    ............ccc65c66............
    ............c6c55c76............
    ...........6cc7557c66...........
    ..........cc77777577c6..........
    .........666c677776cc66.........
    ........c7776c7c67657576........
    ........ccc666c666655666........
    ......c66cc7666667777c6766......
    .....c777c77667667767767776.....
    .....cc66cccc77c677cc666666.....
    ....c6766666c7c6767677777766....
    ...cc777666666677767777667c66...
    .666cc6677666667777777776677666.
    .67776677c676677777776677677776.
    cc6666ccc67767776777776cc7767666
    c666777667766776c776777c67776c66
    .c6777666ccc667c676cc666667776c.
    .cc6666766666cc66666666776cc666.
    ...66776c666666666677667766cccc.
    ...cc76c66766666667677667776c...
    ...6cccc677666666776777c77666...
    ......6ccc7c67767776c776cc......
    ........ccc6777c67776cc6........
    ...........cc77c67766...........
    .............6c6666.............
    ............ffeeeef.............
    ..........ffeeeeeeeef...........
    .............feeeffe............
    ..............fef...............
    ..............fef...............
    ...............f................
    `, SpriteKind.Player)
_1r2.setScale(0.5, ScaleAnchor.Middle)
let _1r3 = sprites.create(img`
    ......cc66......
    .....c6576c.....
    ....c677576c....
    ....cc677666....
    ...cc6c6667cc...
    ..6c666777cc6c..
    ..c76666766776..
    ..c6777777776c..
    ..cc67777776cc..
    .c67cc76676676c.
    .c777666667777c.
    .c6777777777766.
    .cc7767776776666
    c676cc6766666776
    c777766666677776
    cc7777777777776c
    .c676777677767c.
    ..cc667666766c..
    ...ccc6c66ccc...
    .....cccccc.....
    .......ee.......
    ......eeee......
    .....eeeeee.....
    .......ee.......
    `, SpriteKind.Player)
_1r3.setScale(0.5, ScaleAnchor.Middle)
let _1r4 = sprites.create(img`
    .............6666...............
    ..........666667766.6666........
    .........677777777767776........
    ......66667775577757777666......
    .....677666675557557776777666...
    .....6776777775555577777766776..
    ...66666777777775777777766666...
    .66667767777755757555777776776..
    6666777677775577557555777767766.
    .6667767777777775577777777767666
    .c6766777677777775777777677766..
    cc77666667777777777777777666666c
    cc76666677777777777777777766776c
    c6666776777777777777766677666776
    66667766667776777767767766766666
    ccc76677677776677766767776776ccc
    cc7766776777677677676667767766cc
    .666c676667677766667766666666cc.
    .ccc66676666776666677677666cccc.
    ...ccc77c6767666676676677666ccc.
    ...cc676c7766676677666666c666cc.
    ....c6cc676c6677677c66c666ccc...
    ....ccccc6c66667667cc6ccc6ccc...
    ......ccccc66c66c66cccccccc.....
    .......cc.cc6c6ccc6cccc.cc......
    ...........cccccccccc...........
    .............feeeeee............
    ............feeeeeefe...........
    .........eeeeefeeeffee..........
    ............ffffeef..ee.........
    ...............fee..............
    ................e...............
    `, SpriteKind.Player)
_1r4.setScale(0.5, ScaleAnchor.Middle)
let _1r5 = sprites.create(img`
    ......cc66......
    .....c6576c.....
    ....c677576c....
    ....cc677666....
    ...cc6c6667cc...
    ..6c666777cc6c..
    ..c76666766776..
    ..c6777777776c..
    ..cc67777776cc..
    .c67cc76676676c.
    .c777666667777c.
    .c6777777777766.
    .cc7767776776666
    c676cc6766666776
    c777766666677776
    cc7777777777776c
    .c676777677767c.
    ..cc667666766c..
    ...ccc6c66ccc...
    .....cccccc.....
    .......ee.......
    ......eeee......
    .....eeeeee.....
    .......ee.......
    `, SpriteKind.Player)
_1r5.setScale(0.5, ScaleAnchor.Middle)
let _1r6 = sprites.create(img`
    ................86..................
    ...........6688867886...............
    ...........8666877688868............
    ............868777767768............
    .........688667777776688............
    ........67767777777778666...........
    .........6776667767666868...........
    ..........866667667677688...........
    .........8666666666667778...........
    ........667766666666666676..........
    .......67766667666776667776.........
    ......886667776676777666688.........
    .....67766777667767777666768........
    ....6776666666777667776666776.......
    .....8667776667766676677776776......
    ......8777666666667776777776688.....
    ....6887766776677677777777776776....
    ..8866666677767777777777766666778...
    .86666666777667767777766666776668...
    ..88677666666777677677666667776668..
    ..86776677666666666666667776666668..
    886666677766667666666776677766668...
    6668666676667766767767766677666668..
    88866666666777677677667666666776668.
    .86668866666766776776666667766666668
    .86688666666666776666667667776666688
    .668866666666666666666677666666688..
    ..8866686666666666677667776666668...
    ...866886666666666677667776666668...
    ...86886668666666667666666666888....
    ....88866886686666666666666668......
    ......86886668666866668666868.......
    ......88866688668866688866888.......
    ........8888888688888ce868..........
    ..............e88e88.ec.8...........
    ...............eeee..e..............
    ...............ceef.ce..............
    ...............ceefcec..............
    ...............feefce...............
    ...............fceeec...............
    ...............ffceec...............
    `, SpriteKind.Player)
_1r6.setScale(0.5, ScaleAnchor.Middle)
let _2r1 = sprites.create(img`
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
    `, SpriteKind.Player)
_2r1.setScale(0.5, ScaleAnchor.Middle)
let _2r2 = sprites.create(img`
    ..........bbbbbbbbbbbb..........
    .......bbb331111333333bbb.......
    .....cbb3331111113333333bbb.....
    ....cb33333311113333333111db....
    ...cb3111133333333333311111db...
    .ccbb1111113333333333311111ddcc.
    ccbbd1111113333333333331111ddbcc
    cbbbdd11111333333111333311ddbbbc
    cbbbdddd1133333311111333bbbbbbbc
    .cbbbddddbbb33331111dbbbbbbbbbc.
    .ccbbbbbbbbbbbbbbdddbbbbbbbbbcc.
    ...cccbbbbbbbbbbbbbbbbbbbbccc...
    ......cccccccccccccccccccc......
    ............bbbd11bb............
    ...........bbbdd111bb...........
    ..........bbbdddd11dbb..........
    `, SpriteKind.Player)
_2r2.setScale(0.5, ScaleAnchor.Middle)
let _2r3 = sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Player)
_2r3.setScale(0.5, ScaleAnchor.Middle)
let _2r4 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .........888........
    .........888........
    ......888888888.....
    ........fffff.......
    .......9999999......
    .......9999999......
    .......9999999......
    .......9999999......
    .......9999999......
    .......9999999......
    ......888888888.....
    ......fffffffff.....
    ....................
    ....................
    `, SpriteKind.Player)
_2r4.setScale(0.5, ScaleAnchor.Middle)
let _2r5 = sprites.create(img`
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
    `, SpriteKind.Player)
_2r5.setScale(0.5, ScaleAnchor.Middle)
let _2r6 = sprites.create(img`
    ..........bbbbbbbbbbbb..........
    .......bbb331111333333bbb.......
    .....cbb3331111113333333bbb.....
    ....cb33333311113333333111db....
    ...cb3111133333333333311111db...
    .ccbb1111113333333333311111ddcc.
    ccbbd1111113333333333331111ddbcc
    cbbbdd11111333333111333311ddbbbc
    cbbbdddd1133333311111333bbbbbbbc
    .cbbbddddbbb33331111dbbbbbbbbbc.
    .ccbbbbbbbbbbbbbbdddbbbbbbbbbcc.
    ...cccbbbbbbbbbbbbbbbbbbbbccc...
    ......cccccccccccccccccccc......
    ............bbbd11bb............
    ...........bbbdd111bb...........
    ..........bbbdddd11dbb..........
    `, SpriteKind.Player)
_2r6.setScale(0.5, ScaleAnchor.Middle)
let _3r1 = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Player)
_3r1.setScale(0.5, ScaleAnchor.Middle)
let _3r2 = sprites.create(img`
    ..............bbbbbbb...........
    ...........bb66663333baa........
    .........bb3367776333663aa......
    ........b33333888333389633aa....
    .......b3333333333333389633aa...
    ......b34443333333333338633bae..
    .....b3455433333333334443333ae..
    ....b33322333dddd3333455233daee.
    ...b3d333333dd3bbbb33322333dabe.
    ..b3d333333d3bb33bb33333333da4e.
    ..bd33333333b33aab3333333223a4ee
    .b3d3663333b33aab33366332442b4ee
    .bd3b983333a3aa3333387633ee3b4ee
    .bd6983333baaa333333387633bb4bee
    b3d6833333bba333333333863ba44ebe
    bdd3333333bb3333333333333a44bebe
    add666633333322333366333ba44bbbe
    ad67776333332442336983d3a444b4e.
    add888b333333ee3369833d3a44b44e.
    add333333333333336833d3a444b4e..
    a3dd3333344433333dddd3a444b44e..
    ab33ddd325543333dd33aa444b44e...
    .eabb3dd32233333baaa4444b44e....
    .ebabb3d333d33baa444443b44e.....
    ..ebaab3ddd3aaa4444433b44e......
    ..eebbaab33a44444333b444e.......
    ...eeebbaab444b333b4444e........
    ....ebeeebbbbbbbb4444ee.........
    .....eebbbb44444444ee...........
    .......eeebbb444eee.............
    ..........eeeeee................
    ................................
    `, SpriteKind.Player)
_3r2.setScale(0.5, ScaleAnchor.Middle)
let _3r3 = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . b b 3 3 3 3 b b . . . . 
    . . . c b 3 3 3 3 1 1 b c . . . 
    . . c b 3 3 3 3 3 1 1 1 b c . . 
    . c c 1 1 1 3 3 3 3 1 1 3 c c . 
    c c d 1 1 1 3 3 3 3 3 3 3 b c c 
    c b d d 1 3 3 3 3 3 1 1 1 b b c 
    c b b b 3 3 1 1 3 3 1 1 d d b c 
    c b b b b d d 1 1 3 b d d d b c 
    . c b b b b d d b b b b b b c . 
    . . c c b b b b b b b b c c . . 
    . . . . c c c c c c c c . . . . 
    . . . . . . b 1 1 b . . . . . . 
    . . . . . . b 1 1 b b . . . . . 
    . . . . . b b d 1 1 b . . . . . 
    . . . . . b d d 1 1 b . . . . . 
    `, SpriteKind.Player)
_3r3.setScale(0.5, ScaleAnchor.Middle)
let _3r4 = sprites.create(img`
    . . . . . . c c c c c c . . . . 
    . . . . c c b b d d d d c . . . 
    . . . c c b b d d d d d d c . . 
    . . c b b d b d d d d d d b c . 
    . c b b b d b b d d d d d b c . 
    . c b b b d d b d d d d b b c . 
    c b c b b b d d b b b b b c c . 
    c b c c b b b b d d d b c c c . 
    c b b c c c c c c c c c c c c . 
    c c b b b b b b c c b d d d b c 
    c c c c c c c c c d d d d d d c 
    c c c c c c c b c b d d d d d b 
    c b b b c c c b c c b d d d c b 
    c c b b b c c b b c c c c b b c 
    c c c c c c c c b b b b b b c c 
    c c c c c c c c c c c c c c c c 
    `, SpriteKind.Player)
_3r4.setScale(0.5, ScaleAnchor.Middle)
let _3r5 = sprites.create(img`
    . . . . . . c c c c c c . . . . 
    . . . . c c b b d d d d c . . . 
    . . . c c b b d d d d d d c . . 
    . . c b b d b d d d d d d b c . 
    . c b b b d b b d d d d d b c . 
    . c b b b d d b d d d d b b c . 
    c b c b b b d d b b b b b c c . 
    c b c c b b b b d d d b c c c . 
    c b b c c c c c c c c c c c c . 
    c c b b b b b b c c b d d d b c 
    c c c c c c c c c d d d d d d c 
    c c c c c c c b c b d d d d d b 
    c b b b c c c b c c b d d d c b 
    c c b b b c c b b c c c c b b c 
    c c c c c c c c b b b b b b c c 
    c c c c c c c c c c c c c c c c 
    `, SpriteKind.Player)
_3r5.setScale(0.5, ScaleAnchor.Middle)
let _3r6 = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . b b 3 3 3 3 b b . . . . 
    . . . c b 3 3 3 3 1 1 b c . . . 
    . . c b 3 3 3 3 3 1 1 1 b c . . 
    . c c 1 1 1 3 3 3 3 1 1 3 c c . 
    c c d 1 1 1 3 3 3 3 3 3 3 b c c 
    c b d d 1 3 3 3 3 3 1 1 1 b b c 
    c b b b 3 3 1 1 3 3 1 1 d d b c 
    c b b b b d d 1 1 3 b d d d b c 
    . c b b b b d d b b b b b b c . 
    . . c c b b b b b b b b c c . . 
    . . . . c c c c c c c c . . . . 
    . . . . . . b 1 1 b . . . . . . 
    . . . . . . b 1 1 b b . . . . . 
    . . . . . b b d 1 1 b . . . . . 
    . . . . . b d d 1 1 b . . . . . 
    `, SpriteKind.Player)
_3r6.setScale(0.5, ScaleAnchor.Middle)
let _4r1 = sprites.create(img`
    .cccccccccccccc.
    cbddddddddddddbc
    cddddddddddddddc
    cddddddddddddddc
    cddddddddddddddc
    cddddddddddddddc
    cddddddddddddddc
    cddddddddddddddc
    cdbbbbbbbbbbbbdc
    cbbbbbbbbbbbbbbc
    cbddddddddddddbc
    cbcbbbcbbcbbbcbc
    fbcbbbcddcbbbcbf
    fbcbbbbccbbbbcbf
    fbccccccccccccbf
    fbbbbbbbbbbbbbbf
    fbddddddddddddbf
    fbcbbbcbbcbbbcbf
    fbcbbbcddcbbbcbf
    fbcbbbbccbbbbcbf
    fbccccccccccccbf
    fbbbbbbbbbbbbbbf
    fbffffffffffffbf
    ffffffffffffffff
    `, SpriteKind.Player)
_4r1.setScale(0.5, ScaleAnchor.Middle)
let _4r2 = sprites.create(img`
    . . . b b b b b b b b b . . . . 
    . . b 1 d d d d d d d 1 b . . . 
    . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
    . b d b c c c c c c c b d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 d 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c c c c c c c c c d b . . 
    . c b b b b b b b b b b b c . . 
    c b c c c c c c c c c c c b c . 
    c 1 d d d d d d d d d d d 1 c . 
    c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
    c b b b b b b b b b b b b b c . 
    c c c c c c c c c c c c c c c . 
    `, SpriteKind.Player)
_4r2.setScale(0.5, ScaleAnchor.Middle)
let _4r3 = sprites.create(img`
    ...cccccccccccccccccc...
    ..cbddddddddddddddddbc..
    .cddddddddddddddddddddc.
    .cddbbbbbbbbbbbbbbbbddc.
    .cdbbbbbbbbbbbbbbbbbbdc.
    .cdbbbbbbbbbbbbbbbbbbdc.
    cbbbccccccccccccccccbbbc
    cddcbddddddddddddddbcddc
    cddcddddddddddddddddcddc
    cddcddddddddddddddddcddc
    cddcddddddddddddddddcddc
    cbdcddddddddddddddddcdbc
    ccbbbbbbbbbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbbbbbcc
    cccccccccccccccccccccccc
    ..cbbc............cbbc..
    `, SpriteKind.Player)
_4r3.setScale(0.5, ScaleAnchor.Middle)
let _4r4 = sprites.create(img`
    ...cccccccccccccccccc...
    ..cd5555555555555555dc..
    .c55555555555555555555c.
    .c55333333333333333355c.
    .c53333333333333333335c.
    .c53333333333333333335c.
    c333cccccccccccccccc333c
    c55c3555555555555553c55c
    c55c5555555555555555c55c
    c55c5555555555555555c55c
    c55c5555555555555555c55c
    c35c5555555555555555c53c
    cc33333333333333333333cc
    cc33333333333333333333cc
    cccccccccccccccccccccccc
    ..cbbc............cbbc..
    `, SpriteKind.Player)
_4r4.setScale(0.5, ScaleAnchor.Middle)
let _4r5 = sprites.create(img`
    . . . b b b b b b b b b . . . . 
    . . b 1 d d d d d d d 1 b . . . 
    . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
    . b d b c c c c c c c b d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 d 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c c c c c c c c c d b . . 
    . c b b b b b b b b b b b c . . 
    c b c c c c c c c c c c c b c . 
    c 1 d d d d d d d d d d d 1 c . 
    c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
    c b b b b b b b b b b b b b c . 
    c c c c c c c c c c c c c c c . 
    `, SpriteKind.Player)
_4r5.setScale(0.5, ScaleAnchor.Middle)
let _4r6 = sprites.create(img`
    .cccccccccccccc.
    cbddddddddddddbc
    cddddddddddddddc
    cddddddddddddddc
    cddddddddddddddc
    cddddddddddddddc
    cddddddddddddddc
    cddddddddddddddc
    cdbbbbbbbbbbbbdc
    cbbbbbbbbbbbbbbc
    cbddddddddddddbc
    cbcbbbcbbcbbbcbc
    fbcbbbcddcbbbcbf
    fbcbbbbccbbbbcbf
    fbccccccccccccbf
    fbbbbbbbbbbbbbbf
    fbddddddddddddbf
    fbcbbbcbbcbbbcbf
    fbcbbbcddcbbbcbf
    fbcbbbbccbbbbcbf
    fbccccccccccccbf
    fbbbbbbbbbbbbbbf
    fbffffffffffffbf
    ffffffffffffffff
    `, SpriteKind.Player)
_4r6.setScale(0.5, ScaleAnchor.Middle)
let _5r1 = sprites.create(img`
    . . 6 6 6 6 . . 
    . 6 d 4 4 4 6 . 
    6 1 b 1 1 4 d 6 
    c 1 b b 4 4 1 c 
    . c b b b d c . 
    . . c c c c . . 
    `, SpriteKind.Player)
_5r1.setScale(0.5, ScaleAnchor.Middle)
let _5r2 = sprites.create(img`
    .............cc.
    ............cbbc
    ............cbbc
    ...........bdcc.
    ...........bdbb.
    ..........bddc..
    ..........bdbb..
    .........bddc...
    .........bdbb...
    ........bddc....
    ........bdbb....
    .......bddc.....
    .......bdbb.....
    ......bddc......
    ......bdbb......
    .....bddc.......
    .....bdbb.......
    ....bddc........
    ....bdbb........
    ...bddc.........
    ...bdbb.........
    ..bddc..........
    ..bdbb..........
    .bddc...........
    .bdbb...........
    b1dc............
    b11c............
    b11c............
    b11c.........cc.
    b11c........cbbc
    b11c........cbbc
    b11c.......bdcc.
    b11c.......bdbb.
    b11c......bddc..
    b11bccc...bdbb..
    b11bbbbcccddc...
    b11bcccbccdbb...
    b11b..ccbddc....
    b11b...ccdbbc...
    b11b...bddcbc...
    b11b...bdbbcbc..
    b11b..bddc.fbc..
    b11b..bdbb.fbf..
    b11b.bddc..fcf..
    b11b.bdbb..fcf..
    b11bbddc...fcf..
    b11bbdbb...fcf..
    b11bddc...cfcfc.
    b11ddbb..cbfcfbc
    b1dddc...cdfffdc
    b1ddbb...cdcfcdc
    cdddc....cbdddbc
    cddbb....cbbbbbc
    cddc.....cbbbbbc
    cdbb.....cbbbbbc
    .cc......cbbbbbc
    .........cbbbbbc
    .........cbbbbbc
    .........cbbbbbc
    .........8bbbbb8
    .........8bbbbb8
    .........6bbbbb6
    ..........6bbb6.
    ...........666..
    `, SpriteKind.Player)
_5r2.setScale(0.5, ScaleAnchor.Middle)
let _5r3 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ........dd55........
    ........5555........
    .........44.........
    ........dddd........
    ........dddd........
    .......dddddd.......
    .......dddddd.......
    .......dddddd.......
    .......dddddd.......
    .......dddddd.......
    .......dddddd.......
    ........dddd........
    ........4444........
    ....................
    `, SpriteKind.Player)
_5r3.setScale(0.5, ScaleAnchor.Middle)
let _5r4 = sprites.create(img`
    ...........ccccc66666...........
    ........ccc4444444444666........
    ......cc444444444bb4444466......
    .....cb4444bb4444b5b444444b.....
    ....eb4444b5b44444b44444444b....
    ...ebb44444b4444444444b444446...
    ..eb6bb444444444bb444b5b444446..
    ..e6bb5b44444444b5b444b44bb44e..
    .e66b4b4444444444b4444444b5b44e.
    .e6bb444444444444444444444bb44e.
    eb66b44444bb444444444444444444be
    eb66bb444b5b44444444bb44444444be
    fb666b444bb444444444b5b4444444bf
    fcb666b44444444444444bb444444bcf
    .fbb6666b44444444444444444444bf.
    .efbb66666bb4444444444444444bfe.
    .86fcbb66666bbb44444444444bcc688
    8772effcbbbbbbbbbbbbbbbbcfc22778
    87722222cccccccccccccccc22226678
    f866622222222222222222222276686f
    fef866677766667777776667777fffef
    fbff877768f86777777666776fffffbf
    fbeffeefffeff7766688effeeeefeb6f
    f6bfffeffeeeeeeeeeeeeefeeeeebb6e
    f66ddfffffeeeffeffeeeeeffeedb46e
    .c66ddd4effffffeeeeeffff4ddb46e.
    .fc6b4dddddddddddddddddddb444ee.
    ..ff6bb444444444444444444444ee..
    ....ffbbbb4444444444444444ee....
    ......ffebbbbbb44444444eee......
    .........fffffffcccccee.........
    ................................
    `, SpriteKind.Player)
_5r4.setScale(0.5, ScaleAnchor.Middle)
let _5r5 = sprites.create(img`
    . . 6 6 6 6 . . 
    . 6 d 4 4 4 6 . 
    6 1 b 1 1 4 d 6 
    c 1 b b 4 4 1 c 
    . c b b b d c . 
    . . c c c c . . 
    `, SpriteKind.Player)
_5r5.setScale(0.5, ScaleAnchor.Middle)
let _5r6 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ........dd55........
    ........5555........
    .........44.........
    ........dddd........
    ........dddd........
    .......dddddd.......
    .......dddddd.......
    .......dddddd.......
    .......dddddd.......
    .......dddddd.......
    .......dddddd.......
    ........dddd........
    ........4444........
    ....................
    `, SpriteKind.Player)
_5r6.setScale(0.5, ScaleAnchor.Middle)
let _6r1 = sprites.create(img`
    ......................bbb.......
    ....................bb333b......
    .................bbb333d33b.....
    ................bb333333d3a.....
    ..............bb33332eeeedba....
    ............bbb333323eee2e3a....
    ..........bbd333333e22222ed3a...
    .......bbbdd3333333e22222edda...
    ......bb3d333333333be222eb3d3a..
    ...bbb3dd33333333333beeeb33d3a..
    ..b3ddd33333333333333333333dda..
    bbddd3333333333333333333333dd3a.
    b33dddddd3333333333333333333d3a.
    bb3333333ddddd33333333333333dda.
    bbbbbbb333dd33dddddddddd3333ddba
    b55553bbbbbb3333dd33333ddd33dd3a
    b555555555553bbbbbbbb33333dddd3a
    bd555555555555555dddbaaaaab3d3ba
    bb55555555555555555dddddddbb33ba
    b3bb35555555555d5555d55dddddbbba
    b33333bbb355dd55555d555ddddddbba
    b5555d333333bbb35dddddd55ddddbba
    b5d555dd5553333bbbbb3ddddddddb3a
    b5d555555555555dd3333bbbbbb3db3a
    bd5d555555d55555dd555ddbbbbbbb3a
    bbb55dd555555555555555ddddddbb3a
    ...bbbbdd555ddd5555ddddddddddb3a
    .......bbbb555555d5ddd5ddddddb3a
    ...........bbbb55555555555dd533a
    ...............bbbbddd5d55d5b3ba
    ...................bbbbddddb3ba.
    .......................bbbaaaa..
    `, SpriteKind.Player)
_6r1.setScale(0.5, ScaleAnchor.Middle)
let _6r2 = sprites.create(img`
    ...bbccccccbb...
    ..bdddddddd1db..
    .bddbbbbbbbbddb.
    .cdbbbbbbbbbbdc.
    .cbbbccccccbbbc.
    .cbbc111111cbbc.
    .fbcd111111dcbf.
    f66cdd1111ddc66f
    f6cccbbbbbbccc6f
    fcbb33333333bbcf
    fbb3333333333bbf
    fbb3d111111d3bbf
    fbd1111111111dbf
    fdd1111111111ddf
    fdd1111111111ddf
    fdd1111111111ddf
    fddbbccccccbbddf
    fdbdddddddd1dbdf
    cbddbbbbbbbbddbf
    ccdbbbbbbbbbbdcc
    ccbccccccccccbcc
    .cccccccccccccc.
    .fbbfbbbbbbfbbf.
    ..ff........ff..
    `, SpriteKind.Player)
_6r2.setScale(0.5, ScaleAnchor.Middle)
let _6r3 = sprites.create(img`
    . . . . . f c c c c f . . . . . 
    . . c c f b b 3 3 b b f c c . . 
    . c b 3 3 b b c c b b 3 3 b c . 
    . f 3 c c c b c c b c c c 3 f . 
    f c b b c c b c c b c c b b c f 
    c 3 c c b c c c c c c b c c 3 c 
    c 3 c c c c c c c c c c c c 3 c 
    . f b b c c c c c c c c b b f . 
    . . f b b c 8 9 9 8 c b b f . . 
    . . c c c f 9 3 1 9 f c c c . . 
    . c 3 f f f 9 3 3 9 f f f 3 c . 
    c 3 f f f f 8 9 9 8 f f f f 3 c 
    f 3 c c f f f f f f f f c c 3 f 
    f b 3 c b b f b b f b b c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
_6r3.setScale(0.5, ScaleAnchor.Middle)
let _6r4 = sprites.create(img`
    ...................cc...
    ...............cccc63c..
    ..............c633336c..
    ..........cc.c6cc33333c.
    .........b55c6c55c33333c
    .........ff5c6c5ff33333c
    .........ff5c6c5ff6333cc
    .........b553c355c6666cc
    ..........b55355c333333c
    .........cc55555bcc3333c
    ........c5545554b55c33c.
    ........b54b4444bb5cbb..
    ........c455b4b5554c45b.
    ........c555c4c555c4c5c.
    ........c5555c5555c4c5c.
    .........ccccccccc..ccc.
    `, SpriteKind.Player)
_6r4.setScale(0.5, ScaleAnchor.Middle)
let _6r5 = sprites.create(img`
    ..........bbbbbbbbbbbb..........
    .......bbb331111333333bbb.......
    .....cbb3331111113333333bbb.....
    ....cb33333311113333333111db....
    ...cb3111133333333333311111db...
    .ccbb1111113333333333311111ddcc.
    ccbbd1111113333333333331111ddbcc
    cbbbdd11111333333111333311ddbbbc
    cbbbdddd1133333311111333bbbbbbbc
    .cbbbddddbbb33331111dbbbbbbbbbc.
    .ccbbbbbbbbbbbbbbdddbbbbbbbbbcc.
    ...cccbbbbbbbbbbbbbbbbbbbbccc...
    ......cccccccccccccccccccc......
    ............bbbd11bb............
    ...........bbbdd111bb...........
    ..........bbbdddd11dbb..........
    `, SpriteKind.Player)
_6r5.setScale(0.5, ScaleAnchor.Middle)
let _6r6 = sprites.create(img`
    ......................bbb.......
    ....................bb333b......
    .................bbb333d33b.....
    ................bb333333d3a.....
    ..............bb33332eeeedba....
    ............bbb333323eee2e3a....
    ..........bbd333333e22222ed3a...
    .......bbbdd3333333e22222edda...
    ......bb3d333333333be222eb3d3a..
    ...bbb3dd33333333333beeeb33d3a..
    ..b3ddd33333333333333333333dda..
    bbddd3333333333333333333333dd3a.
    b33dddddd3333333333333333333d3a.
    bb3333333ddddd33333333333333dda.
    bbbbbbb333dd33dddddddddd3333ddba
    b55553bbbbbb3333dd33333ddd33dd3a
    b555555555553bbbbbbbb33333dddd3a
    bd555555555555555dddbaaaaab3d3ba
    bb55555555555555555dddddddbb33ba
    b3bb35555555555d5555d55dddddbbba
    b33333bbb355dd55555d555ddddddbba
    b5555d333333bbb35dddddd55ddddbba
    b5d555dd5553333bbbbb3ddddddddb3a
    b5d555555555555dd3333bbbbbb3db3a
    bd5d555555d55555dd555ddbbbbbbb3a
    bbb55dd555555555555555ddddddbb3a
    ...bbbbdd555ddd5555ddddddddddb3a
    .......bbbb555555d5ddd5ddddddb3a
    ...........bbbb55555555555dd533a
    ...............bbbbddd5d55d5b3ba
    ...................bbbbddddb3ba.
    .......................bbbaaaa..
    `, SpriteKind.Player)
_6r6.setScale(0.5, ScaleAnchor.Middle)
let _7r1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 c 2 2 2 2 2 2 4 2 . 
    . . . . 2 c c 2 2 2 2 2 2 4 c 2 
    . . d 2 4 c c 2 4 4 4 4 4 4 c c 
    . d 2 2 4 c b e e e e e e e 2 c 
    . 2 2 2 4 b e e b b b e b b e 2 
    . 2 2 2 2 2 e b b b b e b b b e 
    . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
    . 2 d d 2 e f e e e f e e e e e 
    . d d 2 e e e f e e f e e e e e 
    . e e e e e e e f f f e e e e e 
    . e e e e f f f e e e e f f f f 
    . . . e f f f f f e e f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
_7r1.setScale(0.5, ScaleAnchor.Middle)
let _7r2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 c 3 3 3 3 3 3 d 3 . 
    . . . . 3 c c 3 3 3 3 3 3 d c 3 
    . . d 3 d c c 3 d d d d d d c c 
    . d 3 3 d c b a a a a a a a 3 c 
    . 3 3 3 d b a a b b b a b b a 3 
    . 3 3 3 3 3 a b b b b a b b b a 
    . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
    . 3 d d 3 a f a a a f a a a a a 
    . d d 3 a a a f a a f a a a a a 
    . a a a a a a a f f f a a a a a 
    . a a a a f f f a a a a f f f f 
    . . . a f f f f f a a f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
_7r2.setScale(0.5, ScaleAnchor.Middle)
let _7r3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 9 6 6 6 6 6 6 c 6 . . . 
    . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
    . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
    . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
    . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
    . 6 8 b b b 8 b b b b 8 6 6 6 6 
    . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
    . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
    . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
    . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
    . 8 f f f f 8 8 8 8 f f f 8 8 8 
    . . f f f f f 8 8 f f f f f 8 . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
_7r3.setScale(0.5, ScaleAnchor.Middle)
let _7r4 = sprites.create(img`
    . . . . . . . 8 8 8 8 8 . . . . 
    . . . . . 8 8 6 6 6 6 6 8 . . . 
    . . . . 8 8 6 6 6 6 6 6 6 8 . . 
    . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
    . . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 
    . 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 
    8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
    8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
    8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
    8 6 8 8 8 8 b b b b 8 b b 8 b 8 
    8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
    8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 f f f 8 8 8 8 f f f 8 8 
    . 8 8 f b c c f 8 8 f b c c f . 
    . . . . b b f . . . . b b f . . 
    `, SpriteKind.Player)
_7r4.setScale(0.5, ScaleAnchor.Middle)
let _7r5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 c 2 2 2 2 2 2 4 2 . 
    . . . . 2 c c 2 2 2 2 2 2 4 c 2 
    . . d 2 4 c c 2 4 4 4 4 4 4 c c 
    . d 2 2 4 c b e e e e e e e 2 c 
    . 2 2 2 4 b e e b b b e b b e 2 
    . 2 2 2 2 2 e b b b b e b b b e 
    . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
    . 2 d d 2 e f e e e f e e e e e 
    . d d 2 e e e f e e f e e e e e 
    . e e e e e e e f f f e e e e e 
    . e e e e f f f e e e e f f f f 
    . . . e f f f f f e e f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
_7r5.setScale(0.5, ScaleAnchor.Middle)
let _7r6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 c 3 3 3 3 3 3 d 3 . 
    . . . . 3 c c 3 3 3 3 3 3 d c 3 
    . . d 3 d c c 3 d d d d d d c c 
    . d 3 3 d c b a a a a a a a 3 c 
    . 3 3 3 d b a a b b b a b b a 3 
    . 3 3 3 3 3 a b b b b a b b b a 
    . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
    . 3 d d 3 a f a a a f a a a a a 
    . d d 3 a a a f a a f a a a a a 
    . a a a a a a a f f f a a a a a 
    . a a a a f f f a a a a f f f f 
    . . . a f f f f f a a f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
_7r6.setScale(0.5, ScaleAnchor.Middle)
let _8r1 = sprites.create(img`
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . b b d d b b . 
    b 1 1 3 3 1 1 b 
    b 1 3 5 5 3 1 b 
    b d 3 5 5 3 d b 
    c 1 1 d d 1 1 c 
    c d 1 d d 1 d c 
    . c c 7 6 c c . 
    . . 6 7 6 . . . 
    . . 6 6 8 8 8 6 
    . . 6 8 7 7 7 6 
    . . 8 7 7 7 6 . 
    . . 8 8 8 6 . . 
    `, SpriteKind.Player)
_8r1.setScale(0.5, ScaleAnchor.Middle)
let _8r2 = sprites.create(img`
    .cccccccccccccc.
    cb777777777777bc
    c77777777777777c
    c77777777777777c
    c77777777777777c
    c77777777777777c
    c77777777777777c
    c77777777777777c
    c76666666666667c
    c66666666666666c
    c67777777777776c
    c6c666c66c666c6c
    f6c666cddc666c6f
    f6c6666cc6666c6f
    f6cccccccccccc6f
    f66666666666666f
    f67777777777776f
    f6c666c66c666c6f
    f6c666cddc666c6f
    f6c6666cc6666c6f
    f6cccccccccccc6f
    f66666666666666f
    f6ffffffffffff6f
    ffffffffffffffff
    `, SpriteKind.Player)
_8r2.setScale(0.5, ScaleAnchor.Middle)
let _8r3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . b b 1 1 1 1 b b . . . . 
    . . . . b 1 1 1 3 3 1 b . . . . 
    . . . b 1 1 1 1 3 3 3 1 b . . . 
    . . . b 1 1 3 1 1 3 3 1 b . . . 
    . . b d 1 1 1 1 1 1 1 1 d b . . 
    . . b d 3 3 1 1 1 1 1 1 d b . . 
    . . b b 3 3 1 1 1 1 3 3 d b . . 
    . . c b b d 1 1 1 3 3 b d c . . 
    . . c d d d d d d b b b d c . . 
    . . c b d d b b d b b d b c . . 
    . . . c d d b b d d d d c . . . 
    . . . . c b d d d d b c . . . . 
    . . . . . c c c c c c . . . . . 
    `, SpriteKind.Player)
_8r3.setScale(0.5, ScaleAnchor.Middle)
let _8r4 = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Player)
_8r4.setScale(0.5, ScaleAnchor.Middle)
let _8r5 = sprites.create(img`
    ..........bbbbbb................
    .......bbb444444bb..............
    .....2244444ddd444b.............
    ....244444444dddd44e............
    ...244444444444ddd4be...........
    ..244444444444444d44be..........
    .2b444444444444444d4be..........
    .2b44444444444444444bbe.........
    2bbb4444444444444444bbe.........
    2bbb4444444444444444bbe.........
    2bb4b4444444444444444bbe........
    2bb4444444444444444444be........
    2bb44444444444444444444e........
    2bbb444bbb4444444444444e........
    22bbb444bb4bb444444444be........
    .2bbbbb44bbbb44444444bbe........
    .22bbbbbbbb44bbb444444bbe.......
    ..eeebbbbbbb44bbb444444be.......
    ...eeeeebbbbbbbb44b4444be.......
    .....eeeeee222bb44bbb4bbe.......
    .......eeeee222bb44bbbbee.......
    ............e222bbbbbbbec.......
    ..............ee2bbbbeebdb......
    .................eeeeecdddb.....
    .......................cd11bbbb.
    ........................cd111dbb
    .........................b11111c
    .........................c11dd1c
    .........................cd1dbc.
    .........................cb11c..
    ..........................ccc...
    ................................
    `, SpriteKind.Player)
_8r5.setScale(0.5, ScaleAnchor.Middle)
let _8r6 = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Player)
_8r6.setScale(0.5, ScaleAnchor.Middle)
let _9r1 = sprites.create(img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `, SpriteKind.Player)
_9r1.setScale(0.5, ScaleAnchor.Middle)
let _9r2 = sprites.create(img`
    . . . . . . . . c c c c c . . . 
    . . . . . . c c 5 5 5 5 5 c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c 1 1 b b 1 b b c c . . 
    . . . c 1 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . c c 
    . . . c d 1 1 1 b 1 1 1 b b 5 c 
    . . c c d 1 c 1 b 1 b 1 5 5 5 c 
    . c c d d 1 1 1 1 1 b 1 b b 5 c 
    f d d d 1 1 1 1 1 b b 1 f . c c 
    f f f 1 1 1 1 1 1 b b b f . . . 
    . . . f f 1 1 1 b b b 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
_9r2.setScale(0.5, ScaleAnchor.Middle)
let _9r3 = sprites.create(img`
    ..........666666666666..........
    ........6667777777777666........
    ......66677777777777777666......
    .....6677777779999777777766.....
    ....667777779966669977777766....
    ....677777799668866117777776....
    ...66777779966877861197777766...
    ...66777799668677686699777766...
    ...88777796688888888669777788...
    ...88777788888888888888777788...
    ...88977888679999997688877988...
    ...88977886777777777768877988...
    ...88997777777777777777779988...
    ...88799777777777777777711788...
    ...88679997777777777779117688...
    ..cc866679999999999999976668cc..
    .ccbc6666679999999999766666cbcc.
    .fcbcc66666666666666666666ccbcf.
    .fcbbcc666666666666666666ccbdcf.
    .f8bbbccc66666666666666cccbddcf.
    .f8cbbbbccccccccccccccccbdddbcf.
    .f8ccbbbbbccccccccccccb111ddccf.
    .f6ccccbbbddddddddddddd111dcccf.
    .f6ccccccbbddddddddddddddbbcccf.
    .f6cccccccccccccbbbbbbbbbdbcccf.
    ..f6cccccccccbbbbbbbbbbbddbccf..
    ..f6cccccccccbbbbbbbbbbbddbccf..
    ..ff6ccccccccbbbbbbbbbbbddbcff..
    ...ff6cccccccbbbbbbbbbbbddbff...
    ....ffcccccccbbbbbbbbbbbdbff....
    ......ffccccbbbbbbbbbbbbff......
    ........ffffffffffffffff........
    `, SpriteKind.Player)
_9r3.setScale(0.5, ScaleAnchor.Middle)
let _9r4 = sprites.create(img`
    ................
    .......ddd......
    ......dbbb......
    ......dbdd......
    ......bddd......
    ......bcdbd.....
    ......cbcbdd....
    ......bdbdbd....
    .....cbdbdcd....
    .....cbbbddb....
    .....cfbdbdd....
    ....bcfbddbd....
    ....bcfdddd.....
    ....bfbdddd.....
    ...bbfdddddb....
    ...dcbdddddd....
    .....bdddddd....
    .....bddbddd....
    .....bddbdddb...
    .ccccbddbddddcc.
    cdddbbdbbddddbdc
    bddbdbdbbddbdbdb
    bddbdddbbddbbbdb
    bdddbddbbddbbddb
    bddddbbbbbbbbddb
    bdddddbbbbbddddb
    cddddddddddddddc
    bccddddddddddccb
    dbbbbbbbbbbbbbbd
    dbbbbccccccbbbbd
    cbbbbbbbbbbbbbbc
    fccccccccccccccf
    `, SpriteKind.Player)
_9r4.setScale(0.5, ScaleAnchor.Middle)
let _9r5 = sprites.create(img`
    . . . . . . . . c c c c c . . . 
    . . . . . . c c 5 5 5 5 5 c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c 1 1 b b 1 b b c c . . 
    . . . c 1 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . c c 
    . . . c d 1 1 1 b 1 1 1 b b 5 c 
    . . c c d 1 c 1 b 1 b 1 5 5 5 c 
    . c c d d 1 1 1 1 1 b 1 b b 5 c 
    f d d d 1 1 1 1 1 b b 1 f . c c 
    f f f 1 1 1 1 1 1 b b b f . . . 
    . . . f f 1 1 1 b b b 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
_9r5.setScale(0.5, ScaleAnchor.Middle)
let _9r6 = sprites.create(img`
    ..........666666666666..........
    ........6667777777777666........
    ......66677777777777777666......
    .....6677777779999777777766.....
    ....667777779966669977777766....
    ....677777799668866117777776....
    ...66777779966877861197777766...
    ...66777799668677686699777766...
    ...88777796688888888669777788...
    ...88777788888888888888777788...
    ...88977888679999997688877988...
    ...88977886777777777768877988...
    ...88997777777777777777779988...
    ...88799777777777777777711788...
    ...88679997777777777779117688...
    ..cc866679999999999999976668cc..
    .ccbc6666679999999999766666cbcc.
    .fcbcc66666666666666666666ccbcf.
    .fcbbcc666666666666666666ccbdcf.
    .f8bbbccc66666666666666cccbddcf.
    .f8cbbbbccccccccccccccccbdddbcf.
    .f8ccbbbbbccccccccccccb111ddccf.
    .f6ccccbbbddddddddddddd111dcccf.
    .f6ccccccbbddddddddddddddbbcccf.
    .f6cccccccccccccbbbbbbbbbdbcccf.
    ..f6cccccccccbbbbbbbbbbbddbccf..
    ..f6cccccccccbbbbbbbbbbbddbccf..
    ..ff6ccccccccbbbbbbbbbbbddbcff..
    ...ff6cccccccbbbbbbbbbbbddbff...
    ....ffcccccccbbbbbbbbbbbdbff....
    ......ffccccbbbbbbbbbbbbff......
    ........ffffffffffffffff........
    `, SpriteKind.Player)
_9r6.setScale(0.5, ScaleAnchor.Middle)
/**
 * animation
 */
forever(function () {
    if (!(controller.down.isPressed()) && (!(controller.up.isPressed()) && (!(controller.left.isPressed()) && !(controller.right.isPressed())))) {
        animation.stopAnimation(animation.AnimationTypes.All, seeker)
    }
})
forever(function () {
    scene.cameraFollowSprite(seeker)
    controller.moveSprite(seeker)
    if (currentTilemap == 1) {
        _2r1.setPosition(1000, 0)
        _2r2.setPosition(1000, 0)
        _2r3.setPosition(1000, 0)
        _2r4.setPosition(1000, 0)
        _2r5.setPosition(1000, 0)
        _2r6.setPosition(1000, 0)
        _3r1.setPosition(1000, 0)
        _3r2.setPosition(1000, 0)
        _3r3.setPosition(1000, 0)
        _3r4.setPosition(1000, 0)
        _3r5.setPosition(1000, 0)
        _3r6.setPosition(1000, 0)
        _4r1.setPosition(1000, 0)
        _4r2.setPosition(1000, 0)
        _4r3.setPosition(1000, 0)
        _4r4.setPosition(1000, 0)
        _4r5.setPosition(1000, 0)
        _4r6.setPosition(1000, 0)
        _5r1.setPosition(1000, 0)
        _5r2.setPosition(1000, 0)
        _5r3.setPosition(1000, 0)
        _5r4.setPosition(1000, 0)
        _5r5.setPosition(1000, 0)
        _5r6.setPosition(1000, 0)
        _6r1.setPosition(1000, 0)
        _6r2.setPosition(1000, 0)
        _6r3.setPosition(1000, 0)
        _6r4.setPosition(1000, 0)
        _6r5.setPosition(1000, 0)
        _6r6.setPosition(1000, 0)
        _7r1.setPosition(1000, 0)
        _7r2.setPosition(1000, 0)
        _7r3.setPosition(1000, 0)
        _7r4.setPosition(1000, 0)
        _7r5.setPosition(1000, 0)
        _7r6.setPosition(1000, 0)
        _8r1.setPosition(1000, 0)
        _8r2.setPosition(1000, 0)
        _8r3.setPosition(1000, 0)
        _8r4.setPosition(1000, 0)
        _8r5.setPosition(1000, 0)
        _8r6.setPosition(1000, 0)
        _9r1.setPosition(1000, 0)
        _9r2.setPosition(1000, 0)
        _9r3.setPosition(1000, 0)
        _9r4.setPosition(1000, 0)
        _9r5.setPosition(1000, 0)
        _9r6.setPosition(1000, 0)
        tiles.placeOnTile(_1r1, tiles.getTileLocation(listsOfListsOfCoordinatesX[0][0], ListsOfListsOfCoordinatesY[0][0]))
        tiles.placeOnTile(_1r2, tiles.getTileLocation(listsOfListsOfCoordinatesX[0][1], ListsOfListsOfCoordinatesY[0][1]))
        tiles.placeOnTile(_1r3, tiles.getTileLocation(listsOfListsOfCoordinatesX[0][2], ListsOfListsOfCoordinatesY[0][2]))
        tiles.placeOnTile(_1r4, tiles.getTileLocation(listsOfListsOfCoordinatesX[0][3], ListsOfListsOfCoordinatesY[0][3]))
        tiles.placeOnTile(_1r5, tiles.getTileLocation(listsOfListsOfCoordinatesX[0][4], ListsOfListsOfCoordinatesY[0][4]))
        tiles.placeOnTile(_1r6, tiles.getTileLocation(listsOfListsOfCoordinatesX[0][5], ListsOfListsOfCoordinatesY[0][5]))
        tiles.setCurrentTilemap(ListOfTilemaps[0])
    }
    if (currentTilemap == 2) {
        _1r1.setPosition(1000, 0)
        _1r2.setPosition(1000, 0)
        _1r3.setPosition(1000, 0)
        _1r4.setPosition(1000, 0)
        _1r5.setPosition(1000, 0)
        _1r6.setPosition(1000, 0)
        _3r1.setPosition(1000, 0)
        _3r2.setPosition(1000, 0)
        _3r3.setPosition(1000, 0)
        _3r4.setPosition(1000, 0)
        _3r5.setPosition(1000, 0)
        _3r6.setPosition(1000, 0)
        _4r1.setPosition(1000, 0)
        _4r2.setPosition(1000, 0)
        _4r3.setPosition(1000, 0)
        _4r4.setPosition(1000, 0)
        _4r5.setPosition(1000, 0)
        _4r6.setPosition(1000, 0)
        _5r1.setPosition(1000, 0)
        _5r2.setPosition(1000, 0)
        _5r3.setPosition(1000, 0)
        _5r4.setPosition(1000, 0)
        _5r5.setPosition(1000, 0)
        _5r6.setPosition(1000, 0)
        _6r1.setPosition(1000, 0)
        _6r2.setPosition(1000, 0)
        _6r3.setPosition(1000, 0)
        _6r4.setPosition(1000, 0)
        _6r5.setPosition(1000, 0)
        _6r6.setPosition(1000, 0)
        _7r1.setPosition(1000, 0)
        _7r2.setPosition(1000, 0)
        _7r3.setPosition(1000, 0)
        _7r4.setPosition(1000, 0)
        _7r5.setPosition(1000, 0)
        _7r6.setPosition(1000, 0)
        _8r1.setPosition(1000, 0)
        _8r2.setPosition(1000, 0)
        _8r3.setPosition(1000, 0)
        _8r4.setPosition(1000, 0)
        _8r5.setPosition(1000, 0)
        _8r6.setPosition(1000, 0)
        _9r1.setPosition(1000, 0)
        _9r2.setPosition(1000, 0)
        _9r3.setPosition(1000, 0)
        _9r4.setPosition(1000, 0)
        _9r5.setPosition(1000, 0)
        _9r6.setPosition(1000, 0)
        tiles.placeOnTile(_2r1, tiles.getTileLocation(listsOfListsOfCoordinatesX[1][0], ListsOfListsOfCoordinatesY[1][0]))
        tiles.placeOnTile(_2r2, tiles.getTileLocation(listsOfListsOfCoordinatesX[1][1], ListsOfListsOfCoordinatesY[1][1]))
        tiles.placeOnTile(_2r3, tiles.getTileLocation(listsOfListsOfCoordinatesX[1][2], ListsOfListsOfCoordinatesY[1][2]))
        tiles.placeOnTile(_2r4, tiles.getTileLocation(listsOfListsOfCoordinatesX[1][3], ListsOfListsOfCoordinatesY[1][3]))
        tiles.placeOnTile(_2r5, tiles.getTileLocation(listsOfListsOfCoordinatesX[1][4], ListsOfListsOfCoordinatesY[1][4]))
        tiles.placeOnTile(_2r6, tiles.getTileLocation(listsOfListsOfCoordinatesX[1][5], ListsOfListsOfCoordinatesY[1][5]))
        tiles.setCurrentTilemap(ListOfTilemaps[1])
    }
    if (currentTilemap == 3) {
        _1r1.setPosition(1000, 0)
        _1r2.setPosition(1000, 0)
        _1r3.setPosition(1000, 0)
        _1r4.setPosition(1000, 0)
        _1r5.setPosition(1000, 0)
        _1r6.setPosition(1000, 0)
        _2r1.setPosition(1000, 0)
        _2r2.setPosition(1000, 0)
        _2r3.setPosition(1000, 0)
        _2r4.setPosition(1000, 0)
        _2r5.setPosition(1000, 0)
        _2r6.setPosition(1000, 0)
        _4r1.setPosition(1000, 0)
        _4r2.setPosition(1000, 0)
        _4r3.setPosition(1000, 0)
        _4r4.setPosition(1000, 0)
        _4r5.setPosition(1000, 0)
        _4r6.setPosition(1000, 0)
        _5r1.setPosition(1000, 0)
        _5r2.setPosition(1000, 0)
        _5r3.setPosition(1000, 0)
        _5r4.setPosition(1000, 0)
        _5r5.setPosition(1000, 0)
        _5r6.setPosition(1000, 0)
        _6r1.setPosition(1000, 0)
        _6r2.setPosition(1000, 0)
        _6r3.setPosition(1000, 0)
        _6r4.setPosition(1000, 0)
        _6r5.setPosition(1000, 0)
        _6r6.setPosition(1000, 0)
        _7r1.setPosition(1000, 0)
        _7r2.setPosition(1000, 0)
        _7r3.setPosition(1000, 0)
        _7r4.setPosition(1000, 0)
        _7r5.setPosition(1000, 0)
        _7r6.setPosition(1000, 0)
        _8r1.setPosition(1000, 0)
        _8r2.setPosition(1000, 0)
        _8r3.setPosition(1000, 0)
        _8r4.setPosition(1000, 0)
        _8r5.setPosition(1000, 0)
        _8r6.setPosition(1000, 0)
        _9r1.setPosition(1000, 0)
        _9r2.setPosition(1000, 0)
        _9r3.setPosition(1000, 0)
        _9r4.setPosition(1000, 0)
        _9r5.setPosition(1000, 0)
        _9r6.setPosition(1000, 0)
        tiles.placeOnTile(_3r1, tiles.getTileLocation(listsOfListsOfCoordinatesX[2][0], ListsOfListsOfCoordinatesY[2][0]))
        tiles.placeOnTile(_3r2, tiles.getTileLocation(listsOfListsOfCoordinatesX[2][1], ListsOfListsOfCoordinatesY[2][1]))
        tiles.placeOnTile(_3r3, tiles.getTileLocation(listsOfListsOfCoordinatesX[2][2], ListsOfListsOfCoordinatesY[2][2]))
        tiles.placeOnTile(_3r4, tiles.getTileLocation(listsOfListsOfCoordinatesX[2][3], ListsOfListsOfCoordinatesY[2][3]))
        tiles.placeOnTile(_3r5, tiles.getTileLocation(listsOfListsOfCoordinatesX[2][4], ListsOfListsOfCoordinatesY[2][4]))
        tiles.placeOnTile(_3r6, tiles.getTileLocation(listsOfListsOfCoordinatesX[2][5], ListsOfListsOfCoordinatesY[2][5]))
        tiles.setCurrentTilemap(ListOfTilemaps[2])
    }
    if (currentTilemap == 4) {
        _1r1.setPosition(1000, 0)
        _1r2.setPosition(1000, 0)
        _1r3.setPosition(1000, 0)
        _1r4.setPosition(1000, 0)
        _1r5.setPosition(1000, 0)
        _1r6.setPosition(1000, 0)
        _2r1.setPosition(1000, 0)
        _2r2.setPosition(1000, 0)
        _2r3.setPosition(1000, 0)
        _2r4.setPosition(1000, 0)
        _2r5.setPosition(1000, 0)
        _2r6.setPosition(1000, 0)
        _3r1.setPosition(1000, 0)
        _3r2.setPosition(1000, 0)
        _3r3.setPosition(1000, 0)
        _3r4.setPosition(1000, 0)
        _3r5.setPosition(1000, 0)
        _3r6.setPosition(1000, 0)
        _5r1.setPosition(1000, 0)
        _5r2.setPosition(1000, 0)
        _5r3.setPosition(1000, 0)
        _5r4.setPosition(1000, 0)
        _5r5.setPosition(1000, 0)
        _5r6.setPosition(1000, 0)
        _6r1.setPosition(1000, 0)
        _6r2.setPosition(1000, 0)
        _6r3.setPosition(1000, 0)
        _6r4.setPosition(1000, 0)
        _6r5.setPosition(1000, 0)
        _6r6.setPosition(1000, 0)
        _7r1.setPosition(1000, 0)
        _7r2.setPosition(1000, 0)
        _7r3.setPosition(1000, 0)
        _7r4.setPosition(1000, 0)
        _7r5.setPosition(1000, 0)
        _7r6.setPosition(1000, 0)
        _8r1.setPosition(1000, 0)
        _8r2.setPosition(1000, 0)
        _8r3.setPosition(1000, 0)
        _8r4.setPosition(1000, 0)
        _8r5.setPosition(1000, 0)
        _8r6.setPosition(1000, 0)
        _9r1.setPosition(1000, 0)
        _9r2.setPosition(1000, 0)
        _9r3.setPosition(1000, 0)
        _9r4.setPosition(1000, 0)
        _9r5.setPosition(1000, 0)
        _9r6.setPosition(1000, 0)
        tiles.placeOnTile(_4r1, tiles.getTileLocation(listsOfListsOfCoordinatesX[3][0], ListsOfListsOfCoordinatesY[3][0]))
        tiles.placeOnTile(_4r2, tiles.getTileLocation(listsOfListsOfCoordinatesX[3][1], ListsOfListsOfCoordinatesY[3][1]))
        tiles.placeOnTile(_4r3, tiles.getTileLocation(listsOfListsOfCoordinatesX[3][2], ListsOfListsOfCoordinatesY[3][2]))
        tiles.placeOnTile(_4r4, tiles.getTileLocation(listsOfListsOfCoordinatesX[3][3], ListsOfListsOfCoordinatesY[3][3]))
        tiles.placeOnTile(_4r5, tiles.getTileLocation(listsOfListsOfCoordinatesX[3][4], ListsOfListsOfCoordinatesY[3][4]))
        tiles.placeOnTile(_4r6, tiles.getTileLocation(listsOfListsOfCoordinatesX[3][5], ListsOfListsOfCoordinatesY[3][5]))
        tiles.setCurrentTilemap(ListOfTilemaps[3])
    }
    if (currentTilemap == 5) {
        tiles.placeOnTile(_5r1, tiles.getTileLocation(listsOfListsOfCoordinatesX[4][0], ListsOfListsOfCoordinatesY[4][0]))
        tiles.placeOnTile(_5r2, tiles.getTileLocation(listsOfListsOfCoordinatesX[4][1], ListsOfListsOfCoordinatesY[4][1]))
        tiles.placeOnTile(_5r3, tiles.getTileLocation(listsOfListsOfCoordinatesX[4][2], ListsOfListsOfCoordinatesY[4][2]))
        tiles.placeOnTile(_5r4, tiles.getTileLocation(listsOfListsOfCoordinatesX[4][3], ListsOfListsOfCoordinatesY[4][3]))
        tiles.placeOnTile(_5r5, tiles.getTileLocation(listsOfListsOfCoordinatesX[4][4], ListsOfListsOfCoordinatesY[4][4]))
        tiles.placeOnTile(_5r6, tiles.getTileLocation(listsOfListsOfCoordinatesX[4][5], ListsOfListsOfCoordinatesY[4][5]))
        tiles.setCurrentTilemap(ListOfTilemaps[4])
    }
    if (currentTilemap == 6) {
        tiles.placeOnTile(_6r1, tiles.getTileLocation(listsOfListsOfCoordinatesX[5][0], ListsOfListsOfCoordinatesY[5][0]))
        tiles.placeOnTile(_6r2, tiles.getTileLocation(listsOfListsOfCoordinatesX[5][1], ListsOfListsOfCoordinatesY[5][1]))
        tiles.placeOnTile(_6r3, tiles.getTileLocation(listsOfListsOfCoordinatesX[5][2], ListsOfListsOfCoordinatesY[5][2]))
        tiles.placeOnTile(_6r4, tiles.getTileLocation(listsOfListsOfCoordinatesX[5][3], ListsOfListsOfCoordinatesY[5][3]))
        tiles.placeOnTile(_6r5, tiles.getTileLocation(listsOfListsOfCoordinatesX[5][4], ListsOfListsOfCoordinatesY[5][4]))
        tiles.placeOnTile(_6r6, tiles.getTileLocation(listsOfListsOfCoordinatesX[5][5], ListsOfListsOfCoordinatesY[5][5]))
        tiles.setCurrentTilemap(ListOfTilemaps[5])
    }
    if (currentTilemap == 7) {
        tiles.placeOnTile(_7r1, tiles.getTileLocation(listsOfListsOfCoordinatesX[6][0], ListsOfListsOfCoordinatesY[6][0]))
        tiles.placeOnTile(_7r2, tiles.getTileLocation(listsOfListsOfCoordinatesX[6][1], ListsOfListsOfCoordinatesY[6][1]))
        tiles.placeOnTile(_7r3, tiles.getTileLocation(listsOfListsOfCoordinatesX[6][2], ListsOfListsOfCoordinatesY[6][2]))
        tiles.placeOnTile(_7r4, tiles.getTileLocation(listsOfListsOfCoordinatesX[6][3], ListsOfListsOfCoordinatesY[6][3]))
        tiles.placeOnTile(_7r5, tiles.getTileLocation(listsOfListsOfCoordinatesX[6][4], ListsOfListsOfCoordinatesY[6][4]))
        tiles.placeOnTile(_7r6, tiles.getTileLocation(listsOfListsOfCoordinatesX[6][5], ListsOfListsOfCoordinatesY[6][5]))
        tiles.setCurrentTilemap(ListOfTilemaps[6])
    }
    if (currentTilemap == 8) {
        tiles.placeOnTile(_8r1, tiles.getTileLocation(listsOfListsOfCoordinatesX[7][0], ListsOfListsOfCoordinatesY[7][0]))
        tiles.placeOnTile(_8r2, tiles.getTileLocation(listsOfListsOfCoordinatesX[7][1], ListsOfListsOfCoordinatesY[7][1]))
        tiles.placeOnTile(_8r3, tiles.getTileLocation(listsOfListsOfCoordinatesX[7][2], ListsOfListsOfCoordinatesY[7][2]))
        tiles.placeOnTile(_8r4, tiles.getTileLocation(listsOfListsOfCoordinatesX[7][3], ListsOfListsOfCoordinatesY[7][3]))
        tiles.placeOnTile(_8r5, tiles.getTileLocation(listsOfListsOfCoordinatesX[7][4], ListsOfListsOfCoordinatesY[7][4]))
        tiles.placeOnTile(_8r6, tiles.getTileLocation(listsOfListsOfCoordinatesX[7][5], ListsOfListsOfCoordinatesY[7][5]))
        tiles.setCurrentTilemap(ListOfTilemaps[7])
    }
    if (currentTilemap == 9) {
        tiles.placeOnTile(_9r1, tiles.getTileLocation(listsOfListsOfCoordinatesX[8][0], ListsOfListsOfCoordinatesY[8][0]))
        tiles.placeOnTile(_9r2, tiles.getTileLocation(listsOfListsOfCoordinatesX[8][1], ListsOfListsOfCoordinatesY[8][1]))
        tiles.placeOnTile(_9r3, tiles.getTileLocation(listsOfListsOfCoordinatesX[8][2], ListsOfListsOfCoordinatesY[8][2]))
        tiles.placeOnTile(_9r4, tiles.getTileLocation(listsOfListsOfCoordinatesX[8][3], ListsOfListsOfCoordinatesY[8][3]))
        tiles.placeOnTile(_9r5, tiles.getTileLocation(listsOfListsOfCoordinatesX[8][4], ListsOfListsOfCoordinatesY[8][4]))
        tiles.placeOnTile(_9r6, tiles.getTileLocation(listsOfListsOfCoordinatesX[8][5], ListsOfListsOfCoordinatesY[8][5]))
        tiles.setCurrentTilemap(ListOfTilemaps[8])
    }
})
