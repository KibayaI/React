import React from 'react'

function ButtonComponent({color, text, onClick}) {
  return (
    <div>
      <button onClick={onClick} style={{backgroundColor: color}}>{text}</button>
    </div>
  )
}

export default ButtonComponent
