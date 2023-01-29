import React from 'react'

function Alert(props) {
 const capitalize = (word) =>{

  const lowcase = word.toLowerCase()
    return lowcase.charAt(0).toUpperCase() + lowcase.slice(1)
 } 
    return (
<>
<div style={{height:'50px'}}> 
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}! </strong>{props.alert.msg}
</div>}
</div>
</>
  )
    }
export default Alert
