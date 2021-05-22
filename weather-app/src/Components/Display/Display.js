import React from 'react'

import '../../App.css';

import classes from './Display.css';

import Auxlary from '../Auxlary/Auxlary';



export default function Display(props) {

    // here we used destructure so we dont have to define specific class like {props.temperature}
    const { temperature, description, location, region, country, wind_speed, pressure, precip, humidity, img } = props.weatherdata;
    
    
    return (
     
      <Auxlary>
    
        <div className={classes.container}>
           
                <div className={classes.downContianer}>

                    <h1 className={classes.country}>{region} , {country}</h1>


                    <h2>{temperature}<sup>o</sup>C , {description}</h2>
                  
                   
            

            </div>

          
        </div>
        <div className={classes.extraInfo}>
                <div className={classes.info}>
                    <p><b>Wind Speed</b>(km/hr)</p>
                    <h2>{wind_speed}</h2>
                </div>

                <div className={classes.info}>
                    <p><b>Preassure</b>(millibar)</p>
                    <h2>{pressure}</h2>
                </div>

                <div className={classes.info}>
                    <p><b>Precipitation</b>(mm)</p>
                    <h2>{precip}</h2>
                </div>

                <div className={classes.info}>
                    <p><b>Humidity</b>(%)</p>
                    <h2>{humidity}</h2>
                </div>

            </div>
        </Auxlary>
    )
}
    
