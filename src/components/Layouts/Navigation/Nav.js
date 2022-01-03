import react from "react"

import Logo from "./logo"
import './Nav.css'

const nav = props   =>(
    <header className="header">
        {/* <div>Menu</div> */}
        <Logo />
        <nav>
            <ul>
                <li>Build Burger</li>
                <li>My account</li>
                <li>Services</li>
                <li>Logout</li>
            </ul>
        </nav>
    </header>
)

export default nav