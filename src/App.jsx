import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import RouteConfig from './config/RouteConfig';




function App() {
  const location = useLocation(); 
  


  const shouldShowHeader = !['/', '/register'].includes(location.pathname)

  return (
    <>
      {shouldShowHeader && <Header />} 
      
        <RouteConfig />
      
    </>
  );
}

export default App;
