import NotificationItem from "./notificationItem";

const NotificationPanel = (props) => {
    // eslint-disable-next-line react/prop-types
    const {isOpen} = props;
    console.log(isOpen);
    return(
        <div className={'notificationPanel ' + (isOpen? 'block' : '')}>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
        </div>
    )
}

export default NotificationPanel;