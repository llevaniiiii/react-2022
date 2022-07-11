import { useState } from "react";
import Counter from "./Counter";

export default function CounterParent() {
    const [InputValue, setInputValue] = useState(90);
    const [start, setstart] = useState();


    return (
        <div className="CounterParent">
            <p>{InputValue}</p>
            <input type="number" 
            placeholder="Type Number" value={InputValue} 
            onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => setstart(parseInt(InputValue))}>change start value</button>
             
            <Counter startValue={start} increase={50}/>
            <Counter increase={199} />         
            <Counter startValue={300}/>
        </div>
    )
}