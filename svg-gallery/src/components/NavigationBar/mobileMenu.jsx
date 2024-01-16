import "./style.scss";
const MobileMenu = (props) => {
    // eslint-disable-next-line react/prop-types
    const { isOpen } = props;
    return(
        <div className={'mobileDropdownMenu ' + (isOpen ? "block" : "")}>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="https://omtechlaser.com/">OMTECH LASER</a></li>
                <li><a href="/profile">PROFILE</a></li>
            </ul>
        </div>
    );
}

export default MobileMenu;