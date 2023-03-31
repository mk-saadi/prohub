import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const Card = ({ handleReadTime }) => {
	const [blogs, setBlog] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setBlog(data));
	}, []);

	return (
		<div className="m-2">
			{blogs.map((blog) => (
				<SingleCard
					key={blog.id}
					profile={blog.profile}
					hash={blog.hash}
					readTime={blog.readTime}
					poster={blog.poster}
					name={blog.name}
					title={blog.title}
					date={blog.date}
					handleReadTime={handleReadTime}
				></SingleCard>
			))}
		</div>
	);
};

export default Card;
