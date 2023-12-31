import React from "react";

const Footer = () => {
	return (
		<div
			className='bg-dark text-white py-2'
			style={{ fontFamily: "jetBrains mono" }}
		>
			<div className='d-flex m-3 mb-4 align-items-center justify-content-center'>
				<button className='shadow mx-4'>Home</button>
				<button className='shadow mx-4'>Blog</button>
				<button className='shadow mx-4'>About</button>
				<button className='shadow mx-4'>Contact</button>
			</div>
			<div
				className='text-secondary text-center p-2 shadow mb-5'
				style={{ backgroundColor: "#000" }}
			>
				<h4>
					Design by - <span className='text-info'>MK SAADI</span>
				</h4>
			</div>
			<hr />
			<h5 className='text-center'>All rights reserved</h5>
		</div>
	);
};

export default Footer;
