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

    if(!holdQueue){
        if(queue>1){
            --queue;
        } else if (queue==1) {
            --queue;
            signal = true; console.log('trigger');
        } else if (queue==0) {
            signal = false;
            if(fqueue.length != 0){
                fqueue[0](); 
                fqueue.splice(0, 1);
            }
        }
    }
}

function play(delta){
    handleGradient();
    checkMsgPush();
}