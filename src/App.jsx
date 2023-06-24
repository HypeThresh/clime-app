import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { app } from './firebase/config';
import { getDatabase, onValue, ref } from 'firebase/database';
import './App.css';

function App() {
	const [data, setData] = useState(0);
	const [user, setUser] = useState({});
	const db = getDatabase(app);
	const [array, setArray] = useState([]);
	const [precipi, setStatus] = useState([]);
	const [humedad, setHumidity] = useState([]);

	useEffect(() => {
		onValue(ref(db, 'string/'), (snapshot) => {
			const result = snapshot.val();
			const resulArray = Object.values(result);
			setData(snapshot.val());
		});

		onValue(ref(db, 'object/'), (snapshot) => {
			const result = snapshot.val();
			setUser(result);
		});

		onValue(ref(db, 'array/'), (snapshot) => {
			const result = snapshot.val();
			setArray(result);
		});
		onValue(ref(db, 'precipitations/'), (snapshot) => {
			const result = snapshot.val();
			setStatus(result);
		});
		onValue(ref(db, 'humidity/'), (snapshot) => {
			const result = snapshot.val();
			setHumidity(result);
		});
	}, []);

	const changeIcon = (raining) => {
		if (raining) {
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					className="bi bi-cloud-rain-fill display-1"
					viewBox="0 0 16 16"
				>
					<path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z" />
				</svg>
			);
		} else {
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					className="bi bi-cloud-sun-fill display-1"
					viewBox="0 0 16 16"
				>
					<path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
					<path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
				</svg>
			);
		}
	};

	return (
		<div>
			<nav className="navbar navbar-dark bg-dark fixed-top navbar-font">
				<div className="container-fluid">
					<span className="navbar-brand mx-auto font-weight-bold navbar-text">
						Estacion del clima SV
					</span>
				</div>
			</nav>

			<div className="container mt-5">
				<div className="row">
					<div className="col-12 col-md-4">
						<div className="card border-primary" style={{ width: '18rem' }}>
							<div className="card-header">Temperatura</div>
							<div className="card-body text-primary">
								<h5 className="card-title display-1">{array[array.length - 1]}°</h5>
							</div>
							<div className="text-center mt-3">
								<button className="btn btn-dark" type="button">
									Visualizacion
								</button>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-4">
						<div className="card border-primary" style={{ width: '18rem' }}>
							<div className="card-header">Humedad del Aire</div>
							<div className="card-body text-primary">
								<h5 className="card-title display-1">{humedad[humedad.length - 1]}°</h5>
							</div>
							<div className="text-center mt-3">
								<button className="btn btn-dark" type="button">
									Visualizacion
								</button>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-4">
						<div className="card border-primary " style={{ width: '18rem' }}>
							<div className="card-header">Precipitación</div>
							<div className="card-body text-primary">
								<h5 className="card-title display-1">{precipi[precipi.length - 1]}%</h5>
							</div>
							<div className="text-center mt-3">
								<button className="btn btn-dark" type="button">
									Visualizacion
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className="footer bg-dark text-center text-white fixed-bottom">
				<div className="container py-3">
					<span className="text-muted">
						Desarrollado con <img src={reactLogo} alt="React" className="logo" /> y Vite{' '}
						<img src={viteLogo} alt="Vite" className="logo" /> - 2023
					</span>
				</div>
			</footer>
		</div>
	);
}

export default App;
