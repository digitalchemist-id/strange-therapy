//timeline = 5 June 11th Sat

async function start_room(){
	await sleep(4000);
	resources.room.sound.play();
	await sleep(2000);
    app.stage.addChildAt(bg_room, 0);
    app.stage.addChildAt(room_panic, 1);
    app.stage.addChildAt(room_call, 1);
    app.stage.addChildAt(room_text, 1);
    app.stage.addChildAt(room_study, 1);
    app.stage.addChildAt(room_phone, 1);
    app.stage.addChildAt(room_chair, 1);
    room_panic.visible = false;
    room_call.visible = false;
    room_text.visible = false;
	blackout.visible = false;

	Q.wait(1000);
	P.t("...");
	Q.wait(2000);
	P.t("......");
	Q.wait(2000);
	P.t("I... want... to...");
	P.t("Take a quick break");
	P.t("I NEED to");

	if($.destiny){
		P.t("I've done enough for today");
		P.t("No more torturing myself");
		P.t("Studying a few hours more or not won't even matter");
	} else {
		P.t("Few minutes of a break will help me focus more");
	}
	Q.wait(1000);
	Q.do(function(){
		room_phone.visible = false;
		room_study.visible = false;
		room_text.visible = true;
	});
	Q.wait(4000);
	P.t("Oh yeah...");
	Q.wait(1000);
	P.t("This just reminds me...");
	if(!$.friend_msg1_checked){
		P.t("I completely forgot about my friend's message");
		Q.wait(3000);
		F.s("Hey");
		F.s("I just finished doing my part in the presentation. Sent you through a mail");
		F.s("Check them and integrate the formats when you've got time");
		F.s("Are you done with your part too?");
		P.s("Shoot...");
	} else if(!$.friend_msg1_replied){
		P.t("I completely forgot to text my friend back");
		P.t("Shoot...");
	}
	P.t("I was supposed to finish my part in the presentation by tomorrow");
	P.t("Hmm...");
	if($.project_under_control){
		P.t("I mean, I finished it most of it days ago");
		P.t("But I haven't wrapped up the things I was supposed to");
	} else {
		P.t("I mean, I did work on most of it while I was home");
		P.t("But I haven't wrapped things up properly yet");
	}

	P.t("Should I work on it now instead of taking a break?");
	
	C.t({
        "Promise is a promise": function(msg) {
            P.t(msg);
            P.t("It is meant to be kept");
            if($.friend_msg1_replied){
                P.t("I said I'll finish my part my weekend");
            } else {
            	P.t("I didn't reply my friend back when he asked me about the project but...");
            }
            P.t("I'm gonna keep my promise");
            P.t("So no more procrastinating");
            Q.do(function(){
				room_text.visible = false;
				room_phone.visible = true;
				room_study.visible = true;
			});
            C.hide();
            room_callf();
        },
        "I have time... tomorrow": function(msg) {
            P.t(msg);
            P.t("I've worked way overtime today");
            P.t("This is not procrastinating");
            P.t("I just need to finish it by tomorrow and I happen to not have any energy left to do it right now");
            P.t("It's not like it's overdue");
            P.t("...");
            C.hide();
            room_callf();
        }
    });
}

function room_callf(){
	Q.wait(5000);
	Q.do(function(){
		resources.phone_call.sound.play();
	});
	Q.wait(2000);
	Q.do(function(){
		room_phone.visible = false;
		room_study.visible = false;
		room_text.visible = true;
	});
	Q.wait(1000);
	P.t("Huh?");
	P.t("A phone call?");
	P.t("It's been forever since I've ever got a phone call");
	P.t("it's from grandma...?");
	P.t("Why would she call me?");

	C.t({
	    "[Answer]": function(msg) {
	    	$.Grandma_phone1_answered = true;
	    	room_text.visible = false;
	    	room_call.visible = true;
	    	resources.phone_call.sound.stop();
	    	C.hide();
	    	room_call_answered();
	    },
	    "[Don't]": function(msg) {
	    	$.Grandma_phone1_answered = false;
	    	if(!$.friend_msg1_checked && !$.gf_msg1_checked){
		    	P.t("For god's sake!");
		    	P.t("Why won't people just leave me alone?");
		    	P.t("Cellphone must be worst human invention ever made");
	    	} else {
	    		P.t("Hm");
	    		P.t("It's probably not important");
	    		P.t("Maybe It's because of things I left at home");
	    		P.t("Like the files I don't need any more");
	    		P.t("I'll call her back later");
	    	}
	    	Q.do(function(){
	    		resources.phone_call.sound.stop();
	    		room_text.visible = false;
				room_phone.visible = true;
				room_study.visible = true;
	    	});
	    	C.hide();
	    	room_msg();
	    }
	});
}

