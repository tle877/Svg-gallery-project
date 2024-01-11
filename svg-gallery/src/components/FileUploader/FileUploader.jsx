import { useState } from "react";
import './style.scss'

const FileUpload = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelectedFile(file);
  };

//   const handleUpload = () => {
   
//     if (selectedFile) {
//       console.log("selected file:", selectedFile.name);
//     }
//   };

  return (
    <div>
      <label className="custom-file-upload">
        <input type="file" onChange={handleFileChange} />
        <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                d="M32.1985 20.2946V26.9149C32.1985 28.9188 30.5739 30.5434 28.57 30.5434H9.43804C7.43414 30.5434 5.80957 28.9188 5.80957 26.9149V11.0816C5.80957 9.07769 7.43414 7.45312 9.43804 7.45312H28.57C30.5739 7.45312 32.1985 9.07769 32.1985 11.0816V20.2946ZM30.2193 17.9869V11.0816C30.2193 10.865 30.1766 10.6505 30.0937 10.4504C30.0109 10.2503 29.8894 10.0685 29.7362 9.91536C29.5831 9.76221 29.4013 9.64072 29.2012 9.55784C29.001 9.47495 28.7866 9.43229 28.57 9.43229H9.43804C9.22145 9.43229 9.00698 9.47495 8.80688 9.55784C8.60678 9.64072 8.42496 9.76221 8.27181 9.91536C8.11865 10.0685 7.99717 10.2503 7.91428 10.4504C7.8314 10.6505 7.78874 10.865 7.78874 11.0816V21.7345C8.22556 21.6696 8.66657 21.6371 9.10818 21.6372C11.1773 21.6341 13.1823 22.3544 14.7765 23.6734C16.3763 19.5049 20.3927 16.6892 24.9415 16.6892C26.9735 16.6892 28.8688 17.2081 30.2193 17.9869ZM30.2193 20.5301C30.0544 20.2728 29.5658 19.8605 28.8695 19.5122C27.8103 18.9824 26.4582 18.6684 24.9415 18.6684C21.1758 18.6684 17.8558 21.0269 16.5785 24.5036C16.4941 24.7339 16.3496 25.132 16.1458 25.6968C15.9083 26.3555 15.0803 26.5659 14.5572 26.1005C14.0488 25.6479 13.6741 25.3253 13.4396 25.1373C12.212 24.1503 10.6834 23.6135 9.10818 23.6163C8.66089 23.6163 8.21987 23.6585 7.78874 23.7417V26.9149C7.78874 27.1315 7.8314 27.346 7.91428 27.5461C7.99717 27.7462 8.11865 27.928 8.27181 28.0812C8.42496 28.2343 8.60678 28.3558 8.80688 28.4387C9.00698 28.5216 9.22145 28.5642 9.43804 28.5642H28.57C28.7866 28.5642 29.001 28.5216 29.2012 28.4387C29.4013 28.3558 29.5831 28.2343 29.7362 28.0812C29.8894 27.928 30.0109 27.7462 30.0937 27.5461C30.1766 27.346 30.2193 27.1315 30.2193 26.9149V20.5298V20.5301ZM13.0665 18.0087C12.2792 18.0087 11.524 17.6959 10.9673 17.1392C10.4105 16.5824 10.0978 15.8273 10.0978 15.0399C10.0978 14.2526 10.4105 13.4975 10.9673 12.9407C11.524 12.384 12.2792 12.0712 13.0665 12.0712C13.8539 12.0712 14.609 12.384 15.1657 12.9407C15.7225 13.4975 16.0353 14.2526 16.0353 15.0399C16.0353 15.8273 15.7225 16.5824 15.1657 17.1392C14.609 17.6959 13.8539 18.0087 13.0665 18.0087ZM13.0665 16.0295C13.329 16.0295 13.5807 15.9253 13.7663 15.7397C13.9518 15.5541 14.0561 15.3024 14.0561 15.0399C14.0561 14.7775 13.9518 14.5258 13.7663 14.3402C13.5807 14.1546 13.329 14.0503 13.0665 14.0503C12.8041 14.0503 12.5524 14.1546 12.3668 14.3402C12.1812 14.5258 12.0769 14.7775 12.0769 15.0399C12.0769 15.3024 12.1812 15.5541 12.3668 15.7397C12.5524 15.9253 12.8041 16.0295 13.0665 16.0295Z"
                fill="#2F2725"
              />
            </svg>
      </label>

    </div>
  );
};

export default FileUpload;