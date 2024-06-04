import { useState } from "react";

export function National() {
const [phone, setPhone] = useState("");
const [amount, setAmount] = useState(0);
const [bank, setBank] = useState("");
const [last_for_digits, setLast_for_digits] = useState("");
const summit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    console.log(phone, amount, bank, last_for_digits)
    const data={
        num_phone: phone,
        amount: amount,
        bank: bank,
        last_digts: last_for_digits,
        validate:false
    }
    try {
        const response = await fetch("https://project-we-fund-logic2-0.onrender.com/pagoMovilAgregar ", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => {response.json()
        console.log("Success:", data);
    })}
    catch (error) {
        console.error("Error:", error);
    }
   
    // Aquí va la lógica para hacer el pago
}

    return (
        <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Número de telefono</span>
          </label>
          <input
            type="text"
            placeholder="Número de telefono"
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
            <button onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => summit(event)}>
                Pagar
            </button>
        </div>
        </form>
      
    )
  }
  