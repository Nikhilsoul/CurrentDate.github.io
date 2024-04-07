import React, { useState } from "react";
import './index.css';


const App = () =>{
    let CurrDate = new Date().toLocaleTimeString();
    console.log(CurrDate);

    const [CurTime , SetTime] = useState(CurrDate);
     const UpdateTime=() => {
           CurrDate= new Date().toLocaleTimeString();
           SetTime(CurrDate);
     }
     setInterval(UpdateTime ,1000);
    return(
    <>
        <h1>{CurTime}</h1>
    </>
    );
};

export default App;
