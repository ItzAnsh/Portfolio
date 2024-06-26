"use client";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Section1 from "@/components/home/section1/Section1";
import { useRef } from "react";

export default function Home() {
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
		<main ref={containerRef}>
			<Section1 />
		</main>
		// </LocomotiveScrollProvider>
	);
}
