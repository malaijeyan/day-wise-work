// import { setAmount, depoist, withdraw} from "./bankSlice";
// import {useDispatch, useSelector} from "react-redux";

const Bank =() => {
    // const{amount} = useSelector((store)=> store.bank);
    // const dispatch = useDispatch();
    return(
        <div className="app">
        <div>Bankpage</div>
        {/* <input type="text" value={amount} onChange={(e)=>{dispatch(setAmount(e.target.value))}}></input> */}
        <button>Depoist</button>
        <button>withdraw</button>
        </div>
    );

}
export default Bank;