import React, { Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";

class Joke extends Component {
    constructor() {  
        super();
        } 
    
    
      GetChuckJoke(){

            let urlChuck =  'https://api.chucknorris.io/jokes/random'; 
            let urlDad = 'https://icanhazdadjoke.com/';
           
            const [fetchedJoke, setFetchedJoke] = useState([]);
            const[dadJoke, setDadJoke] = useState([]);
           
           
            const jokeHandler = () => {
                fetch(urlChuck)
                .then(res => res.json())
                .then(data => {
                setFetchedJoke(data);
                });
            };
            
           
            useEffect(() => {
             const interval = setInterval(() => {
               setDadJoke(
                 fetch(urlDad, {
                   headers: new Headers({
                     accept: "application/json"
                   })
                 })
                   .then(res => res.json())
                   .then(data => {
                     setDadJoke(data);
                   })
               );
             }, 10000);
             return () => clearInterval(interval);
           }, []);
           
           
            return (
              <div>
              <button onClick={jokeHandler}>Click for Chuck-Joke</button>
              <p>{fetchedJoke.value}</p>
              <h3>Here Comes the Dad Jokes every 10'th second</h3>
              <p>{dadJoke.joke}</p>
              
              </div>
            );
           
           }


           render(){
            return (
                <div>
                <h3>Chuck&Dad Joke</h3>     
                <this.GetChuckJoke/>
                </div>
                )   
           }

    }

     const wrapper = document.getElementById("joke");
     wrapper ? ReactDOM.render(<Joke />, wrapper) : false;
     
     export default Joke;