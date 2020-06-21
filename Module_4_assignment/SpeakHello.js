(function(window){
	var helloSpeaker ={};
	var speakWord = "Hello ";
	helloSpeaker.speak = function(Name){
		console.log(speakWord + Name);
	};
	window.helloSpeaker = helloSpeaker;
})(window)