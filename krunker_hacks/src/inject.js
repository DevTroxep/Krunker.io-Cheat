
var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('/src/jquery-3.5.1.min.js');
s.onload = function() {
    this.remove();
	
	var s = document.createElement('script');
	// TODO: add "script.js" to web_accessible_resources in manifest.json
	s.src = chrome.runtime.getURL('src/content.js');
	s.onload = function() {
		this.remove();
	};
	(document.head || document.documentElement).appendChild(s);
};
(document.head || document.documentElement).appendChild(s);
