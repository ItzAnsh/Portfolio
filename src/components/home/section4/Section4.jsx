"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkCard = ({ image, title, dimensions, className, link }) => {
	return (
		<Link href={link}>
			<div
				className={`WorkCard flex flex-col relative gap-y-[2.25rem] w-fit ${className}`}
				style={{ opacity: 1 }}
			>
				<Image
					src={image}
					// fill
					width={800}
					height={200}
					className={`object-cover w-[39.31rem] ${dimensions} border border-black`}
				/>

				<div className="text-[3.75rem] uppercase font-[thunder] font-[400] truncate">
					{title}
				</div>
			</div>
		</Link>
	);
};

const Section4 = () => {
	useGSAP(() => {
		const tl = gsap.timeline({
			onComplete: () => {
				tl.kill();
			},
		});

		const allProps = {
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: ".WorkCard",
				endTrigger: ".WorkCard",
				start: "top",
				end: "top",
				scrub: 1,
				// markers: true,
			},
		};

		tl.to(".workText", {
			backgroundPosition: "2% 100000%",
			scrollTrigger: {
				trigger: ".projects",
				start: "top center",
				end: "top",
				scrub: 1,
			},
		})
			.from(".workCard1", {
				y: -100,
				x: 400,
				...allProps,
			})
			.from(".workCard2", {
				y: -100,
				x: -400,
				...allProps,
			})
			.from(".workCard3", {
				y: -800,
				x: 400,
				...allProps,
			})
			.from(".workCard4", {
				y: -800,
				x: -400,
				...allProps,
			});
	}, []);
	return (
		<div className="relative projects">
			<div className=" px-[3.82rem] relative w-screen flex justify-center">
				<div className="text-[27.87rem] font-[thunder] font-[900] bg-gradient-to-r from-black to-black/10 from-[0%] to-[1%] text-transparent bg-clip-text text-center absolute overflow-hidden workText bg-[length:200%_100%] bg-[100%]">
					MY WORK
				</div>

				<div className="flex w-full pt-[25rem]">
					<div className="w-full flex">
						<div className="flex w-full justify-between">
							<div className="flex flex-col relative gap-y-[5rem]">
								<WorkCard
									image="https://res.cloudinary.com/dmgmcljcv/image/upload/v1719506348/r8gcehz0p2k4tuh5r9lc.png"
									title="Vison2Business"
									dimensions="h-[25.56rem]1"
									className={`workCard1`}
									link={"https://vbportfolio-frontend.vercel.app/"}
								/>

								<WorkCard
									image="https://res.cloudinary.com/dmgmcljcv/image/upload/v1719501381/wnnc3pv0q3m9afsd4ffk.png"
									title="Saak"
									dimensions="h-[60.93rem]"
									className={`workCard3`}
									link={"https://saak.com/"}
								/>
							</div>

							<div className="flex flex-col relative gap-y-[5rem] py-16">
								<WorkCard
									image="https://res.cloudinary.com/dmgmcljcv/image/upload/v1719471924/vv6glplcifz8zgkwrxaw.png"
									title="IndusianAssist"
									dimensions=" h-[45.56rem]"
									className={`workCard2`}
									link={""}
								/>

								<WorkCard
									image="https://res.cloudinary.com/dmgmcljcv/image/upload/v1719508600/ijab6crdzfazfugxm8zg.png"
									title="CyHR"
									dimensions="h-[37.75rem]"
									className={`workCard4`}
									link={"https://github.com/tanishksahni/CyHr.git"}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section4;
