import React from "react";

const TextMan50 = ({ text, className }) => {
	return (
		<h2
			className={`font-[600] text-[3.125rem] leading-[3.24rem] font-[manrope] ${className}`}
		>
			{text}
		</h2>
	);
};

export default TextMan50;
