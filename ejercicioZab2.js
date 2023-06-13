function pagesTurn(n, p) {
    if (n <= 0 || p <= 1 || p > n) {
    return;
    }

    let pageTurns = 0;
    if (p <= (n + 1) / 2) {
    if (p % 2 === 0) {
        pageTurns = p / 2;
    } else {
        pageTurns = (p - 1) / 2;
    }
    } else {
    if (n % 2 === 0) {
        pageTurns = (n - p + 1) / 2;
    } else {
        pageTurns = (n - p) / 2;
    }
    }
    console.log(pageTurns);
}

pagesTurn(6, 2);