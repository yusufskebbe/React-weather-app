import React, { Component } from 'react';
import Axios from 'axios';
import Display from './Components/Display/Display';
import  './App.css';
import Navbar from './Components/Display/Navbar/Navbar';



import './App.css';

class App extends Component {




  state={

    coords:{
      latitude:45,
      longitude:60
    },
    data:{},
    inputData:""


  }




  componentDidMount(){


    // get device location 

    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition((position)=>{

        let newCoords = {

          latitude:position.coords.latitude,
          longitude:position.coords.longitude,

        }

        this.setState({coords:newCoords});

        //API call

        Axios.get(`http://api.weatherstack.com/current?access_key=3e1382e3c141ebab6df3e9a4e84ed27c&query=${this.state.coords.latitude},${this.state.coords.longitude}`)
        .then(response=>{


          console.log(response.data)
          let weatherData ={

            location:response.data.location.name,
            temperature:response.data.current.temperature,
            description:response.data.current.weather_descriptions[0],
            region:response.data.location.region,
            country:response.data.location.country,
            wind_speed:response.data.current.wind_speed,
            pressure:response.data.current.pressure,
            precip:response.data.current.precip,
            humidity:response.data.current.humidity,
            img:response.data.current.weather_icons

          }

          this.setState({data:weatherData});

        })




        
      });

    }else{
      console.log("not supported")

    }



  }

  // track the input field

  // value = comes from Navbar e.target.value  
  
  change = (value) => {

   this.setState({inputData:value})

  }


  changeWeather = (event) =>{

    event.preventDefault(); // not allow you to reload the application

    Axios.get(`http://api.weatherstack.com/current?access_key=3e1382e3c141ebab6df3e9a4e84ed27c&query=${this.state.inputData}`).then(response=>{

      
      let weatherData ={

        location:response.data.location.name,
        temperature:response.data.current.temperature,
        description:response.data.current.weather_descriptions[0],
        region:response.data.location.region,
        country:response.data.location.country,
        wind_speed:response.data.current.wind_speed,
        pressure:response.data.current.pressure,
        precip:response.data.current.precip,
        humidity:response.data.current.humidity,
        img:response.data.current.weather_icons

      }

      this.setState({data:weatherData});

    }).catch(error=>{

      console.log(error);

    })
  }


  render() {
    return (

      <div className="App">


      <div className="container"> 
      <Navbar changeweather={this.changeWeather} changeregion = {this.change}></Navbar>
    
      
      <Display weatherdata={this.state.data}></Display>
      </div>

      </div>
    );
  }
}

export default App;
