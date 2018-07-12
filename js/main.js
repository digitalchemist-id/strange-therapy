/***********************
***setup and gameplay***
***********************/
document.body.appendChild(app.view);
loader
    .add("images/bg/intro.png")//bg
    .add("images/bg/test.png")
    .add("images/bg/metro_day.png")
    .add("images/bg/metro_evening.png")
    .add("images/bg/metro_night.png")
    .add("images/bg/home.png")
    .add("images/bg/room.png")
    .add("images/bg/vet.png")
    .add("images/bg/vet_dark.png")
    .add("images/anim/intro_steam.json")//anim
    .add("images/anim/test_foot.json")
    .add("images/anim/metro_rail.json")
    .add("images/anim/outro_steam.json")
    .add("images/sprite/intro_sit.png")//sprite
    .add("images/sprite/intro_lookdown.png")
    .add("images/sprite/intro_drink.png")
    .add("images/sprite/intro_teapot.png")
    .add("images/sprite/test_assist.png")
    .add("images/sprite/test_head_down.png")
    .add("images/sprite/test_head_up.png")
    .add("images/sprite/test_panic.png")
    .add("images/sprite/test_sit_down.png")
    .add("images/sprite/test_sit_up.png")
    .add("images/sprite/metro_p1.png")
    .add("images/sprite/metro_p2.png")
    .add("images/sprite/metro_p3.png")
    .add("images/sprite/metro_p4.png")
    .add("images/sprite/metro_phone.png")
    .add("images/sprite/metro_sit.png")
    .add("images/sprite/home_dog_bed.png")
    .add("images/sprite/home_bed_lookdown.png")
    .add("images/sprite/home_bed_lookside.png")
    .add("images/sprite/home_bed_pet.png")
    .add("images/sprite/home_chair.png")
    .add("images/sprite/home_grandma.png")
    .add("images/sprite/room_chair.png")
    .add("images/sprite/vet_vet_stand.png")
    .add("images/sprite/vet_dog.png")
    .add("images/sprite/vet_stand.png")
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
    .on("progress", loadProgressHandler)
    .load(setup);

function loadProgressHandler(loader, resource){

    //console.log("loading: " + resource.url); 
    //console.log("progress: " + loader.progress + "%"); 

    var color = 0x1 * Math.floor(loader.progress/100*240) + 0x100 * Math.floor(loader.progress/100*240) + 0x10000 * Math.floor(loader.progress/100*240);
    
    loadBox.beginFill(0xffffff - color, 1);
    loadBox.drawRect(0, 0, 360, 640);
    loadBox.endFill();
}

