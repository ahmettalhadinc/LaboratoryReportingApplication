import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UserStack from './UserStack';
import AuthStack from './AuthStack';
import { Container } from '@mantine/core';
import { useSelector } from 'react-redux';





function RouteConfig() {
  const{isAuth}= useSelector((a)=>a.loginSlice)

  return (
    <Routes>
   
    {isAuth ? 
      <Route path="/*" element={
        <Container>
          <UserStack /> 
        </Container>
      }/>
       
     : 
      <Route path="/*" element={<AuthStack />} />
    }
  </Routes>
  );
}

export default RouteConfig;
