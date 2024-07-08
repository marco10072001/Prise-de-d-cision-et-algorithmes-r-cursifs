function estAnneeBissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Exemple d'utilisation
let annee = 2024;
if (estAnneeBissextile(annee)) {
    console.log(annee + " est une année bissextile.");
} else {
    console.log(annee + " n'est pas une année bissextile.");
}
