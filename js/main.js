/***********************
***setup and gameplay***
***********************/

document.body.appendChild(app.view);

loader
    .add("images/example.png")//example image
    .add("images/bg/test.png")
    .add("images/bg/metro_day.png")
    .add("images/bg/metro_evening.png")
    .add("images/bg/metro_night.png")
    .add("images/anim/cat.json")//example anim
    .add("images/anim/metro_rail.json")
    .add("images/sprite/bunny.png")//example sprite
    .add("images/sprite/metro_p1.png")
    .add("images/sprite/metro_p2.png")
    .add("images/sprite/metro_p3.png")
    .add("images/sprite/metro_p4.png")
    .add("images/sprite/metro_phone.png")
    .add("images/sprite/metro_sit.png")
    .add("clock", "sounds/clock.wav")//sounds
    .add("dog_pain", "sounds/dog_pain.wav")
    .add("dog_whine", "sounds/dog_whine.mp3")
    .add("door_close", "sounds/door_close.wav")
    .add("door_open", "sounds/door_open.wav")
    .add("twilight", "sounds/feelings_of_twilight.mp3")
    .add("metro_inside", "sounds/metro_inside.wav")
    .add("phone_call", "sounds/phone_call.wav")
    .add("phone_vib", "sounds/phone_vib.wav")
    .add("room", "sounds/room.wav")
    .add("room_high", "sounds/room_high.wav")
    .add("room_low", "sounds/room_low.wav")
    .add("send", "sounds/send.wav")
    .add("send_high", "sounds/send_high.wav")
    .add("seng_low", "sounds/send_low.wav")
    .load(setup);

function setup() {

    //bg
    bg_test = new Sprite(resources["images/bg/test.png"].texture);
    bg_metro_day = new Sprite(resources["images/bg/metro_day.png"].texture);
    bg_metro_evening = new Sprite(resources["images/bg/metro_evening.png"].texture);
    bg_metro_night = new Sprite(resources["images/bg/metro_night.png"].texture);
    app.stage.addChildAt(bg_test, 0);

    //anims
    var animExampleArray = [];
    for (var i = 0; i < 4; i++) {
        animExampleArray.push(PIXI.Texture.fromFrame('cat' + i + '.png'));
    }
    var animExample = new PIXI.extras.AnimatedSprite(animExampleArray);

    animExample.x = app.screen.width / 2;
    animExample.y = app.screen.height / 2;
    animExample.anchor.set(0.5);
    animExample.animationSpeed = 0.1;
    animExample.play();
    //app.stage.addChild(animExample);

    var animMetroRailArray = [];
    for (var i = 1; i < 4; i++) {
        animMetroRailArray.push(PIXI.Texture.fromFrame('metro_rail' + i + '.png'));
    }
    animMetroRail = new PIXI.extras.AnimatedSprite(animMetroRailArray);
    animMetroRail.animationSpeed = 0.75;
    animMetroRail.play();


	//sprites
	bunny = new Sprite(resources["images/sprite/bunny.png"].texture);
    metro_p1 = new Sprite(resources["images/sprite/metro_p1.png"].texture);
    metro_p2 = new Sprite(resources["images/sprite/metro_p2.png"].texture);
    metro_p3 = new Sprite(resources["images/sprite/metro_p3.png"].texture);
    metro_p4 = new Sprite(resources["images/sprite/metro_p4.png"].texture);
    metro_phone = new Sprite(resources["images/sprite/metro_phone.png"].texture);
    metro_sit = new Sprite(resources["images/sprite/metro_sit.png"].texture);


	app.stage.addChild(bunny);

    bg_test.visible = false;


	resources.clock.sound.loop = true;
    resources.dog_pain.sound.loop = true;
    resources.twilight.sound.loop = true;
    resources.metro_inside.sound.loop = true;
    resources.phone_call.sound.loop = true;
	resources.room.sound.loop = true;
    resources.room_high.sound.loop = true;
    resources.room_low.sound.loop = true;
    

    // //dev
    
    // if(!$.istrue){
    //     console.log("false");
    // } else{
    //     console.log("not false");
    // }
    
    // if($.istrue){
    //     console.log("true");
    // } else {
    //     console.log("not true");
    // }
    
    //undefined acts like false

    // $.count = 0;
    // $.count += 1;
    // console.log($.count);
    $ = {};
    $.not_nice_to_gf = 1;

    start_metro3();

    state = play;
    
    app.ticker.add(delta => gameLoop(delta)); //60 frames per second without lag -> 16.67ms per frame
}

function gameLoop(delta){

    state(delta);
}

function play(delta){

    Q.handleQueue();
    handleGradient();
    checkMsgPush();
    //console.log(Q.queue);
}