sprites.onOverlap(SpriteKind.Guard, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Namor.setPosition(148, 2)
})
info.onScore(20, function () {
    Namor.destroy()
    Shuri.sayText("WAKANDA FOREVER", 5000, true)
    scene.setBackgroundImage(assets.image`boston-bridge`)
    effects.confetti.startScreenEffect()
    game.showLongText("We are safe!", DialogLayout.Bottom)
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Riri.setPosition(148, 2)
})
let Riri: Sprite = null
let Namor: Sprite = null
let Shuri: Sprite = null
game.showLongText("Help Shuri, Okoye and Riri escape Namor. (Press the\\\"a\\\" button to go to the next screen.)", DialogLayout.Full)
game.showLongText("When game begins, press the ARROW KEYS to move Shuri, Okoye and Riri. If Namor catches you, you will lose points!", DialogLayout.Full)
game.showLongText("Earn 20 points to win and to stay alive you must keep your heart(s).", DialogLayout.Full)
info.setLife(2)
scene.setBackgroundImage(assets.image`wakanda`)
Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(Shuri)
Shuri.setStayInScreen(true)
Namor = sprites.create(assets.image`namor`, SpriteKind.Enemy)
Namor.setPosition(148, 2)
Namor.follow(Shuri, 30)
Riri = sprites.create(assets.image`riri`, SpriteKind.Guard)
let Okoye = sprites.create(assets.image`okoye`, SpriteKind.Guard)
controller.moveSprite(Riri, 34, -53)
controller.moveSprite(Okoye, -68, -58)
