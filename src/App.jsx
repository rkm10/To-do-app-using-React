import './App.css'
import React, { useState } from 'react'

function App() {

  let [todoList, updateTodo]
    = useState(
      [
        {
          id: 1,
          task: 'Learn React'
        },

        {
          id: 2,
          task: 'Master React in 10 days'
        }
      ]
    )

  return (


    <div className="container mt-5 w-50">
      <h3 className='text-center'>To-Do App using React</h3>
      <div className="input-group">
        <input className="form-control" type="text" />
        <button button className="btn btn-primary">Add</button>
      </div>
      <ul className="list-group mt-4">
        <li className="list-group-item">
          <p>todo 1</p>
          <button>❌</button>
        </li>
        <li className="list-group-item">
          <p>todo 2</p>
          <button>❌</button>
        </li>
      </ul>
    </div>


  )
}

export default App