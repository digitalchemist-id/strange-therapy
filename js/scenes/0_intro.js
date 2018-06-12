//timeline = 0
//I can pretend to be a therpist for some people, while I should tell them I'm really not
//This 'strange' therapy is meant to cure me

function start_intro(){

		resources.bgm.sound.play();

	M.s('Hi! Nice to meet you');

	C.s({
	    'Hi! real nice to meet you too!': function(msg) {P.s(msg); C.hide(); end_intro();},
	    'What? Who are you?': function(msg) {P.s(msg); C.hide(); end_intro();},
	    'What? Where am I?': function(msg) {P.s(msg); C.hide(); end_intro();}
	});
}

async function end_intro(){
	await sleep(2500);
	clearMsg();
	start_test1();
}