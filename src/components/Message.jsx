import React from 'react'
import Clock from './Clock'

function Message(props) {
  return (
    <div>
      Hello I am {props.ad}
      <Clock/>
    </div>
  )
}

export default Message

