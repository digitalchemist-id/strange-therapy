//timeline = 12 June 15th Wed

async function start_home4(){
    await sleep(4000);
    resources.room.sound.play();
	await sleep(2000);
    app.stage.addChildAt(home_bed_lookside, 1);
    app.stage.addChildAt(home_bed_call, 1);
    app.stage.addChildAt(home_bed_lookdown, 1);
    app.stage.addChildAt(home_grandma, 1);
    app.stage.addChildAt(home_books, 1);
    app.stage.addChildAt(home_chair, 1);
    app.stage.addChildAt(home_dog_cushion, 1);
    app.stage.addChildAt(home_cushion, 1);
    app.stage.addChildAt(home_bowl, 1);
    app.stage.addChildAt(home_mat, 1);
    app.stage.addChildAt(bg_home, 0);
    home_bed_lookdown.visible = true;
    home_dog_cushion.visible = true;
    home_bed_lookside.visible = false;
    home_bed_call.visible = false;
    home_bed_phone.visible = false;
    home_grandma.visible = false;
	blackout.visible = false;
	Q.wait(5000);
	P.t("...");
	Q.wait(3000);
	P.t("What am I going to do now?");
	C.t({
        "I'll study": function(msg) {
        	$.test4_studied = true;
            P.t(msg);
            P.t("Oh of course I'll study");
            P.t("For the test tomorrow?");
            Q.wait(2000);
            P.t("But what if...");
            P.t("What if while I'm gone he...");
            P.t("...");
            C.hide();
            home4_choice();
        },
        "I'll call my girlfriend": function(msg) {
            P.t(msg);
            Q.do(function(){
                home_bed_lookdown.visible = false;
                home_bed_call.visible = true;
            });
            C.hide();
            if($.not_nice_to_gf < 2 || $.gf_told){
                home4_gf_call();
            } else {
            	Q.wait(8000);
                Q.do(function(){
                    home_bed_call.visible = false;
                    home_bed_lookdown.visible = true;
                });
            	P.t("She's not answering");
            	P.t("What am I...");
            	P.t("What am I gonna do?");
            	P.t("...");
	            Q.wait(2000);
	            P.t("Tomorrow...");
	            P.t("My last day at school");
	            P.t("What if while I'm gone he...");
	            P.t("...");
	            home4_choice();
            }
        },
        "I don't know": function(msg) {
            P.t(msg);
            P.t("Of course I don't know");
            P.t("I freaking don't know what I'm gonna do");
            P.t("No one ever does");
            P.t("Why does anyone do anything?");
            P.t("I don't even know if anything matters anymore...");
            Q.wait(3000);
            P.t("...");
            Q.wait(2000);
            P.t("Tomorrow...");
            P.t("My last day at school");
            P.t("What if while I'm gone he...");
            P.t("...");
            C.hide();
            home4_choice();
        }
    });
}

function home4_choice(){
	C.t({
        "It's gonna be alright...": function(msg) {
            P.t(msg);
            P.t("I've tried...");
            P.t("I tried with everything I can");
            P.t("Let's stop thinking about it");
            P.t("I won't let my imagination overwhelm me");
            P.t("I won't...");
            C.hide();
            end_home4();
        },
        "It's not something I can choose": function(msg) {
            P.t(msg);
            P.t("...");
            P.t("It's very unfortunate");
            P.t("That I can't be at two places at one time");
            P.t("All I can do is hope");
            P.t("So please...");
            P.t("Please...");
            C.hide();
            end_home4();
        },
        "I have to keep his side": function(msg) {
            P.t(msg);
            P.t("I'll defintely fail this class if I do that");
            P.t("All the hard work");
            P.t("This whole semester...");
            P.t("...");
            P.t("I can take this class again later");
            P.t("But this... I've only got now");
            P.t("I'm making the right choice");
            C.hide();
            home4_grandma();
        }
    });	
}

