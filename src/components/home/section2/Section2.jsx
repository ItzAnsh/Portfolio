import React from "react";
import Image from "next/image";
import TextMan50 from "@/components/global/TextComponents/TextMan50";

const Section2 = () => {
	return (
		<div className="relative  bg-black overflow-hidden">
			<div className="grayscale relative w-screen px-[8.5rem]">
				<div className="py-[5rem]">
					<div className="text-[27.87rem] font-[thunder] font-[900] text-white">
						I'M ANSH
					</div>

					<div className="flex w-full">
						<div className="w-full flex flex-1">
							<div className="flex flex-col justify-between font-[manrope] w-full h-full gap-y-[3.56rem]">
								<div className="w-full">
									<TextMan50
										className="text-white"
										text={
											"I'm a product designer living in Chandigarh, focused on creating long lasting experiences"
										}
									/>
								</div>

								<div className="w-fit flex flex-col gap-y-[0.56rem] text-white">
									<h1 className="font-[500] text-[1.75rem] ">
										anshbhasin3723@gmail.com
									</h1>
									<div className="border border-white w-full"></div>
								</div>
								<div className="w-full"></div>
							</div>
						</div>

						<div className="w-full flex-[0.6]"></div>
					</div>
				</div>
			</div>
			<div className="absolute -right-44 bottom-0 h-[80%] w-[60%] grayscale bg-[url('https://res.cloudinary.com/dmgmcljcv/image/upload/v1719424789/lf039j7oopduxkclwoj1.svg')] bg-contain bg-no-repeat bg-right-bottom">
				{/* <Image
					src={
						"https://res.cloudinary.com/dmgmcljcv/image/upload/v1719424789/lf039j7oopduxkclwoj1.svg"
					}
					alt="bg"
					className="object-contain object-bottom"
					fill
				/> */}
			</div>
		</div>
	);
};

export default Section2;
