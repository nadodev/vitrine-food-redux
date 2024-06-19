// CreateCartItemButton.tsx

import React from "react";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IProduct } from "../@types/IProduct";
import { addToCart } from "../redux/features/cartSlice";
import { useAppDispatch } from "../redux/hooks";


const CreateCartItemButton: React.FC<IProduct> = ({ id, img, title, price }) => {
  const dispatch = useAppDispatch();

  const addProductToCart = () => {
    const payload = {
      id,
      img,
      title,
      price ,
      quantity: 1,
    };

    dispatch(addToCart(payload));
    toast.success("Adicionado ao carrinho");
  };

  return (
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={addProductToCart}
    >
      <AiOutlineShoppingCart /> Adicionar ao Carrinho
    </button>
  );
};

export default CreateCartItemButton;
