// import React, { useState } from 'react'
// import './WeatherApp.css'

// import search_icon from '../Assets/search.png';
// import clear_icon from "../Assets/clear.png";
// import cloud_icon from "../Assets/cloud.png";
// import drizzle_icon from "../Assets/drizzle.png";
// import rain_icon from "../Assets/rain.png";
// import snow_icon from "../Assets/snow.png";
// import wind_icon from "../Assets/wind.png";
// import humidity_icon from "../Assets/humidity.png";


// export const WeatherApp = () => {

//     let api_key="8d88fd1382b844ce23b73921c4508c97";

//     const [wicon,setWicon] =useState(cloud_icon);

//     const search = async () => {
//         const element = document.getElementsByClassName("cityInput")
//         if(element[0].value==="")
//         {
//             return 0;
//         }
//         let url= `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
//         let response = await fetch(url);
//         let data = await response.json();
//         const humidity = document.getElementsByClassName("humidity-percent")
//         const wind = document.getElementsByClassName("wind-rate")
//         const temperature = document.getElementsByClassName("weather-temp")
//         const location = document.getElementsByClassName("weather-location")

//         humidity[0].innerHTML=data.main.humidity+" %";
//         wind[0].innerHTML=Math.floor(data.wind.speed)+" Km/h";
//         temperature[0].innerHTML=Math.floor(data.main.temp)+"°C";
//         location[0].innerHTML=data.name;

//         if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n" )
//         {
//             setWicon(clear_icon);
//         }
//         else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
//         {
//             setWicon(cloud_icon);
//         }
//         else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
//         {
//             setWicon(drizzle_icon);
//         }
//         else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
//         {
//             setWicon(drizzle_icon);
//         }
//         else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
//         {
//             setWicon(rain_icon);
//         }
//         else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
//         {
//             setWicon(rain_icon);
//         }
//         else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
//         {
//             setWicon(snow_icon);
//         }
//         else
//         {
//             setWicon(clear_icon);
//         }
//     }

//     return (
//       <div className='container'>
//           <div className='top-bar'>
//               <input type="text" className="cityInput" placeholder='Search (e.g., Bhubaneswar)'/>
//               <div className='search-icon' onClick={()=>{search()}}>
//                   <img src={search_icon} alt="" />
//               </div>
//           </div>
//           <div className="weather-image">
//             <img src={cloud_icon} alt="" />
//           </div>
//           <div className="weather-temp">24°C</div>
//           <div className="weather-location">Bhubaneswar</div>
//           <div className="data-container">
//             <div className="element">
//                 <img src={humidity_icon} alt="" className="icon" />
//                 <div className="data">
//                     <div className="humidity-percent">64%</div>
//                     <div className="text">Humidity</div>
//                 </div>
//             </div>
//             <div className="element">
//                 <img src={wind_icon} alt="" className="icon" />
//                 <div className="data">
//                     <div className="wind-rate">18 Km/h</div>
//                     <div className="text">Wind Speed</div>
//                 </div>
//             </div>
//           </div>

//       </div>
//     );
//   }
  
// import React, { useState, useEffect } from 'react';
// import './WeatherApp.css';
// import search_icon from '../Assets/search.png';
// import clear_icon from '../Assets/clear.png';
// import cloud_icon from '../Assets/cloud.png';
// import drizzle_icon from '../Assets/drizzle.png';
// import rain_icon from '../Assets/rain.png';
// import snow_icon from '../Assets/snow.png';
// import wind_icon from '../Assets/wind.png';
// import humidity_icon from '../Assets/humidity.png';

// export const WeatherApp = () => {
//   let api_key = '8d88fd1382b844ce23b73921c4508c97';

//   const [wicon, setWicon] = useState(cloud_icon);

//   const weatherIcons = {
//     '01d': clear_icon,
//     '01n': clear_icon,
//     '02d': cloud_icon,
//     '02n': cloud_icon,
//     '03d': drizzle_icon,
//     '03n': drizzle_icon,
//     '04d': drizzle_icon,
//     '04n': drizzle_icon,
//     '09d': rain_icon,
//     '09n': rain_icon,
//     '10d': rain_icon,
//     '10n': rain_icon,
//     '13d': snow_icon,
//     '13n': snow_icon,
//   };

//   const search = async () => {
//     const element = document.getElementsByClassName('cityInput');
//     if (element[0].value === '') {
//       return;
//     }
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     const humidity = document.getElementsByClassName('humidity-percent');
//     const wind = document.getElementsByClassName('wind-rate');
//     const temperature = document.getElementsByClassName('weather-temp');
//     const location = document.getElementsByClassName('weather-location');

//     humidity[0].innerHTML = data.main.humidity + ' %';
//     wind[0].innerHTML = Math.floor(data.wind.speed) + ' Km/h';
//     temperature[0].innerHTML = Math.floor(data.main.temp) + '°C';
//     location[0].innerHTML = data.name;

