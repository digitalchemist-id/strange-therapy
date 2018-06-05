//timeline = 2
//it all starts with a phone call...
//The project reminder - I'll get it handled after tomorrow's test
//Gf reminder text her or no?

function start_room1() {
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
	    "[Check message]": function(msg) {
	    	$.friend_msg1_checked = true;
	    	P.t(msg);
	    	C.hide();
	    	room1_1();
	    },
	    "[Don't]": function(msg) {
	    	$.friend_msg1_checked = false;
	    	P.t("I can check that later...");
	    	P.t("I just want to focus on tomorrow's test for now");
	    	P.t("Back to work I guess");
	    	C.hide();
	    	room1_2();}
	});
}

function room1_1() {
	F.s("I just finished doing my part in the presentation. Sent you through a mail. Check them and integrate the formats with other parts when you've got time");
	F.s("Are you done with your part too?");

	C.s({
	    "Of course man!": function(msg) {
	       	$.friend_msg1_replied = true;
	       	$.project_under_control = true;
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
	    	$.friend_msg1_replied = true;
	    	P.s(msg);
	    	P.s("I have a test tomorrow so... first things first");
	    	P.s("But I'll make sure I finish my part up by day after tomorrow");
	    	F.s("Yeah, our first draft should really be ready by then");
	    	P.s("You have my word");
	    	F.s("How many test do you have left?");
	    	P.s("3 more to go. I'm half way through");
	    	F.s("Woah... just try not to lose too much sanity man");
	    	P.s("But around this time of the semester I bet everyone's losing there minds");
	    	F.s("Everyone sure is");
	    	F.s("Good luck with tomorrow");
	    	P.s("Thanks");

	    	C.hide();
	    	room1_2();
	    },
	    "[ignore]": function(msg) {
	    	$.friend_msg1_replied = false;
	    	P.t("I'm not finished with my part but...");
	    	P.t("I can reply to that later");
	    	P.t("I just want to focus on tomorrow's test for now");
	    	C.hide();
	    	room1_2();
	    }
	});
}

function room1_2() {

	P.t("Wait...");
	P.t("It's already 10 o'clock?");
	P.t("So...");
	P.t("Counting for the 100th time")
	P.t("I've only got 16 hours until the next exam");
	P.t("Taking out time to eat, sleep, take a shower, get to school and et cetera...");
	P.t("That's like less than 8 hours");
	P.t("And the time is ticking as I have this simulation going on my head");
	P.t("...");
	P.t("I wonder if what I do for the next 8 'avaiable' hours will have any impact on the result at all");
	P.t("I mean... It's a final exam right?");
	P.t("That means it tests for what I've learn in this whole semester");
	P.t("Will few hours of studying and reviewing even matter?");
	P.t("I really doubt that");
	P.t("Like REALLY");

	P.t("But maybe I just think the way I want to");
	P.t("just because I want to give myself an excuse to be lazy");
	P.t("Hmm...");

	C.t({
	    "What happens is pretty much already decided": function(msg) {
	    	$.destiny = true;
	    	P.t(msg);
	    	P.t("I mean, what's the point of hanging on everything so tight?");
	    	P.t("What will happen is... what's gotta happen");
	    	P.t("I probably won't have to torture myself trying to not waste a single minute");
	    	C.hide();
	    	room1_3();
	    },
	    "It's the process of struggling that has meaning": function(msg) {
	    	$.process = true;
	    	P.t(msg);
	    	P.t("How I spend next few hours might not have huge impact on this semester's result");
	    	P.t("But even if that's true");
	    	P.t("I will regret so much for not making every minute count if I mess it up");
	    	P.t("I want to try my best with what I have left");
	    	P.t("That being... 16 hours and still ticking");
	    	C.hide();
	    	room1_3();
	    },
	    "Stop being lazy and get to work, mortal!": function(msg) {
	    	$.straightforward = true;
	    	P.t(msg);
	    	P.t("What am I even thinking about?");
	    	P.t("There is a test tomorrow, therefore I study today");
	    	P.t("Nothing ever gets in between");
	    	P.t("That's the way it's always been");
	    	P.t("and that's the way it'll always be");
	    	C.hide();
	    	room1_3();
	    }
	});
}

