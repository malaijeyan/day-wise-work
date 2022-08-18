import { useContext } from "react";
import { appContext } from "./App";


const Order = ()=>{
    const appCtx = useContext(appContext);
    return(<div>Order Page
    <h2>{appCtx.loginUser}</h2>
    </div>);
}
export default Order;