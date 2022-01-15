import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import  CanyoneeringAPI  from '../api/CanyoneeringAPI';
import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// require('dotenv').config()


function WeatherApp() {
    const [temperature, setTemperature] = useState("")
    const [canyon, setCanyon] = useState(null)
    const params = useParams()
    const API_KEY = process.env.REACT_APP_WEATHER_API;

    // this useEffect will fire whenever params.canyonID changes
    useEffect(() => {
        const getCanyon = async () => {
            const data = await CanyoneeringAPI.fetchCanyonByID(params.canyonID)
            if (data) {
                setCanyon(data)
            }
        }
        getCanyon()
    }, [params.canyonID])

    // useEffect() ... we use this to react to something else changing
    // we want to get the weather data, anytime we get a new canyon object
    useEffect(() => {
      console.log(canyon)
      if (canyon != null)
        getWeatherData(canyon.latitude, canyon.longitude)
   
    }, [canyon])
  
    const getWeatherData = (lat, lon) => {
      axios({
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
      }).then((response) => {
  
        //Kelvin to Fahrenheit conversion 
        setTemperature(((response.data.main.temp - 273.15) * 1.8) + 32)
      }).catch((error) => {
        console.log(error)
      });

    };


    return (
      <div style={{ marginLeft: "78%" }}>
        <div
          style={{
            height: "100px",
            width: "390px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "25px",
          }}
        >
          <br />
          <br />
          {Math.round(temperature)}℉
        </div>
        <br />
      </div>
  
    );
  };

function CanyonPage(props) {
    const [canyon, setCanyon] = useState(null)
    const navigate = useNavigate()

    // router props
    const params = useParams()

    // effects
    useEffect(() => {
        const getCanyon = async () => {
            const data = await CanyoneeringAPI.fetchCanyonByID(params.canyonID)
            if (data) {
                setCanyon(data)
            }
        }
        getCanyon()
    }, [params.canyonID])

    const deleteCanyon = async () => {
      navigate(`/canyons/${params.canyonID}/delete/`)
    }

    
    // render
    const renderCanyon = () => {
        if (!canyon)
            return null
        return (
            <div>
                <h3>Name: {canyon.canyon_name}</h3>
                <p>Rating: {canyon.rating}</p>
                <p>Length: {canyon.length}</p>
                <p>Gear: {canyon.gear}</p>
                <p>Rappels: {canyon.rappels}</p>
                <p>Water: {canyon.water}</p>
                <p>Flashflood: {canyon.flashflood}</p>
                <p>Access: {canyon.access}</p>
                <p>Location: {canyon.latitude}, {canyon.longitude}</p>
                <p>Description: {canyon.description}</p>
            </div>
        )
    }


    return (
        <div>
            <h1>Canyon Page</h1>
            <hr />
            <div>
        <WeatherApp />
      </div>
      <br></br>
            {renderCanyon()}

            <div>
            <Link to='/'>Home</Link>
            </div>

            <div>
              <button onClick={ deleteCanyon }>Delete Canyon</button>
          
            
            </div>

            </div>

        
    )
}


export default CanyonPage