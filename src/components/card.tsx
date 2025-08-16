import { ProductProps } from "./prodct";



export function Card({ title, images, price, id,}: ProductProps) {
  return (
    <div className="w-[500px] h-[200px] rounded-2xl border text-center cursor-pointer p-4 ">
      <img
        className="w-full h-[120px] object-contain mb-2" 
        src={images[0]}
        alt={title}
      /> 
      <h3 className="font-medium text-[10px]">{title}</h3>
      <p className="text-xl font-bold my-2">{price.toLocaleString()}$</p>
      <div className="text-gray-500 text-sm mt-2">articul {id}</div>
    </div>
  );
}