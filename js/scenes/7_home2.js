//timeline = 7 June 12th Sun

async function start_home2(){
	await sleep(4000);
	resources.room.sound.play();
	resources.microwave.sound.play();
	await sleep(7000);
    app.stage.addChildAt(home_bed_phone, 1);
    app.stage.addChildAt(home_bed_lookdown, 1);
    app.stage.addChildAt(home_floor_watch, 1);
    app.stage.addChildAt(home_dog_eat, 1);
    app.stage.addChildAt(home_chair, 1);
    app.stage.addChildAt(home_dog_cushion, 1);
    app.stage.addChildAt(home_cushion, 1);
    app.stage.addChildAt(home_bowl, 1);
    app.stage.addChildAt(bg_home, 0);
    home_bed_phone.visible = false;
    home_bed_lookdown.visible = false;
    home_dog_cushion.visible = false;
	blackout.visible = false;
	P.t("There");
	Q.wait(2000);
	P.s("Here it is");
	P.s("You need to eat it");
	Q.wait(1000);
	P.s("Drink some water too");
	P.t("Whew...");
	P.t("It's okay");
	P.t("I'll stay by your side until you're cured");
	P.t("I'll feed you 4 times a day, make sure you drink...");
	P.t("And make sure you digest it as well");
	P.t("I'll just study here by your side");
	P.t("I'll only stay away for tests");
	P.t("Around 3 hours of commute plus another 3 by test itself...");
	Q.wait(2500);
	P.t("...");
	P.t("I can handle it");
	Q.wait(2500);
	Q.do(function(){
		home_floor_watch.visible = false;
		home_bed_lookdown.visible = true;
	});
	Q.wait(1000);
	P.t("Hm...");
	if($.room_panicked){
		P.t("I was completely panicked yesterday..");
		P.t("I shouldn't let that happen again");
		P.t("Maybe I need to talk to someone...");
	} else {
		P.t("I managed to hold on yesterday-");
		P.t("But haven't told anyone about this yet...");
	}
	Q.wait(2000);
	P.t("Maybe...");
	P.t("I need to tell my girlfriend about this");
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
	Q.wait(2000);
	Q.do(function(){
		home_bed_lookdown.visible = false;
		home_bed_phone.visible = true;
	});
	P.s("How are you doing?");
	Q.wait(1000);
	if($.not_nice_to_gf < 2){
		Gf.s("2 tests tomorrow");
		Gf.s("So... yeah");
		C.s({
	        "I have something to tell you...": function(msg) {
	            P.s(msg);
	            if($.not_nice_to_gf < 1){
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
	            	home2_gf_text_2();
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
	            	home2_project_msg();
	            }
	            C.hide();
	     	},
	        "My dog is really sick": function(msg) {
	        $.gf_told = true;
	            P.s(msg);
	            P.s("He was hospitalized yesterday");
	            P.s("Right now I'm at parent's house. I picked him up this morning");
	            P.s("I don't know what I'm gonna do...");
	            Gf.s("Oh... no...");
	            Gf.s("What did the vet say?");
	            P.s("He said my dog's liver is dysfunctional...");
	            P.s("And that currently he's very weak and need to be fed to recover");
	            Gf.s("That's terrible news...");
	            home2_gf_text_2();
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
	$.visit = true;
	Gf.s("He's gonna be fine...");
	P.s("Thank you for saying that");
	P.s("You should get back to studying. I think I took too much of your time");
	Gf.s("It's fine");
	Gf.s("Take care honey");
	P.s("Good luck");
	Q.do(home2_project_msg);
}

function home2_project_msg() {
	Q.wait(2000);
	Q.do(function(){
		home_dog_eat.visible = false;
		home_dog_cushion.visible = true;
	});
	Q.wait(500);
	Q.do(function(){
		home_bed_phone.visible = false;
		home_bed_lookdown.visible = true;
	});
	Q.wait(3000);
	Q.do(function(){
		resources.phone_vib.sound.play();
	});
	Q.wait(2000);
	Q.do(function(){
		home_bed_lookdown.visible = false;
		home_bed_phone.visible = true;
	});
	F.s("You still working on the project?");
	F.s("Everyone else's file is ready except for yours");
	Q.wait(1000);
	P.t("Oh no...");
	P.t("I completely forgot about the project...");
	P.t("What am I gonna do?");
	P.t("I definitely won't have time to prepare for the next test if I start working on the project now");
	C.t({
        "I can't do it...": function(msg) {
        	$.test3_studied = true;
            P.t(msg);
            P.t("All those group meetings and preparations... I just can't do it");
            P.t("I can't afford to leave my dog alone any longer");
            P.t("Staying away for the tests is already too long by itself");
            C.hide();
            home2_project_no();
        },
        "Gotta finish up what I started": function(msg) {
        	$.test3_studied = false;
        	$.friend_told = false;
            P.t(msg);
            P.t("That means I'll have to stay away for longer...");
            Q.wait(1000);
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
	Q.wait(2000);
	P.s("Actually...");
	P.s("I have something to tell you");
	F.s("What is it?");
	P.s("This project...");
	P.s("I'm out of it");
	Q.wait(2000);
	F.s("Is it because of the tests?");
	C.s({
        "Yes. It is because of the tests": function(msg) {
        	$.friendship_over = true;
            P.s(msg);
            P.s("I found out that I don't have time to work on this project");
            P.s("I'm sorry");
            Q.wait(1000);
            F.s("Screw you");
            if($.project_under_control){
            	F.s("You said you finished most of you part");
            } else {
                F.s("You freaking promised you'd finish your part by weekend");
            }
            F.s("Everyone takes tests");
            F.s("Everyone's busy as hell");
            F.s("I'm just living on caffeine since I don't know when");
            F.s("When people promise they do it because they care");
            F.s("You...");
            F.s("You just don't care");
            $.dont_care = true;
            Q.wait(1000);
            P.s("I'm sorry");
            C.hide();
            end_home2();
        },
        "My dog is very sick": function(msg) {
        	$.friend_told = true;
            P.s(msg);
            P.s("Vet said that it could even be cancer...");
            P.s("I can't leave his side");
            P.s("He needs to be taken care of");
            Q.wait(1000);
            F.s("Okay");
            F.s("I understand...");
            F.s("But you could have at least finished your part");
            if($.room_panicked){
            	P.s("I was so panicked");
            } else{
            	P.s("Things got too over my head");
        	}
            P.s("I'm really sorry");
            P.s("I'll send you what I have done so far... It's bit unpolished but everything that needs to be there is there");
            F.s("Got it");
            F.s("I hope he gets better");
           	P.s("Thank you so much");
           	P.s("Please tell the others that I'm sorry");
            C.hide();
            end_home2();
        },
        "I just can't do it": function(msg) {
        	$.friendship_over = true;
            P.s(msg);
            P.s("I'm sorry");
            Q.wait(1500);
            F.s("Screw you");
            F.s("You could have told me earlier");
            if(!$.friend_msg1_checked || !$.friend_msg1_replied) {
            	F.s("You ignore my texts");
            }
            F.s("And you abandon what you've started");
            F.s("Without telling me what the freaking reasons are");
            F.s("I can't believe this");
            F.s("You don't even care about anything else but yourself do you?");
            $.dont_care = true;
            F.s("I shouldn't have believed you");
            Q.wait(1000);
            P.s("I'm sorry...");
            C.hide();
            end_home2();
        }
    });
}

function home2_project_yes(){
	Q.wait(2000);
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
	Q.wait(2000);
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
	F.s("Caught up in that...");
	F.s("Situation");
	P.s("I'm sorry");
	F.s("Don't say it");
	F.s("Just join us later when he gets better");
	Q.wait(3000);
	P.t("Whew...");
	end_home2();
}


function end_home2(){
	Q.wait(4000);
	Q.do(clearMsg);
	Q.do(function(){
		app.stage.removeChild(home_bed_phone);
		app.stage.removeChild(home_bed_lookdown);
		app.stage.removeChild(home_floor_watch);
		app.stage.removeChild(home_dog_eat);
		app.stage.removeChild(home_chair);
		app.stage.removeChild(home_dog_cushion);
		app.stage.removeChild(home_cushion);
		app.stage.removeChild(home_bowl);
		app.stage.removeChild(bg_home);
		resources.room.sound.stop();
		blackout.visible = true;
	});
	Q.do(start_test3);
}