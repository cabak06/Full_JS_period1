import React, { Component, useState} from "react";
import ReactDOM from "react-dom";



class Inc_Dre extends Component {
    constructor() {  
        super();
        } 

    incrementAndDecrement(prop) {
        const [count, setCount] = useState(prop.init); 
            return (
                <div>
                <p> Click-Value {count} </p>
                <button onClick={() => setCount(count + prop.init)}>
                 Incremental/Click
                </button>     
                <button onClick={() => setCount(count - prop.init)}>
                 Decremental/Click
                </button>
                </div>
     );
}
    render(){
        return (
            <div>
            <h3>inc/decrement Exercise</h3>   
            <this.incrementAndDecrement init = {1}/>
            </div>
    )
  }
}  

const wrapper = document.getElementById("increment_decrement");
wrapper ? ReactDOM.render(<Inc_Dre />, wrapper) : false;

export default Inc_Dre;
