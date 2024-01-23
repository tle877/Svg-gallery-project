/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./style.scss";
import Button from '@mui/material/Button';

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const ImageUploadDropZone = (props) => {
  const [files, setFiles] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
    onDropRejected: (rejectedFile) => {
      setIsError(true);
      setErrorMsg(rejectedFile[0].errors[0].message)
    }
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="mt-5">
      <div {...getRootProps({ className: "ImageUploadDropZone " + (isError ? "ImageUploadDropZoneError" : "") })}>
        <input {...getInputProps()} />
        <div className={"uploadIcon " + (isError ? "hiddenUploadIcon" : "")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" fill="none">
            <path d="M4.16797 29.1663V41.6663C4.16797 43.9674 6.03346 45.8329 8.33464 45.8329H41.668C43.9692 45.8329 45.8346 43.9674 45.8346 41.6663V29.1663" stroke="#3F535E" strokeWidth="4.16667" />
            <path d="M39.8779 18.8974L26.6196 5.63915C25.806 4.82556 24.4869 4.82556 23.6733 5.63916L10.4151 18.8974" stroke="#3F535E" strokeWidth="4.16667" />
            <line x1="25.0013" y1="6.24927" x2="25.0013" y2="35.4159" stroke="#3F535E" strokeWidth="4.16667" />
          </svg>

        </div>
        <div className={"uploadIcon " + (isError ? "" : "hiddenUploadIcon")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M24.875 3C31.0958 3.16343 36.2768 5.31576 40.418 9.457C44.5592 13.5982 46.7116 18.7792 46.875 25C46.7116 31.2208 44.5592 36.4018 40.418 40.543C36.2768 44.6842 31.0958 46.8366 24.875 47C18.6542 46.8366 13.4732 44.6842 9.332 40.543C5.19076 36.4018 3.03843 31.2208 2.875 25C3.03843 18.7792 5.19076 13.5982 9.332 9.457C13.4732 5.31576 18.6542 3.16343 24.875 3ZM24.875 12.4286C24.0233 12.4286 23.3193 12.7397 22.763 13.362C22.2067 13.9843 21.961 14.7208 22.026 15.5714L23.1559 28.1429C23.2219 28.6017 23.4099 28.9699 23.72 29.2476C24.0301 29.5252 24.4146 29.6645 24.8734 29.6656C25.3323 29.6666 25.7168 29.5273 26.0269 29.2476C26.337 28.9679 26.525 28.5996 26.591 28.1429L27.7209 15.5714C27.7869 14.7197 27.5412 13.9832 26.9839 13.362C26.4265 12.7408 25.7225 12.4296 24.8719 12.4286H24.875ZM24.875 37.5714C25.5958 37.539 26.1934 37.2933 26.668 36.8344C27.1426 36.3756 27.3799 35.7863 27.3799 35.0666C27.3799 34.3469 27.1426 33.7492 26.668 33.2736C26.1934 32.798 25.5958 32.5607 24.875 32.5617C24.1542 32.5628 23.5566 32.8 23.082 33.2736C22.6074 33.7471 22.3701 34.3448 22.3701 35.0666C22.3701 35.7884 22.6074 36.3777 23.082 36.8344C23.5566 37.2912 24.1542 37.5369 24.875 37.5714Z" fill="#F56C6C" />
          </svg>

        </div>
        <div className={'fileRestriction-imageUpload sm:mb-10 mb-5' }>
          <span className={(isError ? "hidden" : "block")}>
            <span className="hidden sm:block">Drag and drop your file here or  </span>click <span className="text-blue">Select image</span> to upload
          </span>
          <span className={(isError ? "block text-center" : "hidden")}>{errorMsg}</span>
        </div>
        <button className={'selectFileBtn px-3 py-1'} variant="outlined">Select Image</button>
        <div className={'fileRestriction-imageUpload flex flex-col sm:gap-2 mt-5 text-center'}>
          <span>supported file formats ：jpg、jpeg、png、svg</span>
          <span>smallest size：2400*3500px</span>
          <span>maximum file size：10MB</span>
        </div>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
};

export default ImageUploadDropZone;
