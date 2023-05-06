import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<>
			<div className="home-container">
				<h1>You got the travel plans, we got the travel vans</h1>
				<p>
					Add adventure to your life by joinning the #vanlife momement and make
					your perfect road to trip.
				</p>
				<Link to="van">Find you Van</Link>
			</div>
		</>
	);
};
