import React, { useState } from 'react'

const Edit = (props) => {
  let emptyItem = { name: '', age: '' }
  const [item, setItem] = useState({...props.item})

  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(item)
  }

  return (
    <>
      <details>
        <summary>Edit Listing</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            name="price"
            value={item.age}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit
