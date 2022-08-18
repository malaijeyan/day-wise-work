import { useContext } from "react";
import { appContext } from "./App";

const Category = ()=>{
    const appCtx = useContext(appContext);
    return(<div>Category Page
    <h2>{appCtx.loginUser}</h2>
    </div>);
}
export default Category;