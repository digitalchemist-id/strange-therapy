//timeline = 13 June 16th Thu

async function start_test4(){	
	
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

	Q.wait(1000);
	T.t("Question #1");
	T.t("Which of the following is true for a closed system doing no non-expansion work?");
	T.t("a) dG = TdS + Vdp");
	T.t("b) dG = pdV - TdS");
	T.t("c) dG = Vdp - SdT");

	if($.test4_studied) {
		P.t("G is Gibbs free energy. It is defined by G = H - TS");
		P.t("This question is asking what the exact differential of G is")
		P.t("H is enthalpy. It is defined by H = U + pV");
		P.t("U, p, V, T and S means internal energy, pressure, volume, temperature, and entropy respectively.");
		P.t("I also recall the fundamental equation");
		P.t("dU = TdS - pdV");
		P.t("So the exact differential of G is equal to...");
	} else {
	}
	
	C.t({
        "a) dG = TdS + Vdp": function(msg) {
        	$.test4_correct = false;
        	P.t(msg);
        	C.hide();
        	test4_after();
        },
        "b) dG = pdV - TdS": function(msg) {
        	$.test4_correct = false;
        	P.t(msg);
        	C.hide();
        	test4_after();
        },
        "c) dG = Vdp - SdT": function(msg) {
        	$.test4_correct = true;
        	P.t(msg);
        	$.test_correct++;
        	C.hide();
        	test4_after();
        }
    });
}

function test4_after(){
	Q.do(function(){
		resources.clock.sound.stop();
	});
	Q.wait(1000);
	
	//alarm ringing
	A.s('Time\'s up!');

	A.s('Everyone turn your tests in!');
	//turns test in 
	Q.wait(2000);
	Q.do(end_test4);
}

function end_test4(){
	Q.wait(3000);
	Q.do(clearMsg);
	Q.do(start_metro3);
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