// RemoveCartItemButton.tsx

import React from "react";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { removeFromCart } from "../redux/features/cartSlice";
import { useAppDispatch } from "../redux/hooks";

interface Props {
  id: number;
}

const RemoveCartItemButton: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();

  const removeProductFromCart = () => {
    dispatch(removeFromCart(id));
    toast.success("Removido do carrinho");
  };

  return (
    <button
      className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      onClick={removeProductFromCart}
    >
      <AiOutlineShoppingCart /> Remover do Carrinho
    </button>
  );
};

export default RemoveCartItemButton;
