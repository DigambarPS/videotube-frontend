import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Home from './pages/Home.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/Home",
        element:<Home/>
      }
    ]
  }
])

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>
)
