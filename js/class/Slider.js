"use strict";

// Class Slider
//...
//...
//...

class Slider {

	maxLeft = 0;
	maxRight = -200;
	slideSize = 100;
	nextSlide;
	maxSlide = false;
	pause = false;
	sliderContainerElt = document.getElementById("slider_container");
	rightButtonElt = document.getElementById("right_button");
	leftButtonElt = document.getElementById("left_button");
	containerMainElt = document.getElementById("container_main");
	containerButtonElt = document.getElementById("container_button");
	pauseButtonElt = document.getElementById("pause_button");
	playButtonElt = document.getElementById("play_button");

	constructor() {

		// Default values
		let maxLeft = this.maxLeft;
		let maxRight = this.maxLeft;
		let slideSize = this.slideSize;
		let nextSlide = this.nextSlide;
		let maxSlide = this.maxSlide;
		let sliderContainerElt = this.sliderContainerElt;
		let rightButtonElt = this.rightButtonElt;
		let leftButtonElt = this.leftButtonElt;
		let containerMainElt = this.containerMainElt;
		let pauseButtonElt = this.pauseButtonElt;
		let playButtonElt = this.playButtonElt;
		let pause = this.pause;
	}

	// Method running
	running() {

		// Use default values
		var maxLeft = this.maxLeft;
		var maxRight = this.maxRight;
		var slideSize = this.slideSize;
		// Variable
		//var nextSlide = this.nextSlide;
		var maxSlide = this.maxSlide;
		var sliderContainerElt = this.sliderContainerElt;
		var rightButtonElt = this.rightButtonElt;
		var leftButtonElt = this.leftButtonElt;
		var containerMainElt = this.containerMainElt;
		var containerButtonElt = this.containerButtonElt;
		var pauseButtonElt = this.pauseButtonElt;
		var playButtonElt = this.playButtonElt;


		// Pause button
		//...

		containerMainElt.onmouseover = function() {
			containerButtonElt.style.display = "block";
		}

		containerMainElt.onmouseout = function() {
			containerButtonElt.style.display = "none";
		}
		containerButtonElt.onclick = this.pauseSlider.bind(this);

		// Right button
		//...
		rightButtonElt.onclick = this.rightButton.bind(this);

		// Left button
		//...
		leftButtonElt.onclick = this.leftButton.bind(this);

		// Keyboard
		//...
		containerMainElt.onkeydown = function() {

			if(event.keyCode == 39) { // KeyCode: right spire

				if(sliderContainerElt.style.left) {
					var leftSlider = sliderContainerElt.style.left;
				}
				else {
					var leftSlider = getComputedStyle(sliderContainerElt).left;
				}

				var leftSliderInt = parseInt(leftSlider); // Convert the input strings into int

				if(leftSliderInt > maxRight) {
					leftSliderInt = leftSliderInt-slideSize;
					sliderContainerElt.style.left = leftSliderInt + "%";

					if(leftSliderInt == maxRight) {
						maxSlide = true;
					}
				}
				// Pause button
				this.pause = true;
				pauseButtonElt.style.display = "none";
				playButtonElt.style.display = "block";
				clearInterval(this.nextSlide);
			}

			else if(event.keyCode == 37) { // KeyCode: left spire
				
				if(sliderContainerElt.style.left) {
					var leftSlider = sliderContainerElt.style.left;
				}
				else {
					var leftSlider = getComputedStyle(sliderContainerElt).left;
				}

				var leftSliderInt = parseInt(leftSlider); // Convert the input strings into int

				if(leftSliderInt < maxLeft) {
					leftSliderInt = leftSliderInt+slideSize;
					sliderContainerElt.style.left = leftSliderInt + "%";

					if(leftSliderInt == maxLeft) {
						maxSlide = false;
					}
				}
				// Pause button
				this.pause = true;
				pauseButtonElt.style.display = "none";
				playButtonElt.style.display = "block";
				clearInterval(this.nextSlide);
			}
		} // End containerMainElt.onkeydown

		this.automaticMode();

	} // End method running

	automaticMode() {

		let sliderContainerElt = this.sliderContainerElt;
		let maxLeft = this.maxLeft;
		let maxSlide = this.maxSlide;
		let maxRight = this.maxRight;
		let slideSize = this.slideSize;

		function auto() {
			console.log('ok');
			if(sliderContainerElt.style.left) {
				var leftSlider = sliderContainerElt.style.left;
			}
			else {
				var leftSlider = getComputedStyle(sliderContainerElt).left;
			}

			var leftSliderInt = parseInt(leftSlider); // Convert the strings into int

			if(leftSliderInt > maxRight && !maxSlide) {
				leftSliderInt = leftSliderInt-slideSize;
				sliderContainerElt.style.left = leftSliderInt + "%";

				if(leftSliderInt == maxRight) {
					maxSlide = true;
				}
			}
			else if(leftSliderInt < maxLeft && maxSlide) {
				leftSliderInt = leftSliderInt+slideSize;
				sliderContainerElt.style.left = leftSliderInt + "%";

				if(leftSliderInt == maxLeft) {
					maxSlide = false;
				}
			}
		} // End function auto

		this.nextSlide = setInterval(auto, 5000);
	} // End method automaticMode

	// Method pauseSlider
	pauseSlider() {

		if(this.pause) {
			this.pauseButtonElt.style.display = "block";
			this.playButtonElt.style.display = "none";
			this.automaticMode();
			this.pause = false;
		}
		else {
			this.pauseButtonElt.style.display = "none";
			this.playButtonElt.style.display = "block";
			clearInterval(this.nextSlide);
			this.pause = true;
		}
	}

	// Method rightButton
	rightButton() {
		console.log('right');
		if(this.sliderContainerElt.style.left) {
			var leftSlider = this.sliderContainerElt.style.left;
		}
		else {
			var leftSlider = getComputedStyle(this.sliderContainerElt).left;
		}

		var leftSliderInt = parseInt(leftSlider); // Convert the input strings into int

		if(leftSliderInt > this.maxRight) {
			leftSliderInt = leftSliderInt-this.slideSize;
			this.sliderContainerElt.style.left = leftSliderInt + "%";

			if(leftSliderInt == this.maxRight) {
				this.maxSlide = true;
			}
		}
		// Pause button 
		this.pause = true;
		this.pauseButtonElt.style.display = "none";
		this.playButtonElt.style.display = "block";

		// Stop automaticMode
		clearInterval(this.nextSlide);
	} // End rightButton

	// Method leftButton
		leftButton() {
			console.log('left');
			if(this.sliderContainerElt.style.left) {
				var leftSlider = this.sliderContainerElt.style.left;
			}
			else {
				var leftSlider = getComputedStyle(this.sliderContainerElt).left;
			}

			var leftSliderInt = parseInt(leftSlider); // Convert the input strings into int

			if(leftSliderInt < this.maxLeft) {
				leftSliderInt = leftSliderInt+this.slideSize;
				this.sliderContainerElt.style.left = leftSliderInt + "%";

				if(leftSliderInt === this.maxLeft) {
					this.maxSlide = false;
				}
			}
			// Pause button
			this.pause = true;
			this.pauseButtonElt.style.display = "none";
			this.playButtonElt.style.display = "block";

			// Stop automaticMode
			clearInterval(this.nextSlide);
		} // End leftButton

} // End class Slider