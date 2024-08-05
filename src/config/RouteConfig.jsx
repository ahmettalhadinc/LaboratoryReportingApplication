import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mantine/core';

import UserStack from './UserStack';
import AuthStack from './AuthStack';
import { setAuthFromStorage } from '../redux/loginSlice';


function RouteConfig() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.loginSlice);

  useEffect(() => {
    
    dispatch(setAuthFromStorage());
  }, [dispatch]);

  return (
    <Routes>
      {isAuth ? (
        <Route
          path="/*"
          element={
            <Container>
              <UserStack />
            </Container>
          }
        />
      ) : (
        <Route path="/*" element={<AuthStack />} />
      )}
    </Routes>
  );
}

export default RouteConfig;
