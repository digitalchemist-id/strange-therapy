/***********************
***setup and gameplay***
***********************/

document.body.appendChild(app.view);

loader
    .add("images/example.png")//example image
    .add("images/anim/cat.json")
    .add("images/bg/test.png")
    .add("images/sprite/bunny.png")
    .add("clock", "sounds/clock.wav")
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
	//sprites
	bunny = new Sprite(resources["images/sprite/bunny.png"].texture);

	//anims
	var animExampleArray = [];

	for (var i = 0; i < 4; i++) {
	    animExampleArray.push(PIXI.Texture.fromFrame('cat' + i + '.png'));
	}

	var animExample = new PIXI.extras.AnimatedSprite(animExampleArray);

	app.stage.addChildAt(bg_test, 0);
	app.stage.addChild(bunny);

    bg_test.visible = false;

	animExample.x = app.screen.width / 2;
    animExample.y = app.screen.height / 2;
	animExample.anchor.set(0.5);
    animExample.animationSpeed = 0.1;
    animExample.play();

    //app.stage.addChild(animExample);

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
    
    // //undefined acts like false

    // $.count = 0;
    // $.count += 1;
    // console.log($.count);
    $ = {};

    start_intro();

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