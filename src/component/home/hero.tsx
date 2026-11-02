import pumpkin from "../../assets/pumpkin.png"
import pumpkin2 from "../../assets/pumpkin1.png"


export default function Hero(){
    return (
        <>
        <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-2 justify-center place-items-center align-items-center" >
                <div className="col space-y-8 align-items-center justify-between">
                    <h1 className="text-orange-400 creepster font-bold w-100 text-5xl">Make Everyone Laugh By Your Meme</h1>
                    <p className="text-orange-100 poppins w-120 text-lg">Create memes in a seconds, pick a template and add your own text to the memes template</p>
                    <div className="col relative inline-block">
                    <a href="#featured" className=" font-semibold bg-orange-700 border text-white poppins border-black hover:border-2 hover:border-orange-500 hover:bg-black hover:text-white p-3 w-auto rounded-lg ">Get Started</a>
                    <img src={pumpkin2} width={30} height={30} className="absolute -top-5 -right-3 " alt="" />
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <img src={pumpkin} className="w-120 mx-auto align-items-center" alt="" />
                </div>
                <div>
                    <h1>tesss</h1>
                </div>
        </div>
        </div>

        </>
    )
}