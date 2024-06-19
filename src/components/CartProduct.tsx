import { RxCross1 } from "react-icons/rx";
import { useAppDispatch } from "../redux/hooks";
import { removeFromCart } from "../redux/features/cartSlice";

interface CartProductProps {
    id: number;
    img: string;
    title: string;
    price: number;
    quantity: number;
}

const CartProduct: React.FC<CartProductProps> = ({ id, img, title, price, quantity }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 overflow-hidden rounded-md">
                        <img
                            src={img}
                            alt={title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-medium">{title}</h3>
                        <p className="text-sm text-gray-600">
                            {quantity} x ${price.toFixed(2)}
                        </p>
                    </div>
                </div>
                <RxCross1
                    className="text-gray-400 cursor-pointer"
                    onClick={() => dispatch(removeFromCart(id))}
                />
            </div>
        </div>
    );
};

export default CartProduct;
