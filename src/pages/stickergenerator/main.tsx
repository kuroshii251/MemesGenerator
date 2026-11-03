import Footer from "../../component/home/footer";
import Navbar from "../../component/home/navbar";
import templates1 from "../../assets/sticker/templates1.jpg";
import templates2 from "../../assets/sticker/templates2.jpg";
import templates3 from "../../assets/sticker/templates3.jpg";
import templates4 from "../../assets/sticker/templates4.jpg";
import templates5 from "../../assets/sticker/templates5.jpg";
import templates6 from "../../assets/sticker/templates6.jpg";
import templates7 from "../../assets/sticker/templates7.jpg";
import templates8 from "../../assets/sticker/templates8.png";
import templates9 from "../../assets/sticker/templates9.jpg";
import templates10 from "../../assets/sticker/templates10.png";
import templates12 from "../../assets/sticker/templates12.jpg";
import templates13 from "../../assets/sticker/templates13.png";
import templates14 from "../../assets/sticker/templates14.png";
import templates15 from "../../assets/sticker/templates15.png";
import templates16 from "../../assets/sticker/templates16.png";
import templates17 from "../../assets/sticker/templates17.png";
import templates18 from "../../assets/sticker/templates18.png";
import templates19 from "../../assets/sticker/templates19.png";


export default function StickerGeneratorPage()
{
    const stickerData = [
        {id: 1, imagess:templates1, link:"/sticker-generator/1" },
        {id: 2, imagess:templates2, link:"/sticker-generator/2" },
        {id: 3, imagess:templates3, link:"/sticker-generator/3" },
        {id: 4, imagess:templates4, link:"/sticker-generator/4" },
        {id: 5, imagess:templates5, link:"/sticker-generator/5" },
        {id: 6, imagess:templates6, link:"/sticker-generator/6" },
        {id: 7, imagess:templates7, link:"/sticker-generator/7" },
        {id: 8, imagess:templates8, link:"/sticker-generator/8" },
        {id: 9, imagess:templates9, link:"/sticker-generator/9" },
        {id: 10, imagess:templates10, link:"/sticker-generator/10" },
        {id: 12, imagess: templates12, link: "/sticker-generator/12"},
        {id: 13, imagess: templates13, link: "/sticker-generator/13"},
        {id: 14, imagess: templates14, link: "/sticker-generator/14"},
        {id: 15, images: templates15, link: "/sticker-generator/15"},
        {id: 16, imagess: templates16, link: "/sticker-generator/16"},
        {id:17, imagess: templates17, link: "/sticker-generator/17"},
        {id: 18, imagess: templates18, link: "/sticker-generator/18"},
        {id: 19, imagess: templates19, link: "/sticker-generator/19"},
    ];
    return (
        <>
        <Navbar/>
        <div className="flex justify-center p-5 items-center">
            <div className="">

            </div>
            <div className="grid grid-cols-3 space-x-5 space-y-5">
                {stickerData.map((items) => (
                    <div className="" key={items.id}>
                                    <div className="bg-zinc-900 p-4 h-95 w-80 rounded-md">
                    <div className="col flex justify-center align-items-center">
   <div className="">
                        <img src={items.imagess} className="object-cover h-50" alt="" />
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