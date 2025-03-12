import { FC } from "react";
import { Product } from "@/types/product";
import ProductCard from "../productcard";

interface productsProps{
    products:Product[]
}

const ProductList:FC<productsProps>=({products})=>{
    return(
        <div className="grid  grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 w-full">
{products.map((product)=>(
    <ProductCard key={product.id} product={product}/>
))}
        </div>
    )
}
export default ProductList