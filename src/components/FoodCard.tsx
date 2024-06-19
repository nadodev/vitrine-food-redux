import { AiFillStar, AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useAddToCart } from "../hooks/useAddToCart";
import { useRemoveFromCart } from "../hooks/useRemoveFromCart";
import { RootState } from "../redux/store";

interface propsType {
    id: number;
    img: string;
    category: string;
    title: string;
    price: string;
}

export const FoodCard = ({
    title, category, price, img, id
}: propsType) => {
  const isInCart = useSelector((state: RootState) =>
    state.cartReducer.some((item) => item.id === id)
  );

  const product = {
    id,
    img,
    title,
    category,
    price,
  };


    const { addProductToCart } = useAddToCart(product);
    const { removeProductFromCart } = useRemoveFromCart(product);
    return (
      <div className="border border-gray-200">
        <div className="text-center border-b border-gray-200">
          <img
            className="inline-block w-full h-[200px] object-cover"
            src={img}
            alt={title}
            height={200}
          />
        </div>

        <div className="px-8 py-4">
          <p className="text-gray-500 text-[14px] font-medium">{category}</p>
          <h2 className="font-medium">{title}</h2>

          <div className="mt-3 flex text-[#ffb21] items-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p className="text-gray-600 text-[14px] ml-2">(3 Review)</p>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 mt-4">
            <h2 className="text-xl font-medium text-accent">{price}</h2>
            <div className="flex gap-2">
              <a
                href={`/product/${id}`}
                className="flex items-center gap-2 px-4 py-2 text-white cursor-pointer bg-sky-500 hover:bg-accent"
              >
                <IoEye />
                Ver Produto
              </a>
              {isInCart ? (
                <button
                  className="flex items-center gap-2 px-4 py-2 text-white cursor-pointer bg-pink hover:bg-accent"
                  onClick={removeProductFromCart}
                >
                  Remover
                </button>
              ) : (
                <button
                  className="flex items-center gap-2 px-4 py-2 text-white cursor-pointer bg-sky-800 hover:bg-accent"
                  onClick={addProductToCart}
                >
                  <AiOutlineShoppingCart /> Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}