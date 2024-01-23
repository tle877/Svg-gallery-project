/* eslint-disable react/no-unknown-property */
import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './style.scss'
const CoverImageUploader = () => {
    var editor = "";
    const [picture, setPicture] = useState({
        cropperOpen: false,
        img: null,
        zoom: 2,
        croppedImg:
            "https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png"
    });

    const [isShowUploadBtn, setIsShowUploadBtn] = useState(true);
    const [showModalFooter, setShowModalFooter] = useState(false)
    const [editedImage, setEditedImage] = useState();
    

    const setEditorRef = (ed) => {
        editor = ed;
    };

    const handleSave = () => {
        if (setEditorRef) {
            const canvasScaled = editor.getImageScaledToCanvas();
            const croppedImg = canvasScaled.toDataURL();
            setEditedImage(canvasScaled.toDataURL())
            setPicture({
                ...picture,
                img: null,
                cropperOpen: false,
                croppedImg: croppedImg
            });
        }
        setOpen(false);
        setIsShowUploadBtn(true);
        setShowModalFooter(false)
    };

    const handleFileChange = (e) => {
        let url = URL.createObjectURL(e.target.files[0]);
        setPicture({
            ...picture,
            img: url,
            cropperOpen: true
        });
        setIsShowUploadBtn(false);
        setShowModalFooter(true)
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setPicture({
            ...picture,
            img: null,
            cropperOpen: false
        });
        setOpen(false);
        setIsShowUploadBtn(true);
        setShowModalFooter(false);
    };
    

    const CoverModal = () => {
        const [scale, setScale] = useState(1);
        const handleZoomIn = () => {
            setScale((prevScale) => prevScale + 0.2);
        };
    
        const handleZoomOut = () => {
            setScale((prevScale) => Math.max(1, prevScale - 0.2));
        };
        return (
            <>
            
                <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    className='CoverModal'
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" className='modal-title'>
                        Upload Image
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers className={'flex items-center ' + (isShowUploadBtn ? "": 'modalContent')} >
                        
                        {
                            isShowUploadBtn? 
                            <div className="ImageUploadDropZone w-full mx-auto" >
                                <input type="file" accept="image/*" onChange={handleFileChange} id='file-upload' className='hidden'/>
                                <div className={"uploadIcon "}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" fill="none">
                                    <path d="M4.16797 29.1663V41.6663C4.16797 43.9674 6.03346 45.8329 8.33464 45.8329H41.668C43.9692 45.8329 45.8346 43.9674 45.8346 41.6663V29.1663" stroke="#3F535E" strokeWidth="4.16667" />
                                    <path d="M39.8779 18.8974L26.6196 5.63915C25.806 4.82556 24.4869 4.82556 23.6733 5.63916L10.4151 18.8974" stroke="#3F535E" strokeWidth="4.16667" />
                                    <line x1="25.0013" y1="6.24927" x2="25.0013" y2="35.4159" stroke="#3F535E" strokeWidth="4.16667" />
                                </svg>

                                </div>
                                <div className={'fileRestriction-imageUpload mb-10' }>
                                <span className={"block"}>
                                    Click <span className="text-blue">Select image</span> to upload
                                </span>
                                
                                </div>
                                {/* <button className={'selectFileBtn px-3 py-1'} variant="outlined">Select Image</button> */}
                                <label htmlFor="file-upload" className='selectFileBtn px-3 py-1'>Select Image</label>
                                <div className={'fileRestriction-imageUpload flex flex-col gap-2 mt-5 text-center'}>
                                    <span>supported file formats ：jpg、jpeg、png、svg</span>
                                    <span>smallest size：2400*3500px</span>
                                    <span>maximum file size：10MB</span>
                                </div>
                            
                            </div>
                            :
                            <></>
                        }
                        
                        {picture.cropperOpen && (
                                <Box display="block">
                                    <AvatarEditor
                                        ref={setEditorRef}
                                        image={picture.img}
                                        width={600}
                                        height={300}
                                        border={50}
                                        color={[0, 0, 0, 0.5]} // RGBA
                                        rotate={0}
                                        scale={scale}
                                    />
                                    <div className='flex justify-end mt-5 mr-5'>
                                        <div className='zoom-out' onClick={handleZoomOut}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                            <path d="M17.9998 31.3772C25.3326 31.3772 31.318 25.3937 31.3782 18.0101C31.3799 16.2524 31.0351 14.5116 30.3635 12.8873C29.6918 11.263 28.7066 9.78696 27.4641 8.54373C26.2215 7.30049 24.7461 6.31441 23.1221 5.64188C21.4982 4.96935 19.7576 4.62356 17.9998 4.62431C16.2433 4.62381 14.5039 4.96942 12.881 5.64138C11.2581 6.31334 9.78354 7.29848 8.5415 8.54052C7.29946 9.78256 6.31431 11.2572 5.64235 12.8801C4.9704 14.503 4.62479 16.2424 4.62528 17.9989C4.62454 19.7557 4.97003 21.4954 5.64199 23.1187C6.31396 24.7419 7.29923 26.2168 8.5415 27.4591C9.78376 28.7014 11.2587 29.6866 12.8819 30.3586C14.5051 31.0306 16.2449 31.376 18.0017 31.3753L17.9998 31.3772ZM18.0036 34.1979C15.8759 34.1992 13.7689 33.7811 11.8029 32.9676C9.83689 32.1541 8.05046 30.9612 6.54572 29.457C5.04098 27.9528 3.84741 26.1667 3.03325 24.201C2.21909 22.2353 1.80029 20.1284 1.80078 18.0007C1.7998 15.8731 2.21811 13.7661 3.03181 11.8002C3.84552 9.83427 5.03867 8.04798 6.54306 6.54341C8.04745 5.03884 9.8336 3.84549 11.7994 3.03156C13.7652 2.21762 15.8722 1.79906 17.9998 1.79981C26.9544 1.79981 34.2008 9.04992 34.2008 18.0214C34.1313 26.9628 26.8887 34.2017 18.0017 34.2017L18.0036 34.1979Z" fill="#3F535E"/>
                                            <path d="M9 18H27" stroke="#3F535E" stroke-width="2.7" stroke-linecap="round"/>
                                            </svg>
                                        </div>
                                        <div className='zoom-in' onClick={handleZoomIn}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                            <path d="M17.9998 31.3772C25.3326 31.3772 31.318 25.3937 31.3782 18.0101C31.3799 16.2524 31.0351 14.5116 30.3635 12.8873C29.6918 11.263 28.7066 9.78696 27.4641 8.54373C26.2215 7.30049 24.7461 6.31441 23.1221 5.64188C21.4982 4.96935 19.7576 4.62356 17.9998 4.62431C16.2433 4.62381 14.5039 4.96942 12.881 5.64138C11.2581 6.31334 9.78354 7.29848 8.5415 8.54052C7.29946 9.78256 6.31431 11.2572 5.64235 12.8801C4.9704 14.503 4.62479 16.2424 4.62528 17.9989C4.62454 19.7557 4.97003 21.4954 5.64199 23.1187C6.31396 24.7419 7.29923 26.2168 8.5415 27.4591C9.78376 28.7014 11.2587 29.6866 12.8819 30.3586C14.5051 31.0306 16.2449 31.376 18.0017 31.3753L17.9998 31.3772ZM17.0771 16.5706H10.964C10.5894 16.5706 10.2302 16.7194 9.96535 16.9843C9.7005 17.2491 9.55171 17.6083 9.55171 17.9829C9.55171 18.3574 9.7005 18.7167 9.96535 18.9815C10.2302 19.2464 10.5894 19.3951 10.964 19.3951H17.0753V25.5064C17.0752 25.6918 17.1117 25.8753 17.1826 26.0466C17.2535 26.2178 17.3575 26.3734 17.4885 26.5045C17.6196 26.6356 17.7752 26.7396 17.9464 26.8105C18.1177 26.8814 18.3012 26.918 18.4866 26.918C18.6719 26.918 18.8555 26.8814 19.0267 26.8105C19.1979 26.7396 19.3535 26.6356 19.4846 26.5045C19.6156 26.3734 19.7196 26.2178 19.7905 26.0466C19.8614 25.8753 19.8979 25.6918 19.8979 25.5064V19.397H26.0092C26.3837 19.397 26.7429 19.2482 27.0078 18.9834C27.2726 18.7185 27.4214 18.3593 27.4214 17.9848C27.4214 17.6102 27.2726 17.251 27.0078 16.9862C26.7429 16.7213 26.3837 16.5725 26.0092 16.5725H19.8979V10.4631C19.8979 10.2778 19.8614 10.0942 19.7905 9.92296C19.7196 9.7517 19.6156 9.5961 19.4846 9.46502C19.3535 9.33395 19.1979 9.22997 19.0267 9.15903C18.8555 9.08809 18.6719 9.05158 18.4866 9.05158C18.3012 9.05158 18.1177 9.08809 17.9464 9.15903C17.7752 9.22997 17.6196 9.33395 17.4885 9.46502C17.3575 9.5961 17.2535 9.7517 17.1826 9.92296C17.1117 10.0942 17.0752 10.2778 17.0753 10.4631V16.5706H17.0771ZM18.0036 34.1979C15.8759 34.1992 13.7689 33.7811 11.8029 32.9676C9.83689 32.1541 8.05046 30.9612 6.54572 29.457C5.04098 27.9528 3.84741 26.1667 3.03325 24.201C2.21909 22.2353 1.80029 20.1284 1.80078 18.0007C1.7998 15.8731 2.21811 13.7661 3.03181 11.8002C3.84552 9.83427 5.03867 8.04798 6.54306 6.54341C8.04745 5.03884 9.8336 3.84549 11.7994 3.03156C13.7652 2.21762 15.8722 1.79906 17.9998 1.79981C26.9544 1.79981 34.2008 9.04992 34.2008 18.0214C34.1313 26.9628 26.8887 34.2017 18.0017 34.2017L18.0036 34.1979Z" fill="#3F535E"/>
                                            </svg>
                                        </div>
                                    </div>
                                </Box>
                                
                            )}

                    </DialogContent>
                    {
                        showModalFooter?
                        <DialogActions className='flex modal-footer'>
                            <button className='rounded-full border border-custom-blue text-custom-blue px-5 sm:px-7 py-1.5 text-sm leading-6' onClick={handleClose}> Cancel</button>
                            <button className='rounded-full bg-custom-blue px-7 sm:px-9 py-1.5 text-sm leading-6 text-white s'  onClick={handleSave}>Done</button>
                        </DialogActions>
                        :
                        <></>
                    }
                    
                </Dialog>
            </>
        );
    }
    return (
        <div>
            
                
                {
                    editedImage?
                    <div className='editedImage' onClick={handleClickOpen}>
                        <img src={editedImage} />
                        <div className='overlay'>
                            <button className='replaceCoverBtn'>Replacing Cover</button>
                        </div>
                    </div>
                        
                    :
                    <div className={'CoverImageUploaderContainer'}>
                        <div>
            
                            <div className={"uploadBtn mx-auto relative"} onClick={handleClickOpen}>
                                <div className='absolute top-50 left-50'>
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
                                <span className='absolute bottom-3 sm:hidden' >Upload cover</span>
            

                            </div>
        
                            <div className={'fileRestriction-mobile mt-4 px-2 text-center'}>

                                <span >supported file formats ：jpg</span>
                            </div>

                        </div>
                    </div>
                    
                }
            <CoverModal />

        </div>
    );
};

export default CoverImageUploader;
