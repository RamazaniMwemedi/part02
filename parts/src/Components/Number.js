import React from 'react'
import Notes from './Notes'
function Number(props) {
    return (
        <>
            <h2>Numbers</h2>
            {props.peopleToShow.map( people => 
        <Notes key={ people.id } person={people.name} number={people.number} /> 
    )
      
      }
        </>
    )
}

export default Number
