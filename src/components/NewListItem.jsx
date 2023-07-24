import React from "react";
import "./NewListItem.css";

const NewListItem= props =>
{
    let enteredSport=" ";
    const addSportHandler=(event)=>
    {
        event.preventDefault(); //stop button from interacting with server
    
   
    const newsport={
        id:(Math.trunc(Math.random()*100)).toString(),
        sport1:enteredSport   
    }
    console.log(newsport);
    props.onAddSport(newsport);
}
    

    const textSportHandler=(event)=>{
        enteredSport=event.target.value;
      }
return(
    <form className="new-sport" onSubmit={addSportHandler}>
        <input type="text" onChange={textSportHandler}></input>
        <button type="submit">+</button>
    </form>
    )

}
export default NewListItem;
