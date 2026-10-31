import { useState } from "react";

export default function Faq(){
    const [dropdown, setDropdown] = useState(0);

    const handleDropdown = (id) => {
        if(dropdown){
        setDropdown(id)

        }
    }

 

    return (
        <>
        <div className="flex-1 justify-center items-center h-screen">
            <h1 className="font-bold text-6xl text-center text-orange-600">FAQ</h1>
            <p className="text-xl text-orange-400 font-semibold text-center">Frequently Ask Question</p>
            <div className="flex flex-col justify-center pt-10  mx-auto items-center">
 <div className="p-5 bg-orange-700 w-150 border-b-black border-2">
                <div className="flex justify-between items-center">
  <h1 className="font-semibold text-lg">What is meme generator?</h1>
                <button className="cursor-pointer" onClick={() => handleDropdown(0)}>
                    <i className="fa-solid fa-chevron-down"></i>
                    </button> 
                </div>
                 <div className={`${dropdown === 0 ? "block" : "hidden" } col pt-5 text-sm`}>
                    <p>Meme generator is a website which user can create meme from the templates.</p>
                    </div>
             </div>
             <div className="p-5 bg-orange-700 w-150 border-2 border-b-black">
                <div className="flex justify-between items-center">
  <h1 className="font-semibold text-lg">How to use memes templates?</h1>
                <button className="cursor-pointer" onClick={() => handleDropdown(2)}>
                    <i className="fa-solid fa-chevron-down"></i>
                    </button>
                   
                </div>
                 <div className={`${dropdown === 2 ? "block" : "hidden" } col pt-5 text-sm`}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae accusantium magnam fugit nemo voluptas, magni velit, nobis perspiciatis labore cupiditate sit odio iure molestias fugiat placeat. Nulla asperiores natus exercitationem.</p>
                    </div>
            </div>
            </div>
        </div>
        </>
    )
}
