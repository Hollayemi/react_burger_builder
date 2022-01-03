import './Modal.css'

const modal = props =>(
    <div className="Modal" className={props.shouldDisplay} >
        {props.children}
    </div>
)

export default modal