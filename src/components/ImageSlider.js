import React, {useRef, useEffect} from 'react';

export default function ImageSlider() {
	const imageEle = useRef(null);
	const containerEle = useRef(null);

	let selectedImgs = [0, 1, 2];
	let currentIndex = 0;

	function setupEntering(){
		// set to next image
		if (++currentIndex === selectedImgs.length) currentIndex = 0; // check index reset
		imageEle.current.src = `/gallery/img${currentIndex}.jpg`;

		containerEle.current.classList.add("chevron-enter");
		containerEle.current.classList.remove("chevron-leave");
	}

	function setupLeaving(){
		containerEle.current.classList.add("chevron-leave");
		containerEle.current.classList.remove("chevron-enter");
	}

	useEffect(() => {
		// outer scope for the timeout func can be cleared
		let waitAndLeave = null;

		// fires when animation ends
		containerEle.current.addEventListener("animationend", () => {
			// if just completed entering
			if (containerEle.current.classList.contains("chevron-enter")){
				waitAndLeave = setTimeout(setupLeaving, 3000);
			}
			// just completed leaving
			else {
				setupEntering();
			}
		});

		// initiate the animation loop
		setupEntering();
		
		return () => {
			clearInterval(waitAndLeave); // clear timer unpon unmounting
		};
	});

	return (
		<section id="services-highlight-div">
			<div ref={containerEle}>
				<img src={`/gallery/img0.jpg`} ref={imageEle} alt="Feature" />
			</div>
		</section>
	)
}