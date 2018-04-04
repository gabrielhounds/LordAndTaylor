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
	var cta = $('div .cta');

	var frames = $('#frame1, #frame2, #frame3, #frame4, #frame5');

	t.set(frames, {autoAlpha:0});
	t.set('#frame1', {autoAlpha:1})

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

	$('.square').mouseover(function(){
		t.to(this, 0.1, {scale:2.0, ease:Power2.easeOut});
	}).mouseout(function(){
		t.to(this, 0.3, {scale:1, ease:Back.easeOut});
	}).click(function(e){
		handleSquareClick(e);
	});

	$(arrowLeft).mouseover(function(){
		t.to(this, 0.1, {scale:1.2, ease:Power2.easeOut});
	}).mouseout(function(){
		t.to(this, 0.3, {scale:1, ease:Back.easeOut});
	}).click(function(){
		handleLeftClick();
	});

	$(arrowRight).mouseover(function(){
		t.to(this, 0.1, {scale:1.2, ease:Power2.easeOut});
	}).mouseout(function(){
		t.to(this, 0.3, {scale:1, ease:Back.easeOut});
	}).click(function(){
		handleRightClick();
	});

	$(cta).mouseover(function(e){
		console.log(e);
		t.to(this, 0.3, {scale:1.2, backgroundColor:'#e22d8b', ease:Power2.easeOut});
	}).mouseout(function(e){
		t.to(this, 0.3, {scale:1, backgroundColor:'#d7b9b3', ease:Back.easeOut});
	}).click(function(){
		//handleRightClick();
	});




}
































//