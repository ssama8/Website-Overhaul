import React, { useState } from "react";
const Dropdown = ({ list, toggleVisibility, index }) => {
	const { visible, setVisible } = useState(false);
	const { name, links } = list;
	const show = (e) => {
		e.target.classList.add("active-li");
		const ul = e.target.childNodes[1];
		if (!ul) return;
		ul.className = "visible";
	};
	const hide = (e) => {
		e.target.classList.remove("active-li");
		const ul = e.target.childNodes[1];
		if (!ul) return;

		ul.className = "invisible";
	};
	return (
		<li
			// onMouseOver={show}
			// onMouseLeave={hide}
			className='text-center cursor-pointer nested-parent relative'>
			{name}
		</li>
	);
};

export default Dropdown;
