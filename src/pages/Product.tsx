import { useParams } from "react-router-dom";

export const Product = () => {
    const { productID } = useParams();
  // ...
    return (
        <>
        {productID}
            <h2>Product</h2>
        </>
    )
}