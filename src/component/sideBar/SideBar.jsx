import React, { useEffect, useState } from "react";

const SideBar = ({ readTime }) => {
	const [read, setRead] = useState(readTime);

	useEffect(() => {
		const getReadTime = localStorage.getItem("readTime");
		setRead(getReadTime);
	}, [readTime]);

	return (
		<div className="position-sticky sticky-top">
			<div
				className="text-center mt-2 py-4 shadow rounded border-5 border-danger border-top text-wrap"
				style={{
					backgroundColor: "rgb(252, 153, 142)",
					color: "white",
				}}
			>
				<h3>
					Time spent on read:{" "}
					<span style={{ fontWeight: "700" }}>{read}</span>min.
				</h3>
			</div>
			<div>
				<h3>Bookmarked Blogs:</h3>
			</div>
		</div>
	);
};

export default SideBar;
