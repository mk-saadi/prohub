import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./App.css";
import Card from "./component/card/Card";
import Header from "./component/header/Header";
import SideBar from "./component/sideBar/SideBar";
import Blog from "./component/blog/Blog";
import Footer from "./footer/Footer";

function App() {
	const [readTime, setReadTime] = useState("");
	const [readCount, setCount] = useState("");

	const handleReadTime = (time) => {
		const previousReadTime = JSON.parse(localStorage.getItem("readTime"));

		if (previousReadTime) {
			const sum = previousReadTime + time;
			localStorage.setItem("readTime", sum);
			setReadTime(sum);
		} else {
			localStorage.setItem("readTime", time);
			setReadTime(time);
		}
	};

	const handleCount = (count) => {
		const previousCount = localStorage.getItem("readCount");
		if (previousCount) {
			const sum = previousCount + count;
			localStorage.setItem("readCount", sum);
			setCount(sum);
		} else {
			localStorage.setItem("readCount", count);
			setCount(count);
		}
	};

	// const handleCount = (count, blogTitle) => {
	// 	const previousCount = localStorage.getItem("readCount");
	// 	if (previousCount) {
	// 		const sum = previousCount + count;
	// 		localStorage.setItem("readCount", sum);
	// 		setCount(sum);
	// 		setBookmarkedBlogs((prevBlogs) => [...prevBlogs, blogTitle]);
	// 	} else {
	// 		localStorage.setItem("readCount", count);
	// 		setCount(count);
	// 		setBookmarkedBlogs([blogTitle]);
	// 	}
	// };

	return (
		<div className="mx-5 App">
			<Header></Header>
			<div className="main row ">
				<div className="home-container col-md-8 col-sm-12">
					<Card
						handleReadTime={handleReadTime}
						handleCount={handleCount}
					></Card>
				</div>
				<div className="col-md-4">
					<SideBar
						readTime={readTime}
						readCount={readCount}
					></SideBar>
				</div>
			</div>
			<br />
			<hr />
			<br />
			<Blog></Blog>
			<br />
			<br />
			<Footer></Footer>
		</div>
	);
}

export default App;
