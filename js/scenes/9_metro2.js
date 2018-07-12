//timeline = 9 June 15th Wed
//Gf finished her semester - a text
//If you're holding on - text my friend?

async function start_metro2(){
    await sleep(2000);
    resources.metro_inside.sound.play();
	await sleep(2000);
    app.stage.addChildAt(bg_metro_day, 0);
    app.stage.addChildAt(animMetroRail,1);
    app.stage.addChildAt(metro_p1,2);
    app.stage.addChildAt(metro_p3,2);
    app.stage.addChildAt(metro_p4,2);
    app.stage.addChildAt(metro_sit,2);
	blackout.visible = false;

    Q.wait(3000);
	P.t("How many times have I crossed this river?");
	P.t("Must've been hell lot");
	Q.wait(1000);
	P.t("But somehow I never get tired of staring at the view");
	Q.wait(2500);
    Q.do(function(){
        resources.phone_vib.sound.play();
    });    
    Q.wait(2000);


	C.t({
        "[Check message]": function(msg) {
	        C.hide();
	        if($.gf_told){ //$.gf_msg1_checked && $.gf_msg1_replied = true &&
	        	metro2_gf_msg();
	        }else{
	        	metro2_gf_sthwrong();
	        }
        },
        "[Don't]": function(msg) {
            $.not_nice_to_gf++;
            C.hide();
            metro2_end();
        }
    });
}

function metro2_gf_msg(){
    Q.do(function(){
        app.stage.addChildAt(metro_phone,2);
        metro_sit.visible = false;
    });
    Q.wait(1000);
	Gf.s("I've finally finished all of my tests");
	Gf.s("FINALLY");
	Gf.s("I'm checking out from the dorm and going home tomorrow");
    Q.wait(1000);
	Gf.s("You doing well?");
	P.s("I just finished my second last test");
	P.s("I'm taking a subway ride home");
	Gf.s("Only one left tomorrow");
	Gf.s("That's cool");
	Gf.s("How is you dog doing...?");
	P.s("He's alright");
	P.s("I mean he's eating alright");
	P.s("He's eating and digesting... I think he's gonna get better");
	Gf.s("That's great to hear");
	Gf.s("I'm glad...");
	P.s("I'm just trying everything I can");
    Q.wait(1000);
	Gf.s("After I get home");
	Gf.s("Tomorrow");
	Gf.s("Will you have time to see me?");
	Gf.s("You know, maybe have dinner or something");
	Gf.s("We don't have much time together you know...");
	metro2_gf_msg_choose();
}

function metro2_gf_sthwrong(){
    Q.do(function(){
        app.stage.addChildAt(metro_phone,2);
        metro_sit.visible = false;
    });
    Q.wait(1000);
	Gf.s("I've finally finished all of my tests");
	Gf.s("FINALLY...");
	Gf.s("I'm checking out from the dorm and going home tomorrow");
	if(!$.gf_msg1_replied){
		Gf.s("Are you okay?");
		Gf.s("You wouldn't reply to my texts and...");
	}
	if(!$.gf_texted){
		Gf.s("You wouldn't text me...");
	} else {
		Gf.s("Last time it seemed like you had something to tell me");
		Gf.s("What is it?");
	}
	Gf.s("I know you're busy but... is everything alright?");
	C.s({
        "Yeah. I'm just too busy": function(msg) {
        	$.not_nice_to_gf++;
            P.s(msg);
            if($.gf_texted){
            	P.s("It was nothing important");
            }
            Gf.s("You could have at least-");
            Gf.s("You do know that I'm leaving to California in 3 days right?");
            Q.wait(1500);
            Gf.s("You know what? nevermind...");
            Gf.s("Let's talk tomorrow");
            Gf.s("When your finals are over");
            P.s("Alright");
            C.hide();
            end_metro2();
        },
        "No, it's not alright": function(msg) {
            $.gf_told = true;
            P.s(msg);
            P.s("My dog was hospitalized last Sunday");
            P.s("I picked him up and I'm trying to take care of him at my parent's house");
            Gf.s("Oh no...");
            Q.wait(1000);
            Gf.s("Why didn't you tell me?");
            C.hide();
            metro2_gf_sthwrong_why();
        },
        "[don't reply]": function(msg) {
        	$.not_nice_to_gf++;
            P.t("...");
            P.t("I don't think I have time for a conversation right now...");
            P.t("Sorry");
            C.hide();
            end_metro2();
        }
    });	
}

