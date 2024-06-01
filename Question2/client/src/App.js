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
      {categories.map((e) => (
        <div onClick={()=>{setCat(e)}}>{e}</div>
      ))}
      <AllProduct  cat = {cat} />
    </div>
  );
}

export default App;
