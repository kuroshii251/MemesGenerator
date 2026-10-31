
import { useState } from 'react'
import './App.css'
import Hero from './component/home/hero'
import Navbar from './component/home/navbar'
import sound from "./assets/sound.mp3";
import Feature from './component/home/feature';
import Faq from './component/home/faq';
import Footer from './component/home/footer';

function App() {
  const [soundMute, setSoundMute] = useState(false);
const soundCreppy = new Audio(sound);
  const handleSound = () => {
    if(soundCreppy){
    soundCreppy.play(); 

    } else {
      setSoundMute(soundMute);
      soundCreppy.play(); 
    }
  }

  
  return (
    <>
    <Navbar/> 
    <div className="fixed p-3">
      <div className="bg-white p-3 w-full rounded-full">
        <button onClick={handleSound} className='cursor-pointer'>
          <i className={`fa-solid text-black ${soundMute ? "fa-volume-xmark" : "fa-volume "}`}></i>
        </button>
      </div>
    </div>
    <Hero/>
    <Feature/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default App
