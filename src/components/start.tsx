export default function Start(){
    return (
        <div className="w-[390px] h-[710px] flex flex-col ">
            <div className="w-full h-[698px] flex overflow-hidden">
           <img className="w-[100%] h-full relative top-30 z-5 object-cover " src="/img/men.png" alt="" />
           <img className="w-[300px] absolute top-12 left-4" src="/img/text.png" alt="" />
        </div>
        <div className="w-full h-[78px] flex justify-center items-center pt-2">
        <button className="px-20 py-3 bg-[#191919] text-white font-semibold rounded-[10px] shadow-md transition-all cursor-pointer">
          Get Started →
        </button>
        </div>
        </div>
        
    )
}