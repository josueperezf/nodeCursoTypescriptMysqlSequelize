## nodeCursoTypescriptMysqlSequelize

Este proyecto es realizado con typescript, no tiene validaciones pero las puedo obtener de los otros proyectos de node, 
se utilizo *Sequelize* que es equivalente a mongose para mongodb, Sequelize permite utilizar bases de datos relaciones


## Configuracion para crear un proyecto de nodejs con typescript

Para crear un proyecto de nodejs con typescript, se debe realizar:

1. se debe tener instalado typescript tsc --version, sino esta instalado, estando como administrador, se hace con *npm i -g typescript* tsc --version para ver la version instalada

2. debemos inicializar el proyecto de node, *npm init -y* creara el package.json

3. debemos crear el archivo de configuracion de typescript: *tsc --init*

        debemos modificar en el archivo *tsconfig.json* lo siguiente:
        - cambiar *target* de es6 por: es6
        - descomentar outDir, y colocarle de valor: "./dist" esa sera la carpeta donde guardara lo que creemos
        - descomentar "moduleResolution": "node",
        - descomentar "sourceMap": true,
        - debe estar descomentado "esModuleInterop": true,

4. debemos instalar *npm install tslint --save-dev* , *npm install typescript --save-dev* , *npm i express cors dotenv* , *npm i  @types/express --save-dev*, y *npm i  @types/cors --save-dev*

5. debemos ejecutar en la consola *.\node_modules\.bin\tslint --init* para inicializar mi tslint

6. debemos abrir el arhivo tslint.json y agregarle en los rules "no-console":false   para que no agregue errores cuando usemos la consola

7. debemos tener instalado nodemon para mejorar el desarrollo, y en la raiz de nuestro proyecto crear app.ts. NO DEBEMOS CREAR NADA EN LA CARPETA DIST, ESTA LA CREA TYPESCRIPT

8. para correr el proyecto podemos ejecutar node dist/app.js, o nodemon dist/app.js, esta ultima es preferible en desarrollo

9. es de recordar que cada archivo que creemos debe ser .ts

10. *nota* para correr el proyecto se debe tener dos terminales abiertas, ejecutando *tsc -w*  para cada cambio que hagamos en nuestro archivo .ts, actualice a su equivalente en .js. asi mismo debemos tener en otra terminal corriendo: nodemon dist/app.js

11. debemos crear el archivo .env para nuestras variables de entorno, para ello en el archivo app.ts debemos colocar import dotenv  from 'dotenv'; dotenv.config();


## plugins basicos

1. *npm install --save sequelize* es similar a mongose, solo que sirve para manejar base de datos relacionales como mysql, postgres, entre otros.

2. *npm install --save mysql2* para instalar mysql asociado a sequelize

## sequelize

para este proyeto se uso la version 6 <https://sequelize.org/master/manual/getting-started.html>


## tips de table plus

1. para guardar o hacer un commit se hace mediante control s

2. para crear un contraint seleccionamos la tabla, en la seccion de abajo seleccionamos indice, le colocamos el nombre, y escribimos el nombre de la columna