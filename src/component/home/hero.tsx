import pumpkin from "../../assets/pumpkin.png"
import bat1 from "../../assets/bat1.png";
import bat2 from "../../assets/bat2.png";


export default function Hero(){

    return (
        <>
        <div className="flex justify-center items-center h-screen">
            <div className="">
                 <img src={bat1} width={120} height={120} className="absolute top-30 right-30" />
                     <img src={bat2} width={120} height={120} className="absolute top-30 left-30" />
            </div>
                <div className="col space-y-8">
                    <h1 className="text-orange-400 font-bold mx-auto text-center w-150 text-6xl">Generate Your Meme Here On Templates</h1>
                    <p className="text-orange-100 w-200 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima recusandae sit officiis totam similique, nulla excepturi in deleniti obcaecati eveniet adipisci esse cumque veniam necessitatibus, vitae facilis ullam inventore accusantium.   </p>
                    <div className="flex items-center justify-center">
                        <div className="col inline-block relative ">
                       <img src={pumpkin} width={25} height={25} className="absolute -top-5 -right-3" alt="" />
 <a href="" className="text-center font-semibold bg-orange-700 border border-black text-white hover:border hover:border-white hover:bg-black hover:text-white p-3 w-auto rounded-lg ">Get Started</a>
                        </div>  
                       

                    </div>
                </div>
        </div>
        
        </>
    )
}