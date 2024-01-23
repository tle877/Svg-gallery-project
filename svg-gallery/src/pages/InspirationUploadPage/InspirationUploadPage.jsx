/* eslint-disable react/prop-types */
import "./style.scss";
import DropZone from "../../components/FileUploader/DropZone";
import CkEditor from "../../components/CKEditor/CKEditor";
import { TagsDropdown } from "../../components/TagsDropdown/TagsDropdown";
import MachineDropdown from "../../components/MachineDropdown/MachineDropdown";
import CategoryDropdown from "../../components/CategoryDropdown/CategoryDropdown";
import CoverImageUploader from "../../components/FileUploader/CoverUploader";
import ProductTionFileDropZone from "../../components/FileUploader/ProductionFileDropZone";
import PowerInspirationUpload from "../../components/PowerInspirationUpload";
import MaterialInspirationUpload from "../../components/MaterialInspirationUpload";
import ProductInspirationUpload from "../../components/ProductInspirationUpload";
import TimeInspirationUpload from "../../components/TimeInspirationUpload";
import TitleInspirationUpload from "../../components/TitleInspirationUpload";
import { useState } from "react";

const InspirationUploadPage = () => {
  const [isProductionStepClicked, setIsProductionStepClicked] = useState(false)
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

  const addProductionStepClicked = () =>{
    setIsProductionStepClicked(!isProductionStepClicked)
  }
  const ProductionSteps = (props) => {
    const {isClicked} = props
    return (
      <div className="my-4 ">
        <h3 className={"heading sm:mb-8"}>Production Steps</h3>
        <div className="addProductionStepBtn" onClick={addProductionStepClicked}>
          {
            isClicked?
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M23.4574 8.58008C22.8856 7.22854 22.0675 6.01486 21.0255 4.97283C19.9834 3.9308 18.7698 3.11246 17.418 2.54092C16.0182 1.94855 14.5318 1.64844 13 1.64844C11.4682 1.64844 9.98182 1.94855 8.58203 2.54066C7.23049 3.11246 6.01682 3.93055 4.97478 4.97258C3.93275 6.01461 3.11441 7.22828 2.54287 8.57982C1.95051 9.97986 1.65039 11.4662 1.65039 12.998C1.65039 14.5299 1.95051 16.0162 2.54262 17.416C3.11441 18.7676 3.9325 19.9812 4.97453 21.0235C6.01656 22.0655 7.23023 22.8839 8.58178 23.4554C9.98182 24.0475 11.4682 24.3477 13 24.3477C14.5318 24.3477 16.0182 24.0475 17.418 23.4554C18.7695 22.8836 19.9832 22.0655 21.0255 21.0235C22.0675 19.9815 22.8858 18.7678 23.4574 17.416C24.0495 16.0162 24.3496 14.5299 24.3496 12.998C24.3496 11.4662 24.0495 9.97986 23.4574 8.58008ZM13 22.7227C7.63775 22.7227 3.27539 18.3603 3.27539 12.998C3.27539 7.6358 7.63775 3.27344 13 3.27344C18.3622 3.27344 22.7246 7.6358 22.7246 12.998C22.7246 18.3603 18.3622 22.7227 13 22.7227Z" fill="#158CC5"/>
                <path d="M17.2656 12.1875H13.8125V8.73438C13.8125 8.28572 13.4487 7.92188 13 7.92188C12.5513 7.92188 12.1875 8.28572 12.1875 8.73438V12.1875H8.73438C8.28572 12.1875 7.92188 12.5513 7.92188 13C7.92188 13.4487 8.28572 13.8125 8.73438 13.8125H12.1875V17.2656C12.1875 17.7143 12.5513 18.0781 13 18.0781C13.4487 18.0781 13.8125 17.7143 13.8125 17.2656V13.8125H17.2656C17.7143 13.8125 18.0781 13.4487 18.0781 13C18.0781 12.5513 17.7143 12.1875 17.2656 12.1875Z" fill="#158CC5"/>
              </svg>
              <span className="productionStepBtnLabel">Enter text and images to describe your production process and share it with others.</span>
            </div>
            :
            //Todo: replace by other icon
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M23.4574 8.58008C22.8856 7.22854 22.0675 6.01486 21.0255 4.97283C19.9834 3.9308 18.7698 3.11246 17.418 2.54092C16.0182 1.94855 14.5318 1.64844 13 1.64844C11.4682 1.64844 9.98182 1.94855 8.58203 2.54066C7.23049 3.11246 6.01682 3.93055 4.97478 4.97258C3.93275 6.01461 3.11441 7.22828 2.54287 8.57982C1.95051 9.97986 1.65039 11.4662 1.65039 12.998C1.65039 14.5299 1.95051 16.0162 2.54262 17.416C3.11441 18.7676 3.9325 19.9812 4.97453 21.0235C6.01656 22.0655 7.23023 22.8839 8.58178 23.4554C9.98182 24.0475 11.4682 24.3477 13 24.3477C14.5318 24.3477 16.0182 24.0475 17.418 23.4554C18.7695 22.8836 19.9832 22.0655 21.0255 21.0235C22.0675 19.9815 22.8858 18.7678 23.4574 17.416C24.0495 16.0162 24.3496 14.5299 24.3496 12.998C24.3496 11.4662 24.0495 9.97986 23.4574 8.58008ZM13 22.7227C7.63775 22.7227 3.27539 18.3603 3.27539 12.998C3.27539 7.6358 7.63775 3.27344 13 3.27344C18.3622 3.27344 22.7246 7.6358 22.7246 12.998C22.7246 18.3603 18.3622 22.7227 13 22.7227Z" fill="#158CC5"/>
                <path d="M17.2656 12.1875H13.8125V8.73438C13.8125 8.28572 13.4487 7.92188 13 7.92188C12.5513 7.92188 12.1875 8.28572 12.1875 8.73438V12.1875H8.73438C8.28572 12.1875 7.92188 12.5513 7.92188 13C7.92188 13.4487 8.28572 13.8125 8.73438 13.8125H12.1875V17.2656C12.1875 17.7143 12.5513 18.0781 13 18.0781C13.4487 18.0781 13.8125 17.7143 13.8125 17.2656V13.8125H17.2656C17.7143 13.8125 18.0781 13.4487 18.0781 13C18.0781 12.5513 17.7143 12.1875 17.2656 12.1875Z" fill="#158CC5"/>
              </svg>
              <span className="productionStepBtnLabel">Enter text and images to describe your production process and share it with others.</span>
            </div>
          }
        </div>
        {
          isClicked?
          <CkEditor className="mt-4" />
          :
          <></>
        }
        
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
          <ProductionSteps isClicked={isProductionStepClicked} />
          <UploadProductionFile />
        </div>

        <div className="w-1/3">
        <h3 className={"select-cover-title mb-2 mt-0"}>Select a cover </h3>
          <CoverImageUploader />
          <CategoryDropdown />
          <TagsDropdown />
          <MachineDropdown />
          <PowerInspirationUpload />
          <MaterialInspirationUpload />
          <TimeInspirationUpload />
          <ProductInspirationUpload />



        </div>
      </div>
      <div className="flex sm:hidden">
        <div className="w-full">
        <h1 className="heading mb-[-18px]">Upload Image Group</h1>
          <UploadImageGroup />
          <h1 className="heading">Add Cover Page</h1>
          <CoverImageUploader />

          <TitleInspirationUpload />
          <CategoryDropdown />
          <TagsDropdown />
          <MachineDropdown />
          <PowerInspirationUpload />
          <MaterialInspirationUpload />
          <TimeInspirationUpload />
          <ProductInspirationUpload />

          <ProductionSteps isClicked={isProductionStepClicked}/>
          <UploadProductionFile />
        </div>
      </div>
    </div>
  );
};

export default InspirationUploadPage;
