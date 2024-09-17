import './App.css';
import {useState} from "react";
import clsx from "clsx";
const App = () => {

  const [bgColor,setBgColor] = useState("bg-green-400");
  
  return  (
    <div className={clsx("flex flex-col items-center justify-center h-screen",bgColor)} >
      <label htmlFor="colorPicker" className="text-4xl text-white pb-16 font-bold" >Pick a color</label>
    <select
     
      id="colorPicker"
      value={bgColor}
      onChange={(e)=>{
        setBgColor(e.target.value);
      }}
      className={clsx("border-8 border-white text-white rounded-md p-1",bgColor)}>

      <option value="bg-red-400" >red</option>
      <option value="bg-blue-400" >blue</option>
      <option value="bg-yellow-400" >yellow</option>
      <option value="bg-green-400" >green</option>
      <option value="bg-purple-400" >purple</option>
      
    </select>
  </div>
    );
};

export default App;