function setup() {
    //bg
    bg_intro = new Sprite(resources["images/bg/intro.png"].texture);
    bg_test = new Sprite(resources["images/bg/test.png"].texture);
    bg_metro_day = new Sprite(resources["images/bg/metro_day.png"].texture);
    bg_metro_evening = new Sprite(resources["images/bg/metro_evening.png"].texture);
    bg_metro_night = new Sprite(resources["images/bg/metro_night.png"].texture);
    bg_home = new Sprite(resources["images/bg/home.png"].texture);
    bg_room = new Sprite(resources["images/bg/room.png"].texture);
    bg_vet = new Sprite(resources["images/bg/vet.png"].texture);
    bg_vet_dark = new Sprite(resources["images/bg/vet_dark.png"].texture);


    //anims
    var animIntroSteamArray = [];
    for (var i = 1; i < 3; i++) {
        animIntroSteamArray.push(PIXI.Texture.fromFrame('intro_steam_hot' + i + '.png'));
    }
    animIntroSteam = new PIXI.extras.AnimatedSprite(animIntroSteamArray);
    animIntroSteam.animationSpeed = 0.05;
    animIntroSteam.play();

    var animTestFootArray = [];
    for (var i = 1; i < 5; i++) {
        animTestFootArray.push(PIXI.Texture.fromFrame('test_foot' + i + '.png'));
    }
    animTestFoot = new PIXI.extras.AnimatedSprite(animTestFootArray);
    animTestFoot.animationSpeed = 0.05;
    animTestFoot.play();

    var animMetroRailArray = [];
    for (var i = 1; i < 4; i++) {
        animMetroRailArray.push(PIXI.Texture.fromFrame('metro_rail' + i + '.png'));
    }
    animMetroRail = new PIXI.extras.AnimatedSprite(animMetroRailArray);
    animMetroRail.animationSpeed = 0.75;
    animMetroRail.play();

    var animOutroSteamArray = [];
    for (var i = 1; i < 3; i++) {
        animOutroSteamArray.push(PIXI.Texture.fromFrame('outro_steam_cold' + i + '.png'));
    }
    animOutroSteam = new PIXI.extras.AnimatedSprite(animOutroSteamArray);
    animOutroSteam.animationSpeed = 0.75;
    animOutroSteam.play();

	//sprites
    intro_sit = new Sprite(resources["images/sprite/intro_sit.png"].texture);
    intro_lookdown = new Sprite(resources["images/sprite/intro_lookdown.png"].texture);
    intro_drink = new Sprite(resources["images/sprite/intro_drink.png"].texture);
    intro_teapot = new Sprite(resources["images/sprite/intro_teapot.png"].texture);
    test_assist = new Sprite(resources["images/sprite/test_assist.png"].texture);
    test_head_down = new Sprite(resources["images/sprite/test_head_down.png"].texture);
    test_head_up = new Sprite(resources["images/sprite/test_head_up.png"].texture);
    test_panic = new Sprite(resources["images/sprite/test_panic.png"].texture);
    test_sit_up = new Sprite(resources["images/sprite/test_sit_up.png"].texture);
    test_sit_down = new Sprite(resources["images/sprite/test_sit_down.png"].texture);
    metro_p1 = new Sprite(resources["images/sprite/metro_p1.png"].texture);
    metro_p2 = new Sprite(resources["images/sprite/metro_p2.png"].texture);
    metro_p3 = new Sprite(resources["images/sprite/metro_p3.png"].texture);
    metro_p4 = new Sprite(resources["images/sprite/metro_p4.png"].texture);
    metro_phone = new Sprite(resources["images/sprite/metro_phone.png"].texture);
    metro_sit = new Sprite(resources["images/sprite/metro_sit.png"].texture);
    home_chair = new Sprite(resources["images/sprite/home_chair.png"].texture);
    home_bed_lookdown = new Sprite(resources["images/sprite/home_bed_lookdown.png"].texture);
    home_bed_lookside = new Sprite(resources["images/sprite/home_bed_lookside.png"].texture);
    home_bed_pet = new Sprite(resources["images/sprite/home_bed_pet.png"].texture);
    home_dog_bed = new Sprite(resources["images/sprite/home_dog_bed.png"].texture);
    home_grandma = new Sprite(resources["images/sprite/home_grandma.png"].texture);
    room_chair = new Sprite(resources["images/sprite/room_chair.png"].texture);
    vet_vet_stand = new Sprite(resources["images/sprite/vet_vet_stand.png"].texture);
    vet_dog = new Sprite(resources["images/sprite/vet_dog.png"].texture);
    vet_stand = new Sprite(resources["images/sprite/vet_stand.png"].texture);

    //sound
	resources.clock.sound.loop = true;
    resources.dog_pain.sound.loop = true;
    resources.twilight.sound.loop = true;
    resources.metro_inside.sound.loop = true;
    resources.phone_call.sound.loop = true;
	resources.room.sound.loop = true;
    resources.room_high.sound.loop = true;
    resources.room_low.sound.loop = true;
    
    blackout = new Graphics();
    blackout.beginFill(0x000000, 1);
    blackout.drawRect(0, 0, 360, 640);
    blackout.endFill();
    app.stage.addChildAt(blackout, 3);
    blackout.visible = false;


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
    // // console.log($.count);

    $ = {};
    
    // $.not_nice_to_gf = 1;
    
    state = play;

    app.ticker.add(delta => gameLoop(delta)); //60 frames per second without lag -> 16.67ms per frame

    start();
}

function start(){
    app.stage.removeChild(loadText);
    M.s("Come on in!");
    C.t({
        "Enter": function(msg) {
            app.stage.removeChild(loadBox);
            clearMsg();
            C.hide();
            start_home1();
        }
    });
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