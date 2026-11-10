import { useRef, useState } from "react"
import Footer from "../../../component/home/footer"
import Navbar from "../../../component/home/navbar"
import { toPng } from "html-to-image";
import templates4 from "../../../assets/meme/template4.png"

export default function Templates4Page() {
    const [text1, setText1]  = useState('');
    const [text2, setText2] = useState('');
    const imageRef = useRef(null);

    if(text1.length === 48){
        alert("You have reached the word limit");
    } else if(text2.length === 48){
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
             <div className="absolute left-5 top-2">
                <h3 className="max-w-80 font-bold break-all text-2xl text-white ">{text1 || "Text"}</h3>
             </div>
               <div className="absolute left-5 top-65  ">
                <h3 className="max-w-80 break-all font-bold text-2xl text-white ">{text2|| "Text"}</h3>
             </div>
  <div className="mx-auto">
                    <img src={templates4} className="h-80 block" alt="" />

             </div>                </div>
                <div className="">
                    <div className="col bg-zinc-950 p-5 w-115  h-auto rounded-lg">
                        <div className="flex flex-1 h-80 align-items-center items-center justify-center">
                             <form action="" method="POST">
                            <div className="">
                            <p className="font-semibold stroke-black text-white text-2 mb-3">Text 1</p>
                            <input type="text" onChange={(e) => setText1(e.target.value)} className="shadow shadow-black bg-white hover:ring-black text-black rounded-lg p-3 w-70" />
                            </div>
                            <div className="mt-5">
                                <p className="font-semibold mb-3 text-white ">Text 2</p>
                             <input type="text" onChange={(e) => setText2(e.target.value)} className="shadow shadow-black bg-white text-black rounded-lg p-3 w-70 hover:ring-black"/>
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