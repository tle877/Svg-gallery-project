import React, { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import './avatar-editor-modal.scss'; // Create a new stylesheet for styling the modal

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

  const handleZoomChange = (e) => {
    setScale(parseFloat(e.target.value));
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
                <path d="M17.5 2.5L2.5 17.5" stroke="#C7CDD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 2.5L17.5 17.5" stroke="#C7CDD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
        </div>}
        {image && (
          <>
            <div className='flex justify-between items-center'>
              <span>Upload Avatar</span>
              <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 20 20" fill="none">
                <path d="M17.5 2.5L2.5 17.5" stroke="#C7CDD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 2.5L17.5 17.5" stroke="#C7CDD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
              />
            </div>
            <div className="controls-container mt-2">
              <label htmlFor="zoom">Zoom:</label>
              <input
                type="range"
                id="zoom"
                min="1"
                max="2"
                step="0.1"
                value={scale}
                onChange={handleZoomChange}
              />
            </div>


            <div className="button-container flex justify-between md:px-10 py-1">   
              <button onClick={onClose}
                  className=" rounded-full border border-custom-blue text-gray px-5 sm:px-7 py-1.5 text-sm leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
              Cancel
              </button>
              <button onClick={handleSave}
                  type="submit"
                  className=" rounded-full bg-custom-blue px-7 sm:px-9 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
