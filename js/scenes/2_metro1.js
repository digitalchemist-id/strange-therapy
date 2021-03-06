//timeline = 2 June 8th Wed

async function start_metro1(){
	await sleep(4000);
	resources.metro_inside.sound.play();
	await sleep(2000);
	app.stage.addChildAt(bg_metro_night, 0);
    app.stage.addChildAt(animMetroRail,1);
	app.stage.addChildAt(metro_p1,2);
	app.stage.addChildAt(metro_sit,2);
	app.stage.addChildAt(metro_phone,2);
	metro_phone.visible = false;
	blackout.visible = false;

	P.t("My first semester with a major-");
	P.t("It has been a tough one");
	P.t("I had to work hard to catch up");
	P.t("And FINALLY now it's almost over");
	P.t("Just a few more finals");
	P.t("And a few essays and projects to go");
	Q.wait(2000);
	P.t("Despite having so much stuff to do...");
	P.t("Going to my parent's house-");
	P.t("I kinda feel guilty about it");
	P.t("Maybe I should have just stayed...");
	Q.wait(2000);
	C.t({
        "I won't focus for next two hours anyway": function(msg) {
        	P.t(msg);
        	P.t("So it doesn't matter")
        	C.hide();
        	metro1_friend_msg();
        },
        "I miss my dog just too much": function(msg) {
        	P.t(msg);
        	P.t("He's gonna miss me too");
        	C.hide();
        	metro1_friend_msg();
    	},
        "I'm sick and tired of sitting in library": function(msg) {
        	P.t(msg);
        	P.t("I've been there for too long");
        	C.hide();
        	metro1_friend_msg();
    	}
    });
}

function metro1_friend_msg(){
	Q.wait(1000);
	Q.do(function(){
		resources.phone_vib.sound.play();
	});
	Q.wait(3000);
	Q.do(function(){
		metro_sit.visible = false;
		metro_phone.visible = true;
	});
	P.t("A message...");
	P.t("It's from my clubmate");
	P.t("Oh man... I almost forgot...");
	P.t("It's gotta be about the club project...")

	C.t({
	    "[Check message]": function(msg) {
	    	$.friend_msg1_checked = true;
	    	C.hide();
	    	metro1_friend_dialogue();
	    },
	    "[Don't]": function(msg) {
	    	$.friend_msg1_checked = false;
	    	P.t("I can check that later");
	    	P.t("It's not like I've done my part anyway");
	    	P.t("Right now I just want to... rest");
	    	P.t("While I can");
	    	C.hide();
	    	metro1_gf_msg();}
	});
}

function metro1_friend_dialogue() {
	Q.wait(2000);
	F.s("Hey");
	F.s("I just finished doing my part in the presentation. Sent you through a mail");
	F.s("Check them and integrate the formats when you've got time");
	F.s("Are you done with your part too?");
	C.s({
	    "Of course man!": function(msg) {
	       	$.friend_msg1_replied = true;
	       	$.project_under_control = true;
	    	P.s(msg);
	    	P.s("I'm finished with most of the parts");
	    	P.s("I just need to wrap things up");
	    	F.s("That's great to hear");
	    	F.s("But you should have it done by the weekend");
	    	P.s("That's no problem");
	    	C.hide();
	    	metro1_friend_dialogue_2();
	    },
	    "Actually...": function(msg) {
	    	$.friend_msg1_replied = true;
	    	P.s(msg);
	    	P.s("I just finished a test so... first things first");
	    	P.s("But I'll make sure I finish my part up by the weekend");
	    	F.s("Yeah, our first draft should really be ready by then");
	    	P.s("You have my word");
	    	C.hide();
	    	metro1_friend_dialogue_2();
	    },
	    "[ignore]": function(msg) {
	    	$.friend_msg1_replied = false;
	    	P.t("I'm not finished with my part but...");
	    	P.t("I can reply to that later");
	    	P.t("I just want to... rest");
	    	P.t("While I can");
	    	C.hide();
	    	metro1_gf_msg();
	    }
	});
}

