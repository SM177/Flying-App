import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/hOME.JSX'
import Search from './Components/Search'
import Support from './Components/Support'
import Info from './Components/Info'
import Lounge from './Components/Lounge'
import Travelers from './Components/Travelers'
import Subscribers from './Components/Subscribers'
import Footer from './Components/Footer'




const App = () => {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Search/>
    <Support/>
    <Info/>
    <Lounge/>
    <Travelers/>
    <Subscribers/>
    <Footer/>
    </div>
    )
}

export default App