import { useState } from "react";
export default function Faq(){
    const [show, setShow ] = useState(null);
    const dataQnA = [
        {
            id:1,
            question:"What is meme generator?",
            answers:"Meme Generator is a website which user can create memes from templates."
    }, {
        id: 2,
        question: "How to use Memes Generator?",
        answers: "It's easy to use, first, navigate to meme generator's page, and choose the templates what you want, and then click edit template, add your own text, and then download the edited meme.",
    }, {
        id: 3, 
    question: "Is meme generator is free?",
    answers: "Yes, meme generator is free, you can find and edit any memes templates into your own meme."   
    }
];

const handleAccordions = (id) => {
    setShow(show === id ? null : id);
}
    return (
        <>
        <div className="flex-1 justify-center items-center pt-50">
            <h1 className="font-bold text-6xl text-center text-orange-500">FAQ</h1>
            <p className="text-xl text-orange-500 font-semibold text-center">Frequently Ask Question</p>
            <div className="flex flex-col justify-center pt-10  mx-auto items-center">
                {dataQnA.map((items) => (
 <div className="p-5 bg-orange-700 rounded-md lg:w-150 w-100 border-2 border-b-black" key={items.id}>
                <div className="flex justify-between items-center">
                    <p className="font-semibold">{items.question}</p>
                <button className="cursor-pointer" onClick={() => handleAccordions(items.id)}>
                    {show === items.id ? (<i className="fa-solid fa-angle-up"></i>
                        ) : (
<i className="fa-solid fa-chevron-down "></i>
                        )
                    }
                    </button>
                    </div>
                <div className="flex justify-start ml-0 mt-5">
                    <p className="font-md poppins">   {show === items.id &&  <p>{items.answers}</p>
}    </p>
                </div>
            </div>
                ))}
            
            </div>
        </div>
        </>
    )
}
