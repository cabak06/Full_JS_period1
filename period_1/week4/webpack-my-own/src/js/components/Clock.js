import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";

class Clock extends Component {
    constructor() {  
        super();
        } 

        displayTime() {
            let actualTime = new Date().toLocaleTimeString();
            let [time, setTime] = useState(actualTime);
          
            useEffect(() => {
              const interval = setInterval(() => {
                let updatedTime = new Date().toLocaleTimeString();
                  setTime(updatedTime);}, 1000);
              
                  return () => clearInterval(interval);
          }, []);
            return <h3>{time}</h3>;
         }
    
        render(){
            return (
                <div>
                <h3>Display time</h3>   
                <this.displayTime/>
                </div>
    )
  }
}  

const wrapper = document.getElementById("clock");
wrapper ? ReactDOM.render(<Clock />, wrapper) : false;

export default Clock;