function metro2_gf_sthwrong_why(){
	C.s({
        "I never saw the point": function(msg) {
        	$.not_nice_to_gf++;
            P.s(msg);
            Gf.s("How can you...");
            Gf.s("Why are you like that?");
            Gf.s("Then what's the point of telling me now?");
            P.s("You asked");
            P.s("So I answered");
            Gf.s("I can't believe this...");
            Gf.s("The point?")
            Gf.s("Do you see the point in us dating?");
            P.s("That's different");
            Q.wait(1000);
            Gf.s("You do know that I'm leaving to California in 3 days right?");
            P.s("Yeah");
            Q.wait(2000);
            Gf.s("I'll text you later");
            P.s("Okay");
            C.hide();
            end_metro2();
        },
        "I was too busy": function(msg) {
            P.s(msg);
            P.s("I was just... too out of my mind");
            P.s("Things happened too quickly for me to keep track");
            P.s("I'm sorry");
            Gf.s("...");
            Gf.s("It must have been really hard for you");
            Gf.s("Is he okay?");
            P.s("Yeah. He's getting better");
            P.s("Hopefully he'll be okay");
            Gf.s("Okay...");
            Q.wait(1000);
            Gf.s("I was gonna ask if you'll have time to have a dinner or something");
            Gf.s("Umm... Will you?");
            Gf.s("We don't have too much time together you know...");
            C.hide();
            metro2_gf_msg_choose();
        },
        "I thought you were too busy": function(msg) {
            P.s(msg);
            P.s("And I knew it would just bother you...");
            P.s("I didn't want it to affect");
            Gf.s("But what about you?");
            Gf.s("You didn't need to handle all that by yourself...");
            P.s("I'm okay");
            Gf.s("That's a relief but");
            Q.wait(1000);
            Gf.s("Is he okay?");
            P.s("He's getting better");
            P.s("Hopefully he'll be okay");
            Gf.s("Okay...");
            Q.wait(1000);
            Gf.s("I was gonna ask if you'll have time to have a dinner or something");
            Gf.s("Umm... Will you?");
            Gf.s("We don't have too much time together you know...");
            C.hide();
            metro2_gf_msg_choose();
        }
    });
}

function metro2_gf_msg_choose(){
    C.s({
        "I can't really leave his side for now...": function(msg) {
            P.s(msg);
            P.s("I'm sorry... I really want to see you before you...");
            Gf.s("Don't worry");
            Gf.s("Of course I understand");
            Gf.s("It'll be fine");
            Gf.s("Let's talk more tomorrow okay?");
            P.s("Yeah");
            C.hide();
            end_metro2();
        },
        "Yeah, let's": function(msg) {
            P.s(msg);
            P.s("I mean, we should see each other at least once before you leave");
            P.s("And my dog's getting better so...");
            P.s("Spending like an hour outside... I think it'll be okay");
            Gf.s("That's great");
            Gf.s("I'll see you tomorrow then");
            P.s("See you");
            C.hide();
            end_metro2();
        },
        "Could you visit?": function(msg) {
            P.s(msg);
            P.s("I mean, we should see each other at least once before you leave");
            P.s("But I don't think I can leave him alone while I'm with you");
            P.s("So... it'd be nice if you visit");
            P.s("Spend some time together you know...");
            Gf.s("Yeah");
            if($.visit){
                Gf.s("I mean, I said I would visit right?");
            }
            Gf.s("I'll go to your place");
            Gf.s("Maybe we can take him outside if he's in a good condition");
            Gf.s("Getting him some air might help");
            P.s("Maybe");
            C.hide();
            end_metro2();
        }
    });
}

function end_metro2(){
    Q.wait(1500);
    Q.do(function(){
        metro_phone.visible = false;
        metro_sit.visible = true;
    });
	Q.wait(3000);
	Q.do(clearMsg);
	Q.do(function(){
        app.stage.removeChild(bg_metro_day);
        app.stage.removeChild(animMetroRail);
        app.stage.removeChild(metro_p1);
        app.stage.removeChild(metro_p3);
        app.stage.removeChild(metro_p4);
        app.stage.removeChild(metro_phone);
        app.stage.removeChild(metro_sit);
        resources.metro_inside.sound.stop();
		blackout.visible = true;
	});
	Q.do(start_home3);
}