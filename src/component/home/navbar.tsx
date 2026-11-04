import { useState } from "react";

export default function Navbar(){
        const [openNav, setOpenNav] = useState(false);
    return (
        <>
            <nav className="p-7 flex lg:justify-center justify-between bg-black flex-wrap lg:h-h-100 ">
                <div className="col pr-8">
                    <h1 className="text-white font-bold text-xl text-start">MemesGenerator</h1>
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setOpenNav(!openNav)} className="cursor-pointer">
                        <i className="fa-solid fa-bars text-white"></i>
                        </button>
                </div>
                <div className={` w-full lg:flex block lg:items-center ${openNav ? "block" : "hidden"} lg:w-auto lg:mt-0 mt-2 gap-5`}>
                    <div className="lg:mt-0 mt-3">
                        <a href="/" className="text-white font-semibold">Home</a>

                    </div>
                    <div className="lg:mt-0 mt-3">
                        <a href="/meme-generator" className="text-white font-semibold">Meme Generator</a>

                    </div>
                    <div className="lg:mt-0 mt-3">
                 <a href="/sticker-generator" className="text-white font-semibold">Sticker Generator</a>

                    </div>

                    <div className="lg:mt-0 mt-3">
                       <a href="/sticker-generator" className="text-white font-semibold">Sticker Generator</a>

                    </div>

                     <div className="lg:mt-0 mt-3">
                       <a href="/contact" className="text-white font-semibold">Contact</a>

                    </div>
                </div>



        </nav>
        
        </>
    )
}