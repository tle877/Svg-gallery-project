import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState, useRef } from "react";
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



    const handleCancel = () => {
        setPicture({
            ...picture,
            cropperOpen: false
        });
    };

    const setEditorRef = (ed) => {
        editor = ed;
    };

    const handleSave = (e) => {
        if (setEditorRef) {
            const canvasScaled = editor.getImageScaledToCanvas();
            const croppedImg = canvasScaled.toDataURL();

            setPicture({
                ...picture,
                img: null,
                cropperOpen: false,
                croppedImg: croppedImg
            });
        }
    };

    const handleFileChange = (e) => {
        let url = URL.createObjectURL(e.target.files[0]);
        console.log(url);
        setPicture({
            ...picture,
            img: url,
            cropperOpen: true
        });
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const CoverModal = () => {

        const handleSlider = (event, value) => {
            setPicture({
                ...picture,
                zoom: value
            });
        };

        const [slideValue, setSlideValue] = useState(10);
        return (
            <>
            
                <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    className='CoverModal'
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        Add Cover Image
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
                    <DialogContent dividers>
                        <div className={'CoverImageEditor'}>
                            <input type="file" accept="image/*" onChange={handleFileChange} />

                            {picture.cropperOpen && (
                                <Box display="block">
                                    <AvatarEditor
                                        ref={setEditorRef}
                                        image={picture.img}
                                        width={600}
                                        height={300}
                                        border={50}
                                        color={[255, 255, 255, 0.6]} // RGBA
                                        rotate={0}
                                        scale={slideValue / 10}
                                    />
                                    <Slider
                                        aria-label="raceSlider"
                                        defaultValue={slideValue}
                                        value={slideValue}
                                        min={10}
                                        max={50}
                                        step={0.1}
                                        onChange={(e) => setSlideValue(e.target.value)}
                                    ></Slider>
                                    <Box>
                                    </Box>
                                </Box>
                            )}
                        </div>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={handleSave}>Save</Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
    return (
        <div>
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
                
                    <div className={'fileRestriction-mobile mt-4'}>

                        <span >supported file formats ：jpg</span>
                    </div>

                </div>
            </div>
            <CoverModal />

        </div>
    );
};

export default CoverImageUploader;
