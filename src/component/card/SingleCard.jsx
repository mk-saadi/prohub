import React from "react";
import "./singleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleCard = (props) => {
	const { profile, read, name, title, poster, date, hash } = props.blog;
	return (
		<div className="p-3 rounded mb-5 shadow">
			<img
				style={{ height: "400px", width: "100%", objectFit: "cover" }}
				className="w-100 rounded img-fluid"
				src={poster}
				alt="blog poster"
			/>
			<div className="d-flex mt-3 mb-4 rounded shadow-sm">
				<img
					className="pro-img img-fluid"
					src={profile}
					alt="author profile"
				/>
				<div>
					<p>{name}</p>
					<p className="text-secondary">{date}</p>
				</div>
				<button className="ms-auto btn">
					{read} min read <FontAwesomeIcon icon={faBookmark} />
				</button>
			</div>
			<h2
				style={{
					fontWeight: "700",
				}}
			>
				{title}
			</h2>
			<p
				className="text-secondary my-5"
				style={{ textDecoration: "underline", cursor: "pointer" }}
			>
				{hash}
			</p>
			<button>Mark As Read</button>
			<hr />
			<br />
		</div>
	);
};

export default SingleCard;
