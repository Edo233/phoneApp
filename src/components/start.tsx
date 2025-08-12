export default function Start(){
    return (
        <div className="w-[430px] h-[880px] flex flex-col">
            <div className="w-[430px] h-[800px] flex overflow-hidden">
           <img className="w-[100%] h-full relative top-35 z-5 object-cover " src="/img/men.png" alt="" />
           <img className="absolute top-10 left-5" src="/img/text.png" alt="" />
        </div>
        <div className="w-full h-[80px] flex justify-center items-center">
            <button className="px-30 py-3 bg-[#191919] text-white font-semibold rounded-[10px] shadow-md transition-all cursor-pointer">
          Get Started    →
        </button>
        </div>
        </div>
        
    )
}