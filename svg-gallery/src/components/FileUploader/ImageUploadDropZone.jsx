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
      <div {...getRootProps({ className: "ImageUploadDropZone" })}>
        <input {...getInputProps()} />
        <div className={"uploadIcon"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M4.16797 29.1663V41.6663C4.16797 43.9674 6.03346 45.8329 8.33464 45.8329H41.668C43.9692 45.8329 45.8346 43.9674 45.8346 41.6663V29.1663" stroke="#3F535E" stroke-width="4.16667" />
            <path d="M39.8779 18.8974L26.6196 5.63915C25.806 4.82556 24.4869 4.82556 23.6733 5.63916L10.4151 18.8974" stroke="#3F535E" stroke-width="4.16667" />
            <line x1="25.0013" y1="6.24927" x2="25.0013" y2="35.4159" stroke="#3F535E" stroke-width="4.16667" />
          </svg>
          
        </div>
        <div className={'fileRestriction p-5'}>
          <span>Drag and drop your file here or click Select image to upload</span>
        </div>
        <Button className={'selectFileBtn'} variant="outlined">Select Image</Button>
        <div className={'fileRestriction p-5 text-center'}>
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
