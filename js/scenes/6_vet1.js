//timeline = 6 June 12th Sun
//I was full of both hope and desperation
//he seemed really okay and vet told me first step for him recover was to eat
//So I thought that could happen and I tried...

async function start_vet1() {
	
	//loader
	await sleep(1000);
	blackout.visible = false;
}

function end_vet1(){

	Q.wait(2000);
	Q.do(clearMsg);
	Q.do(start_room);
	Q.do(function(){
		blackout.visible = true;
	});
}