import React, { useState, useEffect } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {
  let emptyItem = { name: '', price: '' }
  const [item, setItem] = useState(emptyItem)


const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(item)
}

  return (
    <>
      <form  onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={item.name} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="price">Price: </label>
        <input type="number" name="price" value={item.price} onChange={handleChange} />
        <input type="submit"/>
        <label htmlFor="image">Image: </label>
        <input type="text" name="image" value={item.image} onChange={handleChange} />
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add
