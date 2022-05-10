import React, { useState, useRef } from "react";
import DropdownList from "./DropdownData";
import Dropdown from "./Dropdown";
import NavSubmenu from "./NavSubmenu";

const Navbar = () => {
	// const [dropdownVisibility, setDropdownVisibilty] = useState(
	// 	Array.from({ length: DropdownList.length }, () => false)
	// );
	// const toggleDropdownVisibility = (id) => {
	// 	const newVisibility = [...dropdownVisibility];
	// 	newVisibility[id] = !newVisibility[id];
	// 	console.log(newVisibility);
	// 	setDropdownVisibilty(newVisibility);
	// };
	// console.log(dropdownVisibility);
	const [dimensions, setDimensions] = useState({
		visible: false,
		left: 0,
		top: 0,
		title: "Heading",
		links: [1, 2, 3, 4, 5],
	});
	const handleHover = (e) => {
		const values = e.target.getBoundingClientRect();
		setDimensions({
			...dimensions,
			title: e.target.textContent,
			visible: true,
			left: values.x,
			top: values.y + 25,
		});
	};
	const hideSubMenu = () => {
		setDimensions({ ...dimensions, visible: false });
	};
	return (
		<nav>
			<section className='container mx-auto flex items-center justify-center text-center'>
				<img
					src='https://www.templecitychamber.com/sites/all/themes/tc/logo.png'
					className='mx-4'
					alt='Home'></img>
				<ul
					className={` grid grid-cols-${DropdownList.length} justify-center  `}>
					{DropdownList.map((list, idx) => {
						// const visible = dropdownVisibility[idx];
						return (
							<li
								key={idx}
								className='px-0 border-2 '
								onMouseOver={handleHover}
								onMouseLeave={hideSubMenu}>
								{" "}
								{list.name}
							</li>
						);
					})}
				</ul>
				<NavSubmenu {...dimensions} />
			</section>
		</nav>
	);
};

export default Navbar;
