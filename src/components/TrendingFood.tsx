import { foods } from "../data/Food"
import { FoodCard } from "./FoodCard"



export const TrendingFood = () => {
    return (
        <div className="container mt-32">
           <div className="items-center justify-between sm:flex">
                <h2 className="text-4xl font-medium ">Trending Food</h2>

                <div className="flex gap-4 mt-4 text-xl text-gray-500 sm:mt-0">
                    <div className="text-black ">
                            new
                    </div>
                    <div>Featured</div>
                    <div>Top Sellers</div>
                </div>

           </div>
                <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        foods.map((item) => (
                            <FoodCard
                                id={item.id}
                                img={item.img}
                                title={item.title}
                                category={item.category}
                                price={item.price}
                            />
                        ))
                    }
                </div>
        </div>
    )
}