import "./App.css";
import { Navigation } from "./components/Navigation";
import { Gallery } from "./screens/Gallery";
import { Home } from "./screens/Home";

function App() {
	return (
		<>
			<Navigation />
			<Home />
			<Gallery />
		</>
	);
}

export default App;
