import react from 'react';
import './BuildControl.css'

const buildControl = props => (
    
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button className="More" onClick = {props.more}>More</button>
        <button className="Less" onClick = {props.less} disabled={props.isDisables}>Less</button>
    </div>
    
)


export default buildControl;



// 07038861822 oye

// 08169211748 ogun