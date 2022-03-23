import React from 'react'
import Clock from './Clock'
import Message from './Message'

function Person(props) {
  return (
    <div>
      <Message ad={props.name}/>
      <img src={props.img} alt="" />
      <h3>{props.tel}</h3>
      <Clock/>
    </div>
  )
}

export default Person

