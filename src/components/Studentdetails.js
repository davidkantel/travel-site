import React from 'react'

function Studentdetails(props) {
  return (
    <>
    <div className='bg-warning p-5 mt-2'>
        <h4>Student Name: {props.name}</h4>
        <h4>Student Email: {props.email}</h4>
        <h4>Student Age: {props.age}</h4>

    </div>
    
    </>
  )
}

export default Studentdetails