//     const weatherIcon = data.weather[0].icon;
//     if (weatherIcons[weatherIcon]) {
//       setWicon(weatherIcons[weatherIcon]);
//     } else {
//       // Default to cloud_icon if the weather code is not recognized.
//       setWicon(cloud_icon);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="top-bar">
//         <input type="text" className="cityInput" placeholder="Search (e.g., Bhubaneswar)" />
//         <div className="search-icon" onClick={() => search()}>
//           <img src={search_icon} alt="" />
//         </div>
//       </div>
//       <div className="weather-image">
//         <img src={wicon} alt="" />
//       </div>
//       <div className="weather-temp">24°C</div>
//       <div className="weather-location">Bhubaneswar</div>
//       <div className="data-container">
//         <div className="element">
//           <img src={humidity_icon} alt="" className="icon" />
//           <div className="data">
//             <div className="humidity-percent">64%</div>
//             <div className="text">Humidity</div>
//           </div>
//         </div>
//         <div className="element">
//           <img src={wind_icon} alt="" className="icon" />
//           <div className="data">
//             <div className="wind-rate">18 Km/h</div>
//             <div className="text">Wind Speed</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './WeatherApp.css';
// import search_icon from '../Assets/search.png';
// import clear_icon from '../Assets/clear.png';
// import cloud_icon from '../Assets/cloud.png';
// import drizzle_icon from '../Assets/drizzle.png';
// import rain_icon from '../Assets/rain.png';
// import snow_icon from '../Assets/snow.png';
// import wind_icon from '../Assets/wind.png';
// import humidity_icon from '../Assets/humidity.png';

// export const WeatherApp = () => {
//   let api_key = '8d88fd1382b844ce23b73921c4508c97';

//   const [wicon, setWicon] = useState(cloud_icon);
//   const [currentTemperature, setCurrentTemperature] = useState('');
//   const [currentLocation, setCurrentLocation] = useState('');
//   const [current24HrTime, setCurrent24HrTime] = useState('');
//   const [currentDate, setCurrentDate] = useState('');
//   const [currentDay, setCurrentDay] = useState('');

//   const weatherIcons = {
//     '01d': clear_icon,
//     '01n': clear_icon,
//     '02d': cloud_icon,
//     '02n': cloud_icon,
//     '03d': drizzle_icon,
//     '03n': drizzle_icon,
//     '04d': drizzle_icon,
//     '04n': drizzle_icon,
//     '09d': rain_icon,
//     '09n': rain_icon,
//     '10d': rain_icon,
//     '10n': rain_icon,
//     '13d': snow_icon,
//     '13n': snow_icon,
//   };

//   const search = async () => {
//     const element = document.getElementsByClassName('cityInput');
//     if (element[0].value === '') {
//       return;
//     }
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
//     // let response = await fetch(url);
//     // let data = await response.json();

//     let response, data;
//     try {
//       response = await fetch(url);
//       data = await response.json();
//     } 
//     catch (error) {
//       console.error('Error fetching weather data:', error);
//       alert('An error occurred while fetching weather data');
//       return;
//     }

//     const humidity = document.getElementsByClassName('humidity-percent');
//     const wind = document.getElementsByClassName('wind-rate');
//     const temperature = document.getElementsByClassName('weather-temp');
//     const location = document.getElementsByClassName('weather-location');

//     if (!data.main) {
//       alert('Location Not Found');
//       return;
//     }

//     humidity[0].innerHTML = data.main.humidity + ' %';
//     wind[0].innerHTML = Math.floor(data.wind.speed) + ' Km/h';
//     temperature[0].innerHTML = Math.floor(data.main.temp) + '°C';
//     location[0].innerHTML = data.name;

//     const weatherIcon = data.weather[0].icon;
//     if (weatherIcons[weatherIcon]) {
//       setWicon(weatherIcons[weatherIcon]);
//     } else {
//       setWicon(cloud_icon);
//     }

//     fetchWorldTime(data.coord.lat, data.coord.lon);
//   };

//   const fetchWorldTime = (lat, lon) => {
//     const worldTimeApiUrl = `http://worldtimeapi.org/api/timezone/Etc/GMT`;
//     axios
//       .get(worldTimeApiUrl)
//       .then((response) => {
//         const data = response.data;
//         const time = new Date(data.utc_datetime).toLocaleTimeString('en-US', {
//           hour12: false,
//           hour: '2-digit',
//           minute: '2-digit',
//         });
//         const date = new Date(data.utc_datetime).toLocaleDateString('en-US', {
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//         });
//         const day = new Date(data.utc_datetime).toLocaleDateString('en-US', {
//           weekday: 'long',
//         });

//         setCurrent24HrTime(time);
//         setCurrentDate(date);
//         setCurrentDay(day);
//       })
//       .catch((error) => {
//         console.error('Error fetching time data:', error);
//       });
//   };

