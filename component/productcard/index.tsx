import { FC } from "react";
import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-2xl shadow-lg p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48 mb-4">
        <Image 
          src={product.imageUrl} 
          alt={product.name} 
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <h3 className="font-bold text-xl mb-2 text-center">{product.name}</h3>
      <p className="text-gray-600 mb-2 text-center">{product.category}</p>
      <p className="text-gray-900 font-semibold mb-4 text-center">${product.price}</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
