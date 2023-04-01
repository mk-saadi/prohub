import React from "react";
import "./singleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleCard = (props) => {
	const { profile, readTime, name, title, poster, date, hash } = props.blog;

	const handleTitle = props.handleTitle;

	const handleReadTime = props.handleReadTime;

	return (
		<div className='p-3 rounded mb-5 shadow border-5 border-danger border-top'>
			<img
				style={{ height: "400px", width: "100%", objectFit: "cover" }}
				className='rounded img-fluid'
				src={poster}
				alt='blog poster'
			/>
			<div className='d-flex mt-3 mb-4 rounded shadow-sm'>
				<img
					className='pro-img img-fluid'
					src={profile}
					alt='author profile'
				/>
				<div>
					<p className='fw-bold'>{name}</p>
					<p className='text-secondary'>{date}</p>
				</div>
				<button
					onClick={() => handleTitle(props.blog.title)}
					className='ms-auto btn'
				>
					{readTime} min read <FontAwesomeIcon icon={faBookmark} />
				</button>
			</div>
			<h2
				style={{
					fontWeight: "700",
					textShadow: "rgb(150, 150, 150) 1.3px 2px 3px",
				}}
			>
				{title}
			</h2>
			<p
				className='text-secondary my-5'
				style={{ textDecoration: "underline", cursor: "pointer" }}
			>
				{hash}
			</p>
			<button onClick={() => handleReadTime(readTime)}>
				Mark As Read
			</button>
			<hr />
			<br />
		</div>
	);
};

export default SingleCard;
