/***********************
***setup and gameplay***
***********************/

document.body.appendChild(app.view);

loader
    .add("images/example.png")//example image
    .load(setup);

function setup() {     

    dev();

    state = play;
    
    app.ticker.add(delta => gameLoop(delta)); //60 ticks per second without lag -> 16.67ms per tick
}

function gameLoop(delta){

    state(delta);
}

function play(delta){

    handleQueue();
    handleGradient();
    checkMsgPush();
}