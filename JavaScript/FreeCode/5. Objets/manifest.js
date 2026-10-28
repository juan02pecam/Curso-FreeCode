function normalizeUnits(manifest) {
  let peso; 
  // 1. Averiguar el nuevo peso:
  if(manifest.unit === "lb"){
    //    - Si la unidad es "lb", calculo el peso multiplicado por 0.45
    peso= manifest.weight*0.45;
  }else{
    //    - Si no, dejo el mismo peso que ya tenía
    peso=manifest.weight;
  }
  
  // 2. Devolver un nuevo objeto con:
  return{
    //    - Las propiedades originales
    ...manifest,
    //    - El nuevo peso calculado
    weight: peso,
    //    - La unidad fijada siempre en "kg" 
    unit:"kg"
  } 
}

function validateManifest(manifest) {

  const errors={};

  if (manifest.destination === undefined) {
    errors.destination="Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === ""){
    errors.destination="Invalid";
  }
  return errors

  if(manifest.weight === undefined){
    errors.weight="Missing";
  }else if(manifest.weight <= 0 || Number.isNaN(manifest.weight) || typeof manifest.weight !== "number"){
    errors.weight="Invalid";
  }
  return errors
}




/**¡
 * 
 * typeof manifest.weight !== number
 * 
 * 
 * 
 * // --- CASO 1: Conversión de 'lb' a 'kg' ---
const envioEnLibras = { id: 1, weight: 100, unit: "lb" };
const resultado1 = normalizeUnits(envioEnLibras);

console.log("Caso 1 (debe ser weight: 45, unit: 'kg'):");
console.log(resultado1);


// --- CASO 2: Mantener si ya es 'kg' ---
const envioEnKilos = { id: 2, weight: 50, unit: "kg" };
const resultado2 = normalizeUnits(envioEnKilos);

console.log("Caso 2 (debe ser weight: 50, unit: 'kg'):");
console.log(resultado2);


// --- CASO 3: Verificar que el objeto original NO cambió ---
console.log("Caso 3 (Inmutabilidad - el original debe seguir con unit: 'lb' y weight: 100):");
console.log(envioEnLibras);

// Comprobación de referencia en memoria (debe dar true):
console.log("¿Son objetos distintos en memoria?:", resultado1 !== envioEnLibras);**/