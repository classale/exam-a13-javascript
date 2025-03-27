function longueursMots(mots) {
	return mots.map(e => e.length);
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]