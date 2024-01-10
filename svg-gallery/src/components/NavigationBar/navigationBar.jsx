import {useState} from "react";
import "./style.scss";
import Button from "@mui/material/Button";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Avatar from "../../assets/avatar.png";
import NotificationPanel from './notificationPanel';
import AccountDropdown from './accountDropdown';

const NavigationBar = () => {
  const [openNotification, setOpenNotification] = useState(false);
  const [openAccountDropdown, setOpenAccountDropdown] = useState(false);

  const notificationClicked = () => {
    setOpenNotification(!openNotification);
  }

  const accountClicked = () => {
    setOpenAccountDropdown(!openAccountDropdown);
  }
  return (
    <div className={"navigationContainer"}>
      <div className={"desktopMenu"}>
        <a href="/" className={"menu-item menu-text"}> Home</a>
        <a href="https://omtechlaser.com/" className={"menu-item menu-text"}>OMTech Laser</a>
        <a href="/profile" className={"menu-item menu-text"}>Profile</a>
        <a href="/inspiration-upload-page" className={"menu-item"}>
          <Button
            className={"menu-btn"}
            variant="contained"
            startIcon={<FileUploadOutlinedIcon />}
          >
            Upload
          </Button>
        </a>
        <div className={"menu-item"} onClick={notificationClicked}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 2C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V6H14V4C14 3.46957 14.2107 2.96086 14.5858 2.58579C14.9609 2.21071 15.4696 2 16 2Z"
              fill="#2F2725"
            />
            <path
              d="M8 24.001H24V14.001C24 11.8792 23.1571 9.84441 21.6569 8.34412C20.1566 6.84383 18.1217 6.00098 16 6.00098C13.8783 6.00098 11.8434 6.84383 10.3431 8.34412C8.84285 9.84441 8 11.8792 8 14.001V24.001ZM16 4.00098C18.6522 4.00098 21.1957 5.05455 23.0711 6.92991C24.9464 8.80527 26 11.3488 26 14.001V26.001H6V14.001C6 11.3488 7.05357 8.80527 8.92893 6.92991C10.8043 5.05455 13.3478 4.00098 16 4.00098Z"
              fill="#2F2725"
            />
            <path
              d="M3 24.001H29C29.6667 24.001 30 24.3343 30 25.001C30 25.6676 29.6667 26.001 29 26.001H3C2.33333 26.001 2 25.6676 2 25.001C2 24.3343 2.33333 24.001 3 24.001ZM14 28.001H18C18 28.5314 17.7893 29.0401 17.4142 29.4152C17.0391 29.7903 16.5304 30.001 16 30.001C15.4696 30.001 14.9609 29.7903 14.5858 29.4152C14.2107 29.0401 14 28.5314 14 28.001Z"
              fill="#2F2725"
            />
          </svg>
        </div>
        <div className={"menu-item"} onClick={accountClicked}>
          <div className={"avatarContainer"}>
            <img src={Avatar} alt="" />
          </div>
        </div>
      </div>

      <div className={"mobileMenu"}>
        <div className={"menu-item"}>
          <Button
            className={"menu-btn"}
            variant="contained"
            startIcon={<FileUploadOutlinedIcon />}
          >
            Upload
          </Button>
        </div>
        <div className={"menu-item"} onClick={notificationClicked}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 2C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V6H14V4C14 3.46957 14.2107 2.96086 14.5858 2.58579C14.9609 2.21071 15.4696 2 16 2Z"
              fill="#2F2725"
            />
            <path
              d="M8 24.001H24V14.001C24 11.8792 23.1571 9.84441 21.6569 8.34412C20.1566 6.84383 18.1217 6.00098 16 6.00098C13.8783 6.00098 11.8434 6.84383 10.3431 8.34412C8.84285 9.84441 8 11.8792 8 14.001V24.001ZM16 4.00098C18.6522 4.00098 21.1957 5.05455 23.0711 6.92991C24.9464 8.80527 26 11.3488 26 14.001V26.001H6V14.001C6 11.3488 7.05357 8.80527 8.92893 6.92991C10.8043 5.05455 13.3478 4.00098 16 4.00098Z"
              fill="#2F2725"
            />
            <path
              d="M3 24.001H29C29.6667 24.001 30 24.3343 30 25.001C30 25.6676 29.6667 26.001 29 26.001H3C2.33333 26.001 2 25.6676 2 25.001C2 24.3343 2.33333 24.001 3 24.001ZM14 28.001H18C18 28.5314 17.7893 29.0401 17.4142 29.4152C17.0391 29.7903 16.5304 30.001 16 30.001C15.4696 30.001 14.9609 29.7903 14.5858 29.4152C14.2107 29.0401 14 28.5314 14 28.001Z"
              fill="#2F2725"
            />
          </svg>
        </div>
        <div className={"menu-item"} onClick={accountClicked}>
          <div className={"avatarContainer"}>
            <img src={Avatar} alt="" />
          </div>
        </div>
      </div>

      <NotificationPanel isOpen={openNotification}/>
      <AccountDropdown isOpen={openAccountDropdown}/>
    </div>
  );
};

export default NavigationBar;
