import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './routes/Home/App.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Cadastro from './routes/Cadastro/Cadastro.jsx'
import TipoCadastro from './routes/TipoCadastro/TipoCadastro.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "cadastro",
    element: <Cadastro></Cadastro>
  },
    {
    path: "tipocadastro",
    element: <TipoCadastro></TipoCadastro>
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
