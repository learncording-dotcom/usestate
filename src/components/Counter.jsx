import {useState} from 'react';
import '../App.css';
function Counter({name , count , setCount}){
    //const [count , setCount] = useState(0);
    const [message , setM]=useState("");
    function check(value){
        if (value % 7 ===0){
            setM("Number is divisable by 7 :    " + value)
        }
    }
    function add(){
        const newc = count + 4;
        setCount(newc);
        check(newc);
    }
    function minus(){
        const newc = count - 3;
        setCount(newc);
        check(newc);
    }
    return(
        <div className="counter">
        <h2>Student Profile </h2>
        <h1>Hello {name} </h1>
        <h3>Count: {count}</h3>
        <button onClick={add} className="ticks">Add</button>
        <button onClick={minus} className="ticks">Remove</button>
        <br />
        <label>{message}</label>
        </div>
    );

}
export default Counter;