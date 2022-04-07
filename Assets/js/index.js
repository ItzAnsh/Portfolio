gsap.registerPlugin(ScrollTrigger);

/* gsap.to(".obj1", {
	duration: 2,
	x: "90vw",
	y: -10,
	delay: 1.2,
	rotate: 90,
});

gsap.to(".obj2", {
	duration: 2,
	y: 740,
	delay: 1.2,
	rotate: 90,
	position: "sticky",
});

gsap.to(".obj3", {
	duration: 2,
	y: -740,
	delay: 1.2,
	rotate: 90,
});

gsap.to(".obj4", {
	duration: 2,
	y: 0,
	x: -1284,
	delay: 1.2,
	rotate: 90,
}); */

gsap.to(".obj4", {
	scrollTrigger: {
		start: "top 20%",
		end: "top 15%",
		/* markers: 1, */
		trigger: ".name",
		scrub: 2,
		toggleActions: "play pause reverse reverse",
	},
	autoAlpha: 1,
	duration: 1.5,
	y: 50,
	x: -550,
	rotateY: 180,
	background: "#fff",
	transition: "all",
});

gsap.to(".obj3", {
	scrollTrigger: {
		start: "top 20%",
		end: "top 15%",
		/* markers: 1, */
		trigger: ".name",
		scrub: 2,
		toggleActions: "play pause reverse play",
	},
	autoAlpha: 1,
	duration: 1.5,
	rotateY: 180,
	y: 81,
	x: 636,
	scale: "1.6",
	background: "#fff",
});

gsap.to(".obj1", {
	scrollTrigger: {
		start: "top 20%",
		end: "top 15%",
		/* markers: 1, */
		trigger: ".name",
		scrub: 2,
		toggleActions: "play pause reverse play",
	},
	autoAlpha: 1,
	duration: 1.5,
	rotateY: 180,
	y: 937.8,
	x: 603,
	scale: "0.9",
	background: "#fff",
});

gsap.to(".obj2", {
	scrollTrigger: {
		start: "top 20%",
		end: "top 15%",
		/* markers: 1, */
		trigger: ".name",
		scrub: 2,
		toggleActions: "play pause reverse play",
	},
	autoAlpha: 1,
	duration: 1.5,
	rotateY: 180,
	y: 968,
	x: -576,
	scale: "1.45",
	background: "#fff",
	width: "8%",
});

gsap.to("body", {
	scrollTrigger: {
		start: "top 20%",
		end: "top 15%",
		/* markers: 1, */
		trigger: ".me",
		toggleActions: "play resume reverse resume",
	},
	background: "#fff",
});

gsap.to(".abme", {
	scrollTrigger: {
		start: "top 20%",
		end: "top 15%",
		trigger: ".me",
		toggleActions: "play resume reverse resume",
	},
	x: 100,
	y: 100,
	opacity: 1,
});

gsap.to(".abmetext", {
	scrollTrigger: {
		start: "top 40%",
		end: "top 15%",
		trigger: ".me",
		toggleActions: "play resume reverse resume",
		scrub: true,
	},
	x: 632,
	opacity: 1,
});

gsap.to(".abmecon", {
	scrollTrigger: {
		start: "top 20%",
		end: "top 15%",
		trigger: ".me",
		toggleActions: "play resume reverse resume",
		markers: 0,
		scrub: 2,
	},
	fontSize: "32px",
	opacity: 1,
});

gsap.to(".obj1, .obj2, .obj3, .obj4", {
	scrollTrigger: {
		trigger: ".intro",
		toggleActions: "play resume reverse resume",
	},
});

gsap.to(".Ritikp", {
	scrollTrigger: {
		start: "top 20%",
		end: "top 15%",
		trigger: ".me",
		toggleActions: "play resume reverse resume",
		markers: 0,
		scrub: 2,
	},
	x: 1000,
	opacity: 1,
});

gsap.to(".ghead", {
	scrollTrigger: {
		start: "top 30%",
		end: "top 15%",
		trigger: ".ghead",
		toggleActions: "play resume reverse resume",
		scrub: true,
		markers: 0,
	},
	x: 150,
	opacity: "1",
	autoAlpha: 1,
});

gsap.to(".gl1", {
	scrollTrigger: {
		start: "top 40%",
		end: "top 10%",
		trigger: ".ghead",
		toggleActions: "play resume reverse resume",
		scrub: true,
		markers: 0,
	},
	x: "800",
	opacity: 1,
});

gsap.to(".gl2", {
	scrollTrigger: {
		start: "top 40%",
		end: "top 10%",
		trigger: ".ghead",
		toggleActions: "play resume reverse resume",
		scrub: true,
		markers: 0,
	},
	x: "600",
	opacity: 1,
});

gsap.to(".gl3", {
	scrollTrigger: {
		start: "top 40%",
		end: "top 10%",
		trigger: ".ghead",
		toggleActions: "play resume reverse resume",
		scrub: true,
		markers: 0,
	},
	x: "400",
	opacity: 1,
});

gsap.to(".Thx", {
	scrollTrigger: {
		start: "top 40%",
		end: "top 10%",
		trigger: ".Thx",
		toggleActions: "play resume reverse resume",
		scrub: true,
		markers: 0,
	},
	scale: "3",
});
