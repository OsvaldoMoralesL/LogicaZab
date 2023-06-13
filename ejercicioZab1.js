

function ejercicioZab (n) { 
    if (n <= 0 || n > 100){
    console.log("El numero debe ser mayor a 0 y menor o igual a 100");
    return;
}

    for(let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <= n; j++) {
            if (j <= n - i) {
                row += " ";
            } else {
                row += "*";
            }
        }
        console.log(row);

    }
}
 
ejercicioZab(10)