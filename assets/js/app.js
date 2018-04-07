( function galleryApp() {

	const app = document.getElementById( 'app' );

	const images = [
		'Slanted Forest',
		'Taking a Photo',
		'Crashing Wave',
		'Sumertime Vibes',
		'Forest of Fall'
	];

	/**
	 * Displays the currently selected image in the main
	 * image container.
	 *
	 * Note: The @param event defaults to a `false` to meet
	 * assignment requirement of including a boolean... would
	 * have probably used `null`, otherwise.
	 */
	function displayImage( event = false ) {

		// Update `active` nav item.

		let navItems = nav.getElementsByTagName( 'li' );

		for ( let i = 0; i < items.length; i++ ) {

			items[ i ].className = '';

		}

		let activeNavItem;

		if ( event ) {
			activeNavItem = event.currentTarget;
		} else {
			activeNavItem = navItems[ 0 ]; // Defaults to first item.
		}

		activeNavItem.className = 'active';

		// Update the image container.

		let index = activeNavItem.dataset.itemNum - 1;

		imgContainer.innerHTML = '';

		imgContainer.className = 'img-container';

		let title = document.createElement( 'h2' );

		title.textContent = images[ index ];

		imgContainer.appendChild( title );

		let img = document.createElement( 'img' );

		img.src = `assets/img/${index + 1}.jpg`;

		img.alt = images[ index ];

		imgContainer.appendChild( img );

		img.addEventListener( 'load', function addImgClass() {

			imgContainer.className = 'img-container loaded';

		} );

	}

	// Add site title.

	const title = document.createElement( 'h1' );

	title.className = 'site-title';

	title.textContent = document.title;

	app.appendChild( title );

	// Add navigation container and items.

	const nav = document.createElement( 'ul' );

	nav.className = 'nav';

	app.appendChild( nav );

	for ( let i = 0; i < images.length; i++ ) {

		let item = document.createElement( 'li' );

		item.setAttribute( 'data-item-num', i + 1 ); // Used to identify image to display on `click` event.

		nav.appendChild( item );

		let thumbImg = document.createElement( 'img' );

		thumbImg.src = `assets/img/${i + 1}-thumb.jpg`;

		thumbImg.alt = images[ i ];

		item.appendChild( thumbImg );

	}

	// Change active image, when clicking a thumbnail.

	let items = nav.getElementsByTagName( 'li' );

	for ( let i = 0; i < items.length; i++ ) {

		items[ i ].addEventListener( 'click', displayImage );

	}

	// Add active image container and display first image.

	const imgContainer = document.createElement( 'figure' );

	imgContainer.className = 'img-container';

	app.appendChild( imgContainer );

	displayImage(); // Defaults to displaying 1st image, when no nav item click event is passed in.

} )();
