import { addToCart } from "../redux/features/cartSlice";
import { useAppDispatch } from "../redux/hooks";

interface propsType {
    id: number;
    img: string;
    category: string;
    title: string;
    price: string;
}

export const FoodCard = ({
    title, category, price, img, id
}: propsType) => {


    const dispatch = useAppDispatch()

    const addProductToCart = () => {
        const payload = {
            id,
            img,
            title,
            price: parseFloat(price),
            quantity: 1
        }

        dispatch(addToCart(payload))
        // adicionar toast aqui
        //toast.success("Add to cart")
    }
    return (
        <div>

        </div>
    )
}