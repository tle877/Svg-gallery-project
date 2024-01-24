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
                <hr />
                <div className="p-5 flex justify-center items-center">
                    <a href="/notification" className="all-msg-btn">All Messages</a>
                </div>
            </div>
            <div className={'notificationOverlay ' + (isOpen? 'block' : '')}></div>
        </>
        
    )
}

export default NotificationPanel;