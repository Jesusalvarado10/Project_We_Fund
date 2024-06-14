import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { homeURL, nationalURL } from './constants/url'

import { Layout } from './Pages/layout/layout'
import Home from './Pages/home/Home'
import { National } from './Pages/payment/national'
import Inicio from './Pages/IniciarSesion/IniciarSesion'
import Registro from './Pages/IniciarSesion/Registro'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <BrowserRouter>
          <Routes >
            <Route element={<Layout />}>
              <Route path={homeURL} element={<Home />}></Route>
              <Route path={nationalURL} element={<National></National>}></Route>
              <Route path='/login' element={<Inicio></Inicio>}></Route>
              <Route path='/registro' element={<Registro></Registro>}></Route>
              <Route path='/' element={<Navigate to={homeURL} />} /> {/* Redirige automáticamente a /home */}
            </Route>
          </Routes>
        </BrowserRouter>
  </React.StrictMode>
)
