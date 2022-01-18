import React from 'react'

const Notes = (props) => {
  return (
    <li>{props.person} <b>{props.number}</b> </li>
  )
}

export default Notes