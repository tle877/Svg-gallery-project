import './style.scss'
import logo from '../../assets/logo.png'
const LogoContainer = () => {
    return(
        <div className={'logo'}> 
            <img src={logo} alt="omtech laser logo" />
        </div>
    )
}

export default LogoContainer;