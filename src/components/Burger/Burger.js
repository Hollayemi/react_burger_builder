import react from 'react';
import Radium from 'radium';

import './Burger.css'

import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) =>{

    let transformIngredient   =   Object.keys(props.ingredient).map(igKeys => {
        return([...Array(props.ingredient[igKeys])]).map((_,i) => {
            return <BurgerIngredients type={igKeys} key={igKeys + i}/>
        })
    }).reduce((arr,el) => {
        return arr.concat(el)
    }, []);
    if(transformIngredient.length  === 0){
         transformIngredient = <p> please add ingredient to your burger </p>
    }

    return(
        <div className="BurgerBody">
            <div className="burger">
                <BurgerIngredients type="BreadTop" />
                {transformIngredient}
                <BurgerIngredients type="BreadBottom" />
            </div>
        </div>
    );
   
}


export default Radium(Burger)
