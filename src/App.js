import React from 'react'
import Home from './Pages/Home'
import {Routes,Route} from "react-router-dom"
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Gallery from './Pages/Gallery'
import Appbar from './Components/Appbar/Appbar'
import Footer from './Components/Footer/Footer'
import Write from './Pages/Write'
function App() {
  return (
   <div className='App'>
    <div className='header'><Appbar/></div>
    <div className='main-body'>
        <Routes>
                <Route  path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/gallery' element={< Gallery/>}></Route>
                <Route exact path='/contacts' element={< Contacts/>}></Route>
                <Route exact path='/write' element={< Write/>}></Route>
        </Routes>
      </div>
      <Footer/>
   </div>
  )
}

export default App
