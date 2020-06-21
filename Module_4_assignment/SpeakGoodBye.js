(function(window){
	var byeSpeaker ={};
	var speakWord = "Good Bye ";
	byeSpeaker.speak = function(Name){
		console.log(speakWord + Name);
	};
	window.byeSpeaker = byeSpeaker;
})(window)