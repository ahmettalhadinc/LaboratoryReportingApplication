import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core';

import { Provider } from 'react-redux'
import '@mantine/core/styles.css';
import { store } from './redux/store.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <BrowserRouter>
    <MantineProvider >
      <App />
    </MantineProvider>
    </BrowserRouter>
  </Provider>,
)
