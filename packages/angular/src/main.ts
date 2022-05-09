import('./bootstrap')
	.then(({ mount }) => {
		mount();
	})
	.catch(err => console.error(err));
