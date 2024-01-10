import './style.scss'
import logo from '../../assets/logo.png'
const LogoContainer = () => {
    return (
        <div className={'logo'}>
            <a href="/">
                <img src={logo} alt="omtech laser logo" />
            </a>

        </div>
    )
}

export default LogoContainer;