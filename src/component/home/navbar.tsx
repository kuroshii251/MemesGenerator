import { useState } from "react";

export default function Navbar(){
        const [openNav, setOpenNav] = useState(false);
    return (
        <>
        <nav className="flex lg:justify-center justify-between items-center bg-black p-6">
            <div className="flex justify-between align-items-center items-center">
                <div className="col pr-8">
                    <h1 className="text-white font-bold text-xl text-start">MemesGenerator</h1>
                </div>
                <div className="col">
                <div className="block lg:hidden">
                    <button onClick={() => setOpenNav(!openNav)}>
                        <i className="fa-solid fa-bars text-white"></i>
                        </button>
                </div>
                <ul className={`flex justify-center items-center space-x-5 ${openNav ? "block" : "hidden"} lg:flex`} >
                    <li>
                        <a href="/" className="text-white font-semibold">Home</a>
                    </li>
                    <li>
                        <a href="/image-meme-generator" className="text-white font-semibold">Meme Generator</a>
                    </li>
                    <li>
                        <a href="/sticker-generator" className="text-white font-semibold">Sticker Generator</a>
                    </li>
                    <li>
                        <a href="/contact" className="text-white font-semibold">Contact</a>
                    </li>
                </ul>
                </div>


            </div>

        </nav>
        
        </>
    )
}