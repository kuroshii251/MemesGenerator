import Footer from "../../component/home/footer";
import Navbar from "../../component/home/navbar";

export default function ErrorPage(){
    return (
        <>
        <Navbar/>
        
        <div className="flex justify-center items-center p-5 min-h-screen">
            <div className="space-y-5">
                <h1 className="text-7xl font-bold text-center text-white">404</h1>
                <p className="text-white text-center w-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla blanditiis repellendus et, cupiditate quos, iure atque molestias cumque architecto ab in provident illum dignissimos ad adipisci modi minus rem voluptatum.</p>
                <a href="/" className="bg-orange-500 p-3 flex justify-center w-50 rounded-md hover:bg-orange-600 mx-auto font-semibold">Back</a>
            </div>

        </div>
        <Footer/>
        </>
    )
}