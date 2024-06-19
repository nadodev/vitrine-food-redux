import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CreateCartItemButton from "../components/CreateCartItemButton";
import RemoveCartItemButton from "../components/RemoveCartItemButton";
import { foods } from "../data/Food";
import { RootState } from "../redux/store";

interface Product {
  id: number;
  img: string;
  category?: string;
  title: string;
  price: number | string;
  description?: string;
}

export const Product = () => {
  const { productID } = useParams<{ productID: string }>(); // Defina o tipo do parâmetro productID

  const product: Product | undefined = foods.find(
    (p) => String(p.id) === productID
  );

  const isInCart = useSelector((state: RootState) =>
    state.cartReducer.some((item) => item.id === product?.id)
  );


  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="max-w-2xl mx-auto my-8 p-4 bg-white rounded-lg shadow-md">
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <div className="flex gap-2 items-center">
        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
        <span className="block font-bold text-sky-500 text-xl">
          {product.category}
        </span>
      </div>
      {product.description && (
        <p className="text-gray-700 mb-4">{product.description}</p>
      )}
      <p className="text-xl font-semibold text-gray-900">
        R${Number(product.price).toFixed(2)}
      </p>
      <div className="flex gap-2">
        <CreateCartItemButton {...product}/>
        {isInCart && <RemoveCartItemButton id={product.id} />}
      </div>
    </div>
  );
};
