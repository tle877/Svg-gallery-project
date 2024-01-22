import "./style.scss";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import DropZone from "../../components/FileUploader/DropZone";
import CkEditor from "../../components/CKEditor/CKEditor";
import { TagsDropdown } from "../../components/TagsDropdown/TagsDropdown";
import MachineDropdown from "../../components/MachineDropdown/MachineDropdown";
import CategoryDropdown from "../../components/CategoryDropdown/CategoryDropdown";
import CoverImageUploader from "../../components/FileUploader/CoverUploader";
import TextField from '@mui/material/TextField';
import ProductTionFileDropZone from "../../components/FileUploader/ProductionFileDropZone";
import PowerInspirationUpload from "../../components/PowerInspirationUpload";
import MaterialInspirationUpload from "../../components/MaterialInspirationUpload";
import ProductInspirationUpload from "../../components/ProductInspirationUpload";
import TimeInspirationUpload from "../../components/TimeInspirationUpload";
import TitleInspirationUpload from "../../components/TitleInspirationUpload";

const InspirationUploadPage = () => {
  const UploadImageGroup = () => {
    return (
      <>

        <DropZone />
      </>
    );
  };

  const Description = () => {
    return (
      <>
        <h3 className="heading mb-8">Description</h3>
        <textarea className="description-container py-3 px-2 mb-4" placeholder="Please describe your work in one paragraph"></textarea>
      </>
    );
  };

  const ProductionSteps = () => {
    return (
      <div className="my-4 ">
        <h3 className={"heading sm:mb-8"}>Production Steps</h3>
        <CkEditor className="mt-4" />
      </div>

    )
  }

  const UploadProductionFile = () => {
    return (
      <div >
        <div className="flex flex-col sm:flex-row sm:items-end sm:gap-2">
          <h3 className={"heading mt-4  "}>Upload Your Files </h3>
          <span className="upload-sub-text"> Upload your production files for more people to learn from!</span>
        </div>
        
        <ProductTionFileDropZone />
      </div>
    )
  }


  return (
    <div className={"container mx-auto mt-4"}>
      <div className="flex-row gap-6 hidden sm:flex">
        <div className="w-2/3">
          <h1 className="heading">Upload Image Group</h1>
          <UploadImageGroup />
          <input 
            className=" title-container w-full p-2 h-10 my-8" 
            placeholder="please Enter a title for your work"
          />
          
          <Description />
          <ProductionSteps />
          <UploadProductionFile />
        </div>

        <div className="w-1/3">
        <h3 className={"select-cover-title mb-2 mt-0"}>Select a cover </h3>
          <CoverImageUploader />
          <CategoryDropdown />
          <TagsDropdown />
          <MaterialInspirationUpload />
          <TimeInspirationUpload />
          <ProductInspirationUpload />



        </div>
      </div>
      <div className="flex sm:hidden">
        <div className="w-full">
          <UploadImageGroup />
          <CoverImageUploader />

          <TitleInspirationUpload />
          <CategoryDropdown />
          <TagsDropdown />
          <MaterialInspirationUpload />
          <TimeInspirationUpload />
          <ProductInspirationUpload />

          <ProductionSteps />
          <UploadProductionFile />
        </div>
      </div>
    </div>
  );
};

export default InspirationUploadPage;