function metro1_friend_dialogue_2(){
	F.s("You still caught up with all the finals?");
	P.s("Hell lot of them");
	F.s("I'm glad to see that you're not too insane yet");
	P.s("I'm not?");
	P.s("But I bet around this time of the semester everyone's losing their minds lol");
	F.s("Everyone sure freakin is");
	F.s("It's hard to get even a single text back from anyone");
	Q.wait(1000);
	F.s("Good luck with the rest of the finals");
	P.s("Thanks");
	F.s("Just text me when you're finished okay?");
	P.s("Of course");
	F.s("See ya");
	P.s("Cool");
	Q.do(metro1_gf_msg);
}

function metro1_gf_msg(){
	Q.do(function(){
		metro_phone.visible = false;
		metro_sit.visible = true;
	});
	Q.wait(3000);

	Q.do(function(){
		resources.phone_vib.sound.play();
	});
	Q.wait(3000);
	Q.do(function(){
		metro_sit.visible = false;
		metro_phone.visible = true;
	});

	P.t("Another message?");
	P.t("Oh... it's from my girlfriend");

	C.t({
	    "[Check message]": function(msg) {
	    	$.not_nice_to_gf = 0;
	    	$.gf_msg1_checked = true;
	    	C.hide();
	    	metro1_gf_dialogue();
	    },
	    "[Don't]": function(msg) {
	    	$.not_nice_to_gf = 1
	    	$.gf_msg1_checked = false;
	    	$.gf_msg1_replied = false;
	    	P.t("This moment...");
	    	P.t("I don't know if I'll ever get to rest a single moment if I don't now");
	    	P.t("And I know she's just as busy");
	    	P.t("I'll just check on it later");
	    	C.hide();
	    	end_metro1();
	    }
	});
}

function metro1_gf_dialogue() {
	Gf.s("Are you doing okay?");
	Gf.s("How did it go?");
	Gf.s("Just text me later when it's over ;)");

	C.s({
	    "I did great!": function(msg) {
	    	$.gf_msg1_replied = true;
	    	$.metro1_doing_great = true;
	    	P.s(msg);
	    	Gf.s("Wow...");
	    	Gf.s("Congrats!");
	    	Gf.s("You're so full of energy!")
	    	if($.test1_correct && $.project_under_control){
	    		P.s("I actually think I'm doing alright");
	    		P.s("I've been doing great this semester");
	    		P.s("Like... I'm under control");
	    		P.s("You know what I mean?");
	    		Gf.s("Nope");
	    		Gf.s("XD");
	    		Gf.s("I texted you because I felt like I'm losing my sanity");
	    		Gf.s("But still great to hear that you're doing awesome!");
	    	} else {
	    		P.s("Yeah, but I don't know why!");
	    		P.s("Maybe I just want to feel like I'm doing great");
	    		P.s("And that's important");
	    		Gf.s("Of course it is!");
	    		Gf.s("I'm sure you're actually doing alright");
	    		Gf.s("So don't worry XD");
	    	}
	    	C.hide();
	    	metro1_gf_dialogue_2();
	    },
	    "Please... save me... from... this hell...": function(msg) {
	    	$.gf_msg1_replied = true;
	    	$.metro1_doing_great = false;
	    	P.s(msg);
	    	Gf.s("Oh... poor you");
	    	Gf.s("It's okay");
	    	Gf.s("This will be over soon");
	    	Gf.s("How many tests did you say you have left?");
	    	P.s("I have a few");
	    	Gf.s("It'll be over soon...");
	    	Gf.s("Let's try not to lose too much of our sanity");
	    	P.s("Okay");
	    	P.s("if I have any left");
	    	Gf.s("XD");
	    	C.hide();
	    	metro1_gf_dialogue_2();
	    },
	    "[ignore]": function(msg) {
	    	$.not_nice_to_gf++;
	    	$.gf_msg1_replied = false;
	    	P.t("I'll text her later");
	    	P.t("I don't know if I'll ever get to rest a single moment if I don't now");
	    	C.hide();
	    	end_metro1();
	    }
	});
}