function room1_3(){
	Q.do(function(){
		resources.cellphone.sound.play();
	});
	Q.wait(1000);

	P.t("Another message?");
	P.t("Oh it's from my girlfriend");

	C.t({
	    "[Check message]": function(msg) {
	    	$.gf_msg1_checked = true;
	    	P.t(msg);
	    	C.hide();
	    	room1_4();
	    },
	    "[Don't]": function(msg) {
	    	$.gf_msg1_checked = false;
	    	P.t("She knows I'm very overloaded...");
	    	P.t("And she's just as busy");
	    	P.t("I'll just check on it later");
	    	C.hide();
	    	room1_7();
	    }
	});
}

function room1_4(){
	Gf.s("Are you doing okay?");
	Gf.s("Good luck with your test tomorrow");
	Gf.s("Just text me later when you're taking a break ;)");

	C.s({
	    "I'm doing great!": function(msg) {
	    	$.gf_msg1_replied = true;
	    	$.room1_doing_great = true;
	    	P.s(msg);
	    	Gf.s("Wow!");
	    	Gf.s("How are you so full of energy?");
	    	if($.test1_correct && !$.destiny && $.project_under_control){
	    		P.s("I actually think I'm doing alright");
	    		P.s("I've been doing great this semester");
	    		P.s("Like... I'm under control");
	    		P.s("You know what I mean?");
	    		Gf.s("Nope");
	    		Gf.s("XD");
	    		Gf.s("I texted you because I felt like I'm losing my sanity");
	    		Gf.s("But still great to hear that you're doing awesome!");
	    	} else if($.process) {
	    		P.s("You know it's the process that makes the results so meaningful, right?");
	    		P.s("I'm trying my best so I know I'm doing great!");
	    		Gf.s("Well, that's a great attitude!");
	    		Gf.s("Still, I think if I try so hard and fail anyway - ");
	    		Gf.s("That would be so heartbreaking for me");
	    		P.s("But why would you worry about failing at something while you are trying?");
	    		Gf.s("Cuz it scares me?");
	    		Gf.s("Idk XD");
	    	} else {
	    		P.s("I don't know!");
	    		P.s("Maybe I just want to feel like I'm doing great");
	    		P.s("And that's important!");
	    		Gf.s("Of course it is!");
	    		Gf.s("I'm sure you're actually doing alright");
	    		Gf.s("So don't worry XD");
	    	}
	    	C.hide();
	    	room1_5();
	    },
	    "Please save me from this hell": function(msg) {
	    	$.gf_msg1_replied = true;
	    	$.room1_doing_great = false;
	    	P.s(msg);
	    	Gf.s("Oh... poor you");
	    	Gf.s("It's okay");
	    	Gf.s("This will be over soon");
	    	Gf.s("How many test did you say you have left?");
	    	P.s("I have 3");
	    	Gf.s("Just... try not to lose too much sanity");
	    	P.s("Okay");
	    	P.s("if I have any left");
	    	Gf.s("haha");
	    	C.hide();
	    	room1_5();
	    },
	    "[ignore]": function(msg) {
	    	$.gf_msg1_replied = false;
	    	P.t("I'll text her later");
	    	P.t("She knows I'm very overloaded");
	    	P.t("And she's just as busy")
	    	C.hide();
	    	room1_6();
	    }
	});
}

function room1_5() {
	P.s("You have 2 finals left right?");
	P.s("And that's next week");
	Gf.s("Wow! good memory!");
	Gf.s("You deserve A+ for that");
	Gf.s("2 finals")
	Gf.s("plus a few reports");
	Gf.s("and some neverending essays...");
	P.s("Still your semester ends earlier than mine");
	Gf.s("Yeah like a day?");
	Gf.s("Yours end on 16th right?");
	Gf.s("Mine ends on 15th");
	Gf.s("So yeah. Just one day");
	Gf.s("But you know I need time to prepare for summer session...");
	P.s("Yeah I know that");
	P.t("...");
	P.s("You leave to California the very next week");
	P.s("I can't believe we only get to spend like 2 days together");
	Gf.s("2 days... at best");
	Gf.s("We've talked about this...");

	C.s({
	    "Yeah... I just can't help feeling a bit sad": function(msg) {
	    	$.not_nice_to_gf = 0;
	    	P.s(msg);
	    	Gf.s("Hey...");
	    	if($.room1_doing_great){
	    		Gf.s("What happened to all the spirits?");
	    		P.s("Ther're still here");
	    	} else {
	    		Gf.s("I made you feel worse didn't I...");
	    	}
	    	P.s("It's fine");
	    	P.s("It's so wrong for me to blame you");
	    	Gf.s("Thank you for saying that");
	    	C.hide();
	    	room1_6();
	    },
	    "And I never liked it": function(msg) {
	    	$.not_nice_to_gf = 1;
	    	P.s(msg);
	    	Q.wait(1000);
	    	Gf.s("You certainly didn't");
	    	C.hide();
	    	room1_6();
	    },
	    "...": function(msg) {
	    	$.not_nice_to_gf = 0;
	    	P.t("...");
	    	Gf.s("You still there?");
	    	P.s("Yeah");
	    	Gf.s("Wanna talk about it later?");
	    	P.S("I think it'd be better if we do");
	    	C.hide();
	    	room1_6();
	    }
	});

}

