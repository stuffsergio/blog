# PROBLEMAS QUE ME HE ENCONTRADO A LA HORA DE INICIAR

    - Falla la conexión: hay que comprobar las variables de entorno (.env)
    - Falla la conexión: hay que comprobar que se importe la librería de dotenv, usando al principio el `import 'dotenv/config'`
    - Falla siempre a consulta: con Error:  TypeError: Cannot destructure property 'title' of 'req.body' as it is undefined.
        - Es necesario poner en src/app.js: app.use(express.json())
