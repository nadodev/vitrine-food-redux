import { RxCross1 } from "react-icons/rx";
import { useAppSelector } from "../redux/hooks";
import { IProduct } from "../@types/IProduct";
import CartProduct from "./CartProduct";
import { IShowCartProps } from "../@types/IShowCartProps";

export const Cart = ({ setShowCart }: IShowCartProps) => {
    const products = useAppSelector((state) => state.cartReducer);

    const getTotal = () => {
        let total = 0;
        products.forEach((item) => (total = total + Number(item.price) * item.quantity));
        return total;
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
            <div className="max-w-[400px] h-full w-full bg-white absolute right-0 top-0 p-6">
                <RxCross1
                    onClick={() => setShowCart(false)}
                    className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
                />
                <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">Your Cart</h3>

                <div className="mt-6 space-y-2">
                    {products.map((item: IProduct) => (
                        <CartProduct
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            title={item.title}
                            price={Number(item.price)}
                            quantity={item.quantity}
                        />
                    ))}
                </div>

                <div className="flex items-center justify-between py-4 text-xl font-medium">
                    <p>Total:</p>
                    <p>${getTotal()}.00</p>
                </div>

                {products.length > 0 && (
                    <button className="w-full py-2 text-center text-white bg-black rounded-3xl hover:bg-accent">
                        Checkout
                    </button>
                )}
            </div>
        </div>
    );
};
