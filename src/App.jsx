import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {


  return (
    <>
      <Header />
      <main>
        <Outlet/>
        <SideBar />
      </main>
    </>
  )
}

export default App
