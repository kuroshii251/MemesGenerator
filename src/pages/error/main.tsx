import Footer from "../../component/home/footer";
import Navbar from "../../component/home/navbar";

export default function ErrorPage(){
    return (
        <>
        <Navbar/>
        
        <div className="flex justify-center items-center p-5 h-100">
            <div className="space-y-5">
                <h1 className="text-9xl font-bold text-center text-white">404</h1>
                <p className="text-white text-center text-2xl poppins w-100">Page Not Found</p>
                <p></p>
                <a href="/" className="bg-orange-500 p-3 flex justify-center w-50 rounded-md hover:bg-orange-600 mx-auto font-semibold">Back</a>
            </div>

        </div>
        <Footer/>
        </>
    )
}