import react from "react";
import './OrderSummary.css'



const orderSummary = props =>{


    const orderIngredients  =   Object.keys(props.myIngredients).map(igKeys => {
        return <li keys={igKeys}>
             <span>{igKeys}</span>:{props.myIngredients[igKeys]}
        </li>
    })


    return(
        <div className="Summary">
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {orderIngredients}
            </ul>
            <h5>Total Price {props.totPrice.toFixed(2)}</h5>
            <button className="OrderButton closeBtn" onClick={props.orderBtn}>Close</button>
        </div>

        
    );
}


export default orderSummary;