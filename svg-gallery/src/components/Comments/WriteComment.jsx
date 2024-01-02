import AvatarImage from "../../assets/avatar.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.scss";
import FileUpload from "../FileUploader/FileUploader";
const WriteComment = () => {
  return (
    <>
      <div className={"writeCommentBox mt-5"}>
        <div className={"commentAvatar"}>
          <img src={AvatarImage} alt="" />
        </div>
        <div className={"commentBox"}>
          <TextField
            fullWidth
            placeholder="Write your comment"
            id="commentInput"
          />
          <div className={"addImageBtn"}>
            <FileUpload/>
            
          </div>
          <div className={"addVideoBtn"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                d="M29.9531 7.60156C30.2614 7.60156 30.5666 7.66961 30.8513 7.80182C31.1361 7.93403 31.3948 8.12781 31.6128 8.3721C31.8307 8.61639 32.0036 8.9064 32.1215 9.22558C32.2395 9.54476 32.3002 9.88685 32.3002 10.2323V27.7708C32.3002 28.1163 32.2395 28.4584 32.1215 28.7775C32.0036 29.0967 31.8307 29.3867 31.6128 29.631C31.3948 29.8753 31.1361 30.0691 30.8513 30.2013C30.5666 30.3335 30.2614 30.4016 29.9531 30.4016H8.04725C7.42478 30.4016 6.82779 30.1244 6.38763 29.631C5.94747 29.1377 5.7002 28.4685 5.7002 27.7708V10.2323C5.7002 9.53461 5.94747 8.86546 6.38763 8.3721C6.82779 7.87873 7.42478 7.60156 8.04725 7.60156H29.9531ZM29.9531 10.2323H8.04725V27.7708H29.9531V10.2323ZM16.6657 13.2682C16.9378 13.2681 17.2053 13.3476 17.4417 13.4989L23.6763 17.4924C23.9158 17.6458 24.1149 17.8674 24.2533 18.1348C24.3918 18.4023 24.4647 18.706 24.4647 19.0152C24.4647 19.3243 24.3918 19.628 24.2533 19.8955C24.1149 20.1629 23.9158 20.3845 23.6763 20.5379L17.441 24.5306C17.2031 24.6827 16.9337 24.7621 16.6598 24.761C16.3859 24.7598 16.1171 24.6781 15.8802 24.524C15.6433 24.3699 15.4467 24.1488 15.3099 23.8828C15.1732 23.6168 15.1011 23.3152 15.1009 23.0082V15.0221C15.1009 14.5569 15.2658 14.1108 15.5592 13.7819C15.8527 13.453 16.2507 13.2682 16.6657 13.2682ZM17.448 16.5321V21.4964L21.323 19.0147L17.4488 16.533L17.448 16.5321Z"
                fill="#2F2725"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={"flex justify-end mt-4"}>
        <Button className={"submitBtn"} autoFocus>
          Post a comment
        </Button>
      </div>
    </>
  );
};

export default WriteComment;
