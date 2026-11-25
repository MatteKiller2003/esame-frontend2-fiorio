
import { Link } from 'react-router'
import './Header.css'

const Header = () => {
    return (

        <div className="header">
            <div>
                <div className="header__brand">Movie App</div>
            </div>
            <nav className="header__nav">
                <Link to="/">Home / Elenco</Link>
            </nav>
        </div>

    )
}

export default Header