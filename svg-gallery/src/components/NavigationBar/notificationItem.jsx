import Avatar from "../../assets/avatar.png";

const NotificationItem = () => {
  return (
    <div className={"notificationItemWrapper"}>
      <div className={"notificationItemHeader"}>
        <div className={"userAvatar"}>
          <img src={Avatar} alt="" />
        </div>
        <div className={"notificationItemName"}>
          <span>Omtech Laser</span>
        </div>
        <div className={"notificationItemDate"}>
          <span>Nov 13,2023</span>
        </div>
      </div>
      <div className={"notificationItemBody"}>
        <p>
          Take a survey and get a chance to win $99.99 Tool Material Package and
          300 Tool Points.
        </p>
      </div>
    </div>
  );
};
export default NotificationItem;
