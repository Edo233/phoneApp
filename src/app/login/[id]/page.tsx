import Buttons from "@/components/buttons";
import Product from "@/components/prodct";
import { Bell, Search } from "lucide-react";

export default function Login() {
  return (
    <div className="w-[390px] h-[710px] border-2 flex flex-col items-center ">
      <div className="relative w-full flex justify-center gap-5 mt-5">
        <Search className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="search"
          placeholder="Search products"
          className="py-2 pl-10 pr-4 bg-[#F7F7F7] rounded-3xl outline-none"
        />
        <div className="w-[50px] h-[50px] rounded-full bg-[#F7F7F7] flex items-center justify-center   ">
        <Bell className="text-[#595959] cursor-pointer" />
        </div>
      </div>
      <div className="w-full h-[155px] flex justify-center items-center mt-10">
        <img src="/img/marqeting.png" className="w-[340px] h-[100%]  bg-cover bg-center" />
      </div>
        <Buttons/>
                <h2 className="text-2xl font-bold mb-8 text-start pt-2 w-full">Hot sales</h2>
        <Product/>
    </div>
  );
}
