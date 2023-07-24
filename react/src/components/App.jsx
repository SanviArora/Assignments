import React, {useState}  from 'react';
import Heading from "./Heading";
import List from './List';
import NewListItem from './NewListItem';




const App=()=>{
    const [sport_hobbies,setSportHobbies]=useState([{id:1,sport1:"WAKE UP!!"}])

    const addNewSportHandler=(newsport)=>
    {
        setSportHobbies(sport_hobbies.concat(newsport));
        console.log(sport_hobbies);
        
    }
    
    

    return(
        <div>
        <Heading/>
        <NewListItem onAddSport={addNewSportHandler}/>
        <List hobbies={sport_hobbies}/>
        

    </div>
    );
}
export default App;

