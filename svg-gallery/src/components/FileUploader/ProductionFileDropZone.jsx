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

const ProductTionFileDropZone = (props) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/bmp": ['.bmp'],
      "application/zip": ['.zip'],
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
        {file.name}
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="mt-5">
      <div className={'productionFile'}>
      {thumbs}
      </div>
      <div {...getRootProps({ className: "uploadProductionFileDropZone" })}>
        <input {...getInputProps()} />
        <div className={"folderIcon"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M3.96289 20.1221L0 34.6524V6.77215C0.000775413 6.08172 0.275391 5.41979 0.763599 4.93158C1.25181 4.44337 1.91374 4.16875 2.60417 4.16798H14.9779C15.32 4.16704 15.6589 4.23396 15.975 4.36488C16.2911 4.4958 16.5781 4.6881 16.8193 4.93067L22.154 10.2653C22.2022 10.3139 22.2595 10.3524 22.3227 10.3786C22.3859 10.4048 22.4537 10.4182 22.5221 10.418H41.1458C41.8363 10.4188 42.4982 10.6934 42.9864 11.1816C43.4746 11.6698 43.7492 12.3317 43.75 13.0221V16.668H8.48503C7.45717 16.6697 6.45823 17.0084 5.6414 17.6323C4.82456 18.2563 4.23492 19.1309 3.96289 20.1221ZM48.9824 19.7747C48.7404 19.4554 48.4274 19.1967 48.0682 19.0191C47.709 18.8415 47.3135 18.7498 46.9128 18.7513H8.48503C7.91379 18.7524 7.35868 18.9409 6.90485 19.2878C6.45103 19.6347 6.12355 20.1209 5.97266 20.6719L0.57487 40.4636C0.469805 40.8498 0.455177 41.255 0.53212 41.6478C0.609063 42.0406 0.775508 42.4103 1.01853 42.7283C1.26155 43.0464 1.5746 43.3041 1.93338 43.4815C2.29215 43.6589 2.68699 43.7512 3.08724 43.7513H41.515C42.0862 43.7502 42.6413 43.5618 43.0951 43.2148C43.549 42.8679 43.8764 42.3817 44.0273 41.8307L49.4251 22.0391C49.5316 21.6531 49.5471 21.2477 49.4702 20.8548C49.3933 20.4618 49.2262 20.0921 48.9821 19.7747H48.9824Z" fill="#158CC5" />
          </svg>
        </div>
        <Button className={'selectFileBtn'} variant="outlined">Select File</Button>
        <div className={'fileRestriction p-5'}>
          <span>Supported File formats: xcs,dxf,,bmp,zip.Maximum File Size: 50M</span>
        </div>
      </div>
    </section>
  );
};

export default ProductTionFileDropZone;
