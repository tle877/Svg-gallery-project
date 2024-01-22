import { useState } from "react";
import "./style.scss";
// import Button from "@mui/material/Button";
// import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Avatar from "../../assets/avatar.png";
import NotificationPanel from './notificationPanel';
import AccountDropdown from './accountDropdown';
import UploadDropdown from "./uploadDropdown";
import AccountDropDownMobile from "./accountDropdownMobile";
const NavigationBar = () => {
  const [openNotification, setOpenNotification] = useState(false);
  const [openAccountDropdown, setOpenAccountDropdown] = useState(false);
  const [openUploadDropdown, setOpenUploadDropdown] = useState(false);
  const [openAccountDropdownMobile, setOpenAccountDropdownMobile] = useState(false);

  const notificationClicked = () => {
    setOpenNotification(!openNotification);
  }

  const accountClicked = () => {
    setOpenAccountDropdown(!openAccountDropdown);
  }

  const accountMobileClicked = () => {
    setOpenAccountDropdownMobile(!openAccountDropdownMobile);
  }
  const uploadClicked = () => {
    setOpenUploadDropdown(!openUploadDropdown);
  }

  
  return (
    <div className={"navigationContainer"}>
      <div className={"desktopMenu hidden lg:flex"}>
        <a href="/" className={"menu-item menu-text"}> Home</a>
        <a href="https://omtechlaser.com/" className={"menu-item menu-text"}>OMTech Laser</a>
        <div className="menu-btn flex my-3 px-5 gap-2 items-center" onClick={uploadClicked} >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1.5 10.5V15C1.5 15.8284 2.17157 16.5 3 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V10.5" stroke="white" strokeWidth="1.5" />
            <path d="M14.356 6.8033L9.58306 2.03033C9.29017 1.73744 8.8153 1.73744 8.5224 2.03033L3.74943 6.8033" stroke="white" strokeWidth="1.5" />
            <line x1="9" y1="2.25" x2="9" y2="12.75" stroke="white" strokeWidth="1.5" />
          </svg>
          Upload
        </div>
        <UploadDropdown isOpen={openUploadDropdown} />
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
        <div className={"menu-item hidden"} onClick={accountClicked}>
          <div className={"avatarContainer"}>
            <img src={Avatar} alt="" />
          </div>
        </div>
      </div>

      <div className={"mobileMenu flex lg:hidden w-full"}>
        <div className="menu-btn flex my-3 px-5 gap-2 items-center" onClick={uploadClicked} >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1.5 10.5V15C1.5 15.8284 2.17157 16.5 3 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V10.5" stroke="white" strokeWidth="1.5" />
            <path d="M14.356 6.8033L9.58306 2.03033C9.29017 1.73744 8.8153 1.73744 8.5224 2.03033L3.74943 6.8033" stroke="white" strokeWidth="1.5" />
            <line x1="9" y1="2.25" x2="9" y2="12.75" stroke="white" strokeWidth="1.5" />
          </svg>
          Upload
        </div>
        <UploadDropdown isOpen={openUploadDropdown} />
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
        <div className={"menu-item"} onClick={accountMobileClicked}>
          <div className={"avatarContainer"}>
            <img src={Avatar} alt="" />
          </div>
        </div>
      </div>

      <NotificationPanel isOpen={openNotification} />
      <AccountDropdown isOpen={openAccountDropdown} />
      <AccountDropDownMobile isOpen={openAccountDropdownMobile} />
    </div>
  );
};

export default NavigationBar;
