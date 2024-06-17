import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import { useAppSelector } from "../redux/hooks"

export const Navbar = () => {

    const cartCount = useAppSelector((state) => state.cartReducer.length)
    return (
        <div className="sticky top-0 pt-4 bg-white">
            <div className="container">
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl font-bold">Logo</h1>
                    <div className="lg:flex hidden w-full max-w-[500px]">
                        <input  type="text"  
                                placeholder="Search for product ..."  
                                className="w-full px-6 py-2 border-2 border-accent"/>

                                <div className="bg-accent text-white text-[26px] grid place-items-center px-4">
                                    <button className="bg-transparent border-0"><BsSearch/></button>
                                </div>
                    </div>
                    <div className="flex items-center gap-4 md:gap-8">
                        <div className="hidden gap-3 md:flex">
                            <div className="text-[32px] w-[50px] h-[50px] grid place-items-center border-2 border-gray-300 rounded-full">
                                <AiOutlineUser/>
                            </div>
                            <div>
                                <p className="text-gray-500">Hello, Sign in</p>
                                <p className="font-medium">Your Account</p>
                            </div>
                        </div>

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