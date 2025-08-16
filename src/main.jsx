import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import './index.css'
// import App from './App.jsx'

import Homepage from './pages/homepage/Homepage.jsx'
import TheUs from './pages/theUs/TheUs.jsx'
// import TheUs from './pages/theUs/TheUs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      
  
    {/* <Homepage />
    <TheUs /> */}
  

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/theus' element={<TheUs />} />
      </Routes>   
    </BrowserRouter>
  </StrictMode>,
)
