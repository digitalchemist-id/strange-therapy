//timeline = 2
//it all starts with a phone call...
//The project reminder - I'll get it handled after tomorrow's test
//Gf reminder text her or no?

function start_room1(){
	Q.wait(1000);
	//studying...
	P.t("...");
	Q.wait(2000);
	P.t("......");
	Q.wait(2000);
	P.t("I... want... to...");
	P.t("Take a quick break");
	P.t("I NEED to");

	Q.do(function(){
		resources.cellphone.sound.play();
	});
	Q.wait(1000);

	P.t("Oh, maybe just the excuse I needed to take one");
	P.t("... or maybe not");
	P.t("It's from my clubmate");
	P.t("It's gotta be about the club project...")

	C.t({
	    '[Check message]': function(msg) {P.t(msg); C.hide(); room1_1();},
	});
}

function room1_1(){
	F.s("I just finished doing my part in the presentation. I sent you an email. Plz check them and integrate the formats with other parts");
	F.s("Are you done with your part too?");

	C.s({
	    "Of course man!": function(msg) {
	    	P.s(msg);
	    	P.s("I'm finished with most of the parts");
	    	P.s("I just need to wrap things up");
	    	P.s("After tomorrow's test");
	    	F.s("That's great to hear");
	    	F.s("Good luck with tomorrow");
	    	P.s("Thanks");
	    	C.hide();
	    	room1_2();
	    },
	    "Actually...": function(msg) {
	    	P.s(msg);
	    	P.s("I have a test tomorrow so... first things first");
	    	P.s("But I'll make sure I finish my part up by day after tomorrow");
	    	F.s("Yeah, our first draft should really be ready by then");
	    	P.s("You have my word");
	    	F.s("How many test do you have left?");
	    	P.s("3 more to go. I'm half way through");
	    	F.s("Woah... just try not to lose sanity man");
	    	P.s("But around this time of the semester I bet everyone's crazy");
	    	F.s("Everyone sure is");
	    	F.s("Good luck with tomorrow");
	    	P.s("Thanks");

	    	C.hide();
	    	room1_2();
	    },
	    "[ignore]": function(msg) {
	    	P.t(msg);
	    	P.t("I'm not finished with my part but...");
	    	P.t("I can reply to that later");
	    	P.t("I just want to focus on tomorrow's test for now");
	    	C.hide();
	    	room1_2();
	    }
	});
}

function room1_2(){

	P.t("Wait...");
	P.t("It's already 10 o'clock?");
	P.t("So...");
	P.t("OMG I'm counting again")
	P.t("I've only got 16 hours until the next exam");
	P.t("Taking out time to eat, sleep, take a shower, get to school and et cetera...");
	P.t("That's like less than 8 hours");
	P.t("And the time is ticking as I have this simulation going on my head");
	P.t("I wonder if what I do for the next 8 'avaiable' hours will have any impact on the result at all");
	P.t("I mean... It's a final exam right?");
	P.t("That means it tests for what I've learn in this whole semester");
	P.t("Will few hours of studying and reviewing even matter?");
	P.t("I REALLY doubt that");
	P.t("But maybe I just think the way I want to");
	P.t("just because I want to give myself an excuse to be lazy");
	P.t("Hmm...");

	C.t({
	    "Nah. What happens is pretty much already decided": function(msg) { C.hide();},
	    "Must try whatever I can with the time I have left": function(msg) { C.hide();},
	    "Stop being lazy and get to work, mortal!": function(msg) { C.hide();}
	});


}