import Footer from "../../component/home/footer";
import Navbar from "../../component/home/navbar";
import template1 from "../../assets/meme/template1.png";
import template2 from "../../assets/meme/template2.png";
import template3 from "../../assets/meme/template3.png"
import template4 from "../../assets/meme/template4.png";
import template5 from "../../assets/meme/template5.jpg";
import template6 from "../../assets/meme/template6.png";
import template7 from "../../assets/meme/template7.png";
import template8 from "../../assets/meme/template8.png";
import template9 from "../../assets/meme/template9.png";
import template10 from "../../assets/meme/template10.png";
import template11 from "../../assets/meme/template11.jpg";
import template12 from "../../assets/meme/template12.jpg";
import template13 from "../../assets/meme/template13.png";
import template14 from "../../assets/meme/template14.jpg";
import template15 from "../../assets/meme/template15.png";
import template16 from "../../assets/meme/template16.jpg";
import template17 from "../../assets/meme/template17.png";
import template18 from "../../assets/meme/template18.jpg";
import template19 from "../../assets/meme/template19.png";
import template20 from "../../assets/meme/template20.jpg";
import template21 from "../../assets/meme/template21.png";
import template22 from "../../assets/meme/template22.png";
import template23 from "../../assets/meme/template23.png";
import template24 from "../../assets/meme/template24.png";
import template25 from "../../assets/meme/template25.png";
import template26 from "../../assets/meme/template26.png";
import template27 from "../../assets/meme/template27.png";
import template28 from "../../assets/meme/template28.png";
import template29 from "../../assets/meme/template29.png";
import template30 from "../../assets/meme/template30.png";




export default function MemeGeneratorPage(){
    const memeList = [
        { id: 1, image: template1, link: "/meme-generator/1"},
        { id: 2, image: template2, link: "/meme-generator/2"},
        { id: 3, image: template3, link: "/meme-generator/3"},
        { id: 4, image: template4, link: "/meme-generator/4"},
        { id: 5, image: template5, link: "/meme-generator/5"},
        { id: 6, image: template6, link: "/meme-generator/6"},
        { id: 7, image: template7, link: "/meme-generator/7"},
        { id: 8, image: template8, link: "/meme-generator/8"},
        { id: 9, image: template9, link: "/meme-generator/9"},
        { id: 10, image: template10, link: "/meme-generator/10"},
        { id: 11, image: template11, link: "/meme-generator/11"},
        { id: 12, image: template12, link: "/meme-generator/12"},
        { id: 13, image: template13, link: "/meme-generator/13"},
        { id: 14, image: template14, link: "/meme-generator/14"},
        { id: 15, image: template15, link: "/meme-generator/15"},
        { id: 16, image: template16, link: "/meme-generator/16"},
        { id: 17, image: template17, link: "/meme-generator/17"},
        { id: 18, image: template18, link: "/meme-generator/18"},
        { id: 19, image: template19, link: "/meme-generator/19"},
        { id: 20, image: template20, link: "/meme-generator/20"},
        { id: 21, image: template21, link: "/meme-generator/21"},
        { id: 22, image: template22, link: "/meme-generator/22"},
        { id: 23, image: template23, link: "/meme-generator/23"},
        { id: 24, image: template24, link: "/meme-generator/24"},
        { id: 25, image: template25, link: "/meme-generator/25"},
        { id: 26, image: template26, link: "/meme-generator/26"},
        { id: 27, image: template27, link: "/meme-generator/27"},
        { id: 28, image: template28, link: "/meme-generator/28"},
        { id: 29, image: template29, link: "/meme-generator/29"},
        { id: 30, image: template30, link: "/meme-generator/30"},
    ];

    return (
        <>
        <Navbar/>
        <div className="justify-center items-center min-h-screen">
            <h1 className="text-3xl text-white text-center font-bold pt-10 pb-5">Meme Generator</h1>
            <p className="text-white text-lg flex justify-center text-center mx-auto pb-20">Find the best meme templates for your content</p>
            <div className="grid lg:grid-cols-3 space-x-5 space-y-5 place-items-center">
               {memeList.map((items) => (
                <div className="" key={items.id}>
                      <div className="bg-zinc-900 p-4 h-95 w-80 rounded-md">
                    <div className="col flex justify-center align-items-center">
   <div className="">
                        <img src={items.image} className="object-cover h-50" alt="" />
                    </div>
                    </div>
                    <div className="flex flex-col justify-center pt-12">
                        <a href={items.link} className="text-center font-semibold text-md bg-orange-600 rounded-lg poppins w-50 mx-auto p-2">Use This Template</a>
                    </div>
                </div>
                </div>
               ))}

                    </div>
                </div>  
        <Footer/>
        </>
    )
}