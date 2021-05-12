import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "../weather.css";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = "a42dc9adbba58ffc672606e3f4141b63";
  const weatherData = async (e) => {
    e.preventDefault();
    if (form.city === "" || form.country==="") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json());
      console.log(data)
      setWeather({ data: data });

    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    // <section className="landing">
    <div className="weather">
      <span className="title">MindMajix</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="Enter the City"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Enter the Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Search
        </button>
      </form>

      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
    // </section>
  );
};

export default Weather;
