import { useRef, useState } from "react"
import Footer from "../../../component/home/footer"
import Navbar from "../../../component/home/navbar"
import templates2 from "../../../assets/meme/template2.png"
import { toPng } from "html-to-image";

export default function Templates2Page() {
    const [text1, setText1]  = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4]  = useState('');;
    const [text5, setText5] = useState('');
    const imageRef = useRef(null);

    if(text1.length === 40){
        alert("You have reached the word limit");
    } else if(text2.length === 40){
        alert("You have reached the word limit");
    } else if(text3.length === 40){
        alert("You have reached the word limit");
    } else if(text4.length === 40){
        alert("You have reached the word limit");
    } else if(text5.length === 40){
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
        <div className="justify-between items-center flex min-h-screen">
            <div className="flex flex-col lg:flex-row flex-1 justify-center gap-10 items-center">
                <div className="col max-w-[400px] relative" ref={imageRef}>
             <div className="absolute left-42 top-3 ">
                <h1 className="w-40  font-semibold break-all text-xl">{text1 || "Text"}</h1>
             </div>
               <div className="absolute left-42 top-27">
                <h1 className="max-w-40 break-all font-semibold text-xl">{text2 || "Text"}</h1>
             </div>
             <div className="absolute left-42 top-52">
                <h1 className="max-w-40 break-all font-semibold text-xl">{text3 || "Text"}</h1>
             </div>
             <div className="absolute left-42 top-80">
                <h1 className="max-w-40 break-all font-semibold text-xl">{text4 || "Text"}</h1>
             </div>
             <div className="absolute left-42 top-105">
                <h1 className="max-w-40 break-all font-semibold text-xl">{text5 || "Text"}</h1>
             </div>
             <div className="mx-auto">
                    <img src={templates2} className="h-130 block" alt="" />

             </div>
                </div>
                <div className="">
                    <div className="col bg-zinc-950 p-5 w-115  h-auto rounded-lg">
                        <div className="flex flex-1 h-120 align-items-center items-center justify-center">
                             <form action="" method="POST">
                                <div className="grid grid-cols-2 gap-10">
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
                             <div className="mt-5">
                                <p className="font-semibold mb-3 text-white ">Text 4</p>
                             <input type="text" onChange={(e) => setText4(e.target.value)} className="shadow shadow-black bg-white text-black rounded-lg p-3 w-50 hover:ring-black"/>
                            </div>
                             <div className="mt-5">
                                <p className="font-semibold mb-3 text-white ">Text 5</p>
                             <input type="text" onChange={(e) => setText5(e.target.value)} className="shadow shadow-black bg-white text-black rounded-lg p-3 w-50 hover:ring-black"/>
                            </div>
                                </div>
                          
                            
                              <div className="pt-7">
                            <button className="text-black poppins w-30 bg-orange-700 p-3 rounded-lg font-semibold" onClick={handleDownload}>Generate</button>
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