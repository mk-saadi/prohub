import React from "react";

const Header = () => {
	return (
		<div>
			<div className="d-flex justify-content-between mx-4 pb-3">
				<h1 style={{ fontWeight: "700" }}>ProNet</h1>
				<img
					style={{ height: "50px", borderRadius: "50%" }}
					src="https://cdn.myanimelist.net/r/360x360/images/characters/11/200451.jpg?s=b41d01c96af460bef7b835025da4b715"
					alt=""
				/>
			</div>
			<hr className="text-danger border border-2 border-danger rounded" />
			<br />
		</div>
	);
};

export default Header;
