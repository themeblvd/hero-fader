/**
 * A simple gallery app with vanilla JS.
 *
 * This is a simple gallery app that swaps images when
 * clicking on thumbnails. It's meant to fufill the
 * requirements of V School's pre-course project.
 *
 * @author Jason Bobich
 */
( function galleryApp() {

	const app = document.getElementById( 'app' );

	const imageTitles = [
		'Slanted Forest',  // 1.jpg
		'Taking a Photo',  // 2.jpg
		'Crashing Wave',   // 3.jpg
		'Sumertime Vibes', // 4.jpg
		'Forest of Fall'   // 5.jpg
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

		// Our app's markup must be ready.

		if ( ! navItems || ! imgContainer ) {
			return;
		}

		// Update `active` nav item.

		for ( let i = 0; i < navItems.length; i++ ) {
			navItems[ i ].className = '';
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

		imgContainer.className = 'img-container'; // Removes `loaded` class.

		let title = document.createElement( 'h2' );

		title.textContent = imageTitles[ index ];

		imgContainer.appendChild( title );

		let img = document.createElement( 'img' );

		img.src = `assets/img/${index + 1}.jpg`;

		img.alt = imageTitles[ index ];

		imgContainer.appendChild( img );

		img.addEventListener( 'load', function addImgClass() {
			imgContainer.className += ' loaded'; // Adding `loaded` class fades in image.
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

	for ( let i = 0; i < imageTitles.length; i++ ) {

		let item = document.createElement( 'li' );

		item.setAttribute( 'data-item-num', i + 1 ); // Used to identify image to display on `click` event.

		nav.appendChild( item );

		let thumbImg = document.createElement( 'img' );

		thumbImg.src = `assets/img/${i + 1}-thumb.jpg`;

		thumbImg.alt = imageTitles[ i ];

		item.appendChild( thumbImg );

	}

	// Change active image, when clicking a thumbnail.

	const navItems = nav.getElementsByTagName( 'li' );

	for ( let i = 0; i < navItems.length; i++ ) {
		navItems[ i ].addEventListener( 'click', displayImage );
	}

	// Add active image container and display first image.

	const imgContainer = document.createElement( 'figure' );

	imgContainer.className = 'img-container';

	app.appendChild( imgContainer );

	displayImage(); // Defaults to displaying 1st image, when no nav item click event is passed in.

} )();
