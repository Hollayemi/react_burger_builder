import react from 'react';

import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css'

const controls = [
    {label: 'Cheese', type:'Cheese'},
    {label: 'Salad', type:'Salad'},
    {label: 'Bacon', type:'Bacon'},
    {label: 'Meat', type:'Meat'}
]
const style={
    textAlign:'center',
    padding:"20px"
}
const buildControls = props => (
    
        <div className="BuildControls">
            <p style={style}>Current Price: {props.price} </p>
            {
                // console.log({props.emptyBread})
                controls.map(ctrl => (
                    <BuildControl 
                        label={ctrl.label} 
                        key={ctrl.label}
                        more={()=>props.addInd(ctrl.type)}
                        less={()=>props.rmvInd(ctrl.type)}
                        isDisables={props.disabled[ctrl.type]}/>
                ))
            }
            <button className="OrderButton" disabled={!props.emptyBread} onClick={props.orderBtn}>Order now</button>
        </div>
)


export default buildControls;