import fs from 'fs-extra'; // "fs-extra" añade métodos adicionales a fs

const sourceDir = './src/web/views'; // Directorio de origen de tus archivos EJS
const destDir = './dist/web/views'; // Destino donde quieres que estén tus archivos EJS

// Asegurarte de que el directorio destino existe
fs.ensureDir(destDir, (err) => {
  if (err) {
    console.error('Error al crear directorio:', err);
    return;
  }

  console.log('Directorio creado con éxito.');

  // Copia todo desde el directorio de origen al destino, creando el destino si no existe
  fs.cp(sourceDir, destDir, { recursive: true }, (err) => {
    if (err) {
      console.log(err);
      console.error('Error al copiar archivos EJS:', err);
    } else {
      console.log('Archivos EJS copiados con éxito.');
    }
  });
});
