import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

const FileDetails = () => {
  const [open, setOpen] = React.useState(false);

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
      <React.Fragment>
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
      </React.Fragment>
    );
  }

  return (
    <div className="flex items-start gap-[40px] relative mt-5">
      <div className="relative w-[127px] h-[22px]">
        <div className="inline-flex items-start gap-[4px] relative">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Metropolis-Regular',Helvetica] font-normal text-mj-w71a text-[18px] tracking-[0] leading-[22px] whitespace-nowrap">
            File Type:
          </div>
          <div className="relative w-fit mt-[-1.00px] [font-family:'Metropolis-Regular',Helvetica] font-normal text-mj-w71a text-[18px] tracking-[0] leading-[22px] whitespace-nowrap">
            Svg
          </div>
        </div>
      </div>
      <div className="relative w-[173px] h-[22px]">
        <div className="inline-flex items-start gap-[4px] relative">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Metropolis-Regular',Helvetica] font-normal text-mj-w71a text-[18px] tracking-[0] leading-[22px] whitespace-nowrap">
            Premium License
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M2.75 4.24087L11.0039 1.83203L19.25 4.24087V9.18081C19.25 14.373 15.9272 18.9826 11.0012 20.6239C6.07388 18.9826 2.75 14.372 2.75 9.17852V4.24087Z"
              stroke="#2F2725"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M6.875 10.5417L10.0833 13.75L15.5833 8.25"
              stroke="#2F2725"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]"
        onClick={handleClickOpen}
      >
        <div className="relative w-fit mt-[-1.00px] [font-family:'Metropolis-Regular',Helvetica] font-normal text-[#158cc5] text-[18px] tracking-[0] leading-[22px] whitespace-nowrap">
          Report
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g clipPath="url(#clip0_1122_17342)">
            <path
              d="M11.1854 15.4821C11.3129 15.4821 11.4391 15.5072 11.5569 15.556C11.6746 15.6047 11.7816 15.6762 11.8717 15.7664C11.9619 15.8565 12.0334 15.9635 12.0821 16.0812C12.1309 16.199 12.156 16.3252 12.156 16.4527C12.156 16.5801 12.1309 16.7063 12.0821 16.8241C12.0334 16.9419 11.9619 17.0488 11.8717 17.139C11.7816 17.2291 11.6746 17.3006 11.5569 17.3494C11.4391 17.3981 11.3129 17.4233 11.1854 17.4233C10.928 17.4233 10.6811 17.321 10.4991 17.139C10.3171 16.957 10.2148 16.7101 10.2148 16.4527C10.2148 16.1952 10.3171 15.9484 10.4991 15.7664C10.6811 15.5843 10.928 15.4821 11.1854 15.4821ZM11.1854 7.07031C11.3091 7.07031 11.4314 7.09592 11.5446 7.14553C11.6579 7.19514 11.7596 7.26767 11.8435 7.35856C11.9273 7.44944 11.9914 7.5567 12.0317 7.67358C12.072 7.79046 12.0877 7.91443 12.0777 8.03767L11.5779 14.2142C11.5714 14.2952 11.5346 14.3708 11.4749 14.4259C11.4152 14.4811 11.3369 14.5117 11.2556 14.5118H11.1068C11.0254 14.5118 10.947 14.4812 10.8872 14.4259C10.8275 14.3707 10.7907 14.295 10.7843 14.2138L10.2918 8.03799C10.282 7.91467 10.2978 7.79066 10.3383 7.67376C10.3787 7.55685 10.443 7.44959 10.5269 7.35872C10.6108 7.26785 10.7127 7.19534 10.826 7.14576C10.9394 7.09618 11.0617 7.07028 11.1854 7.07031Z"
              fill="#158CC5"
            />
            <path
              d="M20.9161 20.2164L20.916 20.2161L11.1946 1.60673L11.8594 1.25946L11.1946 1.60672L20.9161 20.2164ZM20.9161 20.2164C20.9337 20.25 20.9423 20.2876 20.9411 20.3255C20.94 20.3634 20.929 20.4004 20.9093 20.4329C20.8897 20.4653 20.862 20.4921 20.8289 20.5108C20.7959 20.5294 20.7586 20.5392 20.7206 20.5392H20.7205H1.2777H1.27734C1.23939 20.5392 1.20208 20.5294 1.16901 20.5108C1.13594 20.4922 1.10824 20.4653 1.08857 20.4329C1.0689 20.4004 1.05795 20.3634 1.05675 20.3255C1.05555 20.2876 1.06416 20.25 1.08175 20.2164L1.08186 20.2161L10.8036 1.60673C10.8307 1.55488 10.8773 1.51591 10.9331 1.4984C10.9889 1.48089 11.0494 1.48626 11.1012 1.51334L20.9161 20.2164Z"
              stroke="#158CC5"
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_1122_17342">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <ReportModal />
    </div>
  );
};

export default FileDetails;
