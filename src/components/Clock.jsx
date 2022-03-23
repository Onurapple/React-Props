import React from 'react'

function Clock() {
  const date = new Date()
    return (
    <div>
        <br />
      <p> 
      Time: {`${date.getHours().toString().padStart(2, 0)} 
      : ${date.getMinutes().toString().padStart(2, 0)}
         : ${date.getSeconds().toString().padStart(2, 0)}`}
      </p>
      <p> 
      Date: {`${date.getDay().toString().padStart(2, 0)}
       . ${(date.getMonth()+1).toString().padStart(2, 0)}
         . ${date.getFullYear().toString().padStart(2, 0)}`}
      </p>
    </div>
  )
}

export default Clock
