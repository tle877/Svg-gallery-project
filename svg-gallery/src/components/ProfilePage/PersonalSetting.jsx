import "./personal-setting.scss"
import React, { useState } from 'react';
import AvatarEditorModal from "./AvatarEditorModal"
import Avatar from "../../assets/avatar.png"

const PersonalSetting = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [avatar, setAvatar] = useState(Avatar);
    const handleSaveAvatar = (editedImage) => {
        // Handle save logic here, e.g., update avatar image state
        setAvatar(editedImage.toDataURL()); // Convert canvas to data URL
    };


    return (
        <div className=" personal-setting-container md:p-10 p-4 mx-auto">
            <h1 className="mb-8">Personal Settings</h1>
            <div className="infomation-container hidden md:flex gap-3 w-2/3 mb-10">
                <div className="avatarContainer" onClick={() => setModalOpen(true)}>
                    <img src={avatar} alt="Avatar" />
                </div>

                <div className="flex flex-col gap-4 my-2 justify-center">
                    <h2> William</h2>
                    <p>gianna.guo@oceania-inc.com</p>
                </div>
            </div>
            {isModalOpen &&
                <AvatarEditorModal
                    onClose={() => setModalOpen(false)}
                    onSave={handleSaveAvatar}
                />}
            {/* mobile view */}
            <div className=" md:hidden flex justify-between items-center mb-5">
                <div className="infomation-container flex gap-2 items-center ">
                    <div className="avatarContainer">
                        <img src={avatar} alt="Avatar" />
                    </div>
                    <div className="flex flex-col  my-2 justify-center">
                        <h2> William</h2>
                        <p>gianna.guo@oceania-inc.com</p>
                    </div>
                </div>

                <div className="text-custom-blue" onClick={() => setModalOpen(true)}>
                    <button>Change Avatar </button>
                </div>
            </div>
            {/* end mobile */}

            <form className="flex flex-col md:w-2/3 w-full gap-8" action="/submit" method="post">
                <div className="entity-container">
                    <label htmlFor="Name" className="label-form">
                        <span className="text-red mr-1 text-lg">*</span>Name
                    </label>
                    <input required
                        className="input-form  focus:outline-custom-blue "
                        type="text"
                        name="Name"
                        id="Name" ></input>
                </div>
                <div className="entity-container">
                    <label htmlFor="Birthday " className="label-form ">Birthday</label>
                    <input
                        className="input-form  focus:outline-custom-blue"
                        type="date"
                        name="Birthday"
                        id="Birthday"
                        placeholder="Select Date"
                    ></input>
                </div>
                <div className="entity-container">
                    <label htmlFor="Profile" className="label-form ">Personal Profile</label>
                    <input
                        className="input-form"
                        type="text"
                        name="Profile"
                        id="Profile" ></input>
                </div>
                <div className="entity-container">
                    <label htmlFor="City" className="label-form">
                        <span className="text-red mr-1 text-lg">*</span>City
                    </label>
                    <input required
                        className="input-form"
                        type="text"
                        name="City"
                        id="City" ></input>
                </div>
                <div className="entity-container">
                    <label htmlFor="Occupation" className="label-form">Occupation</label>
                    <input
                        className="input-form"
                        type="text"
                        name="Occupation"
                        id="Occupation" ></input>
                </div>
                <div className="entity-container">
                    <label htmlFor="Sector" className="label-form">Sector</label>
                    <input required
                        className="input-form"
                        type="text"
                        name="Sector"
                        id="Sector" ></input>
                </div>
                <div className="entity-container">
                    <label htmlFor="Company" className="label-form">Company</label>
                    <input required
                        className="input-form"
                        type="text"
                        name="Company"
                        id="Company" ></input>
                </div>
                <div className="entity-container submit-btn">
                    <div className="col-span-2"></div>
                    <div className="col-span-2 ">
                        <button
                            type="submit"
                            className=" px-6 md:px-0 md:w-4/5 rounded-full bg-custom-blue py-1.5 text-sm leading-6 text-white "
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PersonalSetting 