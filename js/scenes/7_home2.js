//timeline = 7 June 12th Sun
//I decided to stay home with him and only stay away for the tests
//I fed him 4 times a day soaked dog food and canned food for him to eat more easily
//text her or no?
//tell my friend or no?
//give up project and study or work on the project?
//destiny, struggle, straightforward
//denial, rude, careful
//desperate, realistic

async function start_home2(){
	await sleep(1000);
	blackout.visible = false;
	
	//microwave ding
	P.t("Two spoonful of these mixed with soaked dog food");
	P.t("Microwaved");
	P.t("There");
	P.t("Here it is");
	P.t("You need to eat it");

	Q.wait(1000);
	P.t("Oh...")
	P.t("Thank god");
	Q.wait(1000);
	P.t("Drink some water too");
	P.t("Whoo...");
	P.t("It's okay");
	P.t("I'll stay by your side until you're well");
	P.t("I'll feed you 4 times a day, make sure you drink...");
	P.t("And check your every excretion too");
	P.t("I'll only stay away for tests");
	P.t("Around 3 hours of commute plus another 3 by test itself...");
	Q.wait(1000);
	P.t("...");
	P.t("It's okay");

	if($.room_panicked){
		P.t("I completely panicked there yesterday..");
		P.t("I shouldn't let that happen again");
		P.t("I have too much things to do");
	} else {
		P.t("I managed to hold on yesterday");
		P.t("But haven't told anyone...");
	}
	P.t("Should I talk to my girlfriend about this?");
	C.t({
        "[Text her]": function(msg) {
        	$.gf_texted = true;
            C.hide();
            home2_gf_text();
        },
        "[Don't]": function(msg) {
        	$.gf_texted = false;
        	$.gf_told = false;
            P.t("She's too busy");
            P.t("What's the point of telling be girlfriend that my dog is sick?");
            P.t("It's not like she can help with anything");
            P.t("It'll only bother her");
            C.hide();
            home2_project_msg();
        }
    });
}

function home2_gf_text() {
	P.s("How are you doing?");
	Q.wait(1000);
	if($.not_nice_to_gf < 2){
		Gf.s("2 tests tomorrow");
		Gf.s("So yeah");
		C.s({
	        "I have something to tell you": function(msg) {
	            P.s(msg);
	            if(not_nice_to_gf < 1){
	            	$.gf_told = true;
	            	Gf.s("Oh what is it?");
	            	Gf.s("Something urgent?");
	            	P.s("Actually");
	            	P.s("My dog...");
	            	P.s("He's sick");
	            	Gf.s("Oh... no...");
	            	P.s("I'm at my parent's home right now");
	            	P.s("He was hospitalized yesterday and I just picked him up from hospital");
	            	Gf.s("What did the vet say?");
	            	P.s("He said my dog's liver is dysfunctional...");
	            	P.s("And that currently he's very weak and need to be fed to recover");
	            	Gf.s("That's terrible news...");
	            	Q.do(home2_gf_text_2);
	            } else {
	            	$.gf_told = false;
	                Gf.s("Umm...");
	                Gf.s("Now is not the perfect time for a talk");
	                Gf.s("Can it wait?");
	                P.s("Uhh...");
	                P.s("Okay");
	                Gf.s("kk");
	                Gf.s("I'll text you back");
	            	P.s("Cool");
	            }
	            C.hide();
	     	},
	        "My dog is really sick": function(msg) {
	        $.gf_told = false;
	            P.s(msg);
	            P.s("He was hospitalized yesterday");
	            P.s("Right now I'm at parent's house. I picked him up this morning");
	            P.s("I don't know what I'm gonna do...");
	            Gf.s("Oh... no...");
	            Gf.s("What did the vet say?");
	            P.s("He said my dog's liver is dysfunctional...");
	            P.s("And that currently he's very weak and need to be fed to recover");
	            Gf.s("That's terrible news...");
	            Q.do(home2_gf_text_2);
	            C.hide();
	        },
	        "Well... good luck": function(msg) {
	        	$.gf_told = false;
	            P.s(msg);
	            Gf.s("Thanks");
	            Gf.s("Good luck you too");
	            P.t("...");
	            P.t("She's too busy");
	            P.t("There's no point bothering her");
	            C.hide();
	            home2_project_msg();
	        }
    	});
	} else {
		Q.wait(1000);
		P.s("Yep...");
		P.s("She's too busy");
		Q.do(home2_project_msg);
	}
}

function home2_gf_text_2() {
	Gf.s("Are you okay?");
	Gf.s("You have a test tomorrow don't you?");
	P.s("Yeah...");
	P.s("I'll only stay away for the tests");
	P.s("I need to take care of him");
	Gf.s("I think that's a good decision");
	Gf.s("I'll make sure I visit after my tests are done");
	Gf.s("He's gonna be fine...");
	P.s("Thank you for saying that");
	P.s("You should get back to studying. I think I took too much of your time");
	Gf.s("It's fine");
	Gf.s("Take care honey");
	P.s("Good luck");
	Q.do(home2_project_msg);
}

