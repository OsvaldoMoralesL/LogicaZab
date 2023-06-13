function encontrarTipoAve(arr) {
    let conteo = []; 
    let maxOcurrencias = 0; 
    let tipoMasComun = arr[0]; 
    for (let i = 0; i < arr.length; i++) { 
      let tipoActual = arr[i]; 
  
      if (!conteo[tipoActual]) {
        conteo[tipoActual] = 0;
      }
      conteo[tipoActual]++; 
  
      if (conteo[tipoActual] > maxOcurrencias) {
       
        maxOcurrencias = conteo[tipoActual];
        tipoMasComun = tipoActual;
      } else if (conteo[tipoActual] === maxOcurrencias && tipoActual < tipoMasComun) {
        
        tipoMasComun = tipoActual;
      }
    }
  
    return "Tipo: " + tipoMasComun; 
  }

  let arr = [1, 4, 4, 2, 1, 1, 1]; 
  let resultado = encontrarTipoAve(arr); 
  console.log(resultado); 