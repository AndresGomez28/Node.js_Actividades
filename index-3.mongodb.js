// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test');

// Create a new document in the collection.
db.getCollection('users').insertOne({

});


db.users.insertMany([
    {
        nombre: "Juan",
        apellido: "González",
        correo: "juan.gonzalez@example.com",
        ciudad: "Bogotá",
        pais: "Colombia",
        salario: 2500,
        edad: 35,
        altura: 175,
        peso: 140
    },
    {
        nombre: "María",
        apellido: "López",
        correo: "maria.lopez@example.com",
        ciudad: "Madrid",
        pais: "España",
        salario: 3000,
        edad: 28,
        altura: 165,
        peso: 120
    },
    {
        nombre: "John",
        apellido: "Smith",
        correo: "john.smith@example.com",
        ciudad: "New York",
        pais: "Estados Unidos",
        salario: 4000,
        edad: 45,
        altura: 180,
        peso: 170
    },
    {
        nombre: "Sophie",
        apellido: "Dubois",
        correo: "sophie.dubois@example.com",
        ciudad: "Paris",
        pais: "Francia",
        salario: 3500,
        edad: 32,
        altura: 170,
        peso: 126
    },
    {
        nombre: "Luis",
        apellido: "Martinez",
        correo: "luis.martinez@example.com",
        ciudad: "Mexico City",
        pais: "México",
        salario: 2800,
        edad: 40,
        altura: 172,
        peso: 140
    },
    {
        nombre: "Emily",
        apellido: "Johnson",
        correo: "emily.johnson@example.com",
        ciudad: "London",
        pais: "Reino Unido",
        salario: 3800,
        edad: 33,
        altura: 168,
        peso: 130
    },
    {
        nombre: "Pedro",
        apellido: "Fernández",
        correo: "pedro.fernandez@example.com",
        ciudad: "Santiago",
        pais: "Chile",
        salario: 3200,
        edad: 37,
        altura: 178,
        peso: 160
    },
    {
        nombre: "Anna",
        apellido: "Kovalenko",
        correo: "anna.kovalenko@example.com",
        ciudad: "Moscow",
        pais: "Rusia",
        salario: 2800,
        edad: 29,
        altura: 170,
        peso: 136
    },
    {
        nombre: "Ahmed",
        apellido: "Mohammed",
        correo: "ahmed.mohammed@example.com",
        ciudad: "Cairo",
        pais: "Egipto",
        salario: 3200,
        edad: 42,
        altura: 175,
        peso: 156
    },
    {
        nombre: "Yuki",
        apellido: "Tanaka",
        correo: "yuki.tanaka@example.com",
        ciudad: "Tokyo",
        pais: "Japón",
        salario: 3700,
        edad: 31,
        altura: 163,
        peso: 110
    }
]);


//1 Obtener todos los usuarios que sean mayores de 18 años.
db.users.find({ edad: { $gt: 18 } })

//2 Obtener todos los usuarios que sean de Londres o de París.
db.users.find({ ciudad: { $in: ["London", "Paris"] } })

//3 Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
db.users.find({ salario: { $gt: 2000 }, edad: { $lt: 30 } })

//4 Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
db.users.find({ pais: "España", salario: { $gt: 3000 } })

//5 Obtener todos los usuarios que tengan entre 25 y 35 años.
db.users.find({ edad: { $gte: 25, $lte: 35 } })

//6 Obtener a todos los usuarios que no sean de Estados Unidos.
db.users.find({ pais: { $ne: "Estados Unidos" } })

//7 Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
db.users.find({ ciudad: "London", $or: [{ salario: { $gt: 2500 } }, { edad: { $gt: 30 } }] })

//8 Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
db.users.find({ pais: "Australia", peso: { $gt: 140 } })

//9 Obtener a todos los usuarios que no sean de Londres ni de París.
db.users.find({ ciudad: { $nin: ["London", "Paris"] } })

//10 Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
db.users.find({ $or: [{ salario: { $lt: 2000 } }, { edad: { $gt: 40 } }] })

//11 Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
db.users.find({ pais: "Canadá", $or: [{ salario: { $gt: 4000 } }, { altura: { $gt: 180 } }] })

//12 Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
db.users.find({ pais: "Italia", edad: { $gte: 20, $lte: 30 } })

//13 Obtener todos los usuarios que no tengan un correo electrónico registrado.
db.users.find({ correo: { $exists: false } })

//14 Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.users.find({ pais: "Francia", salario: { $gte: 3000, $lte: 5000 } })

//15 Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
db.users.find({ pais: "Brasil", $or: [{ peso: { $lt: 120 } }, { peso: { $gt: 140 } }] })

//16 Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
db.users.find({ pais: { $in: ["Argentina", "Chile"] }, edad: { $lt: 25 } })

//17 Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
db.users.find({ pais: { $nin: ["España", "México"] }, salario: { $lt: 3000 } })

//18 Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
db.users.find({ pais: "Alemania", $or: [{ salario: { $lt: 4000 } }, { edad: { $gt: 35 } }] })

//19 Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
db.users.find({ pais: { $ne: "Colombia" }, altura: { $lt: 170 } })

//20 Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
db.users.find({ pais: "India", salario: { $exists: false } })
