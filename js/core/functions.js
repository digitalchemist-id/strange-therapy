//system

function noOp(){
    console.log("noOp");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//choices

function handleGradient() {
    //handle alpha values of options
    for(var i=0;i<3;++i){
        if(choice.option[i].alpha < 1 && choice.gradientShow[i]){
            choice.option[i].alpha += 0.10;
        }
        else if (choice.option[i].alpha >= 1 && choice.gradientShow[i]){
            choice.option[i].alpha = 1;
            choice.gradientShow[i] = false;
        }

        if(choice.option[i].alpha > 0 && choice.gradientHide[i]){
            choice.option[i].alpha -= 0.10;
        }
        else if (choice.option[i].alpha <= 0 && choice.gradientHide[i]){
            choice.option[i].alpha = 0;
            choice.gradientHide[i] = false;
        }
    }
}

//messages - msgArray is global

function checkMsgPush() {
    if(pushCount > 0){
        msgArray.forEach(
            function(element){
                element.position.y -= pushHeight/5;
            }
        );
        pushCount -= pushHeight/5;
    }
    msgArray.forEach(
        function(element, index, array){
            if(element.position.y < -100){
                element.destroy();
                array.splice(0, 1);
            }
        }
    );
}

function clearMsg() {
    //console.log(msgArray);
    msgArray.forEach(
        function(element, index, array){
            element.destroy();
        }
    );
    msgArray = [];
    //console.log(msgArray);
}