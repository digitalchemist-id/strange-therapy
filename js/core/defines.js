//Create a Pixi Application
let app = new Application({ 
    width: 360, 
    height: 640,                       
    antialiasing: true, 
    transparent: false,
    backgroundColor: 0x000000,
    resolution: 1
});


let state;

var style = new TextStyle ({
    fontFamily : 'Arial',
    fontSize: 14,
    fill : 0xffffff,
    wordWrap: true,
    wordWrapWidth: 300 
});

var msgArray = [];
var pushCount, pushHeight;

let loadBox = new Graphics();
loadBox.beginFill(0xffffff, 1);
loadBox.drawRect(0, 0, 360, 640);
loadBox.endFill();
app.stage.addChildAt(loadBox, 0);

let loadText = new Text("LOADING", {
    fontFamily : 'Verdana',
    fontSize: 44,
    fill : 0x000000
});
loadText.x = 72;
loadText.y = 400;
app.stage.addChild(loadText);

let icon;
let bg_intro, bg_test, bg_metro_day, bg_metro_evening, bg_metro_night, bg_home, bg_room, bg_vet, bg_vet_dark, blackout;
let animIntroSteam, animTestFoot, animMetroRail, animOutroSteam;
let intro_sit, intro_lookdown, intro_drink, intro_teapot, test_assist, test_head_down, test_head_up, test_panic, 
test_sit_up, test_sit_down, metro_p1, metro_p2, metro_p3, metro_p4, metro_p5, metro_phone, metro_sit, home_bed_lookdown,
home_bed_lookside, home_bed_pet, home_bed_phone, home_bed_call, home_books, home_bowl, home_chair, home_cushion, home_desk_look,
home_desk_study, home_desk_front, home_dog_bed, home_dog_cushion, home_dog_eat, home_dog_pain, home_floor_panic, home_floor_search,
home_floor_watch, home_floor_wipe, home_grandma, home_mat, home_stand, home_vomit, room_chair, room_phone, room_study, room_text,
room_call, room_panic, vet_vet_stand, vet_vet_side, vet_vet_back, vet_dog, vet_stand;