import { Link } from 'react-router-dom';
import { useContext } from "react";
import { appContext } from "./App";


const Aboutus = ()=>{
    const appCtx = useContext(appContext);
    return(<div>
    About Page
    <h2>{appCtx.loginUser}</h2>
    <ul>
        <li>
            <Link to="/contactus">Contactus</Link>
        </li>
    </ul>
    </div>
    );
   
}
export default Aboutus;

