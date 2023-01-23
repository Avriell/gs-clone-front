import React, { useState, useEffect } from 'react'
import Add from './components/Add'
import Edit from './components/Edit'
import Navbar from './components/Navbar'
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

      <div className="items">
        <Navbar/>
        <div className="mt-8 grid grid-rows-2 lg:grid-cols-4 gap-10">
        {items.map((item) => {
          return (
            <div className="items" key={item.id}>
               <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg-white max-w-sm transform bg-blue-400 transition duration-500 hover:scale-110 hover:bg-blue-600">
                  <a href="#!">
                    <img className="rounded-t-lg" src={item.image}/>
                    </a>
                    <div className="p-6">
                      <h5 className="text-gray-900 text-xl font-medium mb-2">{item.name}</h5>
                      <p className="text-black-700 text-base mb-4 font-bold">
                        ${item.price}
                      </p>
                      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add To Cart</button>
                      <Edit handleUpdate={handleUpdate} id={item.id} item={item} />
              <button className="bg-indigo-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md" onClick={handleDelete} value={item.id}>
               REMOVE
              </button>
              {/* <Add handleCreate={handleCreate} /> */}
                    </div>
                </div>
              </div>            
            </div>
          )
        })}
        </div>
      </div>
    </>
  )
}

export default App

