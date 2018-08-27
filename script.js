// console.log('script loaded');
// var boxTop = document.querySelector('#top-bar');
// var boxBottom = document.querySelector('#bottom-bar');
// var box = document.querySelector('#disc');
// document.addEventListener('keypress', function()
// {
// 	//console.log(event.key);
// 	//console.log(box.style.top, bx.style.left);
// 	let boxUp = boxTop.getBoundingClientRect();
// 	let boxDown = boxBottom.getBoundingClientRect();
// 	if(event.key == '9' && (boxUp.x + boxUp.width < window.innerWidth))
// 	{
// 		boxTop.style.left = (boxUp.x + 20);
// 	}
// 	if(event.key == '7' && boxUp.x > 0)
// 	{
// 		boxTop.style.left = (boxUp.x - 20);
// 	}
// 	if(event.key == '3' && (boxDown.x + boxDown.width < window.innerWidth))
// 	{
// 		boxBottom.style.left = (boxDown.x + 20);
// 	}
// 	if(event.key == '1' && boxDown.x > 0)
// 	{
// 		boxBottom.style.left = (boxDown.x - 20);
// 	}
// });

// function catchMeIfYouCan(){

// 	function randomGenerator(upper, lower){
// 		console.log('upper',upper);
// 		console.log('lower',lower);
// 		z=Math.floor((Math.random() * (upper - lower)) + lower);
// 		console.log(z);
// 		return Math.floor((Math.random() * (upper - lower)) + lower);
// 	}

// 	var movement;
// 	box.addEventListener('click', function(){
// 		// let mouseX = event.clientX;
// 		// let mouseY = event.clientY;
// 		clearInterval(movement);
// 		let boxX = box.getBoundingClientRect().x;
// 		let boxY = box.getBoundingClientRect().y;

// 		let newX = randomGenerator(0, window.innerWidth);

// 		let newY = randomGenerator(0, window.innerHeight);

// 		let moveX = 1;
// 		let moveY = 1;

// 		if (newX < boxX){
// 			moveX = -1;
// 		}

// 		if (newY < boxY){
// 			moveY = -1;
// 		}



// 		movement = setInterval(function(){
// 			boxX += moveX;
// 			boxY += moveY;
// 			box.style.left = boxX + 'px';
// 			box.style.top = boxY + 'px';
// 			if(boxX >= window.innerHeight){
// 				console.log('ball hits the wall');
// 				let newX = randomGenerator(window.innerWidth, 0);
// 				let newY = randomGenerator(window.innerHeight, 0);
// 			// let newX = randomGenerator().x;
// 			// let newY = randomGenerator().y;
// 			// randomGenerator();
// 			let moveX = -1;
// 		let moveY = -1;

// 		if (newX < boxX){
// 			moveX = 1;
// 		}

// 		if (newY < boxY){
// 			moveY = 1;
// 		}
// 		}


// 		}, 10);
// 		// box.style.left = newX + 'px';
// 		// box.style.top = newY + 'px';

// 	});

// }

// catchMeIfYouCan();
