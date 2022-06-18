import React from 'react'

export default function Resetfunction() {
    const styleobj = {
        marginTop:'4px',
        height:'50px',
        width:'50px',
        padding:'6px',
        marginLeft:'35px'
      }
      
  return (
    <div>
        <button style={styleobj} type="submit" onClick={alert('working...')}>Reset</button>
    </div>
  )
}
