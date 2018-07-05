//timeline = 13 June 16th Thu

async function start_test4(){	
	await sleep(4000);
	resources.room_low.sound.play();
	resources.clock.sound.play();

	await sleep(2000);
	blackout.visible = false;
	bg_test.visible = true;
	//clock ticking
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
		resources.room_low.sound.stop();
		blackout.visible = true;
		bg_test.visible = false;
	});
}