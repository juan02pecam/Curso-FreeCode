 function doGet(e) {


  var x = HtmlService.createTemplateFromFile("Index");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
}


function title(){ 
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var a1= sheet.getRange(2,2).getValue();
  return a1;
}


function question(){
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var a1= sheet.getRange(2,10).getValue();
  return a1;
}

function answer(name, document, plantyprocess) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const startRow = 2; // Empezar desde fila 2
  
  const columnName = 4;     // Columna D
  const columnDocument = 6; // Columna F
  const columnPlant = 8;    // Columna H

  let row = startRow;

  // Buscar la primera fila vacía en la columna del nombre
  while (sheet.getRange(row, columnName).getValue() !== "") {
    row++;
  }

  while (sheet.getRange(row, columnDocument).getValue() !== "") {
    row++;
  }

  while (sheet.getRange(row, columnPlant).getValue() !== "") {
    row++;
  }

  // Escribir todos los valores en la misma fila
  sheet.getRange(row, columnName).setValue(name);
  sheet.getRange(row, columnDocument).setValue(document);
  sheet.getRange(row, columnPlant).setValue(plantyprocess);
}



function saveFile(e, nombre) {
    let blob = Utilities.newBlob(e.bytes, e.mimeType, e.filename);
  var sheet = SpreadsheetApp.getActiveSpreadsheet(); // Obtener la hoja de cálculo activa
  var sheetFile = DriveApp.getFileById(sheet.getId()); // Obtener el archivo de la hoja de cálculo
  var folder = sheetFile.getParents().next(); // Obtener la carpeta donde está el Google Sheet


    // Crear el archivo en la subcarpeta
    let file = folder.createFile(blob);
    let fileName = file.getName();
    let fileUrl = file.getUrl();
   
    return [fileName, fileUrl];
}



