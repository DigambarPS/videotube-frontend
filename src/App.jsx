import { Outlet } from 'react-router-dom';
import './App.css'
import Header from "./components/Header.jsx";
import Button from './components/ui/Button.jsx';
import CommentBox from './components/ui/CommentBox.jsx';
import Input from './components/ui/Input.jsx';

function App() {
  
  return (
    <>
    <Header/>
    <Outlet />
    </>
  )
}

export default App
