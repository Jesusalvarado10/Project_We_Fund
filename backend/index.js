const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const { auth, database } = require('./firebase/firebase'); // Asegúrate de que la ruta a tu archivo de configuración de Firebase sea correcta


// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Obtener el puerto desde las variables de entorno o usar el puerto 3000 como valor predeterminado
const PORT = process.env.PORT ;

// Crear una instancia de la aplicación Express
const app = express();

// Configuración de la aplicación
app.disable('x-powered-by'); // Deshabilitar la cabecera X-Powered-By
app.use(cors()); // Habilitar CORS para permitir solicitudes desde cualquier origen
app.use(express.static(path.join(__dirname, "public"))); // Servir archivos estáticos desde la carpeta "public"
app.use(express.json()); // Analizar solicitudes con formato JSON
app.use(express.urlencoded({ extended: true })); // Analizar solicitudes con formato de formulario

// Ruta para el favicon.ico
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Ruta para la página de inicio
app.get('/', (req, res) => {
    console.log("entro")

}
);
app.post('/pagoMovilAgregar', async (req, res) => {
    console.log("entro")
    try {
        const data = req.body;
        
        const userRef = await database.collection('Pagos').add(data);
        console.log("entro")
        res.status(200).json({ message: 'Data received successfully' })
    } catch (error) {
        console.error('Error al agregar documento: ', error);
        res.status(500).send('Error al agregar documento');
    }
    

})
app.post('/pagoMovilConfirmar', async (req, res) => {
    console.log("entro")
    try {
        const data = req.body;
        const id= data.id;
        delete data.id;
        const userRef = await database.collection('Pagos').doc(id).update({validate: true});
        console.log("entro")
        res.status(200).json({ message: 'Data received successfully' })
    } catch (error) {
        console.error('Error al agregar documento: ', error);
        res.status(500).send('Error al agregar documento');
    }
    

})

app.get('/pagosSinConfirmacion', async (req, res) => {
    
    try {
        const usersRef = database.collection('Pagos');
        const snapshot = await usersRef.where('validate', '==', false).get();
        
        if (snapshot.empty) {
            res.status(404).send('No matching documents.');
            return;
        }

        const users = [];
        snapshot.forEach(doc => {
            users.push({ id: doc.id, ...doc.data() });
        });
        const data= {"PaywithoutCheck": users}
        console.log(data)

        res.status(200).json(data);
    } catch (error) {
        console.error('Error getting documents: ', error);
        res.status(500).send('Error getting documents');
    }


});  
app.post('/pagosComprobacion', async (req, res) => {


})

app.post('/registerUser', async (req, res) => {
    // console.log("entro")
    // console.log()
    // const array= req.body["Datos"];
    try {
       const array= req.body["Datos"]; 
       for (let x=0; x< array.length; x++) {
        const userRef = await database.collection('Dato').add(array[x]) 
        res.status(200).send(`Documento agregado con ID: ${userRef.id}`);
    }      


    } catch (error) {
        console.error('Error al agregar documento: ', error);
        res.status(500).send('Error al agregar documento');
    }
   
    // // addFirebaseAuth(req.body)
    // res.send("login")
}
);

// Middleware para manejar solicitudes no encontradas (404)
app.use((req, res, next) => {
    console.log("entro")
    console.log(`Request to ${req.url} returned 404`);
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
