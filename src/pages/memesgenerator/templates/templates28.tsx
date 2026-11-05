import { useRef, useState } from "react"
import Footer from "../../../component/home/footer"
import Navbar from "../../../component/home/navbar"
import { toPng } from "html-to-image";
import templates28 from "../../../assets/meme/template28.png"

export default function Templates28Page() {
    const [text1, setText1]  = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');
    const [text5, setText5] = useState('');


    const imageRef = useRef(null);

    if(text1.length === 32){
        alert("You have reached the word limit");
    } else if(text2.length === 36){
        alert("You have reached the word limit");
    }  else if(text3.length === 26){
        alert("You have reached the word limit");
    }  else if(text4.length === 36){
        alert("You have reached the word limit");

    } else if(text5.length === 20){
        alert("You have reached the word limit");
    }

    const handleDownload =  () => {
        try {
        toPng(imageRef.current, {cacheBust: true, skipFonts: true, imagePlaceholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="})
        .then(dataImage => {
            const url = document.createElement('a');
            url.download = "memes.png";
            url.href= dataImage;
            url.click();
            window.location.reload();
        })
        }catch(err) {
            console.error("Error", err);
            window.location.href="/error";

        };
    };

    return (
        <>
        <Navbar/>
   <div className="justify-between items-center flex min-h-screen">
            <div className="flex flex-col lg:flex-row flex-1 justify-center gap-10 items-center">
                <div className="col relative" ref={imageRef}>
                    <div className="absolute left-2 top-32">
                <h3 className="max-w-40 break-all  font-extrabold text-lg">{text1|| "Text"}</h3>
             </div>
             <div className="absolute left-47 top-12">
                <h3 className="max-w-28 text-lg font-extrabold break-all">{text2|| "Text"}</h3>
             </div>

  <div className="absolute left-3 top-75">
                <h3 className="max-w-20 text-lg font-extrabold break-all">{text3|| "Text"}</h3>
             </div>

              <div className="absolute left-25 top-75">
                <h3 className="max-w-25 text-lg font-extrabold break-all">{text4|| "Text"}</h3>
             </div>

              <div className="absolute left-60 top-55">
                <h3 className="max-w-25 text-lg font-extrabold break-all">{text5|| "Text"}</h3>
             </div>

            
               
                    <img src={templates28} className="h-100" alt="" />
                </div>
                <div className="">
                    <div className="col bg-zinc-950 p-3 w-100 h-100 rounded-lg">
                        <div className="flex flex-1 h-80 align-items-center items-center justify-center">
                             <form action="" method="POST">
                            <div className="">
                            <p className="font-semibold text-white text-2 mb-3">Text 1</p>
                            <input type="text" onChange={(e) => setText1(e.target.value)} className="shadow shadow-black bg-white hover:ring-black text-black rounded-lg p-3 w-70" />
                            </div>
                            <div className="mt-5">
                                <p className="font-semibold mb-3 text-white ">Text 2</p>
                             <input type="text" onChange={(e) => setText2(e.target.value)} className="shadow shadow-black bg-white text-black rounded-lg p-3 w-70 hover:ring-black"/>
                            </div>

                              <div className="mt-5">
                                <p className="font-semibold mb-3 text-white ">Text 3</p>
                             <input type="text" onChange={(e) => setText3(e.target.value)} className="shadow shadow-black bg-white text-black rounded-lg p-3 w-70 hover:ring-black"/>
                            </div>

                              <div className="mt-5">
                                <p className="font-semibold mb-3 text-white ">Text 4</p>
                             <input type="text" onChange={(e) => setText4(e.target.value)} className="shadow shadow-black bg-white text-black rounded-lg p-3 w-70 hover:ring-black"/>
                            </div>

                              <div className="mt-5">
                                <p className="font-semibold mb-3 text-white ">Text 5</p>
                             <input type="text" onChange={(e) => setText5(e.target.value)} className="shadow shadow-black bg-white text-black rounded-lg p-3 w-70 hover:ring-black"/>
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