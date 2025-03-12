"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { Product } from "@/types/product";
import { 
  addItem, 
  removeItem, 
  updateItemQuantity, 
  clearCart, 
  selectCartItems 
} from "@/redux/slices/cartSlice";
import useProducts from "@/hooks/useProducts";

interface DetailedCartItem {
  product: Product;
  quantity: number;
}

const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector(selectCartItems);
  const { products } = useProducts();

  const addToCart = (product: Product, quantity: number) => {
    dispatch(addItem({ productId: product.id, quantity }));
  };

  const removeFromCart = (productId: number) => {
    dispatch(removeItem(productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    dispatch(updateItemQuantity({ productId, quantity }));
  };

  const clear = () => {
    dispatch(clearCart());
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      return product ? total + product.price * item.quantity : total;
    }, 0);
  };

  const getCartItemsWithDetails = (): DetailedCartItem[] => {  
    return items.map(item => {
      const product = products.find(p => p.id === item.productId);
      if (product) {
        return { product, quantity: item.quantity };
      }
      return null; 
    }).filter(Boolean) as DetailedCartItem[];
  }

  return { 
    items: getCartItemsWithDetails(), 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    clear, 
    getTotalPrice 
  };
};

export default useCart;