function metro1_gf_dialogue_2() {
	P.s("You have didn't take any finals yet right?");
	P.s("You take them all next week");
	Gf.s("Good memory!");
	Gf.s("You deserve A+ for that");
	Gf.s("The finals... plus a few reports");
	Gf.s("And some neverending essays...");
	P.s("Still your semester ends earlier than mine");
	Gf.s("Yours end on 16th right?");
	Gf.s("Mine ends on 15th... So yeah. Just one day");
	Q.wait(1500);
	Gf.s("But you know I need time to prepare for summer session... right?");
	P.s("Yeah I know that");
	P.t("...");
	P.s("You leave to California the very next week");
	P.s("I can't believe we only get to spend like a couple of days together");
	P.s("And we already haven't met in like what... a month?");
	Gf.s("Couple of days... at best");
	Gf.s("We've talked about this...");

	C.s({
	    "Yeah... I just can't help feeling a bit down": function(msg) {
	    	P.s(msg);
	    	Gf.s("Hey...");
	    	if($.metro1_doing_great){
	    		Gf.s("What happened to all the spirits?");
	    		P.s("They're still here");
	    	} else {
	    		Gf.s("I made you feel worse didn't I");
	    	}
	    	Q.wait(1000);
	    	P.s("It's fine");
	    	P.s("It's so wrong for me to blame you");
	    	Gf.s("Thank you for saying that");
	    	C.hide();
	    	metro1_gf_dialogue_3();
	    },
	    "And I never liked it": function(msg) {
	    	$.not_nice_to_gf++;
	    	P.s(msg);
	    	Q.wait(2000);
	    	Gf.s("Yeah. You certainly didn't");
	    	C.hide();
	    	metro1_gf_dialogue_3();
	    },
	    "...": function(msg) {
	    	P.t("...");
	    	Q.wait(1500);
	    	Gf.s("You still there?");
	    	P.s("Yeah");
	    	Gf.s("Wanna talk about it later?");
	    	P.s("I think it'd be better if we do");
	    	C.hide();
	    	metro1_gf_dialogue_3();
	    }
	});
}

function metro1_gf_dialogue_3() {
	Q.wait(1000);
	Gf.s("I should get back to studying");
	Gf.s("We spent way more time talking than we should have");
	P.s("Yeah...");
	P.s("Back to studying");
	P.s("Alright");
	C.s({
	    "Love you": function(msg) {
	    	P.s(msg);
	    	if($.not_nice_to_gf < 1){
	    		Gf.s("Love you too");
	    		Gf.s("It's gonna be alright...");
	    	} else {
	    		Q.wait(2000);
	    	}
	    	C.hide();
	    	end_metro1();
	    },
	    "Let's keep it up": function(msg) {
	    	P.s(msg);
	    	if($.not_nice_to_gf < 1){
	    		Gf.s("Yeah let's!");
	    		Gf.s("We can do it!!!");
	    	} else {
	    		Q.wait(1000);
	    		Gf.s("Let's try...");
	    	}
	    	C.hide();
	    	end_metro1();
	    },
	    "[don't say anymore]": function(msg) {
	    	$.not_nice_to_gf++;
	    	if($.not_nice_to_gf < 2){
	    		Gf.s("Let's keep it up");
	    	} else {
	    		P.t("And there she goes");
	    		P.t("Saying nothing more");
	    		P.t("Great");
	    	}
	    	C.hide();
	    	end_metro1();
	    }
	});
}

function end_metro1(){
	Q.wait(4000);
	Q.do(function(){
		metro_phone.visible = false;
		metro_sit.visible = true;
	});
	Q.wait(2000);
	Q.do(clearMsg);
	Q.do(function(){
		app.stage.removeChild(bg_metro_night);
		app.stage.removeChild(animMetroRail);
		app.stage.removeChild(metro_p1);
		app.stage.removeChild(metro_phone);
		app.stage.removeChild(metro_sit);
		resources.metro_inside.sound.stop();
		blackout.visible = true;
	});
	Q.do(start_home1);
}