import "./style.scss";

import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import CkEditor from "../../components/CKEditor/CKEditor";
import { TagsDropdown } from "../../components/TagsDropdown/TagsDropdown";
import CategoryDropdown from "../../components/CategoryDropdown/CategoryDropdown";
import CoverImageUploader from "../../components/FileUploader/CoverUploader";
import ProductTionFileDropZone from "../../components/FileUploader/ProductionFileDropZone";
import ImageUploadDropZone from "../../components/FileUploader/ImageUploadDropZone";
import TitleInspirationUpload from "../../components/TitleInspirationUpload";

const ImageUploadPage = () => {
  const UploadImageGroup = () => {
    return (
      <>

        <ImageUploadDropZone />
      </>
    );
  };

  const Description = () => {
    return (
      <>
        <h3 className={"heading"}>Description</h3>
        <BaseTextareaAutosize
          className={'descriptionTextArea mt-5'}
          maxRows={4}
          aria-label="maximum height"
          placeholder="Please describe your work in one paragraph"
        />
      </>
    );
  };

  const ProductionSteps = () => {
    return (
      <div className="mt-5 mb-5">
        <h3 className={"heading mb-5"}>Production Steps</h3>
        <CkEditor className="mt-5" />
      </div>

    )
  }

  const UploadProductionFile = () => {
    return (
      <>
        <h3 className={"heading"}>Upload Image Group</h3>
        <ProductTionFileDropZone />
      </>
    )
  }

  return (
    <div className={"container mx-auto mt-5"}>

      <div className="flex-row gap-6 hidden xl:flex">
        <div className="basis-2/3">
          <h1 className={"heading"}>Upload Image</h1>
          <div className="w-2/3 mr-auto">
          <UploadImageGroup />
          </div>
          
        </div>
        <div className="basis-1/3">
          <h1 className={"heading mb-1"}>Select a cover</h1>
          <CoverImageUploader />
          <TitleInspirationUpload />
          <CategoryDropdown />
          <TagsDropdown />
        </div>
      </div>
      <div className="flex flex-col xl:hidden">
        <div className="w-full">
          <UploadImageGroup />
          <CoverImageUploader />
          <TitleInspirationUpload />
          <CategoryDropdown />
          <TagsDropdown />
        </div>
      </div>
    </div>
  );
};

export default ImageUploadPage;
