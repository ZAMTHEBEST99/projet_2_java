function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}

function compterCaracteres(chaine) {
    return chaine.length;
}

function majusculePremiereLettre(phrase) {
    return phrase
        .split(' ')
        .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
        .join(' ');
}

function trouverMinEtMax(tableau) {
    return {
        min: Math.min(...tableau),
        max: Math.max(...tableau)
    };
}

function sommeTableauBoucle(tableau) {
    let somme = 0;
    for (const nombre of tableau) {
        somme += nombre;
    }
    return somme;
}

function filtrerManuellement(tableau, condition) {
    const resultat = [];
    for (const element of tableau) {
        if (condition(element)) {
            resultat.push(element);
        }
    }
    return resultat;
}

function factorielle(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
        throw new Error("L'entrée doit être un entier positif");
    }
    
    let resultat = 1n; // Utilisation de BigInt
    for (let i = 2n; i <= BigInt(n); i++) {
        resultat *= i;
    }
    return n < 20 ? Number(resultat) : resultat.toString();
}

function estPremier(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    // Vérification jusqu'à √n avec pas de 6k ± 1
    for (let i = 5, w = 2; i * i <= n; i += w, w = 6 - w) {
        if (n % i === 0) return false;
    }
    return true;
}

function fibonacci(nbTermes, utiliserBigInt = false) {
    if (!Number.isInteger(nbTermes) || nbTermes < 0) {
        throw new Error("Le nombre de termes doit être un entier positif");
    }

    const suite = [];
    let [a, b] = utiliserBigInt ? [0n, 1n] : [0, 1];
    
    for (let i = 0; i < nbTermes; i++) {
        suite.push(utiliserBigInt ? a.toString() : Number(a));
        [a, b] = [b, a + b];
    }
    
    return suite;
}