"use client";

import CategoryList from "@/component/categorylist";
import Header from "@/component/header";
import ProductList from "@/component/productlist";
import useProducts from "@/hooks/useProducts";

export default function Home() {
  const { products, categories, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="flex flex-col min-h-screen mx-4 font-roboto ">
      <Header />
     <CategoryList categories={categories}/>
     <ProductList products={products}/>

    </main>
  );
}
