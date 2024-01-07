import { useEffect } from 'react';
import './App.css';
import { Figure } from './components/Figure/Figure';
import { Word } from './components/Word/Word';
import { Wrong } from './components/Wrong/Wrong';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';
import { useFetchName } from './hooks/useFetchName';

function App() {
	const dispatch = useDispatch<AppDispatch>();
	useFetchName();

	return (
		<>
			<h1>Виселица</h1>
			<p>Отгадайте имя - введите букву</p>
			<div className="game-container">
				<Figure />
				<Wrong />
				<Word />
			</div>
		</>
	);
}

export default App;
