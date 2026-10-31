import { useState } from "react";

export default function Navbar(){
        const [openNav, setOpenNav] = useState(false);
    return (
        <>
        <nav className="flex justify-center items-center bg-black p-5">
            <div className="flex justify-between align-items-center items-center">
                <div className=" col pr-5">
                    <h1 className="text-white font-bold text-xl text-start">MemesGenerator</h1>
                </div>
                <div className="col">
                <div className="block lg:hidden">
                    <button onClick={() => setOpenNav(!openNav)}>
                        <i className="fa-solid fa-bars text-white"></i>
                        </button>
                </div>
                <ul className={`flex space-x-5 ${openNav ? "block" : "hidden"} lg:flex`} >
                    <li>
                        <a href="/" className="text-white font-semibold">Home</a>
                    </li>
                    <li>
                        <a href="" className="text-white font-semibold">Image Meme Generator</a>
                    </li>
                    <li>
                        <a href="" className="text-white font-semibold">Sticker Generator</a>
                    </li>
                    <li>
                        <a href="" className="text-white font-semibold">Contact</a>
                    </li>
                </ul>
                </div>


            </div>

        </nav>
        
        </>
    )
}