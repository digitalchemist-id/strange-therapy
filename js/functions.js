//system

function noOp(){
    console.log("noOp");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function handleQueue() {
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
    if(pushCount <= 0 && skipQueue){
        skipQueue = false;
        queue = 0;
    }
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

//messages

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
    console.log(msgArray);
    msgArray.forEach(
        function(element, index, array){
            element.destroy();
        }
    );
    msgArray = [];
    console.log(msgArray);
}