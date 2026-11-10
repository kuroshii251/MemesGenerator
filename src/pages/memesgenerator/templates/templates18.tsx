import { useRef, useState } from "react"
import Footer from "../../../component/home/footer"
import Navbar from "../../../component/home/navbar"
import { toPng } from "html-to-image";
import  templates18 from "../../../assets/meme/template18.jpg"

export default function Templates12Page() {
    const [file1, setFile1]  = useState(null);
    const imageRef = useRef(null);


    const handleDownload =  () => {
        if(!imageRef.current) return;
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
                <div className="col relative" ref={imageRef}>
             <div className="absolute left-45 top-35">
                <img src={file1} className="w-25"/>
             </div>
                    <img src={templates18} className="h-100" alt="" />
                </div>
                <div className="">
                    <div className="col bg-zinc-950 p-3 w-100 h-100 rounded-lg">
                        <div className="flex flex-1 h-80 align-items-center items-center justify-center">
                             <form action="" method="POST">
                            <div className="">
                            <p className="font-semibold text-white text-2 mb-3">Text 1</p>
                            <input type="file" onChange={(e) => setFile1(URL.createObjectURL(e.target.files[0]))} className="shadow shadow-black bg-white hover:ring-black text-black rounded-lg p-3 w-70" />
                            </div>
                              <div className="pt-7">
                            <button type="button" className="text-black poppins w-30 bg-orange-700 p-3 rounded-lg font-semibold" onClick={handleDownload}>Generate</button>
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