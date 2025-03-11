import { FC } from "react";
interface CategoryListProps {
    categories: string[]; // TypeScript type for the categories prop
  }
  const CategoryList: React.FC<CategoryListProps> =({ categories })=>{
    return (
        <div className="flex gap-4 my-4">
              <button  className="px-4 py-2">
            All
          </button>
        {categories.map((category) => (
          <button key={category} className="px-4 py-2 ">
            {category}
          </button>
        ))}
      </div>
    )
}
export default CategoryList