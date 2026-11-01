import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MemeGeneratorPage from './pages/memesgenerator/main.tsx'
import Templates1Page from './pages/memesgenerator/templates/templates1.tsx'
import Templates2Page from './pages/memesgenerator/templates/templates2.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/meme-generator' element={<MemeGeneratorPage/>}/> 
      <Route path='/meme-generator/1' element={<Templates1Page/>}/>
      <Route path='/meme-generator/2' element={<Templates2Page/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