function home4_gf_call(){
	Q.wait(2000);
	Gf.s("Hello?");
	P.s("What...");
	P.s("What am I going to do?");
	Gf.s("What's wrong?");
	Gf.s("Did something happen?");
	Gf.s("Did your dog...");
	P.s("He's here now");
	P.s("He suddenly screamed with pain like an hour ago");
	P.s("So I took him to hospital immediately");
	P.s("And now the vet says he won't live past this weekend");
	P.s("What am I gonna do?");
	Gf.s("That's... really bad...");
	Gf.s("I'm so sorry...");
	P.s("I'm so not ready to lose him");
	P.s("I knew this would happen someday but");
	P.s("I never expected it to be this soon-");
	P.s("When I have the least time to prepare myself");
	P.s("What if tomorrow when I'm away...");
	P.s("While I'm away he...");
	Gf.s("Oh yeah...");
	Gf.s("Your test...");
	Gf.s("What are you gonna do?");
	Gf.s("I mean, it's something you can't... not take");
	Gf.s("You ARE gonna go take it right?");
	C.s({
        "What should I do?": function(msg) {
            P.s(msg);
            P.s("What if while I'm away he dies?");
            P.s("And I come home...");
            P.s("Just to find out that he had died hours ago?");
            P.s("How could I ever let that happen?");
            P.s("How can I even bear the thought of it?");
            Gf.s("That's not gonna happen");
            Gf.s("I can assure you it won't");
            Gf.s("And even if it does...");
            Gf.s("It's not your fault");
            P.s("...");
            Gf.s("It won't happen");
            Gf.s("Maybe you're thinking too much");
            Gf.s("You'll be okay baby");
            Gf.s("You'll be okay");
            C.hide();
            end_home4();
        },
        "I don't have a choice": function(msg) {
            P.s(msg);
            P.s("I wish I can be two places at one time but...");
            P.s("That's never gonna happen");
            Gf.s("...");
            P.s("All I can do is hope");
            P.s("Please...");
            P.s("I wish nothing happens while I'm away from him");
            Gf.s("Nothing's gonna happen");
            Gf.s("It's gonna be alright");
            C.hide();
            end_home4();
        },
        "I can't. I have to keep his side": function(msg) {
            P.s(msg);
            Gf.s("What?");
            Gf.s("But your...");
            Gf.s("It's your finals");
            Gf.s("You'll fail the class if you don't take it");
            P.s("I know");
            P.s("But I can take the class again later");
            P.s("But with him... I've only got now");
            Gf.s("I'm not sure if you're making the right choice...");
            Gf.s("I mean, it's the whole semester");
            Gf.s("You worked so hard for it");
            P.s("I know what I'm doing");
            Gf.s("I don't know...");
            Gf.s("You really sure about this?");
            P.s("I'm sure");
            Gf.s("At least take your time to think about it");
            Gf.s("It's today and that's tomorrow so...");
            Gf.s("Just take your time");
            P.s("Okay");
            P.s("I will");
            P.s("Thanks");
            Gf.s("Take care...");
            P.s("You too");
            C.hide();
            home4_grandma();
        }
    });
}

function home4_grandma(){
    Q.do(function(){
        home_bed_call.visible = false;
        home_bed_lookdown.visible = true;
    });
    Q.wait(3000);
    Q.do(function(){
        home_grandma.visible = true;
    });
	Gm.s("You're back?");
	Gm.s("How are you?");
	Gm.s("And how is it?");
    Q.do(function(){
        home_bed_lookdown.visible = false;
        home_bed_lookside.visible = true;
    });
	P.s("Grandma...");
	Gm.s("Are you...");
    Q.wait(2000);
	Gm.s("Is something wrong?");
	P.s("I just came back from hospital");
	P.s("He won't live past this weekend");
	Gm.s("...");
    Q.wait(1000);
	Gm.s("We all gotta leave one day");
	Gm.s("Why don't you let it rest in peace by itself?");
	P.s("I'm gonna keep his side no matter what");
	Gm.s("Well is your semester over?");
	Gm.s("I thought-");
	P.s("It's not yet");
	P.s("But that's not important");
	Gm.s("Oh honey...");
    Q.wait(1000);
	Gm.s("No");
	Gm.s("Don't do that");
	Gm.s("Don't do that to yourself");
	Gm.s("I understand how much it's important to you");
	Gm.s("But aren't you just giving up too much?");
	Gm.s("You've tried everything you can already");
	Gm.s("There isn't anything you can do for it anymore...");
	P.s("I can make him comfortable");
	P.s("There's no one else that can take care of him anyway so...");
	Gm.s("Why isn't there?");
	Gm.s("Don't tell me you've already forgotten who took care of it when you were away");
	P.s("...");
	Gm.s("You have?");
	P.s("No...");
	P.s("But I thought");
	P.s("You had schedules");
	Gm.s("I do");
	Gm.s("I always have schedules");
	Gm.s("But if you'd ask, I can always cancel them");
    Q.wait(1000);
	Gm.s("I'm always here for you");
	Gm.s("All you need to do is");
	Gm.s("Just reach out-");
	Gm.s("Something you never seemed to be good at");
	P.s("...");
	Gm.s("It's the least I can do");
	Gm.s("I still think it's the best if we'd let it rest by itself");
	Gm.s("But if you ask, I'll stay home and keep its side while you're away");
	Gm.s("I'll make sure it stays comfortable");
	Gm.s("You don't have to worry about it");
	Gm.s("If anything happens...");
	Gm.s("I'll let you know immediately");
	Gm.s("It's gonna be alright");
	Q.do(end_home4);
}

function end_home4(){
    Q.wait(4000);
	Q.do(clearMsg);
	Q.do(function(){
        app.stage.removeChild(home_bed_lookside);
        app.stage.removeChild(home_bed_call);
        app.stage.removeChild(home_bed_lookdown);
        app.stage.removeChild(home_grandma);
        app.stage.removeChild(home_books);
        app.stage.removeChild(home_chair);
        app.stage.removeChild(home_dog_cushion);
        app.stage.removeChild(home_cushion);
        app.stage.removeChild(home_bowl);
        app.stage.removeChild(home_mat);
        app.stage.removeChild(bg_home);
        resources.room.sound.stop();
		blackout.visible = true;
	});
	Q.do(start_test4);
}