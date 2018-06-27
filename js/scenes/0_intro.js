//timeline = 0
//I can pretend to be a therpist for some people, while I should tell them I'm really not
//This 'strange' therapy

function start_intro(){

	resources.bgm.sound.play();

	M.s('Hi! Nice to meet you');

	C.s({
        "": function(msg) {
            P.s(msg);
            C.hide();
        },
        "": function(msg) {
            P.s(msg);
            C.hide();
        },
        "": function(msg) {
            P.s(msg);
            C.hide();
        }
    });
}

async function end_intro(){
	await sleep(2500);
	resources.bgm.sound.stop();
	clearMsg();
	start_test1();
}