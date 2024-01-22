/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./style.scss";

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

const DropZone = (props) => {
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
      <div {...getRootProps({ className: "dropzone flex" })}>
        <input {...getInputProps()} />
        <div className={"uploadBtn"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.0012 2.93243C13.531 2.93243 13.1498 3.3136 13.1498 3.78379V13.1487H3.78495C3.31476 13.1487 2.93359 13.5298 2.93359 14C2.93359 14.4702 3.31476 14.8514 3.78495 14.8514H13.1498V24.2162C13.1498 24.6864 13.531 25.0676 14.0012 25.0676C14.4713 25.0676 14.8525 24.6864 14.8525 24.2162V14.8514H24.2174C24.6876 14.8514 25.0687 14.4702 25.0687 14C25.0687 13.5298 24.6876 13.1487 24.2174 13.1487H14.8525V3.78379C14.8525 3.3136 14.4713 2.93243 14.0012 2.93243Z"
              fill="#3F535E"
            />
          </svg>
        </div>
        <div className={'fileRestriction p-5'}>
            <span>supported file formats ：jp, jpeg, png</span>
            <span>smallest size：2400*3500px</span>
            <span>maximum file size：10MB</span>
        </div>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
};

export default DropZone;
