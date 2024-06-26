"use client";

import Image from "next/image";
import ReactCurvedText from "react-curved-text";

const Section1 = () => {
	const text =
		"align here to play the reel 2024 . align here to play the reel 2024 . align here to play the reel 2024 .";
	return (
		<div className="px-[8.75rem]">
			<div className="flex flex-col">
				<h1 className="text-[27.87rem] font-[thunder] font-[900]">I'M ANSH</h1>
			</div>

			<div className="flex justify-between">
				<div className="flex flex-col justify-between font-[manrope] w-full h-full gap-y-[3.56rem] py-16">
					<h2 className="font-[600] text-[3.125rem] leading-[3.24rem]">
						Elevating brand identities, systems, and apps through collaborative
						motion design.
					</h2>

					<div className="w-fit flex flex-col gap-y-[0.56rem]">
						<h1 className="font-[500] text-[1.75rem] ">
							anshbhasin3723@gmail.com
						</h1>
						<div className="border border-black w-full"></div>
					</div>
				</div>
				<div className="relative w-full flex justify-end h-full">
					<div className="circledSection font-[thunder] text-[1.97rem] font-[500]">
						<ReactCurvedText
							width={400}
							height={400}
							cx={200}
							cy={200}
							rx={160}
							ry={160}
							text={text.toUpperCase()}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section1;
