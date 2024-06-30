import React from "react";
import { gsap } from "gsap-trial";

/* The following plugin is a Club GSAP perk */
import { MorphSVGPlugin } from "gsap-trial/MorphSVGPlugin";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import Anchor from "./subComponents/anchor/Anchor";
import Phone from "./subComponents/phone/Phone";
import Desktop from "./subComponents/desktop/Desktop";

gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#phone",
				start: "top bottom",
			},
		});

		tl.to("#anchor", {
			// duration: 1,
			morphSVG: "#phone",
			ease: "power1.inOut",
			fill: "#ffffff",
			scrollTrigger: {
				scrub: 1,
				// pin: true,
			},
		}).to("#phone", {
			// duration: 1,
			morphSVG: "#desktop",
			fill: "#ffffff",
			// shapeIndex: -5,
			ease: "power1.inOut",
			scrollTrigger: {
				scrub: 1,
			},
		});
	}, []);
	return (
		<>
			<div className="bg-black py-[10.1rem] h-screen">
				<svg
					width="451"
					height="411"
					viewBox="0 0 451 411"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="Frame 75" clip-path="url(#clip0_368_1170)">
						<path
							id="desktop"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0 316V42C0 16.5949 20.5949 -4 46 -4H404.5C429.905 -4 450.5 16.5949 450.5 42V316H243.5V367H309V401H144V367H211V316H0ZM72 31C52.1178 31 36 47.1177 36 67V283H417.5V67C417.5 47.1178 401.382 31 381.5 31H72Z"
							fill="black"
						/>
						<g>
							<path
								id="phone"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M52 0H242C270.719 0 294 23.2812 294 52V359C294 387.719 270.719 411 242 411H52C23.2812 411 0 387.719 0 359V52C0 23.2812 23.2812 0 52 0ZM243 25H51C36.0883 25 24 37.0883 24 52V359C24 373.912 36.0883 386 51 386H243C257.912 386 270 373.912 270 359V52C270 37.0883 257.912 25 243 25Z"
								fill="black"
							/>
							<path
								d="M146 308.5C138 308.5 134 315 134 321C134 327 139 333 146 333C153.5 333 159 328 159 321C159 314 154 308.5 146 308.5Z"
								fill="black"
							/>
						</g>
						<g>
							<path
								id="anchor"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M132 69.5C132 31.1162 163.116 0 201.5 0C239.884 0 271 31.1162 271 69.5C271 103.792 246.165 132.283 213.5 137.968V373C313.5 369.5 373 276.5 373 215H331.5V188.5H400V215C400 298 315.5 401 201.5 401C59.5 401 0 269 2 219.5L0 188.5H71V215H28.5C28.5 302 115 373 187.5 373V137.589C155.827 131.111 132 103.088 132 69.5ZM201.5 111.891C178.088 111.891 159.109 92.9117 159.109 69.5C159.109 46.0883 178.088 27.1094 201.5 27.1094C224.912 27.1094 243.891 46.0883 243.891 69.5C243.891 92.9117 224.912 111.891 201.5 111.891Z"
								fill="white"
							/>
						</g>
					</g>
					<defs>
						<clipPath id="clip0_368_1170">
							<rect width="451" height="411" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</div>
			<div className="h-screen"></div>
		</>
	);
};

export default Section6;