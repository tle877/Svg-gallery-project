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
import ImageUploadDropZone from "../../components/FileUploader/ImageUploadDropZone";

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
          <UploadImageGroup />
        </div>
        <div className="basis-1/3">
          <CoverImageUploader />
          <CategoryDropdown />
          <MachineDropdown />
          <TagsDropdown />
        </div>
      </div>
      <div className="flex xl:hidden">
        <div className="w-full">
          <UploadImageGroup />
          <CoverImageUploader />
          <CategoryDropdown />
          <MachineDropdown />
          <TagsDropdown />
        </div>
      </div>
    </div>
  );
};

export default ImageUploadPage;