function room1_6() {
	Gf.s("We probably should get back to studying");
	Gf.s("We spent way more time than we should have talking");
	P.s("Yeah...");
	P.s("Back to studying");
	P.s("Alright");
	C.s({
	    "Love you": function(msg) {
	    	P.s(msg);
	    	if($.not_nice_to_gf < 1){
	    		Gf.s("Love you too");
	    		Gf.s("It");
	    	} else {
	    		Q.wait(2000);
	    		Gf.s("<3");
	    	}
	    	C.hide();
	    	room1_7();
	    },
	    "Let's keep it up": function(msg) {
	    	P.s(msg);
	    	if($.not_nice_to_gf < 1){
	    		Gf.s("Yeah let's!");
	    		Gf.s("You can do it!!!");
	    	} else {
	    		Q.wait(1000);
	    		Gf.s("Let's try...");
	    	}
	    	C.hide();
	    	room1_7();
	    },
	    "[don't say anymore]": function(msg) {
	    	$.not_nice_to_gf++;
	    	if($.not_nice_to_gf < 2){
	    		Gf.s("Let's keep it up");
	    	}
	    	C.hide();
	    	room1_7();
	    }
	});
}

function room1_7(){
	Q.do(function(){
		resources.cellphone.sound.play();
	});
	Q.wait(1000);

	P.t("Anoth- wait");
	P.t("It's a phone call?");
	P.t("It's been forever since I've ever got a phone call");
	P.t("And it's from grandma...?");
	P.t("Why would she call me?");
	P.t("Is it because I haven't visited home in a while?");

	C.t({
	    "[Answer]": function(msg) {
	    	$.Grandma_phone1_answered = true;
	    	C.hide();
	    	room1_8_call();
	    },
	    "[Don't]": function(msg) {
	    	$.Grandma_phone1_answered = true;
	    	if(!$.friend_msg1_checked && !$.gf_msg1_checked){
		    	P.t("For gods sake!");
		    	P.t("Why won't people leave me alone?");
		    	P.t("All I want to do is just study!");
		    	P.t("Nothing but preparing for tomorrow's test is important right now");
	    	} else if($.gf_msg1_replied) {
	    		P.t("I'll just call her later");
	    		P.t("I spent way to much time talking to my girlfriend");
	    	} else {
	    		$.miss_you = true;
	    		P.t("I know you miss me grandma");
	    		P.t("I miss you too");
	    		P.t("And I miss Jaya very much");
	    		P.t("But right now I have plenty else to deal with");
	    	}
	    	C.hide();
	    	room1_8_msg();
	    }
	});
}

function room1_8_call() {
	P.s("Hello?");
	Gm.s("Hey!");
	Gm.s("It's been so long since you've come home");
	Gm.s("Are you still busy with your homeworks and exams?");
	P.s("Pretty much");
	P.s("Busier than ever actaully");
	P.s("But my semester ends soon");
	P.s("My last test is on 17th");
	P.s("I'll be home immediately after that");
	Gm.s("That's great to hear");
	Gm.s("But I called you because")
	Gm.s("There is something I need to tell you");
	P.s("What is it?");
	Gm.s("It's your dog...");
	P.s("Huh?");
	P.s("What about him?")
	Gm.s("It lost a lot of weight and hasn't eating much lately");
	Gm.s("So I took your dog to the vet");
	Gm.s("It's very sick");

	C.s({
	    "What...?": function(msg) {
	    	P.s(msg);
	    	C.hide();
	    	room1_9();
	    },
	    "How...?": function(msg) {
	    	P.s(msg);
	    	C.hide();
	    	room1_9();
	    },
	    "No...": function(msg) {
	    	P.s(msg);
	    	$.denial = true;
	    	C.hide();
	    	room1_9();
	    }
	});
}

