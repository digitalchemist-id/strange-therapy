//timeline = 1, June 12th
//Organic Chemistry 1 finals 

function start_test1(){
	resources.bgm.sound.stop();	

	//clock ticking
	Q.wait(1000);
	T.t('2016 Spring Semester Organic Chemistry 1 finals');
	T.t('Question #10 c)');
	T.t('Of the following compounds');
	T.t('which has higher boling point?');
	
	T.t('1. pentane');
	T.t('2. 2,2-dimethylpropane');

	P.t("Okay");
	P.t("To solve this one - ");
	P.t("Step one, don't panic");

	C.t({
        "[Panic]": function(msg) { 
        	$.test1_panicked = true;
        	C.hide();
        	test1_choose();
    	},
        "[Don't panic]": function(msg) {
        	C.hide();
        	test1_choose();
    	}
    });
}


function test1_choose(){
	if(test1_panicked){
		P.t("But I've never even heard of -");
    	P.t("2,2-dimethylpropane");
    	P.t("Is that even a word?");
    	P.t("Why does it have numbers in it?");
    	P.t("Let's just choose one")
	} else {
		P.t("I didn't panic");
		P.t("Cool.");
		P.t("Now this question is pretty straightforward");
		P.t("It's asking out of the two compounds");
		P.t("Which boils at higher temperature?");
		P.t("And of course these two compounds have same formula - C5H12");
		P.t("They differ by structure");
		P.t("Structure affect attraction in a kind of way that");
		P.t("More surface area leads to more attraction");
		P.t("Pentane is chain-shaped and the other one is ball-shaped");
		P.t("So out of the two the one with higher boiling point is...");
	}
	C.t({
		'1. pentane': function(msg) {
			P.t('is it...');
			P.t(msg + '?');
			$.test1_correct = true;
			C.hide();
			test1_after();
		},
        '2. 2,2-dimethylpropane': function(msg) {
        	P.t('is it...');
        	P.t(msg + '?');
        	$.test1_correct = false;
        	C.hide();
        	test1_after();
        },
        'dimethyl... what?': function(msg) {
        	P.t(msg);
        	P.t('Uh');
        	P.t('I\'ll just go with 2,2-dimethylpropane because I like the way it sounds');
        	P.t('If it sounds the way I think, that is');
        	$.test1_correct = false;
        	C.hide();
        	test1_after();
        }
	});
}

function test1_after(){


	Q.do(function(){
		resources.cellphone.sound.play();
	});
	Q.wait(1000);
	
	//alarm ringing
	A.s('Time\'s up!');

	A.s('Everyone turn your tests in!');
	//turns test in 
	Q.wait(2000);

	P.t('Oh');

	if($.test1_correct){
		P.t('That didn\'t go so bad');
		P.t('Actually, it was better than I expected');
	} else {
		P.t('That did\'t go so well');
		P.t('Let\'s just forget about it quickly and prepare for the next one quick');
	}

	P.t('My first semester with a major...');
	P.t('It have been a tough one');
	P.t('I had to work hard to catch up');
	P.t('And FINALLY now it\'s almost over');
	P.t('Just 3 more finals');
	P.t('And a few essays and projects to go');
	//
	P.t('Uh... Haven\'t got to sleep properly');
	P.t('Man, I\'m just really looking forward to that summer break');
	P.t("I just wanna go home spend time with Jaya");
	P.t("I haven't visited in weeks...");
	P.t("He'll miss me so much");
	P.t("I miss him too");
	P.t("But right now, I have so much things to take care of");

	P.t('So...');
	P.t('Next test is...');
	P.t('Oh it\'s tomorrow');
	P.t('Basic Computer Methods');
	P.t('I\'d better hurry now');
	P.t('No time to waste');

	Q.do(end_test1);

}

async function end_test1(){
	await sleep(2500);
	clearMsg();
	start_room1();
}