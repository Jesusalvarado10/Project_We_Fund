
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const fetch = require('node-fetch');
const { Telegraf } = require('telegraf');
const urlBackend= process.env.URL_BACKEND;
const axios = require('axios');
const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PORT = 8888 } = process.env;
const base = "https://api-m.sandbox.paypal.com";
const app = express();
const urlBackendlocal="http://localhost:3000";



app.disable('x-powered-by');
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/favicon.ico', (req, res) => res.status(204));
app.post('/pagoPaypall', async (req, res) => {
  const data = req.body;

  try {
    // Envía el objeto `data` al otro servidor en localhost
    const response = await fetch(`${urlBackend}/pagoPaypallAgregar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    // Obtén la respuesta del otro servidor
    const responseData = await response.json();

    // Envía la respuesta del otro servidor al cliente
    res.status(response.status).send(responseData);
} catch (error) {
    console.error('Error sending data to another server:', error);
    res.status(500).send('Error sending data to another server');
}
});
const keepAlive = () => {
  axios.get(`https://project-we-fund-logic2-0.onrender.com/keepalive1`)
    .then(response => {
      console.log('Keep alive request sent:', response.status);
    })
    .catch(error => {
      console.error('Error sending keep alive request:', error);
    });
};

// Ejecuta la solicitud cada 15 minutos
setInterval(keepAlive, 150 * 1000);


// Envía una solicitud inmediatamente al iniciar el script


app.get('/keepalive1', (req, res) => {
  console.log('Keepalive GET endpoint hit');
  res.sendStatus(200);
});

// Endpoint de mantenimiento para HEAD
app.head('/keepalive', (req, res) => {
  console.log('Keepalive HEAD endpoint hit');
  res.sendStatus(200);
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
  app.post('/pagoMovil', async (req, res) => {
    const data = req.body;

   

    try {
      // Envía el objeto `data` al otro servidor en localhost
      const response = await fetch(`${urlBackend}/pagoMovilAgregar`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

      // Obtén la respuesta del otro servidor
      const responseData = await response.json();

      // Envía la respuesta del otro servidor al cliente
      res.status(response.status).send(responseData);
  } catch (error) {
      console.error('Error sending data to another server:', error);
      res.status(500).send('Error sending data to another server');
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
let datos = [];

// const allowedUsers = [1045919378, 987654321]; // Reemplaza con los IDs de usuario permitidos

// // Middleware para verificar si el usuario está permitido
// bot.use((ctx, next) => {
//   if (ctx.from && allowedUsers.includes(ctx.from.id)) {
//     console.log('Usuario permitido:', ctx.from.id);
//     return next();
//   } else {
//     ctx.reply('Lo siento, no tienes permiso para usar este bot.');
//   }
// });
bot.use (async (ctx, next) => {
  console.log('Usuario:', ctx.from.name, ctx.from.id, ctx.from.username, ctx.from.language_code, ctx.from.is_bot);
  
  next();
});

// Comando /start
bot.start(async (ctx) => {
  datos=[]
  try {
    const response = await fetch(`${urlBackend}/pagosSinConfirmacion`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const datafetch = await response.json();
    
    console.log('Datos obtenidos del servidor:', datafetch);
    datafetch["PaywithoutCheck"].forEach(persona => {
      datos.push(persona);
  });
  console.log(datos);


} catch (error) {
    console.error('Error fetching data from server:', error);

}
  if(datos.length === 0) {
    ctx.reply('No hay datos para mostrar.');
    return;
  }
  const options = datos.map((persona, index) => `${index + 1}. ${persona.num_phone}`).join('\n');
  
  ctx.reply(`Bienvenido!\nEste es un bot para que puedan confirmar los pagos provinientes del PagoMovil \n\nSelecciona una opción:\n\n${options} \n${datos.length + 1}.Desea salir\n\nEscribe el número de la opción que deseas elegir:`);
});


bot.on('text', (ctx, next) => {
  const userInput = ctx.message.text.trim();


  if (userInput === (datos.length + 1).toString()) {
    ctx.reply('Has seleccionado salir.');
    return; 
  }

  const optionIndex = parseInt(userInput) - 1;
  if (!isNaN(optionIndex) && optionIndex >= 0 && optionIndex < datos.length) {
    const selectedOption = datos[optionIndex];
    ctx.reply(`Has seleccionado: \nNumero: ${selectedOption.num_phone}\nBanco: ${selectedOption.bank}\nUltimos 4 digitos: ${selectedOption.last_digts}\nMonto: ${selectedOption.amount}`, {
      reply_markup: {
        inline_keyboard: [[{ text: 'Pago confirmado', callback_data: `confirmado_${optionIndex}` }],
        [{ text: 'Regresar', callback_data: 'regresar' }]
      ]
      }
    });
  } else {
    ctx.reply('Opción no válida. Por favor, selecciona una opción válida.');
  }
});

bot.action('regresar', async (ctx) => {
  // Lógica para manejar el regreso al inicio
  ctx.reply('Regresando al inicio...Por favor colocar /start', { reply_markup: { remove_keyboard: true } });

     
  await ctx.editMessageReplyMarkup({
    inline_keyboard: [[]] 
    
});

});

bot.action(/^confirmado_(\d+)$/, async (ctx) => {
  const optionIndex = parseInt(ctx.match[1]);
  if (!isNaN(optionIndex) && optionIndex >= 0 && optionIndex < datos.length) {
      const confirmedData = datos.splice(optionIndex, 1)[0]; 
      confirmedData.validate = true;

      try {
     
          const response = await fetch(`${urlBackend}/pagoMovilConfirmar`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(confirmedData)
          });
      
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }

          ctx.reply('El pago ha sido confirmado exitosamente.');

       
          await ctx.editMessageReplyMarkup({
              inline_keyboard: [[]] 

          });

          
          const responseData = await response.json();
          console.log('Respuesta del servidor:', responseData);
          
         } catch (error) {
          console.error('Error sending data to another server:', error);
        
          ctx.reply('Hubo un error al confirmar el pago. Por favor, intenta de nuevo más tarde.');

          datos.push(confirmedData);
      }
  } else {
      ctx.reply('Opción no válida. Por favor, selecciona una opción válida.');
  }
});
bot.launch()
  .then(() => {
    console.log('Bot iniciado exitosamente');
  })
  .catch((err) => {
    console.error('Error al iniciar el bot:', err);
  });