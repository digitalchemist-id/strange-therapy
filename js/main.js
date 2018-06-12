/***********************
***setup and gameplay***
***********************/

document.body.appendChild(app.view);

loader
    .add("images/example.png")//example image
    .add("images/anim/cat.json")
    .add("images/bg/bgexample.png")
    .add("images/sprite/bunny.png")
    .add("cellphone", "sounds/cellphone_vibrate.wav")
    .add("bgm", "sounds/feelings_of_twilight.mp3")
    //.add("send", "sounds/send.wav")
    .load(setup);

function setup() {

	//sprites
	bg = new Sprite(resources["images/bg/bgexample.png"].texture);
	bunny = new Sprite(resources["images/sprite/bunny.png"].texture);

	//anims
	var animExampleArray = [];

	for (var i = 0; i < 4; i++) {
	    animExampleArray.push(PIXI.Texture.fromFrame('cat' + i + '.png'));
	}

	var animExample = new PIXI.extras.AnimatedSprite(animExampleArray);

	bg.visible = false;
	app.stage.addChildAt(bg, 0);
	app.stage.addChild(bunny);

	animExample.x = app.screen.width / 2;
    animExample.y = app.screen.height / 2;
	animExample.anchor.set(0.5);
    animExample.animationSpeed = 0.1;
    animExample.play();

    //app.stage.addChild(animExample);

    //const sound = PIXI.sound.Sound.from(resources["sounds/feelings_of_twilight.mp3"]);
	//const cellphone = PIXI.sound.Sound.from(resources["sounds/cellphone_vibrate.wav"]);
	//cellphone.loop=true;

	resources.bgm.sound.loop = true;
	
    //dev
    $ = {};//So this is an object. /ncase
    
    if(!$.istrue){
        console.log("false");
    } else{
        console.log("not false");
    }
    
    if($.istrue){
        console.log("true");
    } else {
        console.log("not true");
    }
    
    $.count = 0;
    $.count += 1;
    console.log($.count);
    //

    start_test1();
    //start_intro():

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
}