function room_call_answered() {
	Q.wait(2000);
	P.s("Hello?");
	Gm.s("Hey!");
	Gm.s("Are you still busy with your homework and exams?");
	P.s("Pretty much...");
	P.s("Is something the matter?");
	Gm.s("Yes... actually");
	Gm.s("Your dog is hospitalized");
	Q.wait(2000);
	P.s("...");
	Q.wait(2000);
	Gm.s("Hello?");
	P.s("Yes");
	Q.do(room_unite);
}

function room_msg(){
	Q.wait(2500);
	Q.do(function(){
		resources.phone_vib.sound.play();
	});
	Q.wait(2000);
	Q.do(function(){
		room_phone.visible = false;
		room_study.visible = false;
		room_text.visible = true;
	});
	Q.wait(1000);
	P.t("Now she sent me a text");
	P.t("...");
	P.t("She calls me once in a while but I she never texts me");
	P.t("Is it something urgent...?");
	C.t({
        "[Check message]": function(msg) {
        	C.hide();
        	room_msg_2();
        },
        "[Don't]": function(msg) {
        	P.t("I know I'm stressed out but...");
        	P.t("Something doesn't feel right");
        	P.t("I should probably check it");
        	C.hide();
        	room_msg_2();
        }
    });
}

function room_msg_2(){
	Q.wait(2000);
	Gm.s("ARE YOU STILL BUSY? I CALLED BECASUE YOUR DOG IS HOSPITALIZED LOVE GRANDMA");
	P.t("...");
	Q.wait(1000);
	P.t("....");
	Q.wait(3000);
	Q.do(function(){
		room_text.visible = false;
	    room_call.visible = true;
	});
	Q.wait(1000);
	Gm.s("Hello?");
	P.s("It's me...");
	Gm.s("Hey!");
	Gm.s("Are you still busy with your homework and exams?");
	P.s("Grandma...");
	P.s("What happened?");
	Gm.s("Well");
	Q.do(room_unite);
}


function room_unite(){
	Gm.s("I took it to the vet to hear the results");
	Gm.s("He says its liver is dysfunctional");
	P.s("...");
	Gm.s("He said that it needed to go through even further diagnosis");
	Gm.s("It'be better if it stayed there overnight for some treatment");
	Gm.s("It might even need a surgery");
	P.s("...");
	Q.wait(1000);
	P.s("The office is closed now right?");
	Gm.s("It sure is");
	P.s("And he needs to be picked up tomorrow...?");
	Gm.s("Yes");
	Q.wait(1000);
	C.s({
        "I'll be there": function(msg) {
        P.s(msg);
        C.hide();
        room_unite2();
        }
    });
}

function room_unite2(){
	Gm.s("You will?");
	Gm.s("I thought you were-");
	P.s("It's okay");
	P.s("I can be there");
	Gm.s("Okay");
	Gm.s("I'll leave it to you, then");
	Gm.s("Good night");
	Gm.s("See you tomorrow");
	if($.rude){
		P.s("See you tomorrow");
	} else{
		P.s("Thanks for letting me know");
		P.s("See you");
	}
	Q.do(room_choose);
}

