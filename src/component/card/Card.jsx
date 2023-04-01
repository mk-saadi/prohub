import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const Card = ({ handleReadTime, handleCount }) => {
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
					readCount={blog.readCount}
					date={blog.date}
					handleReadTime={handleReadTime}
					handleCount={handleCount}
				></SingleCard>
			))}
		</div>
	);
};

export default Card;
