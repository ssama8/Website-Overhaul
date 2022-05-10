import React from "react";

const NavSubmenu = ({ left, top, visible, title }) => {
	return (
		<>
			{visible && (
				<div
					className={" absolute border-10"}
					style={{
						height: "1000px",
						// background: "black",
						left: `${left}px`,
						top: `${top}px`,
					}}>
					<h3>{title}</h3>
					{/* {links.map((link, idx) => {
				const { text, destination } = link;
				return (
					<li key={idx}>
						<a href={destination}>{text}</a>
					</li>
				);
			})} */}
				</div>
			)}
		</>
	);
};

export default NavSubmenu;
