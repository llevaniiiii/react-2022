import { useEffect, useState } from "react";
import Button from "./Button"

export default function Counter({startValue, increase}) {

    const [number, setnumber] = useState(startValue || 0);
    
    useEffect(() => {
        if (startValue) {
            setnumber(startValue); 
        } else {
            setnumber(0);
        }
    }, [startValue]);
    useEffect (() => {
        var interval = setInterval(() => {
            setnumber(a => a + 1);
        }, 1000);
        return(
            () => {
                clearInterval(interval);
            }
        )
    }, [])

    return (
        <div className="counter">
            <h3>counter</h3>
            <p>{number}</p>
            <Button onClick={() => setnumber(number + (increase || -20))} text='Increase'/>
        </div>
    )
}