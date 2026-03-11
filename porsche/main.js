const element = document.getElementById("image");
let id = 1;

function getImage(){
	element.src = "https://raw.githubusercontent.com/t-yauk/alpine-estate/main/porsche/media/" + id + ".jpeg"
}

document.addEventListener('keydown', function(event) {

	if(event.key === 'ArrowRight'){
		id = id + 1;
		if(id > 10){
			id = 1;
		}
		getImage();
	}else if(event.key === 'ArrowLeft'){
		id = id - 1;
		if(id < 1){
			id = 10;
		}
		getImage();
	}

});
