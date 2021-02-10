import './App.css';
import Searchform from './components/Searchform'
import Buttons from './components/Buttons'
import Stories from './components/Stories';
import ScrollUpButton from "react-scroll-up-button";

function App() {
	return (
		<>
			<Searchform />
			<Buttons />
			<Stories />
			<ScrollUpButton />
		</>
	);
}

export default App;
