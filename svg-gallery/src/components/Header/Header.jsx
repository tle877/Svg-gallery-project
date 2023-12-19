import './style.scss'
import NavigationBar from '../NavigationBar/navigationBar';
import LogoContainer from './logo'
const Header = () => {
    return(
        <div className={'container mx-auto flex'}>
            <LogoContainer/>
            <NavigationBar/>
        </div>
    );
}
export default Header