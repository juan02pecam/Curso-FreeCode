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
  }else if(typeof manifest.weight !== "number" || manifest.weight <= 0 || Number.isNaN(manifest.weight)){
    errors.weight="Invalid";
  }
  return errors

  if(manifest.containerId === undefined){
    errors.containerId="Missing";
  }else if(!Number.isInteger(manifest.containerId) || manifest.containerId <= 0){
    errors.containerId="Invalid"
  }
  return errors

  if(manifest.unit === underfined){
    error.unit="Missing";
  }else if (String.unit("Kg","Lb")){

  }

  
}


