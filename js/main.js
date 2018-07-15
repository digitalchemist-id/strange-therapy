/***********************
***setup and gameplay***
***********************/
document.body.appendChild(app.view);
loader
    .add("images/icon.png", function(){
        icon = new Sprite(resources["images/icon.png"].texture);
        icon.height = 42;
        icon.width = 42;
        icon.alpha = 0.8;
        app.stage.addChild(icon);
    })
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
    .add("images/sprite/metro_p5.png")
    .add("images/sprite/metro_phone.png")
    .add("images/sprite/metro_sit.png")
    .add("images/sprite/home_dog_bed.png")
    .add("images/sprite/home_dog_cushion.png")
    .add("images/sprite/home_dog_eat.png")
    .add("images/sprite/home_dog_pain.png")
    .add("images/sprite/home_bed_lookdown.png")
    .add("images/sprite/home_bed_lookside.png")
    .add("images/sprite/home_bed_pet.png")
    .add("images/sprite/home_bed_phone.png")
    .add("images/sprite/home_bed_call.png")
    .add("images/sprite/home_chair.png")
    .add("images/sprite/home_grandma.png")
    .add("images/sprite/home_books.png")
    .add("images/sprite/home_bowl.png")
    .add("images/sprite/home_cushion.png")
    .add("images/sprite/home_desk_study.png")
    .add("images/sprite/home_desk_look.png")
    .add("images/sprite/home_desk_front.png")
    .add("images/sprite/home_floor_panic.png")
    .add("images/sprite/home_floor_search.png")
    .add("images/sprite/home_floor_watch.png")
    .add("images/sprite/home_floor_wipe.png")
    .add("images/sprite/home_mat.png")
    .add("images/sprite/home_stand.png")
    .add("images/sprite/home_vomit.png")
    .add("images/sprite/room_chair.png")
    .add("images/sprite/room_phone.png")
    .add("images/sprite/room_study.png")
    .add("images/sprite/room_text.png")
    .add("images/sprite/room_call.png")
    .add("images/sprite/room_panic.png")
    .add("images/sprite/vet_vet_stand.png")
    .add("images/sprite/vet_vet_back.png")
    .add("images/sprite/vet_vet_side.png")
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
    .add("microwave", "sounds/microwave.wav")
    .add("drink", "sounds/drink.wav")
    .add("send_1", "sounds/send_1.wav")
    .add("send_2", "sounds/send_2.wav")
    .add("send_3", "sounds/send_3.wav")
    .add("send_4", "sounds/send_4.wav")
    .on("progress", loadProgressHandler)
    .load(setup);

function loadProgressHandler(loader, resource){

    //console.log("loading: " + resource.url); 
    //console.log("progress: " + loader.progress + "%"); 

    var color = 0x1 * Math.floor(loader.progress/100*244) + 0x100 * Math.floor(loader.progress/100*244) + 0x10000 * Math.floor(loader.progress/100*244);
    
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

    //animations
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
    animOutroSteam.animationSpeed = 0.05;
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
    metro_p5 = new Sprite(resources["images/sprite/metro_p5.png"].texture);
    metro_phone = new Sprite(resources["images/sprite/metro_phone.png"].texture);
    metro_sit = new Sprite(resources["images/sprite/metro_sit.png"].texture);
    home_bed_lookdown = new Sprite(resources["images/sprite/home_bed_lookdown.png"].texture);
    home_bed_lookside = new Sprite(resources["images/sprite/home_bed_lookside.png"].texture);
    home_bed_pet = new Sprite(resources["images/sprite/home_bed_pet.png"].texture);
    home_bed_phone = new Sprite(resources["images/sprite/home_bed_phone.png"].texture);
    home_bed_call = new Sprite(resources["images/sprite/home_bed_call.png"].texture);
    home_books = new Sprite(resources["images/sprite/home_books.png"].texture);
    home_bowl = new Sprite(resources["images/sprite/home_bowl.png"].texture);
    home_chair = new Sprite(resources["images/sprite/home_chair.png"].texture);
    home_cushion = new Sprite(resources["images/sprite/home_cushion.png"].texture);
    home_desk_look = new Sprite(resources["images/sprite/home_desk_look.png"].texture);
    home_desk_study = new Sprite(resources["images/sprite/home_desk_study.png"].texture);
    home_desk_front = new Sprite(resources["images/sprite/home_desk_front.png"].texture);
    home_dog_bed = new Sprite(resources["images/sprite/home_dog_bed.png"].texture);
    home_dog_cushion = new Sprite(resources["images/sprite/home_dog_cushion.png"].texture);
    home_dog_eat = new Sprite(resources["images/sprite/home_dog_eat.png"].texture);
    home_dog_pain = new Sprite(resources["images/sprite/home_dog_pain.png"].texture);
    home_floor_panic = new Sprite(resources["images/sprite/home_floor_panic.png"].texture);
    home_floor_search = new Sprite(resources["images/sprite/home_floor_search.png"].texture);
    home_floor_watch = new Sprite(resources["images/sprite/home_floor_watch.png"].texture);
    home_floor_wipe = new Sprite(resources["images/sprite/home_floor_wipe.png"].texture);
    home_grandma = new Sprite(resources["images/sprite/home_grandma.png"].texture);
    home_mat = new Sprite(resources["images/sprite/home_mat.png"].texture);
    home_stand = new Sprite(resources["images/sprite/home_stand.png"].texture);
    home_vomit = new Sprite(resources["images/sprite/home_vomit.png"].texture);
    room_chair = new Sprite(resources["images/sprite/room_chair.png"].texture);
    room_phone = new Sprite(resources["images/sprite/room_phone.png"].texture);
    room_study = new Sprite(resources["images/sprite/room_study.png"].texture);
    room_text = new Sprite(resources["images/sprite/room_text.png"].texture);
    room_call = new Sprite(resources["images/sprite/room_call.png"].texture);
    room_panic = new Sprite(resources["images/sprite/room_panic.png"].texture);
    vet_vet_stand = new Sprite(resources["images/sprite/vet_vet_stand.png"].texture);
    vet_vet_side = new Sprite(resources["images/sprite/vet_vet_side.png"].texture);
    vet_vet_back = new Sprite(resources["images/sprite/vet_vet_back.png"].texture);
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
            app.stage.removeChild(icon);
            clearMsg();
            C.hide();
            //blackout.visible = true;//dev
            start_intro();
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