import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const Card = ({ handleReadTime, handleTitle }) => {
	const [blogs, setBlog] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setBlog(data));
	}, []);

	return (
		<div className='m-2'>
			{blogs.map((blog) => (
				<SingleCard
					blog={blog}
					key={blog.id}
					handleReadTime={handleReadTime}
					handleTitle={handleTitle}
				></SingleCard>
			))}
		</div>
	);
};

export default Card;
