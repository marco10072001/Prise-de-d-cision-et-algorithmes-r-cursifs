function estPalindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');
    if (str.length <= 1) {
        return true;
    }
    if (str[0] === str[str.length - 1]) {
        return estPalindrome(str.slice(1, str.length - 1));
    } else {
        return false;
    }
}

// Exemple d'utilisation
let phrase = "Engage le jeu que je le gagne";
if (estPalindrome(phrase)) {
    console.log("'" + phrase + "' est un palindrome.");
} else {
    console.log("'" + phrase + "' n'est pas un palindrome.");
}
