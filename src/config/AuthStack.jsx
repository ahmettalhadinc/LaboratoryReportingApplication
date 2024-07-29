import React from 'react'
import {Routes, Route,Navigate} from 'react-router-dom'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
function AuthStack() {
  return (
    <div> <Routes>
            
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<SignUp/>}/>
    <Route path="*" element={<Navigate to="/" />} /> 

</Routes></div>
  )
}

export default AuthStack