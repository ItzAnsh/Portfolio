"use client";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Section1 from "@/components/home/section1/Section1";
import Section2 from "@/components/home/section2/Section2";
import Section3 from "@/components/home/section3/Section3";
import Section4 from "@/components/home/section4/Section4";
import Section5 from "@/components/home/section5/Section5";
// import Section6 from "@/components/home/section6/Section6";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

// gsap.

export default function Home() {
	const [cursorX, setCursorX] = useState(0);
	const [cursorY, setCursorY] = useState(0);
	const [deviceType, setDeviceType] = useState("");
	const [isClicking, setIsClicking] = useState(false);
	const [buttonHovered, setButtonHovered] = useState(false);
	const [isInverted, setIsInverted] = useState(false);

	useEffect(() => {
		const handleMouseMove = (event) => {
			const element = document.elementFromPoint(event.clientX, event.clientY);
			if (element) {
				const computedStyle = window.getComputedStyle(element);
				const backgroundColor = computedStyle.backgroundColor;
				if (isLightColor(backgroundColor)) {
					setIsInverted(true);
				} else {
					setIsInverted(false);
				}
			}
		};

		const isLightColor = (color) => {
			const rgb = color.match(/\d+/g);
			if (!rgb) return false;
			const r = parseInt(rgb[0], 10);
			const g = parseInt(rgb[1], 10);
			const b = parseInt(rgb[2], 10);
			// Calculate luminance
			const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
			return luminance > 128; // You can adjust the threshold as needed
		};

		document.addEventListener("mousemove", handleMouseMove);
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	// check if it is a touch device
	const isTouchDevice = () => {
		try {
			document.createEvent("TouchEvent");
			setDeviceType("touch");
			return true;
		} catch (e) {
			setDeviceType("mouse");
			return false;
		}
	};

	const move = (e) => {
		const touchEvent = e.touches ? e.touches[0] : null;
		const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
		const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;

		setCursorX(x);
		setCursorY(y);

		// Set the cursor border's position directly
		const cursorBorder = document.getElementById("cursor-border");
		if (cursorBorder) {
			cursorBorder.style.left = `${x}px`;
			cursorBorder.style.top = `${y}px`;
		}
	};

	const handleMouseDown = () => {
		setIsClicking(true);
	};

	const handleMouseUp = () => {
		setIsClicking(false);
	};

	const handleButtonHover = (hovered) => {
		setButtonHovered(hovered);
	};

	useEffect(() => {
		document.addEventListener("mousemove", move);
		document.addEventListener("touchmove", move);
		document.addEventListener("mousedown", handleMouseDown);
		document.addEventListener("mouseup", handleMouseUp);
		return () => {
			document.removeEventListener("mousemove", move);
			document.removeEventListener("touchmove", move);
			document.removeEventListener("mousedown", handleMouseDown);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, []);

	const text =
		"align here to play the reel 2024 . align here to play the reel 2024 . align here to play the reel 2024 .";
	const containerRef = useRef(null);
	return (
		// <LocomotiveScrollProvider
		// 	options={{
		// 		smooth: true,
		// 		// ... all available Locomotive Scroll instance options
		// 	}}
		// 	watch={
		// 		[
		// 			//..all the dependencies you want to watch to update the scroll.
		// 			//  Basicaly, you would want to watch page/location changes
		// 			//  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
		// 		]
		// 	}
		// 	containerRef={containerRef}
		// >
		<>
			<div
				id="cursor"
				className={`bg-blend-color-difference bg-black h-4 w-4 rounded-full absolute z-[9999] pointer-events-none`}
				style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
			></div>
			<main
				ref={containerRef}
				className="relative flex flex-col gap-y-[3.02rem] scroll"
				data-scroll
				data-scroll-speed="4"
				data-scroll-position="top"
			>
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				
			</main>
		</>
		// {/* </LocomotiveScrollProvider> */}
	);
}
