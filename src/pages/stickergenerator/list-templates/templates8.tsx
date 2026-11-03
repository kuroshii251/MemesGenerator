import { useRef, useState } from "react"
import Footer from "../../../component/home/footer"
import Navbar from "../../../component/home/navbar"
import { toPng } from "html-to-image";
import templates8 from "../../../assets/sticker/templates8.png"

export default function StickerTemplates8() {
    const [text, setText]  = useState("");
    const stickerPhoto = useRef(null);

    if(text.length === 58){
        alert("You have reached the word limit");
    }
    const handleGenerate =  () => {
        toPng(stickerPhoto.current, {cacheBust: true})
        .then(dataImage => {
            const url = document.createElement('a');
            url.download = "sticker.png";
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
        <div className="col pt-10 min-h-screen">
            <div className="flex flex-1 flex-col space-y-10 justify-center items-center">
                <div className="col relative" ref={stickerPhoto}>
             <div className="absolute left-10 top-30  ">
                <h1 className="w-50 font-bold break-all text-xl">{text}</h1>
             </div>
                    <img src={templates8} className="h-100" alt="" />
                </div>
                <div className="">
                      <div className="col bg-zinc-950 p-5 w-auto  h-auto rounded-lg">
                        <div className="flex flex-1 h-auto align-items-center items-center justify-center">
                             <form action="" method="POST">
                            <div className="mt-5">
                            <input type="text" onChange={(e) => setText(e.target.value)} className="shadow shadow-black bg-white hover:ring-black text-black rounded-lg p-3 w-100" />
                            </div>
                              <div className="pt-7">
                            <button className="text-black poppins w-30 bg-orange-700 p-3 rounded-lg font-semibold" onClick={handleGenerate}>Generate</button>
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