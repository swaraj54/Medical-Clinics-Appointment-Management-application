import React from 'react'

const DoctorBook = (props) => {
    const {_id, name, speciality,availability,cost,image} = props;
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default DoctorBook;