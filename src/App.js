import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './Navbar';
import UserLocation from './UserLocation';


const api={
  key:'b47c432c7695e2ef3f196905ac43a423',
  url:'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const[value, setValue]=useState('');
  const[weather, setWeather]=useState({});
  const [error, setError]=useState('');

  useEffect(()=>{
   const weather = localStorage.getItem('weather') || []
   setWeather(JSON.parse(weather))
  },[])

  useEffect(()=>{
    localStorage.setItem('weather', JSON.stringify (weather))
  }, [weather]);

const handleSubmit= (e)=>{
  e.preventDefault();
  if(value){
  fetch(`${api.url}weather?q=${value}&units=metric&APPID=${api.key}`)
  .then (res=> res.json())
   .then (result =>{
   
    setWeather(result);
     setValue('');
  });
}else if (!weather || value === "") {
  setWeather({});
  setError('Please enter a place properly')
}
}

let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const onChange=(e)=>
setValue(e.target.value)

return (
    <div className='App'>
      <div className='container'>
        <Navbar onChange={onChange} handleSubmit={handleSubmit} value={value}/>
          
         {(typeof weather.main !=='undefined') ? (
          <UserLocation date={date} weather={weather} />) : <div className='error'>{error}</div>}
         </div>
      </div>  
     
  );
}

export default App;
