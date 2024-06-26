import React from "react";
import Link from "next/link";
import ReactCurvedText from "react-curved-text";

const NavItem = ({ name, link }) => {
	return <Link href={link}>{name}</Link>;
};

const Navbar = () => {
	const items = [
		{
			name: "Works",
			link: "/works",
		},
		{
			name: "About",
			link: "/about",
		},
		{
			name: "Contact",
			link: "/contact",
		},
		{
			name: "Start>Project",
			link: "/start-project",
		},
	];
	return (
		<div className="fixed">
			<div className="px-[8.75rem] w-screen bg-white">
				<div className="flex justify-between items-center py-[15px] w-full">
					<div className="grayscale bg-white/30">
						<div className="h-16 w-16 bg-[url('https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZqJpn-tF0GxGvYM1r52SYjPU0-EB9pH2iJfbUev8sFAc2sSDrB4nqEFcRGI4AIU4LYhrOfwL-Sq7AY9ExakEz2im8uSVJMyEU=w3360-h1926-rw-v1')] bg-cover rounded-full "></div>
					</div>

					<div className="flex justify-end font-[manrope] font-[400] gap-x-[2.5rem] text-[1.5rem]">
						{items.map((item, index) => {
							return <NavItem name={item.name} link={item.link} key={index} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
