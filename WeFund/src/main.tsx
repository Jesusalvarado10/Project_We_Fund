import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { homeURL, loginURL, registerURLFund, nationalURL, registerURL, ideaURL, searchURL, profileURL } from './constants/url'

import { Layout } from './Pages/layout/layout'
import Home from './Pages/home/Home'
import { National } from './Pages/payment/national'
import Inicio from './Pages/dataInput/logIn'
import Registro from './Pages/dataInput/register'
import RegistroFundacion from './Pages/dataInput/registerFundacion'
import Idea from './Pages/home/Idea'
import Perfil from './Pages/Menu/Perfil'
import Impacto from './Pages/Menu/Impacto'
import Error404 from './Pages/Menu/Error404'
import Search from './Pages/home/search'

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
              <Route path='/perfil' element={<Perfil></Perfil>}></Route>
              <Route path='/impacto' element={<Impacto></Impacto>}></Route>
               <Route path={searchURL} element={<Search />} />
              <Route path={profileURL} element={<Perfil />} />
              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
  </React.StrictMode>
)
