import React, { useState, useEffect } from 'react'
import Add from './components/Add'
import Edit from './components/Edit'
import axios from 'axios'


const App = () => {
  const [items, setItems] = useState([])

  const getItems = () => {
    axios.get('http://localhost:8000/api/listing')
    .then((res) => {
      console.log(res.data)
      setItems(res.data)
    })
  }


  const handleCreate = (addItem) => {
    axios.post('http://localhost:8000/api/listing', addItem)
    .then((res) => {
      console.log(res)
      getItems()
    })
  }

  const handleDelete = (event) => {
    axios.delete('http://localhost:8000/api/listing/' + event.target.value)
    .then((res) => {
      console.log(res.data)
      getItems()
    })
  }

  const handleUpdate = (editItem) => {
    axios.put('http://localhost:8000/api/listing/' + editItem.id, editItem)
    .then((res) => {
      console.log(editItem)
      getItems()
    })
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <>
      <h1>App</h1>
      <Add handleCreate={handleCreate} />
      <div className="items">
        {items.map((item) => {
          return (
            <div className="items" key={item.id}>
              <h4>Name: {item.name}</h4>
              <h4>Price: {item.price}</h4>
              <Edit handleUpdate={handleUpdate} id={item.id} item={item} />
              <button onClick={handleDelete} value={item.id}>
                x
              </button>
              </div>
          )
        })}
      </div>
    </>
  )
}

export default App

