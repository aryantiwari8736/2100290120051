import "./App.css";
import AllProduct from "./Pages/AllProduct";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {

  const categories = [
    "Phone",
    "Computer",
    "TV",
    "Earphone",
    "Tablet",
    "Charger",
    "Mouse",
    "Keypad",
    "Bluetooth",
    "Pendrive",
    "Remote",
    "Speaker",
    "Headset",
    "Laptop",
    "PC",
  ];
  const [cat,setCat] =useState("Laptop")


  return (
    <div className="App text-3xl">
        <div className="text-3xl font-extrabold">Categories:</div>
     <div className="flex flec flex-wrap gap-3 p-3">
     {categories.map((e) => (

<div className="flex cursor-pointer border-slate-950 border-2 p-2" onClick={()=>{setCat(e)}}>{e}</div>
         
      ))}</div> 
      <AllProduct  cat = {cat} />
    </div>
  );
}

export default App;
