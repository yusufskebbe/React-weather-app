import React from 'react'

import '../../../App.css';

import classes from './Navbar.css';



export default function Navbar(props) {
    return (
        <div className={classes.navbar}> 

        <div className="">

        <h1 className="">Weather-App</h1>

        </div>


        <div className="">

        <form className="" onSubmit={(e)=>{
            props.changeweather(e)
        }}>

        <input className={classes.regioninput} placeholder="Enter Location" onChange={(e)=>

           {props.changeregion(e.target.value)} 

        } />

        </form>

            </div>
            
        </div>
    )
}
