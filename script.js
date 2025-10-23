let x = 1;

function forward(){
	x = x + 1;
	if(x == 39){
		x = 1;
	}
	document.getElementById("imageSource").src="https://raw.githubusercontent.com/t-yauk/alpine-estate/main/media-library/"+x+".jpg";
	//document.getElementById("imageNumber").innerHTML = x;
}

function backward(){
	x = x - 1;
	if(x == 0){
		x = 38;
	}
	document.getElementById("imageSource").src="https://raw.githubusercontent.com/t-yauk/alpine-estate/main/media-library/"+x+".jpg";
	//document.getElementById("imageNumber").innerHTML = x;
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == 38) {
        // up arrow
    }
    else if (e.keyCode == 40) {
        // down arrow
    }
    else if (e.keyCode == 37) {
    	x = x - 1;
		if(x == 0){
			x = 38;
		}
		document.getElementById("imageSource").src="https://raw.githubusercontent.com/t-yauk/alpine-estate/main/media-library/"+x+".jpg";
		//document.getElementById("imageNumber").innerHTML = x;
    }
    else if (e.keyCode == 39) {
       	x = x + 1;
		if(x == 39){
			x = 1;
		}
		document.getElementById("imageSource").src="https://raw.githubusercontent.com/t-yauk/alpine-estate/main/media-library/"+x+".jpg";
		//document.getElementById("imageNumber").innerHTML = x;
    }

}
