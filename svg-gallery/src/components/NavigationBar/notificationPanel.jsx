import NotificationItem from "./notificationItem";

const NotificationPanel = (props) => {
    // eslint-disable-next-line react/prop-types
    const {isOpen} = props;
    return(
        <>
            <div className={'notificationPanel ' + (isOpen? 'block' : '')}>
                <NotificationItem/>
                <NotificationItem/>
                <NotificationItem/>
                <NotificationItem/>
            </div>
            <div className={'notificationOverlay ' + (isOpen? 'block' : '')}></div>
        </>
        
    )
}

export default NotificationPanel;