//timeline = 11 June 16th
//Physical Chemistry 1

unction start_test4(){	

	//clock ticking
	Q.wait(1000);
	T.t("Question #1");
	T.t("Which of the following is true for a closed system doing no non-expansion work?");
	T.t("a) dG = TdS + Vdp");
	T.t("b) dG = pdV - TdS");
	T.t("c) dG = Vdp - SdT");

	if(/*studied*/) {
		P.t("G is Gibbs free energy. It is defined by G = H - TS");
		P.t("H is enthalpy. It is defined by H = U + pV");
		P.t("U, p, V, T and S means internal energy, pressure, volume, temperature, and entropy respectively.");
		P.t("I also recall the fundamental equation");
		P.t("dU = TdS - pdV");
	} else {
	}
	P.t("...");
	P.t("So the exact differential of G is equal to...");
	
	C.s({
        "a) dG = TdS + Vdp": function(msg) {
        	$.test1_correct = false;
        	C.hide();
        	test4_after();
        },
        "b) dG = pdV - TdS": function(msg) {
        	$.test1_correct = false;
        	C.hide();
        	test4_after();
        },
        "c) dG = Vdp - SdT": function(msg) {
        	$.test1_correct = true;
        	C.hide();
        	test4_after();
        }
    });
}

function test4_after(){

}