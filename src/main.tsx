import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MemeGeneratorPage from './pages/memesgenerator/main.tsx'
import Templates1Page from './pages/memesgenerator/templates/templates1.tsx'
import Templates2Page from './pages/memesgenerator/templates/templates2.tsx'
import Templates3Page from './pages/memesgenerator/templates/templates3.tsx'
import Templates4Page from './pages/memesgenerator/templates/templates4.tsx'
import Templates5Page from './pages/memesgenerator/templates/templates5.tsx'
import Templates6Page from './pages/memesgenerator/templates/templates6.tsx'
import Templates7Page from './pages/memesgenerator/templates/templates7.tsx'
import Templates8Page from './pages/memesgenerator/templates/templates8.tsx'
import Templates9Page from './pages/memesgenerator/templates/templates9.tsx'
import Templates15Page from './pages/memesgenerator/templates/templates15.tsx'
import Templates14Page from './pages/memesgenerator/templates/templates14.tsx'
import Templates13Page from './pages/memesgenerator/templates/templates13.tsx'
import Templates10Page from './pages/memesgenerator/templates/templates10.tsx'
import Templates11Page from './pages/memesgenerator/templates/templates11.tsx'
import Templates12Page from './pages/memesgenerator/templates/templates12.tsx'
import Templates16Page from './pages/memesgenerator/templates/templates16.tsx'
import Templates17Page from './pages/memesgenerator/templates/templates17.tsx'
import Templates18Page from './pages/memesgenerator/templates/templates18.tsx'
import Templates19Page from './pages/memesgenerator/templates/templates19.tsx'
import Templates20Page from './pages/memesgenerator/templates/templates20.tsx'
import Templates21Page from './pages/memesgenerator/templates/templates21.tsx'
import Templates22Page from './pages/memesgenerator/templates/templates22.tsx'
import Templates23Page from './pages/memesgenerator/templates/templates23.tsx'
import Templates24Page from './pages/memesgenerator/templates/templates24.tsx'
import Templates25Page from './pages/memesgenerator/templates/templates25.tsx'
import ErrorPage from './pages/error/main.tsx'
import Templates30Page from './pages/memesgenerator/templates/templates30.tsx'
import Templates29Page from './pages/memesgenerator/templates/templates29.tsx'
import Templates28Page from './pages/memesgenerator/templates/templates28.tsx'
import Templates27Page from './pages/memesgenerator/templates/templates27.tsx'
import Templates26Page from './pages/memesgenerator/templates/templates26.tsx'
import StickerGeneratorPage from './pages/stickergenerator/main.tsx'
import StickerTemplates1 from './pages/stickergenerator/list-templates/templates1.tsx'
import StickerTemplates2 from './pages/stickergenerator/list-templates/templates2.tsx'
import StickerTemplates3 from './pages/stickergenerator/list-templates/templates3.tsx'
import StickerTemplates4 from './pages/stickergenerator/list-templates/templates4.tsx'
import StickerTemplates5 from './pages/stickergenerator/list-templates/templates5.tsx'
import StickerTemplates6 from './pages/stickergenerator/list-templates/templates6.tsx'
import StickerTemplates7 from './pages/stickergenerator/list-templates/templates7.tsx'
import StickerTemplates8 from './pages/stickergenerator/list-templates/templates8.tsx'
import StickerTemplates9 from './pages/stickergenerator/list-templates/templates9.tsx'
import StickerTemplates10 from './pages/stickergenerator/list-templates/templates10.tsx'
import StickerTemplates11 from './pages/stickergenerator/list-templates/templates11.tsx'
import StickerTemplates15 from './pages/stickergenerator/list-templates/templates15.tsx'
import StickerTemplates14 from './pages/stickergenerator/list-templates/templates14.tsx'
import StickerTemplates13 from './pages/stickergenerator/list-templates/templates13.tsx'
import StickerTemplates12 from './pages/stickergenerator/list-templates/templates12.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/meme-generator' element={<MemeGeneratorPage/>}/> 
      <Route path='/meme-generator/1' element={<Templates1Page/>}/>
      <Route path='/meme-generator/2' element={<Templates2Page/>} />
      <Route path='/meme-generator/3' element={<Templates3Page/>} />
      <Route path='/meme-generator/4' element={<Templates4Page/>} />
      <Route path='/meme-generator/5' element={<Templates5Page/>} />
      <Route path='/meme-generator/6' element={<Templates6Page/>} />
      <Route path='/meme-generator/7' element={<Templates7Page/>} />
      <Route path='/meme-generator/8' element={<Templates8Page/>} />
      <Route path='/meme-generator/9' element={<Templates9Page/>} />
      <Route path='/meme-generator/10' element={<Templates10Page/>} />
      <Route path='/meme-generator/11' element={<Templates11Page/>} />
      <Route path='/meme-generator/12' element={<Templates12Page/>} />
      <Route path='/meme-generator/13' element={<Templates13Page/>} />
      <Route path='/meme-generator/14' element={<Templates14Page/>} />
      <Route path='/meme-generator/15' element={<Templates15Page/>} />
      <Route path='/meme-generator/16' element={<Templates16Page/>} />
      <Route path='/meme-generator/17' element={<Templates17Page/>} />
      <Route path='/meme-generator/18' element={<Templates18Page/>} />
      <Route path='/meme-generator/19' element={<Templates19Page/>} />
      <Route path='/meme-generator/20' element={<Templates20Page/>} />
      <Route path='/meme-generator/21' element={<Templates21Page/>} />
      <Route path='/meme-generator/22' element={<Templates22Page/>} />
      <Route path='/meme-generator/23' element={<Templates23Page/>} />
      <Route path='/meme-generator/24' element={<Templates24Page/>} />
      <Route path='/meme-generator/25' element={<Templates25Page/>} />
      <Route path='/meme-generator/26' element={<Templates26Page/>} />
      <Route path='/meme-generator/27' element={<Templates27Page/>} />
      <Route path='/meme-generator/28' element={<Templates28Page/>} />
      <Route path='/meme-generator/29' element={<Templates29Page/>} />
      <Route path='/meme-generator/30' element={<Templates30Page/>} />
      <Route path='/error' element={<ErrorPage/>}/>
      <Route path='/sticker-generator/' element={<StickerGeneratorPage/>}/>
      <Route path='/sticker-generator/1' element={<StickerTemplates1/>} />
      <Route path='/sticker-generator/2' element={<StickerTemplates2/>} />
      <Route path='/sticker-generator/3' element={<StickerTemplates3/>} />
      <Route path='/sticker-generator/4' element={<StickerTemplates4/>} />
      <Route path='/sticker-generator/5' element={<StickerTemplates5/>} />
      <Route path='/sticker-generator/6' element={<StickerTemplates6/>} />
      <Route path='/sticker-generator/7' element={<StickerTemplates7/>} />
      <Route path='/sticker-generator/8' element={<StickerTemplates8/>} />
      <Route path='/sticker-generator/9' element={<StickerTemplates9/>} />
      <Route path='/sticker-generator/10' element={<StickerTemplates10/>} />
      <Route path='/sticker-generator/11' element={<StickerTemplates11/>} />
      <Route path='/sticker-generator/12' element={<StickerTemplates12/>} />
      <Route path='/sticker-generator/13' element={<StickerTemplates13/>} />
      <Route path='/sticker-generator/14' element={<StickerTemplates14/>} />
      <Route path='/sticker-generator/15' element={<StickerTemplates15/>} />



    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
