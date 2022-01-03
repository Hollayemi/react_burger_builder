import react from "react";
import Radium from 'radium';

import './BurgerIngredients.css'

const BurgerIngredient = props =>{
    let Ingredient = null;
    switch (props.type) {
        case ('BreadBottom'):
            Ingredient  =   <div className="BreadBottom"></div>
            break;
            

        case ('BreadTop'):
            Ingredient  =  (
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
            )
            break;

        case ('Meat'):
                Ingredient  =   <div className="Meat"></div>
                break;



        case ('Cheese'):
            Ingredient  =   <div className="Cheese"></div>
            break;

        case ('Salad'):
            Ingredient  =   <div className="Salad"></div>
            break;


        case ('Bacon'):
            Ingredient  =   <div className="Bacon"></div>
            break;

        default:
            Ingredient = null;
    }

    return Ingredient;
}

export default Radium(BurgerIngredient)