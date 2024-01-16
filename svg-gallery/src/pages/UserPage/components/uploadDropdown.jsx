import '.././style.scss'
const UploadDropdown = (props) => {
    const { isOpen } = props
    return (
        <>
            <div className={"uploadBtnDropdown " + (isOpen ? "block" : "")} >
                <a href="/inspiration-upload-page" className="menu-item">
                    <div>
                        <span className="hover:text-custom-blue">Inspiration Upload</span>
                    </div>
                </a>

                <a href="/image-upload-page" className="menu-item">
                    <div>
                        <span className="hover:text-custom-blue" >Image Upload</span>
                    </div>
                </a>
            </div>
        </>
    )
}

export default UploadDropdown