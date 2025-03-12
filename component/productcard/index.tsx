"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { Product } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";
import useProductWeight from "@/hooks/useProductWeight";
import Modal from "../modal";
import useCart from "@/hooks/useCart";

interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { weight, incrementWeight, decrementWeight } = useProductWeight(1000, product.metadata.increment);
    const {addToCart}=useCart();

    return (
        <>
            <div 
                className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-4 bg-white border border-gray-200 flex flex-col gap-4 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
                
            >
                <div className="relative w-full h-56 mb-3 rounded-xl overflow-hidden">
                    <Image 
                        src={product.imageUrl} 
                        alt={product.name}
                        fill 
                        className="object-cover"
                        onClick={() => setIsOpen(true)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-bold"> {formatPrice((product.price * weight) )} </p>
                    <h1 className="text-xl font-bold text-gray-800">{product.name}</h1>
                </div>
                <div className="flex items-center justify-between my-4">
                        <p className="text-lg text-gray-500">{weight / 1000} kg</p>
                        <div className="flex space-x-2">
                            <div 
                                onClick={decrementWeight}
                                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center p-2 bg-white hover:bg-black hover:text-white transition-all cursor-pointer"
                            >
                                <p className="text-2xl">-</p>
                            </div>
                            <div 
                                onClick={incrementWeight}
                                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center p-2 bg-white hover:bg-black hover:text-white transition-all cursor-pointer"
                            >
                                <p className="text-2xl">+</p>
                            </div>
                        </div>
                    </div>
            </div>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div>
                    <Image 
                        src={product.imageUrl} 
                        alt={product.name}
                        width={300}
                        height={300}
                        className="mx-auto mb-4 object-fill" 
                    />
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    
                    <div className="flex items-center justify-between my-4">
                        <p className="text-lg text-gray-500">{weight / 1000} kg</p>
                        <div className="flex space-x-2">
                            <div 
                                onClick={decrementWeight}
                                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center p-2 bg-white hover:bg-black hover:text-white transition-all cursor-pointer"
                            >
                                <p className="text-2xl">-</p>
                            </div>
                            <div 
                                onClick={incrementWeight}
                                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center p-2 bg-white hover:bg-black hover:text-white transition-all cursor-pointer"
                            >
                                <p className="text-2xl">+</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 border-2 rounded-xl p-4 items-center text-center my-3">
                        <div>
                            <p className="text-lg font-bold">{product.metadata.calorie}</p>
                            <p className="text-gray-400">calories</p>
                        </div>
                        <div>
                            <p className="text-lg font-bold">{product.metadata.proteins}</p>
                            <p className="text-gray-400">proteins</p>
                        </div>
                        <div>
                            <p className="text-lg font-bold">{product.metadata.fats}</p>
                            <p className="text-gray-400">fats</p>
                        </div>
                        <div>
                            <p className="text-lg font-bold">{product.metadata.carbs}</p>
                            <p className="text-gray-400">carbs</p>
                        </div>
                    </div>
                    
                    <button 
                        className="flex justify-between px-6 py-4 bg-black text-white rounded-full hover:bg-gray-800 w-full"
                        onClick={() => addToCart(product,weight)}
                    >
                        <p>To Cart</p>
                        <p>{formatPrice((product.price * weight) )}</p>
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default ProductCard;
