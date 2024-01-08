import "./style.scss";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import DropZone from "../../components/FileUploader/DropZone";
import CkEditor from "../../components/CKEditor/CKEditor";
const InspirationUploadPage = () => {
  const UploadImageGroup = () => {
    return (
      <>
        <h3 className={"heading"}>Upload Image Group</h3>
        <DropZone/>
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
    return(
      <div className="mt-5 mb-5">
        <h3 className={"heading mb-5"}>Production Steps</h3>
        <CkEditor className="mt-5"/>
      </div>
      
    )
  }
  return (
    <div className={"container mx-auto mt-5"}>
      <div className="flex flex-row">
        <div className="basis-2/3">
          <UploadImageGroup />
          <Description />
          <ProductionSteps/>
        </div>
        <div className="basis-1/3">02</div>
      </div>
    </div>
  );
};

export default InspirationUploadPage;
