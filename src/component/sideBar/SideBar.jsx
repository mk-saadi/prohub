import React, { useEffect, useState } from "react";

const SideBar = ({ readTime, titles }) => {
	const [read, setRead] = useState(readTime);

	useEffect(() => {
		const getReadTime = localStorage.getItem("readTime");
		setRead(getReadTime);
	}, [readTime]);

	return (
		<div className='position-sticky sticky-top'>
			<div
				className='text-center mt-2 py-4 shadow rounded border-5 border-danger border-top text-wrap'
				style={{
					backgroundColor: "rgb(252, 153, 142)",
					color: "white",
				}}
			>
				<h4>
					Time spent on read:{" "}
					<span
						style={{
							fontWeight: "700",
						}}
					>
						{read}
					</span>
					min.
				</h4>
			</div>
			<div className='bg-secondary text-white rounded p-3 mt-4 shadow border-top border-5 border-dark'>
				<h3 className='text-center'>Bookmarked Blogs: </h3>
				<div className='bg-dark text-white rounded p-3 mt-4 shadow'>
					<h4>show titles here</h4>
					<ul>
						{titles.map((title, index) => (
							<li key={index}>{title}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default SideBar;
