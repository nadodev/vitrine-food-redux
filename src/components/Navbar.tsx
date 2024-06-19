import { AiOutlineShoppingCart } from "react-icons/ai"
import { useAppSelector } from "../redux/hooks"

export const Navbar = () => {

    const cartCount = useAppSelector((state) => state.cartReducer.length)
    return (
        <div className="sticky top-0 pt-4 bg-white">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <img src="https://thebravecoders-ecommerce-electronic.netlify.app/logo.png" alt="logo" />
                    </div>
                    <div className="flex items-center gap-4 md:gap-8">
                        <div className="text-gray-500 text-[32px] relative">
                            <AiOutlineShoppingCart />
                             <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
                               {cartCount}
                             </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4 border-b border-gray-200"/>
            </div>
        </div>
    )
}