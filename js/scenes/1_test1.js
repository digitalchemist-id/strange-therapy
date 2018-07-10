//timeline = 1, June 8th Wed

async function start_test1(){
	//loader
	
	await sleep(2000);
	resources.room_low.sound.play();
	resources.clock.sound.play();
	await sleep(2000);
	app.stage.addChildAt(bg_test, 0);
    app.stage.addChildAt(animTestFoot,1);
	app.stage.addChildAt(test_assist,2);
	app.stage.addChildAt(test_head_down,2);
	app.stage.addChildAt(test_head_up,2);
	app.stage.addChildAt(test_panic,2);
	app.stage.addChildAt(test_sit_up,2);
	app.stage.addChildAt(test_sit_down,2);
	test_head_up.visible = false;
	test_panic.visible = false;
	test_sit_up.visible = false;
	blackout.visible = false;

	//clock ticking
	Q.wait(1000);
	//T.t('2016 Spring Semester Organic Chemistry 1 finals');
	T.t('Question #10 c)');
	T.t('Of the following compounds');
	T.t('which has higher boling point?');
	
	T.t('1. pentane');
	T.t('2. 2,2-dimethylpropane');

	P.t("Okay");
	P.t("To solve this question");
	P.t("Step one - don't panic");

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
	if($.test1_panicked){
		Q.do(function(){
	        test_panic.visible = true;
	        test_sit_down.visible = false;
	    });
		P.panic("But I've never even heard of -");
    	P.panic("2,2-dimethylpropane");
    	P.panic("Is that even a word?");
    	P.panic("Why does it have numbers in it?");
    	P.t("Gosh... I just don't care")
    	P.t("Let's just choose one");
	} else {
		P.t("Cool.");
		Q.wait(1000);
		P.t("Now this question is pretty straightforward");
		P.t("It's asking out of the two compounds");
		P.t("Which boils at higher temperature?");
		P.t("And of course these two compounds have same formula - C5H12 - they differ by structure");
		P.t("Structure affect attraction in a kind of way that more surface area leads to more attraction");
		P.t("Pentane is chain-shaped and the other one is ball-shaped");
		P.t("So out of the two the one with higher boiling point is...");
	}
	C.t({
		'1. pentane': function(msg) {
			P.t('is it...');
			P.t(msg + '?');
			$.test1_correct = true;
			$.test_correct = 1;
			C.hide();
			test1_after();
		},
        '2. 2,2-dimethylpropane': function(msg) {
        	P.t('is it...');
        	P.t(msg + '?');
        	$.test1_correct = false;
        	$.test_correct = 0;
        	C.hide();
        	test1_after();
        },
        'dimeth... what?': function(msg) {
        	P.t(msg);
        	P.t('Uh');
        	P.t('I\'ll just go with 2,2-dimethylpropane because I like the way it sounds');
        	P.t('If it sounds the way I think, that is');
        	$.test1_correct = false;
        	$.test_correct = 0;
        	C.hide();
        	test1_after();
        }
	});
}

function test1_after(){

	Q.wait(500);
	Q.do(function(){
		resources.clock.sound.stop();
	});
	Q.wait(1500);
	
	A.s('Time\'s up!');
	Q.do(function(){
        test_panic.visible = false;
        test_sit_down.visible = false;
        test_sit_up.visible = true;
        test_head_down.visible = false;
        test_head_up.visible = true;
    });
	A.s('Everyone turn your tests in!');
	
	Q.wait(3000);

	P.t('Oh');

	if($.test1_correct){
		P.t('That didn\'t go so bad');
		P.t('Actually, it was better than I expected');
	} else {
		P.t('That did\'t go so well');
		P.t("Actually, that was kinda terrible...");
		P.t('Let\'s just forget about it quickly and prepare for the next one quick');
	}

	Q.do(end_test1);
}

function end_test1(){
	Q.wait(3000);
	Q.do(clearMsg);
	Q.do(start_metro1);
	Q.do(function(){
		app.stage.removeChild(bg_test);
	    app.stage.removeChild(animTestFoot);
		app.stage.removeChild(test_assist);
		app.stage.removeChild(test_head_down);
		app.stage.removeChild(test_head_up);
		app.stage.removeChild(test_panic);
		app.stage.removeChild(test_sit_up);
		app.stage.removeChild(test_sit_down);
		resources.room_low.sound.stop();
		blackout.visible = true;
	});
}