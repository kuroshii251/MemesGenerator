export default function Feature() {
    return (
        <>
        <div className="flex-1 justify-center items-center h-screen">
            <h1 className="text-5xl text-center font-bold text-orange-500" id="featured">FEATURED</h1>
            <div className="flex space-x-5 items-center justify-center pt-20">
                <div className="bg-zinc-950 border-2 border-orange-500 p-5 shadow shadow-sm h-80 w-100 p-3 rounded-lg  ">
                    <div className="flex p-3 justify-center align-items-center w-40 h-20 mx-auto">
                        <i className="fa-solid fa-image text-5xl  text-orange-500 flex justify-center"></i>
                    </div>
                    <h1 className="font-bold text-2xl text-orange-500 font-bold text-center pt-7">Memes Image Generator</h1>
                    <p className="pt-6 p-7 text-center font-semibold text-white">Create Meme from the template</p>
                    <div className="">
                    <a href="/meme-generator" className="bg-black mx-auto border-2 border-orange-500 text-center flex justify-center font-semibold text-white w-50 rounded-lg p-3">Start Create</a>
                    </div>
                </div>  
                 <div className="bg-black border-2 border-orange-500 w-100 p-5 rounded-lg h-80  ">
                    <div className="flex justify-center w-40 h-20 mx-auto">
                        <i className="fa-solid fa-note-sticky text-orange-500 text-5xl pt-3 align-items-center flex justify-center"></i>
                    </div>
                    <h1 className="font-bold text-2xl text-center text-orange-500 pt-7">Sticker Generator</h1>
                    <p className="pt-6 p-7 text-white text-center font-semibold">Create Sticker from the template.</p>
                    <div className="">
                    <a href="/sticker-generator" className="bg-black flex border-2 border-orange-500 justify-center w-50 p-3 rounded-lg font-semibold text-center mx-auto text-white">Start Create</a>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}