import { useContext } from "react";
import { appContext } from "./App";


const Contactus = ()=>{
    const appCtx = useContext(appContext);
    return(<div>Contactus Page
     <h2>{appCtx.loginUser}</h2>
    </div>);
  
}
export default Contactus;