//Create a Pixi Application
let app = new Application({ 
    width: 360, 
    height: 640,                       
    antialiasing: true, 
    transparent: false, 
    resolution: 1
  }
);

document.body.appendChild(app.view);


loader
    .add("images/example.png")
    .load(setup);

var style = new TextStyle ({
    fontFamily : 'Arial',
    fontSize: 14,
    fill : 0xffffff,
    wordWrap: true,
    wordWrapWidth: 300 
});

const button = [];

var text = [];
let textMetrics;
let option = [];
let state;
var tick = 0;
let gradientShow = [false], gradientHide = [false];

let box = new Graphics();
box.beginFill(0x888888, 0.25);
box.drawRoundedRect(0, 0, 300, 30, 10);
box.endFill();

//make choice boxes
for(var i = 0; i<3; ++i) {
        //new option
        option[i] = new Container();
        option[i].position.set(30, 500 + 40*i);
        app.stage.addChild(option[i]);
        //text container button
        button[i] = new Sprite(box.generateCanvasTexture());
        button[i].interactive = true;
        button[i].buttonMode = true;
        option[i].addChild(button[i]);
        //add text
        text[i] = new Text(' ', style);
        text[i].x = 300/2;
        text[i].y = 8;
        option[i].addChild(text[i]);
        option[i].visible = false;
}

function setup() {     
    
    app.ticker.add(delta => gameLoop(delta));

    dev();

    state = play;
}

function gameLoop(delta){
    state(delta);
    //console.log(option[0].alpha + " " + gradientShow + " " + gradientHide);
}

function play(delta){
    //handle alpha values of options
    for(var i=0;i<3;++i){
        if(option[i].alpha < 1 && gradientShow[i]){
            option[i].alpha += 0.05;
        }
        else if (option[i].alpha >= 1 && gradientShow[i]){
            option[i].alpha = 1;
            gradientShow[i] = false;
        }

        if(option[i].alpha > 0 && gradientHide[i]){
            option[i].alpha -= 0.05;
        }
        else if (option[i].alpha <= 0 && gradientHide[i]){
            option[i].alpha = 0;
            gradientHide[i] = false;
        }
    }
}

async function dev(){

    choose(['Choice 1', 'Choice 2!!!!!', 'Choice 3 and there'], 
    [
        function onClick1() {console.log("clicked 1!"); clearOptions(); dev2();}, 
        function onClick2() {console.log("clicked 2!"); clearOptions(); dev2();},
        function onClick3() {console.log("clicked 3!"); clearOptions(); blank();},
    ]);
}

async function dev2(){

    await sleep(2000);

    choose(['Choice 1 again', 'Choice 2!!!!! again!', 'Choice 3 and there again'],
    [
        function onClick1() {console.log("clicked 1 this time!"); clearOptions(); blank();}, 
        function onClick2() {console.log("clicked 2 this time!"); clearOptions(); blank();},
        function onClick3() {console.log("clicked 3 this time!"); clearOptions(); blank();}
    ]);
}

function blank(){

}

    
/*
    var textTest = 'basic text testing 한글 테스트';

    var text = new Text(textTest, style);
    text.x = 50;
    text.y = 508;
    app.stage.addChild(text);

    let textMetrics = TextMetrics.measureText(textTest, style);
    console.log('width: ' + textMetrics.width + '\n height: ' + textMetrics.height);
*/

    


