import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { homeURL, loginURL, registerURLFund, nationalURL, registerURL, ideaURL, buscarURL } from './constants/url'

import { Layout } from './Pages/layout/layout'
import Home from './Pages/home/Home'
import { National } from './Pages/payment/national'
import Inicio from './Pages/dataInput/logIn'
import Registro from './Pages/dataInput/register'
import RegistroFundacion from './Pages/dataInput/registerFundacion'
import Idea from './Pages/home/Idea'
import Buscar from './Pages/home/Buscar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <BrowserRouter>
          <Routes >
            <Route element={<Layout />}>
              <Route path={homeURL} element={<Home />}></Route>
              <Route path={registerURLFund} element={<RegistroFundacion />}></Route>
              <Route path={nationalURL} element={<National></National>}></Route>
              <Route path={loginURL} element={<Inicio></Inicio>}></Route>
              <Route path={registerURL} element={<Registro></Registro>}></Route>
              <Route path='/' element={<Navigate to={homeURL} />} /> {/* Redirige automáticamente a /home */}
              <Route path={ideaURL} element={<Idea></Idea>}></Route>
              <Route path={buscarURL} element={<Buscar></Buscar>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
  </React.StrictMode>
)
