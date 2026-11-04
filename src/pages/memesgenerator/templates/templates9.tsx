import { useRef, useState } from "react"
import Footer from "../../../component/home/footer"
import Navbar from "../../../component/home/navbar"
import { toPng } from "html-to-image";
import templates9 from "../../../assets/meme/template9.png"

export default function Templates9Page() {
    const [text1, setText1]  = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const imageRef = useRef(null);

    if(text1.length === 40){
        alert("You have reached the word limit");
    } else if(text2.length === 40){
        alert("You have reached the word limit");
    } else if(text3.length === 40){
        alert("You have reached the word limit");
    }

    const handleDownload =  () => {
        toPng(imageRef.current, {cacheBust: true})
        .then(dataImage => {
            const url = document.createElement('a');
            url.download = "memes.png";
            url.href= dataImage;
            url.click();
            window.location.reload();

        }) .catch((err) => {
            console.error("Error", err);
            window.location.href="/error";

        });
    };

    return (
        <>
        <Navbar/>
        <div className="justify-between items-center flex  min-h-screen">
            <div className="col lg:flex flex-1 justify-center gap-10 items-center">
                <div className="col relative" ref={imageRef}>
             <div className="absolute left-3 top-60">
                <h3 className="w-30  font-extrabold text-white break-all text-2xl">{text1|| "Text"}</h3>
             </div>
               <div className="absolute left-35 top-60">
                <h3 className="max-w-30 break-all text-white font-extrabold text-2xl">{text2|| "Text"}</h3>
             </div>

                <div className="absolute left-70 top-60">
                <h3 className="max-w-30 break-all text-white font-extrabold text-2xl">{text3|| "Text"}</h3>
             </div>
                    <img src={templates9} className="w-100 h-100 mx-auto" alt="" />
                </div>
                <div className="">
                      <div className="justify-between items-center flex min-h-screen">
            <div className="flex flex-col lg:flex-row flex-1 justify-center gap-10 items-center">
                             <form action="" method="POST">
                               <div className="grid grid-cols-2 p-3 gap-5">
                            <div className="mt-5">
                            <p className="font-semibold text-white text-2 mb-3">Text 1</p>
                            <input type="text" onChange={(e) => setText1(e.target.value)} className="shadow shadow-black bg-white hover:ring-black text-black rounded-lg p-3 w-50" />
                            </div>
                            <div className="mt-5">
                                <p className="font-semibold mb-3 text-white ">Text 2</p>
                             <input type="text" onChange={(e) => setText2(e.target.value)} className="shadow shadow-black bg-white text-black rounded-lg p-3 w-50 hover:ring-black"/>
                            </div>

                              <div className="mt-5">
                                <p className="font-semibold mb-3 text-white ">Text 3</p>
                             <input type="text" onChange={(e) => setText3(e.target.value)} className="shadow shadow-black bg-white text-black rounded-lg p-3 w-50 hover:ring-black"/>
                            </div>
                            
                            </div>
                              <div className="pt-7 p-3">
                            <button className="text-black poppins w-100 bg-orange-700 p-3 rounded-lg font-semibold" onClick={handleDownload}>Generate</button>
                            </div>
                        </form>
                        </div>               
                    </div>
                </div>
                
            </div>
        </div>
        <Footer/>
        
        </>
    )
}