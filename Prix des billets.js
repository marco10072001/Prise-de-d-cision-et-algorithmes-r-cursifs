function calculerPrixBillet(age) {
    let prix;

    if (age <= 12) {
        prix = 10;
    } else if (age >= 13 && age <= 17) {
        prix = 15;
    } else {
        prix = 20;
    }

    return prix;
}

// Exemple d'utilisation
let ageUtilisateur = 15;
let prixBillet = calculerPrixBillet(ageUtilisateur);
console.log("Le prix du billet pour un utilisateur de " + ageUtilisateur + " ans est de " + prixBillet + " $.");
