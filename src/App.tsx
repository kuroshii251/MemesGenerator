
import { useRef, useState } from 'react'
import './App.css'
import Hero from './component/home/hero'
import Navbar from './component/home/navbar'
import sound from "./assets/sound.mp3";
import Feature from './component/home/feature';
import Faq from './component/home/faq';
import Footer from './component/home/footer';


function App() {
  const soundCreppy = useRef(new Audio(sound));
  const [soundMute, setSoundMute] = useState<boolean>(false);
  const handleSound = () => {
    
    if(soundCreppy.current.paused){
      soundCreppy.current.play();
      setSoundMute(true);
    } else {
      soundCreppy.current.pause();
      setSoundMute(false);

    }
  }

  
  return (
    <>
    <Navbar/> 
    <div className="fixed p-3">
      <div className="bg-orange-500 p-3 w-full rounded-full">
        <button onClick={handleSound} className='cursor-pointer'>
          <i className={`fa-solid text-black ${soundMute ? "fa-volume" : "fa-volume-xmark"}`}></i>
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
