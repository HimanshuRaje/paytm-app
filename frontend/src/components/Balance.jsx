import axios from "axios";
import { useEffect, useState } from "react";

export const Balance = () => {

    const [balance, setBalance] = useState(0);

    useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/account/balance",{
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("token"),
        },
      })
        .then(response => {
            setBalance(response.data.balance);
        })
        .catch(error => {
            console.error("Error fetching balance:", error);
        });

    })

    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance ₹ {balance}
        </div>
        <div className="font-semibold ml-4 text-lg">
            
        </div>
    </div>
}
