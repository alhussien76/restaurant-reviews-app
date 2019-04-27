if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./ServiceWorker.js')
	.then(function() {
		console.log('Registration worked!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
}