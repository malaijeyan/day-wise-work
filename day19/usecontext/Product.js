import { useContext } from "react";
import { appContext } from "./App";

const Product = ()=>{
    const appCtx = useContext(appContext);
    return(<div>Product Page
    <h2>{appCtx.loginUser}</h2>

    </div>);
}
export default Product;