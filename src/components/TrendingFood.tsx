// TrendingFood.tsx

import { usePagination } from "../hooks/usePagination";
import { FoodCard } from "./FoodCard";

export const TrendingFood = () => {
  const { currentPage, totalPages, currentItems, handlePageClick } =
    usePagination(8);

  return (
    <div className="container mt-32">
      <div className="items-center justify-between sm:flex">
        <h2 className="text-4xl font-medium">Trending Food</h2>
      </div>

      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentItems.map((item) => (
          <FoodCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8 mb-8">
        <nav>
          <ul className="flex list-none">
            {[...Array(totalPages)].map((_, i) => (
              <li key={i} className="mx-2">
                <button
                  onClick={() => handlePageClick(i + 1)}
                  className={`px-4 py-2 rounded ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
