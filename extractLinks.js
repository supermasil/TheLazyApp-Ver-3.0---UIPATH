function() {
	
	var urls = document.querySelectorAll('a');
	var result = "";
	for (url in urls) {
		result += urls[url].href + '\n';
	}

	return result;
}