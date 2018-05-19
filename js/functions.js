function noOp(){
    console.log("noOp");
}

async function showOptions(click) {
    for(var i=0;i<3;++i){
        await sleep(500);
        button[i].on('pointerdown', click[i]);
        option[i].visible = true;
        option[i].alpha = 0;
        gradientShow[i] = true;
    }
}

async function clearOptions(){
    for(var i = 0; i<3; ++i) {
        gradientHide[i] = true;
        button[i].off('pointerdown');
        await sleep(500);
        option[i].visible = false;
    }
}


function choose(arg, click) {
    for(var i = 0; i<3; ++i) {
        text[i].text = arg[i];
        textMetrics = TextMetrics.measureText(arg[i], style);
        text[i].x = 300/2 - textMetrics.width/2;
    }
    showOptions(click);
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
