// sleep.js v0.0.2
// Copyright (c) 2016 Reapyr

var sleep = {
	ms: function(ms) {
		var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > ms) break;
		}
	},
	
	s: function(s) {
		var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > (s * 1000)) break;
		}
	}
}
