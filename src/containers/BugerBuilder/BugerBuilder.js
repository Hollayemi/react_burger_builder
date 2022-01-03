import React,{ Component } from "react";
import Radium from 'radium';

import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/UI/OrderSummary/OrderSummary"
import Nav from '../../components/Layouts/Navigation/Nav';

import './BurgerStyle.css'
import Aux from '../../hoc/Hoc'

const INFREDIENT_PRICES = {
    Salad   : 0.4,
    Cheese  : 0.6,
    Meat    : 0.2,
    Bacon   : 0.8
}
class Buger extends Component{
    state =  {
        setIngredients : {
            Salad   : 0,
            Cheese  : 0,
            Meat    : 0,
            Bacon   : 0
        },
        totalPrice: 4,
        purchaseable: false,
        displayModal:'hideModal Modal'
    }

    displayModalHandler  = () =>{
        const prevModal  = this.state.displayModal;
        const displayMod = {...this.state}

        let updateModal = null

        if(prevModal === "hideModal Modal"){
             updateModal = "showModal Modal";
        }else{
             updateModal = "hideModal Modal";
        }

        this.setState({displayModal:updateModal})
    }

    updatePurchaseAble(ingredient){
        // const sum = Object.keys(copyIng)
        //  .map(ingKey => {
        //     return copyIng[ingKey]
        // }).reduce((sum,el) => {
        //     return sum+el
        // },0)
        let sumKey = 0;
        for(let key in ingredient){
            sumKey += ingredient[key];
        }
        this.setState({purchaseable:sumKey > 0});
    }
    addIngredienthandler = type =>{
        const oldCount    =   this.state.setIngredients[type];
        const newCount    =   oldCount + 1;  

        const oldPrice  = this.state.totalPrice;
        const IngPrice  = INFREDIENT_PRICES[type]

        const newPrice  = oldPrice + IngPrice;

        const upgradeIngredient = {
             ...this.state.setIngredients
        }
        upgradeIngredient[type] =   newCount;
        
        this.setState({setIngredients:upgradeIngredient,totalPrice:newPrice})
        

        this.updatePurchaseAble(upgradeIngredient);

    }

    removeIngredienthandler = type=> {
        const oldCount    =   this.state.setIngredients[type];
        const upgradeIngredient = {
            ...this.state.setIngredients
        }
        if(oldCount > 0){
            const newCount    =   oldCount - 1;  
    
            const oldPrice  = this.state.totalPrice;
            const IngPrice  = INFREDIENT_PRICES[type]
    
            const newPrice  = oldPrice - IngPrice;
            upgradeIngredient[type] =   newCount;
            this.setState({setIngredients:upgradeIngredient,totalPrice:newPrice})
            
        }

        this.updatePurchaseAble(upgradeIngredient);
    }

    render(){
        const isDisabled = {
            ...this.state.setIngredients
        }

        for (let key in isDisabled ){
            isDisabled[key] = isDisabled[key] <= 0
        }
        
        return(
            <Aux>
                <Nav />
                <Modal shouldDisplay={this.state.displayModal}>
                    <OrderSummary myIngredients={this.state.setIngredients} totPrice={this.state.totalPrice} orderBtn  = {this.displayModalHandler}/>
                </Modal>
                <Burger ingredient={this.state.setIngredients}/>
                < BuildControls 
                    addInd={this.addIngredienthandler}
                    rmvInd={this.removeIngredienthandler}
                    disabled={isDisabled}
                    price={this.state.totalPrice}
                    emptyBread={this.state.purchaseable}
                    orderBtn  = {this.displayModalHandler}
                    />
            </Aux>
        );
    }
}

export default Radium(Buger)