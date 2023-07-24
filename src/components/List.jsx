import React from 'react';

import './List.css';



const List=props=>{
    console.log(props.hobbies);
    return(
    <ul className='sports-list'>
    {/* <li>favourite sports list </li>
    <li>My lucky number is {Math.trunc(Math.random()*100)}</li> */}
    {props.hobbies.map(hobby=>
        {
            return(<li  class="checkbox1" key={hobby.id}><input value= {hobby.sport1} type='checkbox'/><label> {hobby.sport1}</label> </li>)
        })}
    
    
        {/* {props.hobbies[0].sport2}  */}
        
    {/* <li>copyright @{new Date().getFullYear()}</li> */}

</ul>)


}
export default List;