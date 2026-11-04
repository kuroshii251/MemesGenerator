import Footer from "../../component/home/footer";
import Navbar from "../../component/home/navbar";

export default function ContactPage(){
    return (
        <>
        <Navbar/>
        <div className="flex flex-1 justify-center min-h-screen items-center">
            <div className="">
                <h1 className="text-5xl font-bold text-white text-center">Contact</h1>
                <p className="text-white w-120 text-center poppins mt-5 text-md">If you want ask anything question, fill the form here</p>
                <div className="flex flex-col justify-center items-center">
    <form action="https://formspree.io/f/xyeeojgd" method="POST" className="mt-6">
                    <div className="">

                        <div className="pt-5">
                            <p className="text-white poppins">Email</p>
                            <input type="email" name="email" className="shadow shadow-black bg-white w-100 text-black rounded-md p-3" />

                        </div>
                       <div className="pt-5">
                            <p className="text-white poppins">Message</p>
                            <textarea name="message" className="resize-none shadow shadow-black bg-white w-100 h-50 text-black rounded-md p-3" />

                        </div>
                        <div className="flex justify-center">
                        <button className="bg-orange-600 p-3 font-semibold rounded-lg mt-5 w-100 mx-auto text-center">Submit</button>
                        </div>
                    </div>
                </form>
                </div>
            
            </div>

        </div>

        <Footer/>
        
        </>
    )
}