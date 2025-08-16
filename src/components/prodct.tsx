import { Card } from "./card";



export interface ProductProps {
  title: string;
  images: string[];
  id: number;
  price: number;
}

interface ProductsProps {
  products: ProductProps[];
}

export default async function Product() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <div className="w-full overflow-x-scroll h-">
      <div className="flex justify-center gap-7 p-5 my-20 ">
        {data.products.map((e: ProductProps) => (
          <Card
            key={e.id}
             {...e}
          />
        ))}
      </div>
    </div>
  );
}