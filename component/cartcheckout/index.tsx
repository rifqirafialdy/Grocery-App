import { FC } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";

interface DetailedCartItem {
    product: Product;
    quantity: number;
}

interface cartProps {
    items: DetailedCartItem[];
}

const CartCheckOut: FC<cartProps> = ({ items }) => {
    return (
        <div className="  w-72  h-screen p-2">
            {items.map((item) => (
                <div key={item.product.id} className="flex items-center">

                    <Image 
                         src={item.product.imageUrl} 
                                            alt={item.product.name}
                                            width={50}
                                            height={50}
                                            className="mx-auto mb-4 object-fill" 
                                        />
                                        <div className="flex flex-col">

                    <h1 className="text-lg font-bold">{item.product.name}</h1>
                    <p>{formatPrice(item.product.price * item.quantity)}</p>
                                        </div>
                </div>
            ))}
        </div>
    );
};

export default CartCheckOut;
