//timeline = 8 June 15th Wed
//engineering mathematics

async function start_test3(){
	await sleep(6000);
	resources.room_low.sound.play();
	resources.clock.sound.play();
	await sleep(3000);
	T.t("3 days later");
	await sleep(4000);
	app.stage.addChildAt(bg_test, 0);
    app.stage.addChildAt(animTestFoot,1);
	app.stage.addChildAt(test_assist,2);
	app.stage.addChildAt(test_head_down,2);
	app.stage.addChildAt(test_head_up,2);
	app.stage.addChildAt(test_sit_up,2);
	app.stage.addChildAt(test_sit_down,2);
	animTestFoot.play();
	test_head_down.visible = true;
	test_sit_down.visible = true;
	test_head_up.visible = false;
	test_sit_up.visible = false;
	blackout.visible = false;
	//clock ticking
	Q.wait(2000);
	Q.do(clearMsg);
	Q.wait(1000);
	T.t("Question #2-2");
	T.t("Find Laplace transform of f(t) when");
	T.t("f(t) = sinh²(t)");
	Q.wait(1000);
	if($.test3_studied) {
		P.t("Laplace transform of f is L(f)");
		P.t("L(f') = sL(f) - f(0)");
		P.t("f'(t) = 2sinh(t)cosh(t)");
		P.t("sinh(2t) = 2sinh(t)cosh(t)");
		P.t("L(sinh(at)) = a/(s² - a²)");
		P.t("sinh(0) = 0");
	} else {
		Q.wait(1000);
		P.t("I like this question");
		P.t("It's short and simple");
		P.t("...");
		P.t("Except for the fact that I have to answer it");
	}
	P.t("So L(f) when f(t) = sinh²(t) must be equal to...");
	C.s({
        "2s/(s² - 4)": function(msg) {
        	$.test3_correct = false;
        	P.t(msg);
        	C.hide();
        	test3_after();
        },
        "2/s(s² - 4)": function(msg) {
        	$.test3_correct = true;
        	P.t(msg);
        	$.test_correct++;
        	C.hide();
        	test3_after();
        },
        "2/(s² - 4) + s": function(msg) {
        	$.test3_correct = false;
        	P.t(msg);
        	C.hide();
        	test3_after();
        }
    });
}

function test3_after(){
	Q.do(function(){
		resources.clock.sound.stop();
	});
	Q.wait(1000);
	
	A.s('Time\'s up!');
	Q.do(function(){
        test_sit_down.visible = false;
        test_sit_up.visible = true;
        test_head_down.visible = false;
        test_head_up.visible = true;
        animTestFoot.stop();
    });
	A.s('Everyone turn your tests in!');
	Q.wait(2000);

	P.t("Another one down");
	P.t("Now there's only one left");
	if($.test3_correct){
		P.t("Yes");
		P.t("FINALLY");
	} else {
		P.t("I'm not so sure if I care anymore");
		P.t("This semester already feels so over to me");
	}
	Q.do(end_test3);
}

function end_test3(){
	Q.wait(4000);
	Q.do(clearMsg);
	Q.do(function(){
		app.stage.removeChild(bg_test);
	    app.stage.removeChild(animTestFoot);
		app.stage.removeChild(test_assist);
		app.stage.removeChild(test_head_down);
		app.stage.removeChild(test_head_up);
		app.stage.removeChild(test_sit_up);
		app.stage.removeChild(test_sit_down);
		resources.room_low.sound.stop();
		blackout.visible = true;
	});
	Q.do(start_metro2);
}