$(document).ready(function(){
	init();
});

function init() {
	console.log('init');
	var t = TweenMax;
	var tl = new TimelineMax({ paused : true });

	var frameNum = 1;

	var arrowLeft = $('.arrowLeft');
	var arrowRight = $('.arrowRight');

	var frames = $('#frame1, #frame2, #frame3, #frame4, #frame5');

	function handleRightClick() {
		t.killAll();
		$('.square').css({ opacity : 0.35 });
		t.set('.frame', {autoAlpha:0});

		console.log('RIGHT CLICK');
		switch (frameNum) {
		  case 1:
		  t.to('.square2', 0.2, {opacity:1});
		  t.to('#frame2', 0.2, {autoAlpha:1});

	  	  frameNum = 2;
	  	  break;
	  	  case 2:
	  	  t.to('.square3', 0.2, {opacity:1});
		  t.to('#frame3', 0.2, {autoAlpha:1});

	  	  frameNum = 3;
	  	  break;
	  	  case 3:
	  	  t.to('.square4', 0.2, {opacity:1});
		  t.to('#frame4', 0.2, {autoAlpha:1});

	  	  frameNum = 4;
	  	  break;
	  	  case 4:
	  	  t.to('.square5', 0.2, {opacity:1});
		  t.to('#frame5', 0.2, {autoAlpha:1});

	  	  frameNum = 5;
	  	  break;
	  	  case 5:
	  	  t.to('.square1', 0.2, {opacity:1});
		  t.to('#frame1', 0.2, {autoAlpha:1});

	  	  frameNum = 1;
	  	  break;
		}
		console.log(frameNum);
	}

	function handleLeftClick() {
		t.killAll();
		$('.square').css({ opacity : 0.35 });
		t.set('.frame', {autoAlpha:0});
		console.log('LEFT CLICK');
		switch (frameNum) {
		  case 1:
		  t.to('.square5', 0.2, {opacity:1});
		  t.to('#frame5', 0.2, {autoAlpha:1});

	  	  frameNum = 5;
	  	  break;
	  	  case 5:
	  	  t.to('.square4', 0.2, {opacity:1});
	  	  t.to('#frame4', 0.2, {autoAlpha:1});

	  	  frameNum = 4;
	  	  break;
	  	  case 4:
	  	  t.to('.square3', 0.2, {opacity:1});
	  	  t.to('#frame3', 0.2, {autoAlpha:1});

	  	  frameNum = 3;
	  	  break;
	  	  case 3:
	  	  t.to('.square2', 0.2, {opacity:1});
	  	  t.to('#frame2', 0.2, {autoAlpha:1});

	  	  frameNum = 2;
	  	  break;
	  	  case 2:
	  	  t.to('.square1', 0.2, {opacity:1});
	  	  t.to('#frame1', 0.2, {autoAlpha:1});

	  	  frameNum = 1;
	  	  break;
		}
		console.log(frameNum);
	}

	function handleSquareClick(e) {
		$('.square').css({ opacity : 0.35 });
		t.set('.frame', {autoAlpha:0});
		console.log('Square CLICK | ' + e.target.id);
		switch (e.target.id) {
		  case 'square1':
		  t.to('.square1', 0.2, {opacity:1});
		  t.to('#frame1', 0.2, {autoAlpha:1});

	  	  frameNum = 1;
	  	  break;
	  	  case 'square2':
	  	  t.to('.square2', 0.2, {opacity:1});
	  	  t.to('#frame2', 0.2, {autoAlpha:1});

	  	  frameNum = 2;
	  	  break;
	  	  case 'square3':
	  	  t.to('.square3', 0.2, {opacity:1});
	  	  t.to('#frame3', 0.2, {autoAlpha:1});

	  	  frameNum = 3;
	  	  break;
	  	  case 'square4':
	  	  t.to('.square4', 0.2, {opacity:1});
	  	  t.to('#frame4', 0.2, {autoAlpha:1});

	  	  frameNum = 4;
	  	  break;
	  	  case 'square5':
	  	  t.to('.square5', 0.2, {opacity:1});
	  	  t.to('#frame5', 0.2, {autoAlpha:1});

	  	  frameNum = 5;
	  	  break;
		}
		console.log(frameNum);
	}

	$('.square').click(function(e){
		handleSquareClick(e);
	});

	$(arrowLeft).click(function(){
		handleLeftClick();
	});

	$(arrowRight).click(function(){
		handleRightClick();
	});


}