import { Outlet } from 'react-router-dom';
import './App.css'
import Header from "./components/Header.jsx";
import ThemeContextProvider from './context/ThemeContextProvider.jsx';
import { AuthContextProvider } from './context/AuthContextProvider.jsx'; 
function App() {
  
  return (
    <>
    <ThemeContextProvider>
    <AuthContextProvider>
    <Header/>
    <Outlet />
    </AuthContextProvider>
    </ThemeContextProvider>
    </>
  )
}

export default App
