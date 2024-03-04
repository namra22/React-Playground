import React, { useState,useEffect } from "react";
import searchImg from './assets/search.png';
import humidityImg from './assets/humidity.png';
import windImg from './assets/wind.png';
const apiKey = "1bbe82c9df73fdd48907bd6850a70dd1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    fetchWeatherData(city);
  };

  const fetchWeatherData = (city) => {
    fetch(apiUrl + city + `&appid=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Invalid City Name');
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        console.log(weatherData);
        setError(null);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message); 
        setWeatherData(null);
      });
  };
  
  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "470px",
        background: "linear-gradient(135deg, #00feba, #5b548a)",
        color: "#fff",
        margin: "70px auto 0",
        borderRadius: "20px",
        padding: "40px 35px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          placeholder="Enter city name"
          spellCheck="false"
          style={{
            border: "0",
            outline: "0",
            background: "#ebfffc",
            color: "#555",
            padding: "10px 25px",
            height: "60px",
            borderRadius: "30px",
            flex: "1",
            marginRight: "16px",
            fontSize: "18px",
          }}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          style={{
            border: "0",
            outline: "0",
            height: "60px",
            background: "#ebfffc",
            borderRadius: "50%",
            width: "60px",
            cursor: "pointer",
          }}
          onClick={handleSearch}
        >
          <img src={searchImg} alt="" style={{ width: "16px" }} />
        </button>
      </div>
      <div
        style={{
          textAlign: "left",
          marginLeft: "10px",
          fontSize: "14px",
          marginTop: "10px",
          display: error ? "block" : "none",
        }}
      >
        <p>{error}</p>
      </div>
      {weatherData && weatherData.weather && weatherData.weather[0] && (
        <div style={{ display: "block" }}>
          <img
            src={`../assets/${weatherData.weather[0].main.toLowerCase()}.png`}
            alt=""
            style={{ width: "170px", marginTop: "30px" }}
          />
          <h1 style={{ fontSize: "80px", fontWeight: "500" }}>
            {Math.round(weatherData.main.temp)}°C
          </h1>
          <h2
            style={{ fontSize: "45px", fontWeight: "400", marginTop: "-10px" }}
          >
            {weatherData.name}
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
              marginTop: "50px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <img
                src={humidityImg}
                alt=""
                style={{ width: "40px", marginRight: "10px" }}
              />
              <div>
                <p style={{ fontSize: "28px", marginTop: "-6px" }}>
                  {weatherData.main.humidity}%
                </p>
                <p>Humidity</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <img
                src={windImg}
                alt=""
                style={{ width: "40px", marginRight: "10px" }}
              />
              <div>
                <p style={{ fontSize: "28px", marginTop: "-6px" }}>
                  {weatherData.wind.speed} km/h
                </p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
