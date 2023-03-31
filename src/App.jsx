import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./App.css";
import Card from "./component/card/Card";
import Header from "./component/header/Header";
import SideBar from "./component/sideBar/SideBar";

function App() {
	return (
		<div className="mx-5 App">
			<Header></Header>
			<div className="main row ">
				<div className="home-container col-md-8 ">
					<Card></Card>
				</div>
				<div className="col-md-4">
					<SideBar></SideBar>
				</div>
			</div>
		</div>
	);
}

export default App;