function room1_8_msg(msg){
	Q.wait(1000);
	Q.do(function(){
		resources.cellphone.sound.play();
	});
	Q.wait(1000);

	P.t("Now she sent me a text");
	P.t("Now that's strange");
	if($.miss_you){
		P.t("She would never send me a text just because she misses me");
	} else{
		P.t("She calls me once in a while but I she never texts me");
	}
	P.t("Is it something urgent...?");
	C.t({
        "[Check message]": function(msg) {
        	C.hide();
        	room1_8_msg_2();
        },
        "[Don't]": function(msg) {
        	P.t("I know I'm busy but...");
        	P.t("Something doesn't feel right");
        	P.t("I should probably check it");
        	C.hide();
        	room1_8_msg_2()
        }
    });
}

function room1_8_msg_2(){
	Gm.s("ARE YOU STILL BUSY? I CALLED BECASUE THERES SOMETHING YOU SHOULD KNOW I TOOK YOUR DOG TO A VET IT HASN'T BEEN EATING VET SAYS ITS VERY SICK CALL ME WHEN YOU SEE THIS LOVE GRANDMA");
	P.t("...");
	Q.wait(1000);
	P.t("....");
	Q.wait(1000);
	C.s({
	    "What...?": function(msg) {
	    	P.s(msg);
	    	C.hide();
	    	room1_8_msg_3();
	    },
	    "How...?": function(msg) {
	    	P.s(msg);
	    	C.hide();
	    	room1_8_msg_3();
	    },
	    "No...": function(msg) {
	    	$.denial = true;
	    	P.s(msg);
	    	C.hide();
	    	room1_8_msg_3();
	    }
	});
}

function room1_8_msg_3(msg){
	//dialing sound
	Gm.s("Hey!");
	Gm.s("It's been so long since you've come home");
	Gm.s("Are you still busy with your homeworks and exams?");
	P.s("Grandma...");
	P.s("I'm fine");
	P.s("What happened?");
	P.s("How sick is he?");
	Gm.s("I don't know much...");

	Q.do(room1_9); //it works
}

function room1_9(){
	Gm.s("I think vet said something about its blood sugar and immunity levels being low");
	Gm.s("I didn't understand much of the details but");
	Gm.s("You know that it's an old dog...");
	P.s("How is he doing...?");
	Gm.s("I fed it and it's taking a rest");
	Gm.s("I think it's okay for now");

	P.s("I...");
	Q.wait(1000);
	P.s("In 4 days...");
	P.s("I'll be home");
	P.s("I'll take him to the vet when I get there");
	P.s("Please take care of him meanwhile");

	Gm.s("Okay");
	Gm.s("But you know this right?");
	Gm.s("We have to be ready for what's coming");

	if($.denial && $.straightforward){
		P.s("He's NOT sick");
	} else {
		P.s("Grandma...");
	}

	Gm.s("Take care sweetie");
	Gm.s("I love you");
	C.s({
        "I love you, too": function(msg) {
        	P.s(msg);
        	C.hide();
        	room1_10();
        },
        "Take care, too": function(msg) {
        	P.s(msg);
        	C.hide();
        	room1_10();
        },
        "[Hang up]": function(msg) { 
        	P.t(msg);
        	C.hide();
        	room1_10();
    	}
    });
}


function room1_10(){
	P.t("Oh...");
	P.t("I should have known...");
	P.t("Why was I so stupid?");
	P.t("Why am I so careless?");
	P.t("I should have known he was sick the last time I saw him");
	P.t("I just thought he had lost a bit of weight");
	P.t("Why didn't I take him to the vet?");
	P.t("Why didn't I ever even think of the possiblity");
	P.t("That he was sick?");
	P.t("I am ...");
	P.t("So irresponsible...");
	P.t("So terrible...");

	P.t("No...");
	P.t("It's not...");
	P.t("I don't even know how bad he is yet...");
	P.t("For now from what I've heard");
	P.t("It could be just lack of nutrition");
	P.t("If he regains his appetite");
	P.t("And gain weight");
	P.t("He can get better");

	P.t("I promise...");
	P.t("I will take full care of you");
	P.t("I promise");
	P.t("Please take care...");
	P.t("Please hold on...");

	Q.do(end_room1);
}

end_room1(){
	await sleep(2500);
	clearMsg();
	start_test2();
}