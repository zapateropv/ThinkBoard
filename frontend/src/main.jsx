import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Form from '../pages/Form.jsx';
import './index.css'

const router = createBrowserRouter([
  {path: "/notes", element: <App />},
  {path: "/notes/create", element: <Form />},
  {path: "notes/update/:id", element: <Form />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router}/>
  </StrictMode>,
)
