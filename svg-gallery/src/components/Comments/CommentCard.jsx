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
      <div className={"commentCardContainer mt-5"}>
        <div className={"commentAvatar"}>
          <img src={AvatarImage} alt="" />
        </div>
        <div className={"commentCardBody"}>
          <div className={"authorName"}>laser machine</div>
          <div className={"postAtDate"}>2023-11-12</div>
          <div className={"commentContent mt-5"}>
            I got to of your lasers 60-wtt and an 80-watt. I love them both, they
            are great machines. The only thing I don't like you have to request at
            time I don't like you have to request at time
          </div>
          <div className={"commentMedia mt-5"}>
            <div className={"mediaItem"}>
              <img src={VideoImage} alt="" />
            </div>
            <div className={"mediaItem"}>
              <img src={Image} alt="" />
            </div>
            <div className={"mediaItem"}>
              <img src={Image} alt="" />
            </div>
          </div>
          <div className={"actionBtns mt-5"}>
            <Button className={"replyBtn"}>Reply</Button>
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
          {hasReply ? <RepliesSection /> : <></>}
        </div>
      </div>
      <ReportModal />
    </>

  );
};

export default CommentCard;
