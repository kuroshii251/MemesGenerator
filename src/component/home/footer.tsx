export default function Footer(){
    return (
        <>
        <div className="bg-orange-700 p-10 w-full pt-10">
            <div className="grid grid-cols-2">
                <div className="">
                <h1 className="font-bold text-2xl">MemesGenerator</h1>
                <p className="font-semibold text-sm">Meme generator is a website which user can create meme from the templates.</p>
                </div>
                <div className="">
                    <h1 className="font-bold text-xl">Menu</h1>
                    <ul>
                        <li>
                            <a href="/" className="font-semibold text-sm">Home</a>
                        </li>
                        <li>
                            <a href="/image-meme-generator" className="font-semibold text-sm">Meme Generator</a>
                        </li>
                        <li>
                            <a href="/sticker-generator" className="font-semibold text-sm">Sticker Generator</a>

                        </li>
                        <li>
                            <a href="/contact" className="font-semibold text-sm">Contact</a>
                        </li>
                    </ul>
                    
                </div>

            </div>
            <div className="border-t-2 border-black mt-3 p-3">
                <p className="font-semibold">Copyright 2026 by Kuro</p>

            </div>
        </div>
        </>
    )
}