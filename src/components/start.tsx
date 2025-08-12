export default function Start(){
    return (
        <div className="w-[300px] h-[700px] flex flex-col">
            <div className="w-[300px] h-[6git00px] flex overflow-hidden">
           <img className="w-[100%] h-full relative top-10 z-5 object-cover " src="/img/men.png" alt="" />
           <img className="w-[280px] absolute top-5 left-5" src="/img/text.png" alt="" />
        </div>
        <div className="w-full h-[80px] flex justify-center items-center">
            <button className="px-20 py-3 bg-[#191919] text-white font-semibold rounded-[10px] shadow-md transition-all cursor-pointer">
          Get Started →
        </button>
        </div>
        </div>
        
    )
}