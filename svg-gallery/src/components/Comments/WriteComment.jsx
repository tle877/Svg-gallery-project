import AvatarImage from "../../assets/avatar.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.scss";
import FileUpload from "../FileUploader/FileUploader";
import VideoUpload from "../FileUploader/VideoUploader";
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
          <div className={"addImageBtn hidden xl:block"}>
            <FileUpload/>
            
          </div>
          <div className={"addVideoBtn hidden xl:block"}>
            <VideoUpload/>
          </div>
        </div>
      </div>
      <div className={"flex justify-end mt-4 hidden xl:flex"}>
        <Button className={"submitBtn"} autoFocus>
          Post a comment
        </Button>
      </div>
    </>
  );
};

export default WriteComment;
