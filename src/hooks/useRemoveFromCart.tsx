import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/features/cartSlice";

interface Product {
  id: number;
}

export const useRemoveFromCart = (product: Product | undefined) => {
  const dispatch = useDispatch();

  const removeProductFromCart = () => {
    if (product) {
      dispatch(removeFromCart(product.id));
      toast.success("Removido do carrinho");
    }
  };

  return { removeProductFromCart };
};
