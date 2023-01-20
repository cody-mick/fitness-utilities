import CalorieCalculator from "./components/calorieCalculator/CalorieCalculator";
import Button from "./components/common/button/Button";
import Input from "./components/common/input/Input";
import "./styles/main.scss";

function App() {
	return (
		<div className="App">
			<p>Fitness Utilities</p>
			<CalorieCalculator />
		</div>
	);
}

export default App;
