import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.js";
import { Header } from "./header.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<Navbar />
				<div className="container">
					<Header />
					<div className="row">
						<div className="col-3">
							<Card />
						</div>
						<div className="col-3">
							<Card />
						</div>
						<div className="col-3">
							<Card />
						</div>
						<div className="col-3">
							<Card />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
