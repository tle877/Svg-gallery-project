/* eslint-disable react/no-unescaped-entities */
import AvatarImage from "../../assets/avatar.png";
import VideoImage from "../../assets/Image/media1.png";
import Image from "../../assets/Image/media2.png";
import Button from "@mui/material/Button";
import RepliesSection from "./RepliesSection";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import "./style.scss"
const CommentCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { hasReply } = props;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  function ReportModal() {
    return (
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Report
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Container>
            <div>*Report Type</div>
            <div className={"reportTypeContainer"}>
              <div className={"reportType"}>Political</div>
              <div className={"reportType"}>pronography</div>
              <div className={"reportType selectedType"}>terrorism</div>
              <div className={"reportType"}>demand</div>
              <div className={"reportType"}>bloody</div>
              <div className={"reportType"}>abusive behavior</div>
              <div className={"reportType"}>infringements</div>
              <div className={"reportType"}>svg</div>
              <div className={"reportType"}>Home Decor</div>
              <div className={"reportType"}> Tags</div>
              <div className={"reportType"}>chistmas</div>
            </div>
            <div>*Report Content</div>
            <TextField fullWidth placeholder="Write Your Content" id="fullWidth" />
          </Container>
        </DialogContent>
        <DialogActions className={'modalAction'}>
          <Button className={'cancelBtn'} autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button className={'submitBtn'} autoFocus onClick={handleClose}>
            Sure
          </Button>
        </DialogActions>
      </BootstrapDialog>
    );
  }

  return (
    <>
      <div className={"commentCardContainer mt-5 md:flex "}>

        <div className={"commentAvatar hidden md:block  "}>
          <img src={AvatarImage} alt="" />
        </div>

        <div>
          <div className="flex">
            <div className={"commentAvatar  md:hidden"}>
              <img src={AvatarImage} alt="" />
            </div>
            <div>
              <div className={"authorName"}>laser machine</div>
              <div className={"postAtDate"}>2023-11-12</div>
            </div>
          </div>
          
          <div className={"commentContent mt-5"}>
            I got to of your lasers 60-wtt and an 80-watt. I love them both, they
            are great machines. The only thing I don't like you have to request at
            time I don't like you have to request at time
          </div>
          <div className={"grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-5 md:w-2/3"}>
            <div className={""}>
              <img src={VideoImage} alt="" />
            </div>
            <div className={""}>
              <img src={Image} alt="" />
            </div>
            <div className={""}>
              <img src={Image} alt="" />
            </div>
          </div>
          <div className={"actionBtns mt-5"}>
            <Button className={"replyBtn"}>Reply</Button>
            <div className="flex gap-4 items-center">
              {/* remove icon */}
              <div className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none">
                  <g opacity="0.4">
                    <path d="M6.25 9.99982H3.75C3.41848 9.99982 3.10054 9.86812 2.86612 9.6337C2.6317 9.39928 2.5 9.08134 2.5 8.74982C2.5 8.41829 2.6317 8.10035 2.86612 7.86593C3.10054 7.63151 3.41848 7.49982 3.75 7.49982H13.75V3.74731C13.75 3.41579 13.8817 3.09785 14.1161 2.86343C14.3505 2.62901 14.6685 2.49731 15 2.49731H25C25.3315 2.49731 25.6495 2.62901 25.8839 2.86343C26.1183 3.09785 26.25 3.41579 26.25 3.74731V7.49982H36.25C36.5815 7.49982 36.8995 7.63151 37.1339 7.86593C37.3683 8.10035 37.5 8.41829 37.5 8.74982C37.5 9.08134 37.3683 9.39928 37.1339 9.6337C36.8995 9.86812 36.5815 9.99982 36.25 9.99982H33.75V36.2498C33.75 36.5813 33.6183 36.8993 33.3839 37.1337C33.1495 37.3681 32.8315 37.4998 32.5 37.4998H7.5C7.16848 37.4998 6.85054 37.3681 6.61612 37.1337C6.3817 36.8993 6.25 36.5813 6.25 36.2498V9.99982ZM23.75 7.49982V4.99981H16.25V7.49982H23.75ZM8.75 34.9998H31.25V9.99982H8.75V34.9998ZM16.25 29.9998C15.9185 29.9998 15.6005 29.8681 15.3661 29.6337C15.1317 29.3993 15 29.0813 15 28.7498V16.2498C15 15.9183 15.1317 15.6004 15.3661 15.3659C15.6005 15.1315 15.9185 14.9998 16.25 14.9998C16.5815 14.9998 16.8995 15.1315 17.1339 15.3659C17.3683 15.6004 17.5 15.9183 17.5 16.2498V28.7498C17.5 29.0813 17.3683 29.3993 17.1339 29.6337C16.8995 29.8681 16.5815 29.9998 16.25 29.9998ZM23.75 29.9998C23.4185 29.9998 23.1005 29.8681 22.8661 29.6337C22.6317 29.3993 22.5 29.0813 22.5 28.7498V16.2498C22.5 15.9183 22.6317 15.6004 22.8661 15.3659C23.1005 15.1315 23.4185 14.9998 23.75 14.9998C24.0815 14.9998 24.3995 15.1315 24.6339 15.3659C24.8683 15.6004 25 15.9183 25 16.2498V28.7498C25 29.0813 24.8683 29.3993 24.6339 29.6337C24.3995 29.8681 24.0815 29.9998 23.75 29.9998Z" fill="#242B2E"/>
                  </g>
                </svg>
              </div>
              {/* report icon */}
              <div className={"reportBtn"} onClick={handleClickOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1114_9377)">
                    <path
                      d="M14.2353 19.7059C14.3975 19.7059 14.5582 19.7378 14.708 19.7999C14.8579 19.862 14.9941 19.953 15.1088 20.0677C15.2235 20.1824 15.3145 20.3186 15.3766 20.4684C15.4386 20.6183 15.4706 20.779 15.4706 20.9412C15.4706 21.1034 15.4386 21.264 15.3766 21.4139C15.3145 21.5638 15.2235 21.7 15.1088 21.8147C14.9941 21.9294 14.8579 22.0204 14.708 22.0824C14.5582 22.1445 14.3975 22.1765 14.2353 22.1765C13.9077 22.1765 13.5935 22.0463 13.3618 21.8147C13.1301 21.583 13 21.2688 13 20.9412C13 20.6136 13.1301 20.2994 13.3618 20.0677C13.5935 19.836 13.9077 19.7059 14.2353 19.7059ZM14.2353 9C14.3927 9 14.5483 9.0326 14.6924 9.09574C14.8366 9.15887 14.9661 9.25119 15.0728 9.36686C15.1795 9.48252 15.261 9.61904 15.3124 9.7678C15.3637 9.91655 15.3836 10.0743 15.3709 10.2312L14.7348 18.0922C14.7265 18.1953 14.6797 18.2915 14.6037 18.3617C14.5277 18.4319 14.4281 18.4709 14.3246 18.471H14.1352C14.0317 18.471 13.9319 18.432 13.8558 18.3617C13.7797 18.2914 13.7329 18.195 13.7247 18.0918L13.098 10.2316C13.0855 10.0746 13.1056 9.91681 13.1571 9.76802C13.2086 9.61923 13.2903 9.48271 13.3972 9.36706C13.504 9.25141 13.6336 9.15913 13.7779 9.09602C13.9221 9.03292 14.0779 8.99996 14.2353 9Z"
                      fill="#2F2725"
                    />
                    <path
                      d="M15.0941 1.60082L14.2078 2.06384L26.5805 25.7485L26.5806 25.7489C26.5994 25.7847 26.6086 25.8248 26.6073 25.8653C26.606 25.9057 26.5943 25.9452 26.5734 25.9798L27.4287 26.4978L26.5734 25.9798C26.5524 26.0144 26.5229 26.043 26.4876 26.0629C26.4523 26.0827 26.4125 26.0932 26.3721 26.0932H26.3719H1.62652H1.62603C1.58556 26.0932 1.54576 26.0828 1.51049 26.0629L1.0207 26.9328L1.51048 26.0629C1.47522 26.043 1.44566 26.0144 1.42469 25.9798L0.569434 26.498L1.42468 25.9798C1.40371 25.9452 1.39202 25.9057 1.39074 25.8653C1.38947 25.8248 1.39865 25.7847 1.41741 25.7489L1.41756 25.7486L13.7907 2.06385L12.9043 1.60082L13.7907 2.06385C13.8196 2.00854 13.8693 1.96697 13.9288 1.94829C13.9883 1.92961 14.0528 1.93535 14.1081 1.96423L15.0941 1.60082ZM15.0941 1.60082L14.2078 2.06383C14.1855 2.02125 14.1508 1.98649 14.1082 1.96424L15.0941 1.60082Z"
                      stroke="#2F2725"
                      strokeWidth="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1114_9377">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          {hasReply ? <RepliesSection /> : <></>}
        </div>
      </div>
      <ReportModal />
    </>

  );
};

export default CommentCard;
