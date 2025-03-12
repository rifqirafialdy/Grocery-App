import { FC } from "react";

interface CategoryListProps {
  categories: string[];
}

const CategoryList: FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-2">
      <div className="flex gap-4 my-4 w-max">
        <button className="px-4 py-2 hover:underline whitespace-nowrap">All</button>
        {categories.map((category) => (
          <button key={category} className="px-4 py-2 hover:underline whitespace-nowrap">
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
