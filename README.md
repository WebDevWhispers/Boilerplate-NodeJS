# Boilerplate NodeJS 🚀

Este repositorio es tu punto de partida ideal para proyectos de Node.js. Está equipado con herramientas modernas para optimizar y mejorar tu experiencia de desarrollo.

## 🌟 Características

- **Express ⚡:** Un framework minimalista y flexible para Node.js, facilitando la creación de aplicaciones web y APIs.
- **JOI 📏:** Un poderoso validador de datos para JavaScript, utilizado para asegurar que los datos que ingresan a tu aplicación son válidos.
- **EJS 🖼️:** Un motor de plantillas sencillo y efectivo que te permite generar HTML con JavaScript.

## 🚀 Configuración inicial

1. **Crea tu repositorio 🛠️**:

   En vez de clonar este repositorio directamente, haz clic en el botón "Use this template" (Usar esta plantilla) en la página principal del repositorio para crear un nuevo repositorio basado en esta plantilla.

2. **Express ⚡**:

   Express ya está listo para usarse. Puedes comenzar editando el archivo `server.ts` en la raíz del proyecto para crear tu API.

3. **JOI 📏:**

   JOI está instalado y listo para ser utilizado para la validación de datos. Puedes importarlo en tus archivos con `import Joi from 'joi';` y comenzar a definir tus esquemas de validación.

4. **EJS 🖼️:**

   EJS está configurado como motor de plantillas. Puedes crear tus vistas en la carpeta views y renderizarlas en tus rutas con `res.render('nombre_de_la_vista');`.

## 🔧 Herramientas adicionales

### EditorConfig

El plugin EditorConfig para VSCode asegura que todos los desarrolladores del proyecto sigan un estilo de codificación consistente. La configuración se define en el archivo `.editorconfig` en la raíz del proyecto.

1. **Instalación**:
   - Instala el plugin EditorConfig en VSCode.
   - EditorConfig aplicará automáticamente las reglas definidas en el archivo `.editorconfig` al abrir el proyecto en VSCode.

### Prettier

Prettier es una herramienta de formateo de código que garantiza un estilo de código consistente en todo el proyecto. El plugin Prettier para VSCode ayuda a aplicar estas reglas automáticamente.

1. **Instalación**:
   - Instala el plugin Prettier en VSCode.
   - Asegúrate de que Prettier esté configurado como el formateador por defecto en VSCode (`"editor.defaultFormatter": "esbenp.prettier-vscode"` en la configuración de usuario o de espacio de trabajo).

2. **Uso**:
   - Prettier formateará tu código automáticamente al guardar los archivos si tienes habilitada la opción `"editor.formatOnSave": true` en la configuración de VSCode.

### ESLint

ESLint es una herramienta de análisis de código estático que identifica y reporta patrones encontrados en el código, ayudando a mantener un código de calidad y libre de errores.

### Nodemon y ts-node

Nodemon es una herramienta que reinicia automáticamente tu aplicación Node.js cuando detecta cambios en el directorio. ts-node permite ejecutar archivos TypeScript directamente sin compilarlos manualmente.

## 📜 Comandos npm

Aquí están los comandos npm configurados y su explicación:

1. **`npm run dev`**:
   - Inicia el servidor en modo desarrollo utilizando `nodemon` y `ts-node`. Esto permite que el servidor se reinicie automáticamente cuando se detectan cambios en los archivos del proyecto.
   - Comando: `nodemon --exec ts-node --esm src/server.ts`
   - El flag `--esm` le indica a `ts-node` que ejecute el archivo TypeScript en modo ES Modules. Esto es útil cuando se está utilizando la sintaxis de módulos de ECMAScript (import/export) en lugar de la sintaxis de CommonJS (require/module.exports). Permite que `ts-node` trate los archivos TypeScript como módulos ES, lo cual es necesario si se usan importaciones y exportaciones modernas en tu código.

2. **`npm run build`**:
   - Compila los archivos TypeScript a JavaScript usando `tsc` y luego ejecuta un script adicional (`copyEjs.js`) para copiar los archivos necesarios de la carpeta web/views, ya que estos archivos no son .ts y no se compilan.
   - Comando: `tsc && node copyEjs.js`

3. **`npm run lint`**:
   - Analiza el código en el directorio `src` usando ESLint para detectar y reportar problemas de estilo y errores.
   - Comando: `eslint src`

4. **`npm run lint:fix`**:
   - Ejecuta ESLint en el directorio `src` y automáticamente corrige los problemas que pueden ser solucionados.
   - Comando: `eslint src --fix`

5. **`npm run format`**:
   - Formatea el código en el directorio `src` usando Prettier, asegurando un estilo de código consistente.
   - Comando: `prettier --write src`

## 📢 Reglas de Git

Para mantener un flujo de trabajo limpio:

1. **Nunca hagas push directamente a la rama `main`**. Esta rama debería tener restricciones de push ya que cualquier cambio directo puede causar conflictos y complicaciones.

2. **Crea siempre una rama aparte** para tus cambios y características. Asegúrate de que sus nombres sean descriptivos y sigan las convenciones establecidas.

3. **Realiza Pull Requests (PRs) para integrar tus cambios**. Una vez que tu rama esté lista y hayas realizado tus commits, crea una Pull Request en GitHub.
