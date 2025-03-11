"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { config } from "@/constants/url";
import { setProducts, selectProducts } from "@/redux/slices/productSlice";
import { Product } from "@/types/product";

const useProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${config.BASE_URL}${config.endpoints.products}`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: Product[] = await response.json();
        dispatch(setProducts(data));

        const uniqueCategories = Array.from(new Set(data.map((product) => product.category)));
        setCategories(uniqueCategories);
        
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (!products.length) {
      fetchProducts();
    } else {
      const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));
      setCategories(uniqueCategories);
    }
  }, [dispatch, products.length]);

  return { products, categories, loading, error };
};

export default useProducts;
