import axios from 'axios'
import './App.css'
import { useState } from 'react'

function App() {
 const [input , setinput]=useState("");
 const [data, setData]= useState({});

 function getWeather(){
  const API=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=b053a6eda66a810672817db34a079f47&units=metric`

axios.get(API).then((Response)=>{
  console.log(Response.data);
  setData(Response.data);
});
 }

  return (
    <>

    <h1 className="bg-blue-800 text-white flex  items-center justify-center p-8 text-4xl font-bold ">Weather App</h1>


    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-800 text-white">
      
    <div className="flex items-center space-x-4 mb-14">
    <input type="text" className='w-72 px-4 py-2 rounded-lg shadow-lg outline-none border border-transparent focus:border-white bg-white text-black placeholder-gray-500"
          placeholder="Enter city name'  onChange={(e)=> setinput(e.target.value)} />

    <button className='px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300' onClick={getWeather}>GET</button>
 </div>
     
    <section>
     <h1 className="text-3xl font-semibold">City : {data.name}</h1>
     <h2 className=" text-2xl mt-2 font-bold">Temperature : {data.main ? data.main.temp : ""}</h2>
     
    </section>
    </div>
         </>
  )
}

export default App
