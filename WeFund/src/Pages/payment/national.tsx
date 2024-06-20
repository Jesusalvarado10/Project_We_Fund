import { useEffect, useState } from "react";
import ButttonPaypal from "../../components/paypal";
import Swal from "sweetalert2";
import { useAuth } from "../../context/contex";

export function National() {
const {user}=useAuth();
    const [monto, setMonto] = useState(0);
const [phone, setPhone] = useState("");
const [amount, setAmount] = useState(0);
const [bank, setBank] = useState("");
const [last_for_digits, setLast_for_digits] = useState("");
const [dolarBNV, setDolarBNV] = useState(0);
const [day, setDay] = useState("");
const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setMonto(Number(event.target.value));
    setAmount(Number(event.target.value)*dolarBNV)
}
useEffect(() => {
    if(user){
        setPhone(user.phone)
    }
   if(dolarBNV===0){     
    fetch("https://project-we-fund-logic2-0.onrender.com/dolar")
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setDolarBNV(data.price);
            setDay(data.date);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Aquí podrías manejar el error de alguna manera, por ejemplo, mostrando un mensaje al usuario.
        });}
    setAmount(monto*dolarBNV)
  }, []); // El array vacío indica que este efecto se ejecuta solo una vez, equivalente a componentDidMount


const summit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    console.log(phone,  parseFloat(amount.toFixed(2)), bank, last_for_digits)
    const data={
        num_phone: phone,
        amount: amount,
        bank: bank,
        last_digts: last_for_digits,
        validate:false
    }
    if(phone==="" || amount===0 || bank==="" || last_for_digits===""){
        console.log("Faltan datos")
        Swal.fire({
            title: "Faltan datos",
            text: "Por favor, llene todos los campos",
            icon: "warning",
        });
        return
    }

    try {
        const response = await fetch("https://project-we-fund-logic2-0.onrender.com/pagoMovil ", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => {response.json()
        console.log("Success:", data);

    })
console.log("Success:", response);
}
    catch (error) {
        console.error("Error:", error);
    }
   
    // Aquí va la lógica para hacer el pago
}

    return (
    
   
        <div className="flex flex-col justify-center items-center h-screen bg-gray-200 w-full">
            <div className="bg-green-500 w-full text-center h-64 flex flex-col  items-center z-0">
            <h1 className="mt-9 text-1xl  text-white font-bold mb-1">
                Dolar
            </h1>
            <span className=" text-white text-2xl  font-bold">
                {dolarBNV} Bs/USD
            </span>
            <p className="text-white text-sm">
                ({day})
            </p>
      
            </div>
            <div className=" text-center  h-3/4 bg-white z-10 relative mt-[-50px] ">
         <h1 className="text-3xl p-7 font-bold " >Formas de pago</h1>
         <input className="border-2 border-gray-300 p-1 m-1"
                type="number"
                placeholder="monto"
                value={monto}
                onChange={changeInput}
            />Mondo en dolares

         <div className="flex justify-center items-center ">
        <div className="flex flex-row-reverse p-9  "> 
            <div className="flex flex-col w-60 text-center items-center ">
          
            <label>
                <span className="label-text">Número de teléfono</span>
            </label>
            <input
                type="text"
                placeholder="Número de teléfono"
                className="input input-bordered"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <label>
                <span className="label-text">Monto</span>
            </label>
            <input
                type="text"
                placeholder="Monto"
                className="input input-bordered"
                value={amount}
                disabled
                onChange={(e) => setAmount(Number(e.target.value))}
            />
            <label>
                <span className="label-text">Banco</span>
            </label>
            <input
                type="text"
                placeholder="Banco"
                className="input input-bordered"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
            />
            <label>
                <span className="label-text">Últimos 4 dígitos</span>
            </label>
            <input
                type="text"
                placeholder="Últimos 4 dígitos"
                className="input input-bordered"
                value={last_for_digits}
                onChange={(e) => setLast_for_digits(e.target.value)}    
            />
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={summit}
            >
                Pagar
            </button>
            </div>
          </div>
        
          
          <div className="mt-4 w-60 pr-8 ">
            <ButttonPaypal></ButttonPaypal>
          </div>
          </div>
    
      </div>
      </div>
      
      
    )
  }
