import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { VanPage } from "./pages/VanPage";
import "../server";
import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<header className="menu-container">
					<Link className="site-logo" to="/">
						#VANLIFE
					</Link>
					<nav className="nav-menu">
						<Link className="menu-item" to="about">
							About
						</Link>
						<Link className="menu-item" to="van">
							Van
						</Link>
					</nav>
				</header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/van" element={<VanPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
