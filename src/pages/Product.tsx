import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { foods } from "../data/Food";
import { useAddToCart } from "../hooks/useAddToCart";
import { useRemoveFromCart } from "../hooks/useRemoveFromCart";
import { RootState } from "../redux/store";

interface Product {
  id: number;
  img: string;
  category: string;
  title: string;
  price: string;
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

 const { addProductToCart } = useAddToCart(product);
 const { removeProductFromCart } = useRemoveFromCart(product);

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
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={addProductToCart}
        >
          Adicionar ao Carrinho
        </button>
        {/* Renderizar botão "Remover do Carrinho" apenas se o produto estiver no carrinho */}
        {isInCart && (
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={removeProductFromCart}
          >
            Remover do Carrinho
          </button>
        )}
      </div>
    </div>
  );
};
