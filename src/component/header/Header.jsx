import React from "react";

const Header = () => {
	return (
		<div>
			<div className="d-flex justify-content-between mx-4 pb-3">
				<h1 style={{ fontWeight: "700" }}>
					Pro
					<span
						style={{ color: "rgb(50, 50, 50)" }}
						className="bg-danger text-white rounded px-2 ms-1"
					>
						hub
					</span>
					.net
				</h1>
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
