function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Exemple d'utilisation
let n = 6;
console.log("Le " + n + "ème nombre de Fibonacci est : " + fibonacci(n));
