import React, { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom' //Router implement
import 'bootstrap/dist/css/bootstrap.min.css' //Bootstrap importing -- for output
import users from './User'
import Createuser from './CreateUser'
import Updateuser from './UpdateUser'
import Users from './User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Users/>}></Route>
              <Route path='/create' element={<Createuser/>}></Route>
              <Route path='/update/:id' element={<Updateuser/>}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
