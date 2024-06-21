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
  quantity: number;
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
    <div className="max-w-2xl p-4 mx-auto my-8 bg-white rounded-lg shadow-md">
      <img
        src={product.img}
        alt={product.title}
        className="object-cover w-full h-64 mb-4 rounded-lg"
      />
      <div className="flex items-center gap-2">
        <h2 className="mb-2 text-3xl font-bold">{product.title}</h2>
        <span className="block text-xl font-bold text-sky-500">
          {product.category}
        </span>
      </div>
      {product.description && (
        <p className="mb-4 text-gray-700">{product.description}</p>
      )}
      <p className="text-xl font-semibold text-gray-900">
        R${Number(product.price).toFixed(2)}
      </p>
      <div className="flex gap-2">
        <CreateCartItemButton  
            id={product.id}
            img={product.img}
            price={product.price}
            quantity={product.quantity}
            title={product.title}
            description={product.description}
        />
        {isInCart && <RemoveCartItemButton id={product.id} />}
      </div>
    </div>
  );
};
