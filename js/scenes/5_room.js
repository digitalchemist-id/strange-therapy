//timeline = 5 June 11th Sat
//it all starts with a phone call...
//finish up your part in project
//panic or don't

async function start_room() {
	
	//loader
	await sleep(1000);
	blackout.visible = false;

	Q.wait(1000);
	//studying...
	P.t("...");
	Q.wait(2000);
	P.t("......");
	Q.wait(2000);
	P.t("I... want... to...");
	P.t("Take a quick break");
	P.t("I NEED to");

	if($.destiny){
		P.t("Maybe I've done enough for today");
		P.t("No more torturing myself");
		P.t("Studying few hours more or not won't even matter");
	} else {
		P.t("Few minutes of break");
		P.t("Will help me focus more");
	}
	//grabs a phone
	P.t("Oh yeah");
	P.t("This just reminds me...");
	if(!$.friend_msg1_checked){
		P.t("I completely forgot about my friend's message");
		F.s("I just finished doing my part in the presentation. Sent you through a mail. Check them and integrate the formats with other parts when you've got time");
		F.s("Are you done with your part too?");
		P.s("Shoot...");
	} else if(!$.friend_msg1_replied){
		P.t("I completely forgot to text my friend back");
		P.t("Shoot...");
	}
	P.t("I was supposed to finish my part in the presentation...");
	P.t("By this weekend");
	P.t("Hmm...");
	if($.project_under_control){
		P.t("I mean, I finished it most of it days ago");
		P.t("But I haven't wrapped up the things I was supposed to");
	} else {
		P.t("I mean, I did work on most of it while I was home");
		P.t("But I haven't wrapped things up properly yet");
	}
	P.t("It's Saturday today and late at night");
	P.t("I should do it when I've got time");
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
            P.t("That's what I'm going to do");
            P.t("No more procrastinating");
            C.hide();
            room_call();
        },
        "I have time... tomorrow": function(msg) {
            P.t(msg);
            P.t("I've worked way overtime today");
            P.t("This is not procrastinating");
            P.t("I just need to finish it by tomorrow and I happen to not have any energy left to do it right now");
            P.t("It's not like it's overdue");
            P.t("...");
            C.hide();
            room_call();
        }
    });
}

function room_call(){
	Q.do(function(){
		resources.cellphone.sound.play();
	});
	Q.wait(1000);

	P.t("Huh?");
	P.t("A phone call?");
	P.t("It's been forever since I've ever got a phone call");
	P.t("it's from grandma...?");
	P.t("Why would she call me?");
	P.t("Could it be...");
	//P.t("Is it because I haven't visited home in a while?");

	C.t({
	    "[Answer]": function(msg) {
	    	$.Grandma_phone1_answered = true;
	    	P.t(msg);
	    	C.hide();
	    	room_call_answered();
	    },
	    "[Don't]": function(msg) {
	    	$.Grandma_phone1_answered = false;
	    	P.t(msg);
	    	if(!$.friend_msg1_checked && !$.gf_msg1_checked){
		    	P.t("For gods sake!");
		    	P.t("Why won't people just leave me alone when I want to stay alone?");
		    	P.t("Cellphone must be worst human invention ever made");
	    	} else {
	    		P.t("Hm");
	    		P.t("It's probably not important");
	    		P.t("Maybe It's because of things I left at home");
	    		P.t("Like the files I don't need anymore");
	    	}
	    	C.hide();
	    	room_msg();
	    }
	});
}

function room_call_answered() {
	P.s("Hello?");
	Gm.s("Hey!");
	Gm.s("Are you still busy with your homeworks and exams?");
	P.s("Pretty much...");
	P.s("Is something the matter?");
	Gm.s("Yes");
	Gm.s("Your dog is hospitalized");
	Q.wait(2000);
	P.s("...");
	Q.wait(2000);
	Gm.s("Hello?");
	P.s("Yes");
	Q.do(room_unite);
}

function room_msg(msg){
	Q.wait(1000);
	Q.do(function(){
		resources.cellphone.sound.play();
	});
	Q.wait(1000);

	P.t("Now she sent me a text");
	P.t("Now that's strange");
	P.t("She calls me once in a while but I she never texts me");
	P.t("Is it something urgent...?");
	C.t({
        "[Check message]": function(msg) {
        	P.t(msg);
        	C.hide();
        	room_msg_2();
        },
        "[Don't]": function(msg) {
        	P.t(msg);
        	P.t("I know I'm stressed out but...");
        	P.t("Something doesn't feel right");
        	P.t("I should probably check it");
        	C.hide();
        	room_msg_2()
        }
    });
}

function room_msg_2(){
	Gm.s("ARE YOU STILL BUSY? I CALLED BECASUE YOUR DOG IS HOSPITALIZED LOVE GRANDMA");
	P.t("...");
	Q.wait(1000);
	P.t("....");
	Q.wait(1000);
	//dialing sound
	Gm.s("Hey!");
	//Gm.s("It's been so long since you've come home");
	Gm.s("Are you still busy with your homeworks and exams?");
	P.s("Grandma...");
	P.s("What happened?");
	Gm.s("Well");
}


function room_unite(){
	Gm.s("I took him to vet to hear the results");
	Gm.s("He says its liver is dysfunctional");
	P.s("...");
	Gm.s("He said that it needed to go through even further diagnosis");
	Gm.s("It'be better if it stayed there overnight for some treatment");
	Gm.s("It might even need a surgery");
	P.s("...");
	P.s("The office is close now right?");
	Gm.s("Yes, it is");
	P.s("And we have to take him tomorrow?");
	Gm.s("Yes");
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
	P.s("I can do that");
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
	//hang up
	Q.wait(1000);
	P.s("Oh...");
	Q.wait(2000);
	P.s("Oh......");

	C.t({
        "[panic]": function(msg) {
            P.t(msg);
            C.hide();
            room_panic();
        },
        "[don't panic]": function(msg) {
            P.t(msg);
            C.hide();
            room_dont_panic();
        }
    });
}

async function room_panic() {

	P.panic("Hospitalized");
	P.panic("But he always refuse to stay in small containers");
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
		P.panic("And I'm being punished for it");
	} else {
		P.panic("And I was so confident that he wasn't sick");
		P.panic("Freaking idiot");
		P.panic("Why are you never careful?");
	}

	P.panic("Oh.. my god");
	P.panic("He must be trembling");
	P.panic("He must be shivering with fear");
	P.panic("And I...");
	P.panic("I can't believe...");
	P.panic("I let this happen...");
	P.panic("I'm so sorry...");
	Q.do(end_room);
	
	//A blackout during the popups - index matters
	await sleep(3000);
	blackout.visible = true;
	
}

function room_dont_panic() {
	P.t("First step to solving");
	P.t("Every hard problem");
	P.t("Is to not panic");
	P.t("Let's try not to panic");
	Q.wait(2000);
	P.t("Hospitalized");
	P.t("But he always refuse to stay in small containers");
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
		P.t("I somehow already knew");
		P.t("But I didn't want to admit");
		P.t("And I'm being punished for it");
	} else {
		P.t("And I was so confident that he wasn't sick");
		P.t("Freaking idiot");
		P.t("Why are you never careful?");
	}

	P.t("Oh.. my god");
	P.t("He must be trembling");
	P.t("He must be shivering with fear");
	P.t("And I...");
	P.t("I can't believe...");
	P.t("I let this happen...");
	P.t("I'm so sorry...");
	Q.do(end_room);

}

function end_room(){
	Q.wait(2000);
	Q.do(clearMsg);
	Q.do(start_room);
	Q.do(function(){
		blackout.visible = true;
	});
}