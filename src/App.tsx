import './App.css';

function App() {
	return (
		<>
			<h1>Виселица</h1>
			<p>Отгадайте имя - введите букву</p>
			<div className="game-container">
				<svg height="250" width="200" className="figure-container">
					<line x1="60" y1="20" x2="140" y2="20"></line>
					<line x1="140" y1="20" x2="140" y2="50"></line>
					<line x1="60" y1="20" x2="60" y2="230"></line>
					<line x1="20" y1="230" x2="100" y2="230"></line>
					<circle cx="140" cy="70" r="20"></circle>
					<line x1="140" y1="90" x2="140" y2="150"></line>
					<line x1="140" y1="120" x2="120" y2="100"></line>
					<line x1="140" y1="120" x2="160" y2="100"></line>
					<line x1="140" y1="150" x2="120" y2="180"></line>
					<line x1="140" y1="150" x2="160" y2="180"></line>
				</svg>
				<div className="wrong-letters-container">
					<div className="wrong-letters">
						<p>Ошибки</p>
						<span>о, </span>
						<span>д, </span>
						<span>ь, </span>
						<span>э, </span>
						<span>ю, </span>
						<span>ф</span>
					</div>
				</div>
				<div className="word">
					<span className="letter"></span>
					<span className="letter"></span>
					<span className="letter"></span>
					<span className="letter"></span>
					<span className="letter"></span>
					<span className="letter"></span>
					<span className="letter"></span>
					<span className="letter"></span>
					<span className="letter"></span>
				</div>
			</div>
		</>
	);
}

export default App;