//   useEffect(() => {
//     search();
//   }, []);

//   return (
//     <div className="container">
//       <div className="top-bar">
//         <input type="text" className="cityInput" placeholder="Search (e.g., Bhubaneswar)" />
//         <div className="search-icon" onClick={() => search()}>
//           <img src={search_icon} alt="" />
//         </div>
//       </div>
//       <div className="weather-image">
//         <img src={wicon} alt="" />
//       </div>
//       <div className="weather-temp">24°C</div>
//       <div className="weather-location">Bhubaneswar</div>
//       <br />
//       <div className="weather-temp">{currentTemperature}</div>
//       <div className="weather-location">{currentLocation}</div>
//       <div className="current-24hr-time">{current24HrTime}</div>
//       <div className="current-date">{currentDate}</div>
//       <div className="current-day">{currentDay}</div>
//       <div className="data-container">
//         <div className="element">
//           <img src={humidity_icon} alt="" className="icon" />
//           <div className="data">
//             <div className="humidity-percent">64%</div>
//             <div className="text">Humidity</div>
//           </div>
//         </div>
//         <div className="element">
//           <img src={wind_icon} alt="" className="icon" />
//           <div className="data">
//             <div className="wind-rate">18 Km/h</div>
//             <div className="text">Wind Speed</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import currentlocation_icon from '../Assets/current-location.svg'
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

export const WeatherApp = () => {
  let api_key = '8d88fd1382b844ce23b73921c4508c97';

  const [wicon, setWicon] = useState(cloud_icon);
  const [currentTemperature, setCurrentTemperature] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [current24HrTime, setCurrent24HrTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentDay, setCurrentDay] = useState('');

  const weatherIcons = {
    '01d': clear_icon,
    '01n': clear_icon,
    '02d': cloud_icon,
    '02n': cloud_icon,
    '03d': drizzle_icon,
    '03n': drizzle_icon,
    '04d': drizzle_icon,
    '04n': drizzle_icon,
    '09d': rain_icon,
    '09n': rain_icon,
    '10d': rain_icon,
    '10n': rain_icon,
    '13d': snow_icon,
    '13n': snow_icon,
  };

  const search = async (useCurrentLocation = false) => {
    let url;
    if (useCurrentLocation) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=Metric&appid=${api_key}`;
          fetchData(url);
        });
      } else {
        alert('Geolocation is not supported by your browser.');
      }
    } else {
      const element = document.getElementsByClassName('cityInput');
      if (element[0].value === '') {
        return;
      }
      url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
      fetchData(url);
    }
  };

  const fetchData = async (url) => {
    try {
      let response = await fetch(url);
      let data = await response.json();

      if (!data.main) {
        alert('Location Not Found');
        return;
      }

      const humidity = document.getElementsByClassName('humidity-percent');
      const wind = document.getElementsByClassName('wind-rate');
      const temperature = document.getElementsByClassName('weather-temp');
      const location = document.getElementsByClassName('weather-location');

      humidity[0].innerHTML = data.main.humidity + ' %';
      wind[0].innerHTML = Math.floor(data.wind.speed) + ' Km/h';
      temperature[0].innerHTML = Math.floor(data.main.temp) + '°C';
      location[0].innerHTML = data.name;

      const weatherIcon = data.weather[0].icon;
      if (weatherIcons[weatherIcon]) {
        setWicon(weatherIcons[weatherIcon]);
      } else {
        setWicon(cloud_icon);
      }

      fetchWorldTime(data.coord.lat, data.coord.lon);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('An error occurred while fetching weather data');
    }
  };

  const fetchWorldTime = (lat, lon) => {
    const worldTimeApiUrl = `http://worldtimeapi.org/api/timezone/Etc/GMT`;
    axios
      .get(worldTimeApiUrl)
      .then((response) => {
        const data = response.data;
        const time = new Date(data.utc_datetime).toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
        });
        const date = new Date(data.utc_datetime).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        const day = new Date(data.utc_datetime).toLocaleDateString('en-US', {
          weekday: 'long',
        });

        setCurrent24HrTime(time);
        setCurrentDate(date);
        setCurrentDay(day);
      })
      .catch((error) => {
        console.error('Error fetching time data:', error);
      });
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search (e.g., Bhubaneswar)" />
        <div className="search-icon" onClick={() => search()}>
          <img src={search_icon} alt="Search" />
        </div>
        <div className="currentlocation" onClick={() => search(true)}>
        <img src={currentlocation_icon} alt="" />
        </div>
        
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">Bhubaneswar</div>
      <br />
      <div className="weather-temp">{currentTemperature}</div>
      <div className="weather-location">{currentLocation}</div>
      <div className="current-24hr-time">{current24HrTime}</div>
      <div className="current-date">{currentDate}</div>
      <div className="current-day">{currentDay}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 Km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