function home2_project_msg() {
	Q.do(function(){
		resources.cellphone.sound.play();
	});
	Q.wait(1000);
	F.s("You still working on the project?");
	F.s("Everyone else's file is ready except for yours");
	Q.wait(500);
	P.t("Oh no...");
	P.t("I completely forgot about the project...");
	P.t("What am I gonna do?");
	P.t("I definitely won't have time to prepare for the tests if I start working on the project now");
	C.t({
        "I can't do it": function(msg) {
        	$.test3_studied = true;
            P.t(msg);
            P.t("I can't afford to leave my dog alone any longer");
            P.t("Staying away for the tests is already too long by itself");
            P.t("All those group meetings and preparations... I just can't do it");
            C.hide();
            home2_project_no();
        },
        "Gotta finish up what I started": function(msg) {
        	$.test3_studied = false;
        	$.friend_told = false;
            P.t(msg);
            P.t("That means I'll have to stay away for longer...");
            P.t("But promises are promises");
            P.t("They're meant to be kept");
            C.hide();
            home2_project_yes();
        },
        "I'll talk to him about it": function(msg) {
        	$.test3_studied = true;
        	$.friend_told = true;
            P.t("I don't know what I'm gonna do...");
            P.t("I'll just tell him frankly");
            C.hide();
            home2_project_talk();
        }
    });
}

function home2_project_no(){
	P.s("Actually...");
	P.s("I have something to tell you");
	F.s("What is it?");
	P.s("This project...");
	P.s("I'm out of it");
	Q.wait(1000);
	F.s("Is it because of the tests?");
	C.s({
        "Yes. It is because of the tests": function(msg) {
        	$.friendship_over = true;
            P.s(msg);
            P.s("I found out that I don't have time to work on this project");
            P.s("I'm sorry");
            F.s("Screw you");
            if($.project_under_control){
            	F.s("You said you finished most of you part");
            } else {
                F.s("You freaking promised you'd finish your part by weekend");
            }
            F.s("Everyone takes tests");
            F.s("Everyone's busy as hell");
            F.s("I'm just living on caffeine since forever");
            F.s("When people promise they do it because they care");
            F.s("You...");
            F.s("You just don't care");
            Q.wait(1000);
            P.s("I'm sorry");
            C.hide();
            end_home2();
        },
        "My dog is very sick": function(msg) {
        	$.friend_told = true;
            P.s(msg);
            P.s("Vet said that it could be cancer...");//
            P.s("I can't leave his side");
            P.s("He needs to be taken care of");
            Q.wait(1000);
            F.s("Okay");
            F.s("I understand");
            F.s("But you could have at least finished your part");
            if($.room_panicked){
            	P.s("I was so panicked");
            } else{
            	P.s("Things got too over my head");
        	}
            P.s("I'm really sorry");
            P.s("I'll send you what I have done so far... It's bit unpolished but everything that needs to be there is there");
            F.s("I understand");
            F.s("I hope he gets better");
           	P.s("Thank you so much");
           	P.s("Please tell others that I'm sorry");
            C.hide();
            end_home2();
        },
        "I just can't do it": function(msg) {
        	$.friendship_over = true;
            P.s(msg);
            P.s("I'm sorry");
            F.s("Screw you");
            F.s("You could have told me earlier");
            if(!$.friend_msg1_checked || !$.friend_msg1_replied) {
            	F.s("You ignore my texts");
            }
            F.s("And you abandon what you've started");
            F.s("Without telling me what the freaking reasons are");
            F.s("I can't believe this");
            F.s("I shouldn't have believed you");
            Q.wait(1000);
            P.s("I'm sorry...");
            C.hide();
            end_home2();
        }
    });
}

function home2_project_yes(){
	P.s("Working on it now. You'll see it today");
	F.s("Great");
	if(!$.friend_msg1_checked || !$.friend_msg1_replied) {
		F.s("I was kind of worried cause you wouldn't reply to my texts");
	} else {
		F.s("I knew you were a man of your word");
	}
	P.s("I am");
	P.s("Well... at leat I try");
	end_home2();
}

function home2_project_talk(){
	P.s("You busy now?");
	F.s("A lil. Why?");
	P.s("I need to talk to you for a bit");
	F.s("What's the matter?");
	P.s("Right now I'm away from school");
	P.s("I'm at my parent's house");
	P.s("My dog was hospitalized yesterday so I picked him up this morning");
	Q.wait(500);
	F.s("Oh...");
	F.s("Is he sick?");
	P.s("Yes");
	F.s("Is it bad?");
	P.s("It seems like his liver is dysfunctional");
	F.s("Shit");
	F.s("I'm sorry man");
	P.s("I couldn't finish my part yet");
	P.s("And I also need to study for the test tomorrow");
	P.s("I don't think I can participate in the preparations for the presentation later cuz I really can't leave his side");
	P.s("I'm so out of my mind right now");
	P.s("What do you think I should I do?");
	F.s("Dude...");
	F.s("Don't worry about it");
	F.s("I mean our project is important");
	F.s("But we can take care of things you can't while you're...");
	F.s("Caught up in that situation");
	P.s("I'm sorry");
	F.s("Don't say it");
	F.s("Just join us later when he gets better");
	Q.wait(1000);
	P.t("He's a good friend");
	P.t("What a relief...");
	end_home2();
}


function end_home2(){
	Q.wait(2000);
	Q.do(clearMsg);
	Q.do(start_test4);
	Q.do(function(){
		blackout.visible = true;
	});
}