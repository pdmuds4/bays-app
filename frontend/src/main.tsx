// import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { UIProvider } from '@yamada-ui/react';

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <UIProvider>
        <App />
      </UIProvider>
    </BrowserRouter>
)
