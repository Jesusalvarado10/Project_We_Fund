import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { homeURL } from './constants/url'
import { Home } from './Pages/Home'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
 <BrowserRouter>
          <Routes >
            {/* <Route element={<Layout />}> */}
              <Route path={homeURL} element={<Home />}></Route>
             
              <Route path='/' element={<Navigate to={homeURL} />} /> {/* Redirige automáticamente a /home */}
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
  </React.StrictMode>
)
