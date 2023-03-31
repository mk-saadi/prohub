import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./App.css";
import Card from "./component/card/Card";
import Header from "./component/header/Header";
import SideBar from "./component/sideBar/SideBar";

function App() {
	const [readTime, setReadTime] = useState("");

	const handleReadTime = (time) => {
		// console.log(handleReadTime);
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

	return (
		<div className="mx-5 App">
			<Header></Header>
			<div className="main row ">
				<div className="home-container col-md-8 col-sm-12">
					<Card handleReadTime={handleReadTime}></Card>
				</div>
				<div className="col-md-4">
					<SideBar readTime={readTime}></SideBar>
				</div>
			</div>
		</div>
	);
}

export default App;
