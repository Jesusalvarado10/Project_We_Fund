import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from "sweetalert2";

// Renders errors or successfull transactions on the screen.
interface ButttonPaypalProps {
  id: string;
  amount:string 
}

function ButttonPaypal({id, amount}: ButttonPaypalProps ) {
  
  const initialOptions = {
    "clientId": "AVw1MdDLEy2zIysY5KjrtTSnDPAoZXUn0gW-hWF2LlnEjplrqA0zUxYZqN2ydBz-relTPsaI-KkiFrCT", // Add the missing clientId property
    
    "enable-funding": "paylater,venmo",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "rect",
            //color:'blue' change the default color of the buttons
            layout: "vertical", //default value. Can be changed to horizontal
          }}
          createOrder={async () => {
            try {
              const response = await fetch("https://project-we-fund-a8vb.onrender.com/api/orders", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  cart: [
                    {
                      id: "003",
                      quantity: "1",
          
                    },
                  ],
                }),
              });
          
              const orderData = await response.json();
          
              if (orderData.id) {
                return orderData.id;
              } else {
                throw new Error("No se pudo crear la orden de pago");
              }
            } catch (error) {
              console.error(error);
              setMessage(`No se pudo iniciar el pago de PayPal: ${error}`);
            }
          }}
          onApprove={async (data, actions) => {
            try {
              const response = await fetch(
                `https://project-we-fund-a8vb.onrender.com/api/orders/${data.orderID}/capture`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                },
              );
              console.log(message);
              const orderData = await response.json();
              // Three cases to handle:
              //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
              //   (2) Other non-recoverable errors -> Show a failure message
              //   (3) Successful transaction -> Show confirmation or thank you message

              const errorDetail = orderData?.details?.[0];

              if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                return actions.restart();
              } else if (errorDetail) {
                // (2) Other non-recoverable errors -> Show a failure message
                throw new Error(
                  `${errorDetail.description} (${orderData.debug_id})`,
                );
              } else {
                // (3) Successful transaction -> Show confirmation or thank you message
                // Or go to another URL:  actions.redirect('thank_you.html');
                const transaction =orderData.purchase_units[0].payments.captures[0];
                
                const jsonTransaction = {
                  "name": orderData.payer.name.given_name,
                  "last_name": orderData.payer.name.surname,
                  "amount": amount,
                  "email": orderData.payer.email_address,
                  "date" : transaction.create_time,
                  "id": id,

                }
                console.log(jsonTransaction);
                
                const response = await fetch("https://project-we-fund-a8vb.onrender.com/pagoPaypall", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(jsonTransaction),
                });
                console.log(response);

                setMessage(
                  `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`,
                );
                Swal.fire({
                  icon: 'success',
                  title: 'Pago exitoso',
                  text: 'Gracias por su donación',
                });
              }
            } catch (error) {
              console.error(error);
              setMessage(
                `Sorry, your transaction could not be processed...${error}`,
              );
            }
          }}
        />
      </PayPalScriptProvider>

    </div>
  );
}

export default ButttonPaypal;
