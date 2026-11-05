import { useRef, useState } from "react"
import Footer from "../../../component/home/footer"
import Navbar from "../../../component/home/navbar"
import { toPng } from "html-to-image";
import templates14 from "../../../assets/sticker/templates14.png"

export default function StickerTemplates14() {
    const [text, setText]  = useState("");
    const stickerPhoto = useRef(null);

    if(text.length === 20){
        alert("You have reached the word limit");
    }
   
     const handleGenerate =  () => {
        try {
         toPng(stickerPhoto.current, {cacheBust: true, skipFonts: true, imagePlaceholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="})
        .then(dataImage => {
            const url = document.createElement('a');
            url.download = "sticker.png";
            url.href= dataImage;
            url.click();
            window.location.reload();

        })
        }
       catch(err) {
            console.error("Error", err);
            window.location.href="/error";
        };
    };

    return (
        <>
        <Navbar/>
        <div className="col pt-10 min-h-screen">
            <div className="flex flex-1 flex-col space-y-10 justify-center items-center">
                <div className="col relative" ref={stickerPhoto}>
             <div className="absolute left-15 top-50  ">
                <h3 className="w-80 text-center  font-extrabold break-all text-3xl">{text|| "Text"}</h3>
             </div>
                    <img src={templates14} className="h-100     " alt="" />
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