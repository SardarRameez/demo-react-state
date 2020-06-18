import React, {useState} from 'react';
import './Room.css'

function Room(){
    let [isLit,setLit]=useState(true);
    let [temp,setTemp]=useState(22);
    return (
        <div className={"grid " + (isLit ?"On":"Off")}>
            <div className="room">
                <h3>Room light is {isLit? "On": "Off"}</h3>
                <button onClick={()=>{setLit(true)}} className="btn">Light On</button>
                <button onClick={()=>{setLit(false)}} className="btn">Light Off</button>
            </div>
            <div className="temp">
                <h3>Room Temp is {temp? temp : NaN} &#8451;</h3>
                <button onClick={()=>{setTemp(++temp)}} className="btn">+</button>
                <button onClick={()=>{setTemp(--temp)}} className="btn">-</button>
            </div>
        </div>
    );
}

export default Room;