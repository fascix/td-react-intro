import { useEffect, useState } from "react";
import "./App.css";
import SuperHeros from "./SuperHeros.json";

function App() {
	const nom = "Lucas";
	// eslint-disable-next-line prefer-const
	let [compteur, setCompteur] = useState(0);
	const [recherche, setRecherche] = useState("");

	useEffect(() => {
		document.title = `Compteur : ${compteur} ! `;
		console.log(document.title);
	}, [compteur]);

	const nombreSuperHeros = SuperHeros.length;

	const filteredHeroes = SuperHeros.filter((hero) =>
		hero.name.toLowerCase().includes(recherche.toLowerCase())
	);

	return (
		<>
			<p>Bonjour {nom}, je découvre React !</p>
			<p>Compteur : {compteur}.</p>
			<button onClick={() => setCompteur(compteur + 1)}>+</button>
			<button onClick={() => setCompteur((compteur = 0))}>Réinitialiser</button>
			<br></br>
			<p>Il y a {nombreSuperHeros} super-héros dans la base.</p>
			<input
				type="text"
				placeholder="Un nom de superhéros à rechercher ?"
				value={recherche}
				onChange={(e) => setRecherche(e.target.value)}
			></input>
			<br></br>
			<p>Voici leur(s) nom(s) :</p>
			<ul className="SH">
				{filteredHeroes.map((hero) => (
					<li key={hero.id}>{hero.name}</li>
				))}
			</ul>
		</>
	);
}

export default App;
