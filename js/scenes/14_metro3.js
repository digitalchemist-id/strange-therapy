//timeline = 14 June 16th Thu

async function start_metro3(){	
    await sleep(3000);
    resources.metro_inside.sound.play();

	await sleep(2000);
    app.stage.addChildAt(bg_metro_evening, 0);
    app.stage.addChildAt(animMetroRail,1);
    app.stage.addChildAt(metro_p1,2);
    app.stage.addChildAt(metro_p2,2);
    app.stage.addChildAt(metro_p3,2);
    app.stage.addChildAt(metro_p4,2);
    app.stage.addChildAt(metro_sit,2);
    app.stage.addChildAt(metro_phone,2);
    metro_phone.visible = false;
	blackout.visible = false;

	Q.wait(3000);
	if(!$.friendship_over){
		metro3_friend();
	} else if($.not_nice_to_gf < 2) {
		metro3_gf();
	} else {
        Q.wait(3000);
		end_metro3();
	}
}

function metro3_friend(){
	Q.do(function(){
		resources.phone_vib.sound.play();
	});
	Q.wait(2000);

	C.t({
        "[Check message]": function(msg) {
	        C.hide();
            if($.friend_told){
                metro3_friend_told();
            } else {
                metro3_friend_untold();
            }

        },
        "[Don't]": function(msg) {
            C.hide();
            if($.not_nice_to_gf < 2) {
				metro3_gf();
			} else {
				end_metro3();
			}
        }
    });
}

function metro3_friend_told(){
    Q.wait(1000);
    Q.do(function(){
        metro_phone.visible = true;
        metro_sit.visible = false;
    });
    Q.wait(1500);
	F.s("You alright?");
	F.s("How is everything going?");
	C.s({
        "It's cool": function(msg) {
            P.s(msg);
            F.s("Cool");
            F.s("Now that all your tests are over");
            F.s("I hope your dog recovers soon");
            Q.wait(2000);
            P.s("Yeah");
            C.hide();
            if($.not_nice_to_gf < 2) {
				metro3_gf();
			} else {
				end_metro3();
			}
        },
        "I'm holding on": function(msg) {
            P.s(msg);
            F.s("And your dog..?");
            P.s("He has less than a week");
            Q.wait(2000);
            F.s("I really don't know what to say");
            F.s("I'm very sorry");
            C.hide();
            if($.not_nice_to_gf < 2) {
				metro3_gf();
			} else {
				end_metro3();
			}
        },
        "[Don't reply]": function(msg) {
            P.s(msg);
            C.hide();
            if($.not_nice_to_gf < 2) {
				metro3_gf();
			} else {
				end_metro3();
			}
        }
    });
}

function metro3_friend_untold(){
    Q.wait(1000);
    Q.do(function(){
        metro_phone.visible = true;
        metro_sit.visible = false;
    });
    Q.wait(1500);
	F.s("There's a group meeting tomorrow 2pm");
	F.s("GSR 417 at library");
	C.s({
        "I'll be there": function(msg) {
            P.s(msg);
            C.hide();
            if($.not_nice_to_gf < 2) {
				metro3_gf();
			} else {
				end_metro3();
			}
        },
        "I can't be there": function(msg) {
            P.s(msg);
            P.s("Sorry");
            C.hide();
            if($.not_nice_to_gf < 2) {
				metro3_gf();
			} else {
				end_metro3();
			}
        },
        "[Don't reply]": function(msg) {
            P.s(msg);
            C.hide();
            if($.not_nice_to_gf < 2) {
				metro3_gf();
			} else {
				end_metro3();
			}
        }
    });
}

function metro3_gf(){
    Q.wait(3000);
    Q.do(function(){
        metro_phone.visible = false;
        metro_sit.visible = true;
    });
    Q.wait(2500);
	Q.do(function(){
		resources.phone_vib.sound.play();
	});
	Q.wait(1000);

	C.t({
        "[Check message]": function(msg) {
	        C.hide();
            if($.gf_told){
                metro3_gf_told();
            } else {
                metro3_gf_untold();
            }
        },
        "[Don't]": function(msg) {
            P.t("I'll just turn this thing off");
            C.hide();
            end_metro3();
        }
    });
}

function metro3_gf_told(){
    Q.wait(3000);
    Q.do(function(){
        metro_phone.visible = true;
        metro_sit.visible = false;
    });
    Q.wait(1500);
	Gf.s("I'm home");
	Gf.s("Since I have to pack my stuff for summer");
	Gf.s("Today's like the last chane we can meet...");
	Gf.s("Should I visit?");
	Gf.s("What would you like me to do?");
	C.s({
        "Good bye": function(msg) {
            P.s(msg);
            Q.wait(3000);
            Gf.s("Okay...");
            Q.wait(3000);
            Gf.s("Take Care");
            C.hide();
            end_metro3();
        },
        "I'll call you later": function(msg) {
            P.s(msg);
            P.s("I first need to go home and");
            P.s("See if...");
            Gf.s("Okay");
            Gf.s("It'll be alright");
            Gf.s("I'll wait for your call");
            C.hide();
            end_metro3();
        },
        "[Don't reply]": function(msg) {
            P.s(msg);
            C.hide();
            end_metro3();
        }
    });
}

function metro3_gf_untold(){
    Q.wait(1000);
    Q.do(function(){
        metro_phone.visible = true;
        metro_sit.visible = false;
    });
    Q.wait(1500);
    Gf.s("I'm home");
    Gf.s("I'm leaving the day after tomorrow");
    Gf.s("What's happening..?");
    Gf.s("Why am I not hearing from you...?");
    C.s({
        "Good bye": function(msg) {
            P.s(msg);
            Q.wait(3000);
            Gf.s("...");
            C.hide();
            end_metro3();
        },
        "I'll call you later": function(msg) {
            P.s(msg);
            Gf.s("You're not that busy");
            Gf.s("I know your semester is over");
            Gf.s("What the hell are you up to?");
            Gf.s("I can't believe this...");
            C.hide();
            end_metro3();
        },
        "[Don't reply]": function(msg) {
            P.s(msg);
            C.hide();
            end_metro3();
        }
    });
}

function end_metro3(){
    Q.wait(1500);
    Q.do(function(){
        metro_phone.visible = false;
        metro_sit.visible = true;
    });
	Q.wait(3000);
	Q.do(clearMsg);
	Q.do(start_outro);
	Q.do(function(){
        app.stage.removeChild(bg_metro_evening);
        app.stage.removeChild(animMetroRail);
        app.stage.removeChild(metro_p1);
        app.stage.removeChild(metro_p2);
        app.stage.removeChild(metro_p3);
        app.stage.removeChild(metro_p4);
        app.stage.removeChild(metro_sit);
        app.stage.removeChild(metro_phone);
        resources.metro_inside.sound.stop();
		blackout.visible = true;
	});
}