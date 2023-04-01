import React, { useEffect, useState } from "react";

const SideBar = ({ readTime, readCount }) => {
	const [read, setRead] = useState(readTime);
	const [counts, setCount] = useState(readCount);

	useEffect(() => {
		const getReadTime = localStorage.getItem("readTime");
		setRead(getReadTime);
	}, [readTime]);

	useEffect(() => {
		const getCount = localStorage.getItem("readCount");
		setCount(getCount);
	}, [readCount]);

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
					<span
						style={{
							fontWeight: "700",
						}}
					>
						{read}
					</span>
					min.
				</h3>
			</div>
			<div className="bg-secondary text-white rounded p-3 mt-4 shadow border-top border-5 border-dark">
				<h3 className="text-center">Bookmarked Blogs: </h3>
				<div className="bg-secondary text-white rounded p-3 mt-4 shadow border-top border-5 border-dark">
					<h3 className="text-center">Bookmarked Blogs: </h3>
					<ul>
						{counts.map((c) => (
							<li>{c.count}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default SideBar;
