import React, { useState } from "react"
import "./Heading.css"

const Heading=()=>
{
    const name="SANVI";

const hours=new Date().getHours();

let greeting="";
const now=new Date().toLocaleTimeString();
const [time,setTime]=useState(now);

const updateTime=()=>
{
    const newtime=new Date().toLocaleTimeString();
    setTime(newtime);
}
setInterval(updateTime,1000);

if(hours<12)
{
    greeting="Good Morning";
}
else if(hours<17)
{
    greeting="Good Afternoon";
}
else if(hours<22)
{
    greeting="Good Evening";
}
else
{
    greeting="Good Night";
}
    return(<div>
    <h1 className="heading">{greeting} {name} <br/> Schedule for the Day !!</h1>
    <p id="para1" onClick={updateTime}>{new Date().toLocaleTimeString()}</p>
    </div>)
}

export default Heading;
