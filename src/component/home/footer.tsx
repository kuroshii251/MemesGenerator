
export default function Footer(){
    return (
        <>
        <div className="col pt-30">
   <div className=" w-full pt-10 bg-zinc-950 h-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 space-y-10  lg:place-items-center p-5">
                <div className="">
                <h1 className="font-bold text-3xl text-orange-500">MemesGenerator</h1>
                <p className="font-normal poppins text-sm text-white w-100">Meme generator is a website which user can create meme from the templates.</p>
                </div>
                <div className="col lg:p-3">
                    <h1 className="font-bold text-orange-500 text-xl">Menu</h1>
                    <ul>
                        <li>
                            <a href="/" className="font-semibold text-white text-sm">Home</a>
                        </li>
                        <li>
                            <a href="/meme-generator" className="font-semibold text-white text-sm">Meme Generator</a>
                        </li>
                        <li>
                            <a href="/sticker-generator" className="font-semibold text-white text-sm">Sticker Generator</a>

                        </li>
                        <li>
                            <a href="/contact" className="font-semibold text-white text-sm">Contact</a>
                        </li>
                    </ul>
                </div>
                 
              
            </div>
             <div className="flex justify-center pt-10 items-center align-items-center p-3">
                <p className="text-white text-center mx-auto justify-center pl-0 font-semibold">Copyright @2026 by Kuro</p>
            </div>
            
            
        </div>
        </div>
     
        </>
    )
}