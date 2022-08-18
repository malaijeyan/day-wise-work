import {increment,decrement} from "./CounterSlice";
import {useDispatch,useSelector} from "react-redux";

const Count =()=>{
    const {Count} = useSelector((store)=>store.Count);
    const dispatch = useDispatch();

    return(< div className="app">
        <div>Counter page</div>
        <button onClick={()=>{dispatch(increment(Count))}}> + </button>
        <button>{Count}</button>
         <button onClick={()=>{dispatch(decrement(Count))}}> - </button>
       
        
    </div>);
}
export default Count;