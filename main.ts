namespace SpriteKind {
    export const Miscanculos = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Miscanculos, function (sprite, otherSprite) {
    sprites.destroy(orb_of_reflection)
    game.splash("You've Acquired A Gun Be The Last Man Standing :| Press A to shoot")
    Burry.startEffect(effects.confetti, 2000)
})
function level1() {
    tiles.setCurrentTilemap(list[0])
}
function Brawler2() {
    Eve = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
        b d d d b b d 5 5 4 4 4 4 4 b . 
        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
        c b d c d 5 5 b 5 5 5 5 5 5 b . 
        . c d d c c b d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Eve.setPosition(5, 260)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(Eve)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . a a a a . . . 
        . . . . . . . a a 7 7 7 7 a . . 
        . . . . a a 4 4 7 7 7 7 7 7 . . 
        . . 4 4 4 4 7 7 7 7 7 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 4 4 a a 4 7 7 7 7 7 7 7 . . 
        . . . . . . a a 4 7 7 7 7 a . . 
        . . . . . . . . . a a a a . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Burry, 50, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbar.value += 1
})
function Brawler1() {
    Colt = sprites.create(img`
        ........................
        .......fff..............
        ....fffff2f.............
        ..ffeeeee22ff...........
        .ffeeeeee222ff..........
        .feeeefffeeeef..........
        .fffffeee2222ef.........
        fffe222fffffe2f.........
        fffffffffeeefff.........
        fefe44ebbf44eef.........
        .fee4d4bbfddef..cc2222..
        ..feee4dddddfeec225552..
        ...f2222222eeddc2c2222..
        ...f444445e44ddccc.2....
        ...ffffffffeeee...2.....
        ...fff...ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Colt.setPosition(16, 61)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(Colt)
}
let Colt: Sprite = null
let projectile: Sprite = null
let Eve: Sprite = null
let orb_of_reflection: Sprite = null
let statusbar: StatusBarSprite = null
let Burry: Sprite = null
let list: tiles.TileMapData[] = []
game.splash("")
list = [tilemap`level6`]
Burry = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Player)
Burry.setPosition(160, 6)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(Burry)
let Stelly = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 . 5 . . . . . . 
    . . . . . . f 5 5 5 f . . . . . 
    . . . . . f 6 2 5 5 6 f . . . . 
    . . . . f 6 6 6 6 1 6 6 f . . . 
    . . . . f 6 6 6 6 6 1 6 f . . . 
    . . . . f d f d 6 6 6 1 f . . . 
    . . . . f d f d 6 6 6 6 f f . . 
    . . . . f d 3 d d 6 6 6 f 6 f . 
    . 8 8 a f f d d d f f 6 f f . . 
    8 8 8 a a . f f 3 3 f f 6 6 f . 
    8 8 8 8 a f d d d d f f f f . . 
    8 8 8 . . f d d d f 3 f . . . . 
    . . . . . . f f f d 5 3 f . . . 
    . . . . . f f f 3 3 f f . . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.Enemy)
Stelly.setPosition(300, 55)
let Cactus = sprites.create(img`
    . . . . . . . . . . . c c c c c 
    . . . . . . . . . c c 7 7 7 6 c 
    . . . . . . . . c c 7 7 7 c c . 
    . . . . . . . . c 6 7 7 c . . . 
    . . . . . . . . c 6 6 6 c . . . 
    . . . . . . . . c 6 6 6 c c . . 
    . . . c c c c c c c 6 6 6 c c . 
    . . c 6 7 7 7 7 6 c c 6 6 6 c . 
    . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
    c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
    c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
    f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
    f 7 6 3 6 6 3 6 7 7 7 f 6 6 6 c 
    . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
    . c 1 c f f 1 c 7 6 f 6 6 c c . 
    . c c c c c c c c c c c c . . . 
    `, SpriteKind.Enemy)
Cactus.setPosition(5, 170)
let Cordelius = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b b b b . . . . 
    . . . . b b b b 3 3 3 3 b . . . 
    . c c b 1 1 3 3 3 3 3 3 b b . . 
    c c c 3 1 1 1 3 3 3 3 3 3 b . . 
    c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
    f b b c c c c b 3 3 3 1 1 c . . 
    f b c c c d d d b b 3 3 3 c c . 
    f b c b d d d d d d b b 3 3 b c 
    . c b 3 3 d d d d d d b c 3 3 c 
    . c d c c d d d 3 3 d c c c 3 f 
    . f d d d d d c c d 3 c c c b f 
    . f d b b b d d d d d c c c b f 
    . . c d d d d d b f f c b b f f 
    . . f b d d d b b d d f f f f . 
    . . f f f c c b d d d f . . . . 
    `, SpriteKind.Enemy)
Cordelius.setPosition(305, 165)
orb_of_reflection = sprites.create(img`
    . . . . . b b b b b b . . . . . 
    . . . b b 9 9 9 9 9 9 b b . . . 
    . . b b 9 9 9 9 9 9 9 9 b b . . 
    . b b 9 d 9 9 9 9 9 9 9 9 b b . 
    . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
    b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
    b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
    b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
    b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
    . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
    . b d 5 3 3 3 3 3 3 3 d 5 b b . 
    . . b d 5 d 3 3 3 3 5 5 b b . . 
    . . . b b 5 5 5 5 5 5 b b . . . 
    . . . . . b b b b b b . . . . . 
    `, SpriteKind.Miscanculos)
orb_of_reflection.setPosition(152, 150)
controller.moveSprite(Burry)
scene.cameraFollowSprite(Burry)
level1()
Brawler1()
Brawler2()
forever(function () {
    if (controller.A.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . a a a a . . . . . . 
            . . . . . a 7 7 7 7 a . . . . . 
            . . . . a 7 7 7 7 7 7 a . . . . 
            . . . . a 7 7 7 7 7 7 a . . . . 
            . . . . a 7 7 7 7 7 7 a . . . . 
            . . . . a 7 7 7 7 7 7 a . . . . 
            . . . . . 4 7 7 7 7 a . . . . . 
            . . . . . a 7 7 7 4 a . . . . . 
            . . . . . a 4 7 7 4 . . . . . . 
            . . . . . . a 7 4 a . . . . . . 
            . . . . . . a 7 4 a . . . . . . 
            . . . . . . 4 7 4 . . . . . . . 
            . . . . . . 4 7 4 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Burry, 0, -10)
    } else if (controller.B.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 7 4 . . . . . . . 
            . . . . . . 4 7 4 . . . . . . . 
            . . . . . . a 7 4 a . . . . . . 
            . . . . . . a 7 4 a . . . . . . 
            . . . . . a 4 7 7 4 . . . . . . 
            . . . . . a 7 7 7 4 a . . . . . 
            . . . . . 4 7 7 7 7 a . . . . . 
            . . . . a 7 7 7 7 7 7 a . . . . 
            . . . . a 7 7 7 7 7 7 a . . . . 
            . . . . a 7 7 7 7 7 7 a . . . . 
            . . . . a 7 7 7 7 7 7 a . . . . 
            . . . . . a 7 7 7 7 a . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Burry, 0, 10)
    } else {

    }
})

