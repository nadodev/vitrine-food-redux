import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

interface Product {
  id: number;
  img: string;
  title: string;
  price: string;
}

export const useAddToCart = (product: Product | undefined) => {
  const dispatch = useDispatch();

  const addProductToCart = () => {
    if (product) {
      const payload = {
        id: product.id,
        img: product.img,
        title: product.title,
        price: parseFloat(product.price),
        quantity: 1,
      };
      dispatch(addToCart(payload));
      toast.success("Adicionado ao carrinho");
    }
  };

  return { addProductToCart };
};
