import Radium from 'radium';

import Nav from './Navigation/Nav';
import Aux from "../../hoc/Hoc"


const layouts = props =>(
    <Aux>
        <Nav />
        <div>
            {/* nav bar, sidebar, backdrop */}
        </div>

        <main>
            {props.childern}
        </main>
    </Aux>

)

export default Radium(layouts)