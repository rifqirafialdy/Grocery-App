import { FC } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";

interface CartBarProps {
  items: {
    product: Product;
    quantity: number;
  }[];
}

const CartBar: FC<CartBarProps> = ({ items }) => {
  if (items.length === 0) return null;

  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <button 
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 w-96 shadow-lg"
    >
        <div className="flex gap-2">
<h1 className="capitalize">cart</h1>
      <div className="flex items-center ">
        {items.map((item, index) => (
            <Image 
            key={index}
            src={item.product.imageUrl}
            alt={item.product.name}
            width={20}
            height={20}
            className="rounded-full object-cover"
            />
        ))}
      </div>
        </div>
      <h1 className="text-lg font-bold">{formatPrice(totalPrice)}</h1>
    </button>
  );
};

export default CartBar;
