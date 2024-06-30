import React from "react";

const Section5 = () => {
	const text = "WAKE UP.  DEVELOP.  REPEAT.";
	return (
		<div>
			<hr className="mx-[8.5rem] bg-black h-0.5" />

			<div className="flex pt-[2.75rem] gap-x-[1.06rem]">
				<div className="w-full animate-marquee-infinite">
					<h2 className="text-[6.25rem] font-[400] font-[thunder]">{text}</h2>
				</div>
				<div className="w-full animate-marquee2-infinite">
					<h2 className="text-[6.25rem] font-[400] font-[thunder]">{text}</h2>
				</div>
			</div>

			<hr className="mx-[8.5rem] bg-black h-0.5" />
		</div>
	);
};

export default Section5;
