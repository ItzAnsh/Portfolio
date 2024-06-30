import React from "react";
import TextMan50 from "@/components/global/TextComponents/TextMan50";

const Section3 = () => {
	return (
		<div className="py-[8.75rem] px-[8.5rem]">
			<div className="flex">
				<div className="w-full">
					<TextMan50 text="Crafting motion that dictates how brands own their vibe across today's media." />
				</div>

				<div className="w-full h-full"></div>
			</div>
			<div className="flex relative -top-6">
				<div className="w-full"></div>

				<div className="w-full font-[manrope] text-black font-[400] text-[1.25rem] flex flex-col gap-y-[1.07rem]">
					<h3 className="">
						Turning brands into vibrant experiences that captivate.
					</h3>

					<p className="text-[#979797]">
						As the media landscape undergoes a rapid transformation, brands must
						evolve their communication to thrive in this dynamic era. Motion
						emerges as the key link between a brand and its audience, a
						fundamental aspect that reshapes a brand's platform and
						communication approach in innovative ways.
					</p>

					<p className="text-[#979797]">
						Partnering with trailblazing brand leaders, we design compelling
						motion identities, systems, and applications that intensify audience
						connections, reinforce brand affinity, and propel sustained growth
						into the future.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Section3;
