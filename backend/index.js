const { addFirebaseAuth } = require('./firebase/firebase_auth');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const fetch = require('node-fetch');
const { Telegraf } = require('telegraf');

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PORT = 8888 } = process.env;
const base = "https://api-m.sandbox.paypal.com";
const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/favicon.ico', (req, res) => res.status(204));



app.post("/home", (req, res) => {
  console.log("Received request to /home del post");
  console.log(req.body);
  let n = addFirebaseAuth(req.body.name, req.body.email);
  if (n) {
    res.send("Form submission received!");
  } else {
    res.send("Error in form submission");
  }
});

app.post("/api/orders", async (req, res) => {
    try {
    console.log("Received request to /api");
      const { cart } = req.body;
      const { jsonResponse, httpStatusCode } = await createOrder(cart);
      res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
      console.error("Failed to create order:", error);
      res.status(500).json({ error: "Failed to create order." });
    }
  });
  
  /**
   * Capture payment for the created order to complete the transaction.
   */
  const captureOrder = async (orderID) => {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders/${orderID}/capture`;
  
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    return handleResponse(response);
  };
  
  // CaptureOrder route
  app.post("/api/orders/:orderID/capture", async (req, res) => {
    try {
      const { orderID } = req.params;
      const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
      res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
      console.error("Failed to capture order:", error);
      res.status(500).json({ error: "Failed to capture order." });
    }
  });
  
  // Serve index.html
  app.get("/", (req, res) => {
    res.sendFile(path.resolve("./checkout.html"));
  });
  
  app.listen(PORT, () => {
    console.log(`Node server listening at http://localhost:${PORT}/`);
  });
app.use((req, res, next) => {
  console.log(`Request to ${req.url} returned 404`);
  res.status(404).send("404: Not Found");
});

 
/**
 * Generate an OAuth 2.0 access token for authenticating with PayPal REST APIs.
 */
const generateAccessToken = async () => {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      throw new Error("MISSING_API_CREDENTIALS");
    }
    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64");
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
  }
};

const handleResponse = async (response) => {
  try {
    const jsonResponse = await response.json();
    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
};

/**
 * Create an order to start the transaction.
 */
const createOrder = async (cart) => {
  console.log("Shopping cart information passed from the frontend createOrder() callback:", cart);
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;

  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "100",
        },
      },
    ],
    shipping: {
      options: [
        {
          id: "001",
          type: "SHIPPING",
          label: "ground",
          selected: true,
          amount: {
            currency_code: "USD",
            value: "0",
          },
        },
        {
          id: "002",
          type: "SHIPPING",
          label: "Expedite",
          selected: false,
          amount: {
            currency_code: "USD",
            value: "100",
          },
        },
      ],
    },
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
};



const bot = new Telegraf('6916549203:AAHC2CL6EkicESu8dsjbiRvOrf2NI257YuE');
let datos = [{
  nombre: 'Jesus',
  email: 'Jesus.101201@gmail.com'

}, {
  nombre: 'Manuel',
  email: 'Manu@gmail.com'

}, {
  nombre: 'Luis',
  email: 'luis@gmail.com'

}];

const allowedUsers = [1045919378, 987654321]; // Reemplaza con los IDs de usuario permitidos

// Middleware para verificar si el usuario está permitido
bot.use((ctx, next) => {
  if (ctx.from && allowedUsers.includes(ctx.from.id)) {
    console.log('Usuario permitido:', ctx.from.id);
    return next();
  } else {
    ctx.reply('Lo siento, no tienes permiso para usar este bot.');
  }
});

// Comando /start
bot.start((ctx) => {
  const options = datos.map((persona, index) => `${index + 1}. ${persona.nombre}`).join('\n');
  ctx.reply(`Bienvenido! Selecciona una opción:\n${options}\n${datos.length + 1}. Desea salir\n\nEscribe el número de la opción que deseas elegir:`);
});

// Middleware para manejar mensajes de texto
bot.on('text', (ctx, next) => {
  const userInput = ctx.message.text.trim();

  // Verificar si el usuario selecciona la opción para salir
  if (userInput === (datos.length + 1).toString()) {
    ctx.reply('Has seleccionado salir.');
    return; // Salir sin realizar más acciones
  }

  // Verificar si la entrada del usuario es un número válido
  const optionIndex = parseInt(userInput) - 1;
  if (!isNaN(optionIndex) && optionIndex >= 0 && optionIndex < datos.length) {
    const selectedOption = datos[optionIndex];
    ctx.reply(`Has seleccionado: \nNombre: ${selectedOption.nombre}\nEmail: ${selectedOption.email}`, {
      reply_markup: {
        inline_keyboard: [[{ text: 'Eliminar', callback_data: `eliminar_${optionIndex}` }]]
      }
    });
  } else {
    ctx.reply('Opción no válida. Por favor, selecciona una opción válida.');
  }
});

// Manejo de callback para eliminar opción
bot.action(/^eliminar_(\d+)$/, (ctx) => {
  const optionIndex = parseInt(ctx.match[1]);
  if (!isNaN(optionIndex) && optionIndex >= 0 && optionIndex < datos.length) {
    datos.splice(optionIndex, 1);
    ctx.reply('La opción ha sido eliminada.');
    console.log(datos);
  } else {
    ctx.reply('Error al eliminar la opción.');
  }
});

// Inicia el bot
bot.launch()
  .then(() => {
    console.log('Bot iniciado exitosamente');
  })
  .catch((err) => {
    console.error('Error al iniciar el bot:', err);
  });