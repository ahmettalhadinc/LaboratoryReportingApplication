import React from 'react'
import {Routes, Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Reports from '../pages/Reports'
import ReportDefinition from '../pages/ReportDefinition'

function UserStack() {
  return (
    <div>
       
        <Routes>
            
            <Route path='/home' element={<Home/>}/>
            <Route path='/reports' element={<Reports/>}/>
            <Route path='/report-definition' element={<ReportDefinition/>}/>
            <Route path="*" element={<Navigate to="/home" />} />

        </Routes>
    </div>
  )
}

export default UserStack