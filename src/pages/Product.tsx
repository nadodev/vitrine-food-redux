import { useParams } from "react-router-dom";
import { foods } from "../data/Food";

export const Product = () => {
    const { productID } = useParams();

      const product = foods.find((p) => String(p.id) === productID);


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
        <h2 className="text-3xl font-bold mb-2">{product.title} </h2>
        <span className="block font-bold text-sky-500 text-xl">{product.category}</span>
      </div>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold text-gray-900">
        R${Number(product.price).toFixed(2)}
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Adicionar ao Carrinho
      </button>
    </div>
  );
};
