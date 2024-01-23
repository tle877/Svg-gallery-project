import { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import './avatar-editor-modal.scss'; 
import MinusIcon from "../../assets/minus-circle.svg"
import PlusIcon from "../../assets/plus-circle.svg"

// eslint-disable-next-line react/prop-types
const AvatarEditorModal = ({ onClose, onSave }) => {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const editorRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleZoomIn = () => {
    setScale((prevScale) => prevScale + 0.2);
  };

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(1, prevScale - 0.2));
  };

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImage();
      onSave(canvas);
      onClose();
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        {!image && 
        <div className='flex justify-between '>
          <input type="file" onChange={handleImageChange} />
          <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 20 20" fill="none">
            <path d="M17.5 2.5L2.5 17.5" stroke="#C7CDD0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.5 2.5L17.5 17.5" stroke="#C7CDD0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>}
        {image && (
          <>
            <div className='flex justify-between items-center'>
              <span>Upload Avatar</span>
              <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 20 20" fill="none">
                <path d="M17.5 2.5L2.5 17.5" stroke="#C7CDD0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.5 2.5L17.5 17.5" stroke="#C7CDD0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="editor-container mt-2">
              <AvatarEditor
                ref={editorRef}
                image={image}
                width={250}
                height={250}
                borderRadius={125} // Half of width/height for circular crop
                scale={scale}
                style={{ margin: "auto"}}
              />
            </div>
            <div className="controls-container mt-2 flex justify-end gap-5 pt-1">
              <div className="zoom-btn" >
              <button className="zoom-out-btn" onClick={handleZoomOut}>
                <img src={MinusIcon} alt="" />
                </button>
              </div>
              
              <div className="zoom-btn">
              <button onClick={handleZoomIn}>
                <img src={PlusIcon} alt="" />
                </button>
              </div>
            </div>

            <div className="button-container flex justify-between md:px-10 py-1">   
              <button onClick={onClose}
                className="rounded-full border border-custom-blue text-custom-blue px-5 sm:px-7 py-1.5 text-sm leading-6 "
              >
                Cancel
              </button>
              <button onClick={handleSave}
                type="submit"
                className=" rounded-full bg-custom-blue px-7 sm:px-9 py-1.5 text-sm leading-6 text-white s "
              >
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AvatarEditorModal;
