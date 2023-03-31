import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const Card = () => {
	const [blogs, setBlog] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setBlog(data));
	}, []);

	return (
		<div className=" m-2">
			{blogs.map((blog) => (
				<SingleCard
					key={blog.id}
					blog={blog}
				></SingleCard>
			))}
		</div>
	);
};

export default Card;