function room_choose(){
	Q.do(function(){
		room_call.visible = false;
	    room_text.visible = true;
	});
	Q.wait(4000);
	P.t("...");
	Q.wait(2000);

	C.t({
        "[Panic]": function(msg) {
        	$.room_panicked = true;
            C.hide();
            room_panicf();
        },
        "[Don't panic]": function(msg) {
        	$.room_panicked = false;
            C.hide();
            room_dont_panic();
        }
    });
}

function room_panicf() {
	Q.do(function(){
		room_text.visible = false;
	    room_panic.visible = true;
	    room_chair.x = 20;
	});
	Q.wait(3000);
	P.t("Hospitalized");
	P.panic("But he always refuses to stay in small containers");
	P.panic("I know he'd NEVER let himself be hospitalized");
	P.panic("He's freaking too scared of entering anywhere closed");
	P.panic("That why in the first place-");
	P.panic("Hospitalized?");
	P.panic("How is that possible?");
	P.panic("Is he that sick?");
	P.panic("I should have known...");
	P.panic("Why have I not known");
	P.panic("How could I miss something so simple?");
	P.panic("Something so important?");
	P.panic("Why do I always miss it?");
	P.panic("But he always refuses to stay in small containers");
	P.panic("I know he'd NEVER let himself be hospitalized");
	P.panic("He's freaking too scared of entering anywhere closed");
	P.panic("That why in the first place-");
	P.panic("Hospitalized?");
	P.panic("How is that possible?");
	P.panic("Is he that sick?");
	P.panic("I should have known...");
	P.panic("Why have I not known");
	P.panic("How could I miss something so simple?");
	P.panic("Something so important?");
	P.panic("Why do I always miss it?");

	if($.careful){
		P.panic("Maybe I already knew");
		P.panic("I somehow already knew");
		P.panic("But I didn't want to admit");
	} else {
		P.panic("And I was so confident that he wasn't sick");
		P.panic("Freaking idiot");
		P.panic("Why are you always not careful?");
	}

	P.panic("Oh.. my god");
	P.panic("He must be trembling");
	P.panic("He must be shivering with fear");
	P.t("...");
	Q.wait(500);
	Q.do(clearMsg);
	Q.do(function(){
		blackout.visible = true;
	});
	Q.do(end_room);	
}

function room_dont_panic() {
	P.t("The first step to solving every hard problem-");
	P.t("Is to not panic");
	P.t("Let's try not to panic");
	Q.wait(2000);
	Q.do(function(){
		room_text.visible = false;
	    room_panic.visible = true;
	    room_chair.x = 20;
	});
	Q.wait(1000);
	P.t("Hospitalized...");
	P.t("But he always refuses to stay in small containers");
	P.t("I know he'd NEVER let himself be hospitalized");
	P.t("He's freaking too scared of entering anywhere closed");
	P.t("That why in the first place-");
	Q.wait(1000);
	P.t("Hospitalized?");
	P.t("How is that possible?");
	P.t("Is he that sick?");
	P.t("I should have known...");
	P.t("Why have I not known");
	P.t("How could I miss something so simple?");
	P.t("Something so important?");
	P.t("Why do I always miss it?");
	if($.careful){
		P.t("Maybe I already knew");
		P.t("I somehow already knew-");
		P.t("But I didn't want to admit");
	} else {
		P.t("And I was so confident that he wasn't sick");
		P.t("Why are you never so careful?");
	}
	P.t("Oh.. my god");
	P.t("He must be trembling");
	P.t("He must be shivering with fear");
	Q.do(end_room);
}

function end_room(){
	Q.wait(4000);
	Q.do(clearMsg);
	Q.do(function(){
		app.stage.removeChild(bg_room);
		app.stage.removeChild(room_panic);
		app.stage.removeChild(room_call);
		app.stage.removeChild(room_text);
		app.stage.removeChild(room_study);
		app.stage.removeChild(room_phone);
		app.stage.removeChild(room_chair);
		resources.room.sound.stop();
		blackout.visible = true;
	});
	Q.do(start_vet1);
}