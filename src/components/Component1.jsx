import "../styles/Component1.css"
import logo from '../assets/logo.svg'


const Component1 = () => {

    return(
        <>
        <header className="header">
            <img src={logo} alt="logo" className="logo"/>
            <nav className="nav">
                <a href="" className="link">The Way</a>
                <a href="" className="link">The Why</a>
                <a href="" className="link">The Us</a>
                <a href="" className="link">The How</a>
            </nav>
        </header>

        </>
    )
}

export default Component1