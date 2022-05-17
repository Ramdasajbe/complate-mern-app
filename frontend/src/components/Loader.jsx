import React from 'react'

export default function Loader({varient,color}) {
  return (
    <div className={`spinner-${varient} text=${color}`} ></div>
  )
}
