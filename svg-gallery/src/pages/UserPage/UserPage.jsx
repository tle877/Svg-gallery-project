import BannerImage from "../../assets/Image/sample-banner.png";
import Avatar from "../../assets/Image/potrait.png"
import './style.scss'
import ProductCard from "../../components/ProductCard/productCard";
import ProductImage from "../../assets/productImage.jpeg"
import Pagination from "../../components/Pagination/Pagination";
import { useState } from "react";
import ItemImage from '../../assets/Image/item-image.jpg'
import UploadDropdown from "./components/uploadDropdown";
import DeletedImg from '../../assets/Image/deleted-img.png'
const UserPage = () => {
    const [activeTab, setActiveTab] = useState('project');
    const [activeSubTab, setActiveSubTab] = useState('project:howto');
    const [openUploadDropdown, setOpenUploadDropdown] = useState(false);

    const Banner = () => {
        return (
            <>
                <div className="w-full hidden lg:block">
                    <img src={BannerImage} alt="" />
                </div>
            </>
        )
    }

    const uploadClicked = () => {
        setOpenUploadDropdown(!openUploadDropdown);
    }
    const AuthorSection = () => {
        return (
            <>
                <div className={'container'}>
                    <div className={'authorSectionContainer relative hidden lg:flex'}>
                        <div className={'authorInfo'}>
                            <div className={'authorAvatar'}>
                                <img src={Avatar} alt="" />
                            </div>
                            <div className={'authorInfoCard'}>
                                <div className={'authorNameContainer'}>
                                    <div className={'authorName'}>William</div>
                                    <a href="/profile-page">
                                        <div className={'editProfileBtn'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2088 10.6781L9.17751 10.8256H9.17626L9.32376 9.79431L15.66 3.46056C15.7177 3.40086 15.7866 3.35325 15.8629 3.32049C15.9391 3.28774 16.0211 3.2705 16.1041 3.26978C16.1871 3.26905 16.2694 3.28487 16.3462 3.31629C16.423 3.34772 16.4928 3.39413 16.5515 3.45281C16.6102 3.51149 16.6566 3.58128 16.688 3.65809C16.7195 3.7349 16.7353 3.8172 16.7345 3.90018C16.7338 3.98317 16.7166 4.06518 16.6838 4.14143C16.6511 4.21769 16.6035 4.28665 16.5438 4.34431L10.2088 10.6781ZM17.8343 3.184C17.74 2.95643 17.6017 2.74968 17.4275 2.57556V2.57681C17.0759 2.2253 16.5991 2.02783 16.1019 2.02783C15.6047 2.02783 15.1279 2.2253 14.7763 2.57681L8.29376 9.05806C8.19829 9.1538 8.13645 9.27793 8.11751 9.41181L7.82251 11.4743C7.80871 11.5704 7.81749 11.6684 7.84816 11.7606C7.87884 11.8527 7.93056 11.9364 7.99922 12.0051C8.06789 12.0738 8.15161 12.1255 8.24374 12.1562C8.33588 12.1868 8.43389 12.1956 8.53001 12.1818L10.5925 11.8868C10.7265 11.8675 10.8507 11.8052 10.9463 11.7093L17.4275 5.22806C17.6017 5.05393 17.74 4.84718 17.8343 4.61962C17.9286 4.39205 17.9771 4.14814 17.9771 3.90181C17.9771 3.65548 17.9286 3.41156 17.8343 3.184ZM16.4331 9.55891C16.3159 9.67612 16.25 9.8351 16.25 10.0009V16.2509H3.75V3.75085H10C10.1658 3.75085 10.3247 3.68501 10.4419 3.5678C10.5592 3.45059 10.625 3.29162 10.625 3.12585C10.625 2.96009 10.5592 2.80112 10.4419 2.68391C10.3247 2.5667 10.1658 2.50085 10 2.50085H3.125C2.95924 2.50085 2.80027 2.5667 2.68306 2.68391C2.56585 2.80112 2.5 2.96009 2.5 3.12585V16.8759C2.5 17.0416 2.56585 17.2006 2.68306 17.3178C2.80027 17.435 2.95924 17.5009 3.125 17.5009H16.875C17.0408 17.5009 17.1997 17.435 17.3169 17.3178C17.4342 17.2006 17.5 17.0416 17.5 16.8759V10.0009C17.5 9.8351 17.4342 9.67612 17.3169 9.55891C17.1997 9.4417 17.0408 9.37586 16.875 9.37586C16.7092 9.37586 16.5503 9.4417 16.4331 9.55891Z" fill="#3F535E" />
                                            </svg>
                                            <span>Edit Profile</span>
                                        </div>
                                    </a>

                                </div>
                                <div className={'tagLine'}>
                                    New York / Crafts / Receive Praise: 2341
                                </div>
                                <div className={'authorDescription'}>
                                    Passionate about crafts, welcome to communicate
                                </div>
                            </div>
                        </div>
                        <div className={'actionBtns'} onClick={uploadClicked}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M1.83594 12.834V18.334C1.83594 19.3465 2.65675 20.1673 3.66927 20.1673H18.3359C19.3485 20.1673 20.1693 19.3465 20.1693 18.334V12.834" stroke="white" strokeWidth="1.83333" />
                                <path d="M17.5502 8.3158L11.7165 2.48217C11.3586 2.12418 10.7782 2.12419 10.4202 2.48217L4.58655 8.3158" stroke="white" strokeWidth="1.83333" />
                                <line x1="11.0007" y1="2.75098" x2="11.0007" y2="15.5843" stroke="white" strokeWidth="1.83333" />
                            </svg>
                            <span>Upload</span>

                        </div>
                        <UploadDropdown isOpen={openUploadDropdown} />
                    </div>
                    <div className={'authorSectionMobileContainer grid lg:hidden justify-center p-5'}>
                        <div className={'authorAvatar mx-auto'}>
                            <img src={Avatar} alt="" />
                        </div>
                        <div className={'authorName mt-5'}>William</div>
                        <div className={'tagLine'}>
                            New York / Crafts / Receive Praise: 2341
                        </div>
                        <div className={'authorDescription'}>
                            Passionate about crafts, welcome to communicate
                        </div>
                        <a href="/profile-page" className="mx-auto mt-5">
                            <div className={'editProfileBtn'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2088 10.6781L9.17751 10.8256H9.17626L9.32376 9.79431L15.66 3.46056C15.7177 3.40086 15.7866 3.35325 15.8629 3.32049C15.9391 3.28774 16.0211 3.2705 16.1041 3.26978C16.1871 3.26905 16.2694 3.28487 16.3462 3.31629C16.423 3.34772 16.4928 3.39413 16.5515 3.45281C16.6102 3.51149 16.6566 3.58128 16.688 3.65809C16.7195 3.7349 16.7353 3.8172 16.7345 3.90018C16.7338 3.98317 16.7166 4.06518 16.6838 4.14143C16.6511 4.21769 16.6035 4.28665 16.5438 4.34431L10.2088 10.6781ZM17.8343 3.184C17.74 2.95643 17.6017 2.74968 17.4275 2.57556V2.57681C17.0759 2.2253 16.5991 2.02783 16.1019 2.02783C15.6047 2.02783 15.1279 2.2253 14.7763 2.57681L8.29376 9.05806C8.19829 9.1538 8.13645 9.27793 8.11751 9.41181L7.82251 11.4743C7.80871 11.5704 7.81749 11.6684 7.84816 11.7606C7.87884 11.8527 7.93056 11.9364 7.99922 12.0051C8.06789 12.0738 8.15161 12.1255 8.24374 12.1562C8.33588 12.1868 8.43389 12.1956 8.53001 12.1818L10.5925 11.8868C10.7265 11.8675 10.8507 11.8052 10.9463 11.7093L17.4275 5.22806C17.6017 5.05393 17.74 4.84718 17.8343 4.61962C17.9286 4.39205 17.9771 4.14814 17.9771 3.90181C17.9771 3.65548 17.9286 3.41156 17.8343 3.184ZM16.4331 9.55891C16.3159 9.67612 16.25 9.8351 16.25 10.0009V16.2509H3.75V3.75085H10C10.1658 3.75085 10.3247 3.68501 10.4419 3.5678C10.5592 3.45059 10.625 3.29162 10.625 3.12585C10.625 2.96009 10.5592 2.80112 10.4419 2.68391C10.3247 2.5667 10.1658 2.50085 10 2.50085H3.125C2.95924 2.50085 2.80027 2.5667 2.68306 2.68391C2.56585 2.80112 2.5 2.96009 2.5 3.12585V16.8759C2.5 17.0416 2.56585 17.2006 2.68306 17.3178C2.80027 17.435 2.95924 17.5009 3.125 17.5009H16.875C17.0408 17.5009 17.1997 17.435 17.3169 17.3178C17.4342 17.2006 17.5 17.0416 17.5 16.8759V10.0009C17.5 9.8351 17.4342 9.67612 17.3169 9.55891C17.1997 9.4417 17.0408 9.37586 16.875 9.37586C16.7092 9.37586 16.5503 9.4417 16.4331 9.55891Z" fill="#3F535E" />
                                </svg>
                                <span>Edit Profile</span>
                            </div>
                        </a>
                    </div>
                </div>
            </>
        )
    }

    const TabHeader = () => {
        return (
            <>
                <div className={'container'}>
                    <div className={'tabHeaderWrapper'}>
                        <div className={activeTab == 'project' ? ' tabHeaderItem activeItem' : 'tabHeaderItem'} onClick={() => handleTabClick('project')}>
                            <span>Projects</span>
                            <div className={activeTab == 'project' ? 'hidden' : 'block'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                    <path d="M29.2985 33.8578C28.7569 33.8578 28.2186 33.6639 27.752 33.283L19.2137 26.3349C19.0799 26.2256 18.9266 26.2256 18.7896 26.3349L10.2545 33.283C9.45514 33.9354 8.45024 34.0342 7.56607 33.5581C6.60033 33.0396 6 31.9462 6 30.7083V7.28251C6 5.55079 7.2137 4.14355 8.70147 4.14355H29.2985C30.7896 4.14355 32 5.55079 32 7.28251V30.7154C32 31.9533 31.3997 33.0431 30.4339 33.5651C30.075 33.7591 29.6868 33.8578 29.2985 33.8578ZM29.0962 31.3608C29.217 31.4595 29.3279 31.4736 29.4486 31.4066C29.6085 31.322 29.7781 31.0927 29.7781 30.7154V7.28251C29.7781 6.85223 29.5302 6.55244 29.3051 6.55244H8.70799C8.48613 6.55244 8.23491 6.85223 8.23491 7.28251V30.7154C8.23491 31.0963 8.40457 31.322 8.56444 31.4066C8.68842 31.4736 8.79608 31.4595 8.9168 31.3608L17.4551 24.4128C18.385 23.658 19.6313 23.6615 20.5579 24.4128L29.0962 31.3608Z" fill="#3F535E" />
                                    <path d="M13.0531 13.6481H19.1816C19.8856 13.6481 20.4574 13.079 20.4574 12.3783C20.4574 11.6775 19.8856 11.1084 19.1816 11.1084H13.0531C12.3491 11.1084 11.7773 11.6775 11.7773 12.3783C11.7773 13.079 12.3491 13.6481 13.0531 13.6481ZM23.7807 17.2051H13.0531C12.3491 17.2051 11.7773 17.7743 11.7773 18.475C11.7773 19.1757 12.3491 19.7449 13.0531 19.7449H23.7807C24.4847 19.7449 25.0565 19.1757 25.0565 18.475C25.0565 17.7743 24.4847 17.2051 23.7807 17.2051Z" fill="#3F535E" />
                                </svg>
                            </div>

                            <div className={activeTab == 'project' ? 'block' : 'hidden'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                    <path d="M29.2985 33.8578C28.7569 33.8578 28.2186 33.6639 27.752 33.283L19.2137 26.3349C19.0799 26.2256 18.9266 26.2256 18.7896 26.3349L10.2545 33.283C9.45514 33.9354 8.45024 34.0342 7.56607 33.5581C6.60033 33.0396 6 31.9462 6 30.7083V7.28251C6 5.55079 7.2137 4.14355 8.70147 4.14355H29.2985C30.7896 4.14355 32 5.55079 32 7.28251V30.7154C32 31.9533 31.3997 33.0431 30.4339 33.5651C30.075 33.7591 29.6868 33.8578 29.2985 33.8578ZM29.0962 31.3608C29.217 31.4595 29.3279 31.4736 29.4486 31.4066C29.6085 31.322 29.7781 31.0927 29.7781 30.7154V7.28251C29.7781 6.85223 29.5302 6.55244 29.3051 6.55244H8.70799C8.48613 6.55244 8.23491 6.85223 8.23491 7.28251V30.7154C8.23491 31.0963 8.40457 31.322 8.56444 31.4066C8.68842 31.4736 8.79608 31.4595 8.9168 31.3608L17.4551 24.4128C18.385 23.658 19.6313 23.6615 20.5579 24.4128L29.0962 31.3608Z" fill="#158CC5" />
                                    <path d="M13.0531 13.6481H19.1816C19.8856 13.6481 20.4574 13.079 20.4574 12.3783C20.4574 11.6775 19.8856 11.1084 19.1816 11.1084H13.0531C12.3491 11.1084 11.7773 11.6775 11.7773 12.3783C11.7773 13.079 12.3491 13.6481 13.0531 13.6481ZM23.7807 17.2051H13.0531C12.3491 17.2051 11.7773 17.7743 11.7773 18.475C11.7773 19.1757 12.3491 19.7449 13.0531 19.7449H23.7807C24.4847 19.7449 25.0565 19.1757 25.0565 18.475C25.0565 17.7743 24.4847 17.2051 23.7807 17.2051Z" fill="#158CC5" />
                                </svg>
                            </div>

                            <div className={'activeLine'}></div>
                        </div>
                        <div className={activeTab == 'download' ? ' tabHeaderItem activeItem' : 'tabHeaderItem'} onClick={() => handleTabClick('download')}>
                            <span>Download</span>
                            <div className={activeTab == 'download' ? 'block' : 'hidden'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                    <path d="M12.2783 15.3463L17.8073 20.8777L17.8073 4.75144L20.1823 4.75144L20.1823 20.8919L25.7232 15.3487L27.4023 17.0278L19.8403 24.5898C19.6177 24.8124 19.3157 24.9375 19.0008 24.9375C18.6859 24.9375 18.3839 24.8124 18.1612 24.5898L10.5992 17.0254L12.2783 15.3463Z" fill="#158CC5" />
                                    <path d="M4.75 29.6875V21.375H7.125V29.6875C7.125 30.0024 7.25011 30.3045 7.47281 30.5272C7.69551 30.7499 7.99756 30.875 8.3125 30.875H29.6875C30.0024 30.875 30.3045 30.7499 30.5272 30.5272C30.7499 30.3045 30.875 30.0024 30.875 29.6875V21.375H33.25V29.6875C33.25 30.6323 32.8747 31.5385 32.2066 32.2066C31.5385 32.8747 30.6323 33.25 29.6875 33.25H8.3125C7.36767 33.25 6.46153 32.8747 5.79343 32.2066C5.12533 31.5385 4.75 30.6323 4.75 29.6875Z" fill="#158CC5" />
                                </svg>
                            </div>
                            <div className={activeTab == 'download' ? 'hidden' : 'block'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                    <path d="M12.2783 15.3463L17.8073 20.8777L17.8073 4.75144L20.1823 4.75144L20.1823 20.8919L25.7232 15.3487L27.4023 17.0278L19.8403 24.5898C19.6177 24.8124 19.3157 24.9375 19.0008 24.9375C18.6859 24.9375 18.3839 24.8124 18.1612 24.5898L10.5992 17.0254L12.2783 15.3463Z" fill="#3F535E" />
                                    <path d="M4.75 29.6875V21.375H7.125V29.6875C7.125 30.0024 7.25011 30.3045 7.47281 30.5272C7.69551 30.7499 7.99756 30.875 8.3125 30.875H29.6875C30.0024 30.875 30.3045 30.7499 30.5272 30.5272C30.7499 30.3045 30.875 30.0024 30.875 29.6875V21.375H33.25V29.6875C33.25 30.6323 32.8747 31.5385 32.2066 32.2066C31.5385 32.8747 30.6323 33.25 29.6875 33.25H8.3125C7.36767 33.25 6.46153 32.8747 5.79343 32.2066C5.12533 31.5385 4.75 30.6323 4.75 29.6875Z" fill="#3F535E" />
                                </svg>
                            </div>
                            <div className={'activeLine'}></div>
                        </div>
                        <div className={activeTab == 'favorites' ? ' tabHeaderItem activeItem' : 'tabHeaderItem'} onClick={() => handleTabClick('favorites')}>
                            <span>Favorites</span>
                            <div className={activeTab == 'favorites' ? 'block' : 'hidden'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
                                    <path d="M15.2457 3.21786C15.8947 1.65741 18.1053 1.65741 18.7543 3.21786L21.5799 10.0114C21.8535 10.6692 22.4722 11.1187 23.1824 11.1756L30.5165 11.7636C32.2012 11.8987 32.8843 14.001 31.6008 15.1005L26.0129 19.8871C25.4718 20.3506 25.2355 21.0779 25.4008 21.7709L27.108 28.9278C27.5001 30.5718 25.7117 31.8711 24.2695 30.9902L17.9904 27.1549C17.3824 26.7835 16.6176 26.7835 16.0096 27.1549L9.73054 30.9902C8.28825 31.8711 6.49988 30.5718 6.89201 28.9278L8.5992 21.7709C8.76451 21.0779 8.52821 20.3506 7.98711 19.8871L2.39924 15.1005C1.11572 14.001 1.79882 11.8987 3.48346 11.7636L10.8176 11.1756C11.5278 11.1187 12.1465 10.6692 12.4201 10.0114L15.2457 3.21786Z" stroke="#158CC5" strokeWidth="2.59091" />
                                </svg>
                            </div>
                            <div className={activeTab == 'favorites' ? 'hidden' : 'block'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
                                    <path d="M15.2457 3.21786C15.8947 1.65741 18.1053 1.65741 18.7543 3.21786L21.5799 10.0114C21.8535 10.6692 22.4722 11.1187 23.1824 11.1756L30.5165 11.7636C32.2012 11.8987 32.8843 14.001 31.6008 15.1005L26.0129 19.8871C25.4718 20.3506 25.2355 21.0779 25.4008 21.7709L27.108 28.9278C27.5001 30.5718 25.7117 31.8711 24.2695 30.9902L17.9904 27.1549C17.3824 26.7835 16.6176 26.7835 16.0096 27.1549L9.73054 30.9902C8.28825 31.8711 6.49988 30.5718 6.89201 28.9278L8.5992 21.7709C8.76451 21.0779 8.52821 20.3506 7.98711 19.8871L2.39924 15.1005C1.11572 14.001 1.79882 11.8987 3.48346 11.7636L10.8176 11.1756C11.5278 11.1187 12.1465 10.6692 12.4201 10.0114L15.2457 3.21786Z" stroke="#3F535E" strokeWidth="2.59091" />
                                </svg>
                            </div>
                            <div className={'activeLine'}></div>
                        </div>
                        <div className={activeTab == 'likes' ? ' tabHeaderItem activeItem' : 'tabHeaderItem'} onClick={() => handleTabClick('likes')}>
                            <span>Likes</span>
                            <div className={activeTab == 'likes' ? 'block' : 'hidden'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                    <rect x="13.8416" y="13.9373" width="0.980043" height="16.6609" stroke="#158CC5" strokeWidth="0.980043" />
                                    <path d="M20.468 5.09166H20.4698C21.1903 5.09271 21.8856 5.33791 22.4507 5.78203C23.0151 6.2255 23.4178 6.84154 23.6072 7.53194L23.6105 7.54383L23.6135 7.55579L23.6482 7.69312L23.6614 7.69039C24.1258 9.83921 24.0077 12.0794 23.3199 14.1633L29.2897 14.1678L29.3803 14.1678L29.4698 14.1817L29.4782 14.183L29.4887 14.1838C30.0322 14.2079 30.5596 14.3683 31.0256 14.6483C31.498 14.9323 31.8913 15.3295 32.1745 15.8012C32.5085 16.3485 32.6791 16.9811 32.6697 17.6216L32.6695 17.6356L32.669 17.6495L32.662 17.8325L32.6635 17.8709L32.6693 18.0214L32.6373 18.1685L30.2788 28.994L30.2354 29.1935L30.1275 29.3668L30.1137 29.389L30.1042 29.4071C29.8443 29.9442 29.4465 30.4045 28.9474 30.7345L28.9314 30.7451L28.915 30.7552L28.7961 30.8284L28.7807 30.8379L28.7651 30.8468C28.3335 31.0946 27.8517 31.2412 27.3545 31.2735L27.3309 31.275L27.3073 31.2756L27.2391 31.2773L27.2039 31.2782L27.1687 31.277L27.1236 31.2754L7.48801 31.2709L6.30573 31.2706L6.3065 30.0883L6.31468 17.5089L6.31537 16.4574L7.35982 16.3358C10.9839 15.9139 13.1609 15.1747 14.2667 14.2248L20.468 5.09166ZM20.468 5.09166C18.6014 5.09166 17.2121 6.57586 17.2071 8.42789L17.2047 8.58097M20.468 5.09166L17.2047 8.58097M17.2047 8.58097C17.1715 9.43449 16.8496 10.5024 16.298 11.5635C15.7473 12.6227 15.0171 13.5796 14.267 14.2245L17.2047 8.58097ZM23.2329 14.2475L23.239 14.2431L23.2329 14.2475Z" stroke="#158CC5" strokeWidth="2.36356" />
                                </svg>
                            </div>
                            <div className={activeTab == 'likes' ? 'hidden' : 'block'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                    <rect x="13.8416" y="13.9373" width="0.980043" height="16.6609" stroke="#3F535E" strokeWidth="0.980043" />
                                    <path d="M20.468 5.09166H20.4698C21.1903 5.09271 21.8856 5.33791 22.4507 5.78203C23.0151 6.2255 23.4178 6.84154 23.6072 7.53194L23.6105 7.54383L23.6135 7.55579L23.6482 7.69312L23.6614 7.69039C24.1258 9.83921 24.0077 12.0794 23.3199 14.1633L29.2897 14.1678L29.3803 14.1678L29.4698 14.1817L29.4782 14.183L29.4887 14.1838C30.0322 14.2079 30.5596 14.3683 31.0256 14.6483C31.498 14.9323 31.8913 15.3295 32.1745 15.8012C32.5085 16.3485 32.6791 16.9811 32.6697 17.6216L32.6695 17.6356L32.669 17.6495L32.662 17.8325L32.6635 17.8709L32.6693 18.0214L32.6373 18.1685L30.2788 28.994L30.2354 29.1935L30.1275 29.3668L30.1137 29.389L30.1042 29.4071C29.8443 29.9442 29.4465 30.4045 28.9474 30.7345L28.9314 30.7451L28.915 30.7552L28.7961 30.8284L28.7807 30.8379L28.7651 30.8468C28.3335 31.0946 27.8517 31.2412 27.3545 31.2735L27.3309 31.275L27.3073 31.2756L27.2391 31.2773L27.2039 31.2782L27.1687 31.277L27.1236 31.2754L7.48801 31.2709L6.30573 31.2706L6.3065 30.0883L6.31468 17.5089L6.31537 16.4574L7.35982 16.3358C10.9839 15.9139 13.1609 15.1747 14.2667 14.2248L20.468 5.09166ZM20.468 5.09166C18.6014 5.09166 17.2121 6.57586 17.2071 8.42789L17.2047 8.58097M20.468 5.09166L17.2047 8.58097M17.2047 8.58097C17.1715 9.43449 16.8496 10.5024 16.298 11.5635C15.7473 12.6227 15.0171 13.5796 14.267 14.2245L17.2047 8.58097ZM23.2329 14.2475L23.239 14.2431L23.2329 14.2475Z" stroke="#3F535E" strokeWidth="2.36356" />
                                </svg>
                            </div>
                            <div className={'activeLine'}></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const DownloadItemCard = (props) => {
        const { image } = props
        return (
            <>
                <div className={'DownloadItemCard hidden lg:flex'}>
                    <div className={'itemImage'}>
                        <img src={image} alt="" />
                    </div>
                    <div className={'itemTitle'}>
                        <h3>Christmas decorations SVG,DXF,EPS,JPG</h3>
                    </div>
                    <div className={'actionButtons'}>
                        <div className={'deleteBtn'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M3.4375 5.5004H2.0625C1.88016 5.5004 1.7053 5.42797 1.57636 5.29903C1.44743 5.1701 1.375 4.99523 1.375 4.8129C1.375 4.63056 1.44743 4.45569 1.57636 4.32676C1.7053 4.19783 1.88016 4.1254 2.0625 4.1254H7.5625V2.06152C7.5625 1.87919 7.63493 1.70432 7.76386 1.57539C7.8928 1.44646 8.06766 1.37402 8.25 1.37402H13.75C13.9323 1.37402 14.1072 1.44646 14.2361 1.57539C14.3651 1.70432 14.4375 1.87919 14.4375 2.06152V4.1254H19.9375C20.1198 4.1254 20.2947 4.19783 20.4236 4.32676C20.5526 4.45569 20.625 4.63056 20.625 4.8129C20.625 4.99523 20.5526 5.1701 20.4236 5.29903C20.2947 5.42797 20.1198 5.5004 19.9375 5.5004H18.5625V19.9379C18.5625 20.1202 18.4901 20.2951 18.3611 20.424C18.2322 20.553 18.0573 20.6254 17.875 20.6254H4.125C3.94266 20.6254 3.7678 20.553 3.63886 20.424C3.50993 20.2951 3.4375 20.1202 3.4375 19.9379V5.5004ZM13.0625 4.1254V2.7504H8.9375V4.1254H13.0625ZM4.8125 19.2504H17.1875V5.5004H4.8125V19.2504ZM8.9375 16.5004C8.75516 16.5004 8.5803 16.428 8.45136 16.299C8.32243 16.1701 8.25 15.9952 8.25 15.8129V8.9379C8.25 8.75556 8.32243 8.58069 8.45136 8.45176C8.5803 8.32283 8.75516 8.2504 8.9375 8.2504C9.11984 8.2504 9.2947 8.32283 9.42364 8.45176C9.55257 8.58069 9.625 8.75556 9.625 8.9379V15.8129C9.625 15.9952 9.55257 16.1701 9.42364 16.299C9.2947 16.428 9.11984 16.5004 8.9375 16.5004ZM13.0625 16.5004C12.8802 16.5004 12.7053 16.428 12.5764 16.299C12.4474 16.1701 12.375 15.9952 12.375 15.8129V8.9379C12.375 8.75556 12.4474 8.58069 12.5764 8.45176C12.7053 8.32283 12.8802 8.2504 13.0625 8.2504C13.2448 8.2504 13.4197 8.32283 13.5486 8.45176C13.6776 8.58069 13.75 8.75556 13.75 8.9379V15.8129C13.75 15.9952 13.6776 16.1701 13.5486 16.299C13.4197 16.428 13.2448 16.5004 13.0625 16.5004Z" fill="#158CC5" />
                            </svg>
                        </div>
                        <div className={'downloadBtnContainer'}>
                            <div className={'downloadButton'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M7.10924 8.88471L10.3102 12.0871L10.3102 2.75083L11.6852 2.75083L11.6852 12.0953L14.8931 8.88608L15.8652 9.85821L11.4872 14.2362C11.3583 14.3651 11.1835 14.4375 11.0012 14.4375C10.8189 14.4375 10.644 14.3651 10.5151 14.2362L6.13711 9.85683L7.10924 8.88471Z" fill="white" />
                                    <path d="M2.75 17.1875V12.375H4.125V17.1875C4.125 17.3698 4.19743 17.5447 4.32636 17.6736C4.4553 17.8026 4.63016 17.875 4.8125 17.875H17.1875C17.3698 17.875 17.5447 17.8026 17.6736 17.6736C17.8026 17.5447 17.875 17.3698 17.875 17.1875V12.375H19.25V17.1875C19.25 17.7345 19.0327 18.2591 18.6459 18.6459C18.2591 19.0327 17.7345 19.25 17.1875 19.25H4.8125C4.26549 19.25 3.74089 19.0327 3.35409 18.6459C2.9673 18.2591 2.75 17.7345 2.75 17.1875Z" fill="white" />
                                </svg>
                                <span>Download</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'DownloadItemCardMobile flex flex-row lg:hidden mt-5 gap-3'}>
                    <div className={'basis-1/2'}>
                        <div className={'itemImage'}>
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div className={'basis-1/2 grid'}>
                        <div className={'itemTitle'}>
                            <h3>Christmas decorations SVG,DXF,EPS,JPG</h3>
                        </div>
                        <div className={'actionButtons'}>
                            <div className={'downloadBtnContainer'}>
                                <div className={'downloadButton'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M7.10924 8.88471L10.3102 12.0871L10.3102 2.75083L11.6852 2.75083L11.6852 12.0953L14.8931 8.88608L15.8652 9.85821L11.4872 14.2362C11.3583 14.3651 11.1835 14.4375 11.0012 14.4375C10.8189 14.4375 10.644 14.3651 10.5151 14.2362L6.13711 9.85683L7.10924 8.88471Z" fill="white" />
                                        <path d="M2.75 17.1875V12.375H4.125V17.1875C4.125 17.3698 4.19743 17.5447 4.32636 17.6736C4.4553 17.8026 4.63016 17.875 4.8125 17.875H17.1875C17.3698 17.875 17.5447 17.8026 17.6736 17.6736C17.8026 17.5447 17.875 17.3698 17.875 17.1875V12.375H19.25V17.1875C19.25 17.7345 19.0327 18.2591 18.6459 18.6459C18.2591 19.0327 17.7345 19.25 17.1875 19.25H4.8125C4.26549 19.25 3.74089 19.0327 3.35409 18.6459C2.9673 18.2591 2.75 17.7345 2.75 17.1875Z" fill="white" />
                                    </svg>
                                    <span>Download</span>
                                </div>
                            </div>
                            <div className={'deleteBtn'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M3.4375 5.5004H2.0625C1.88016 5.5004 1.7053 5.42797 1.57636 5.29903C1.44743 5.1701 1.375 4.99523 1.375 4.8129C1.375 4.63056 1.44743 4.45569 1.57636 4.32676C1.7053 4.19783 1.88016 4.1254 2.0625 4.1254H7.5625V2.06152C7.5625 1.87919 7.63493 1.70432 7.76386 1.57539C7.8928 1.44646 8.06766 1.37402 8.25 1.37402H13.75C13.9323 1.37402 14.1072 1.44646 14.2361 1.57539C14.3651 1.70432 14.4375 1.87919 14.4375 2.06152V4.1254H19.9375C20.1198 4.1254 20.2947 4.19783 20.4236 4.32676C20.5526 4.45569 20.625 4.63056 20.625 4.8129C20.625 4.99523 20.5526 5.1701 20.4236 5.29903C20.2947 5.42797 20.1198 5.5004 19.9375 5.5004H18.5625V19.9379C18.5625 20.1202 18.4901 20.2951 18.3611 20.424C18.2322 20.553 18.0573 20.6254 17.875 20.6254H4.125C3.94266 20.6254 3.7678 20.553 3.63886 20.424C3.50993 20.2951 3.4375 20.1202 3.4375 19.9379V5.5004ZM13.0625 4.1254V2.7504H8.9375V4.1254H13.0625ZM4.8125 19.2504H17.1875V5.5004H4.8125V19.2504ZM8.9375 16.5004C8.75516 16.5004 8.5803 16.428 8.45136 16.299C8.32243 16.1701 8.25 15.9952 8.25 15.8129V8.9379C8.25 8.75556 8.32243 8.58069 8.45136 8.45176C8.5803 8.32283 8.75516 8.2504 8.9375 8.2504C9.11984 8.2504 9.2947 8.32283 9.42364 8.45176C9.55257 8.58069 9.625 8.75556 9.625 8.9379V15.8129C9.625 15.9952 9.55257 16.1701 9.42364 16.299C9.2947 16.428 9.11984 16.5004 8.9375 16.5004ZM13.0625 16.5004C12.8802 16.5004 12.7053 16.428 12.5764 16.299C12.4474 16.1701 12.375 15.9952 12.375 15.8129V8.9379C12.375 8.75556 12.4474 8.58069 12.5764 8.45176C12.7053 8.32283 12.8802 8.2504 13.0625 8.2504C13.2448 8.2504 13.4197 8.32283 13.5486 8.45176C13.6776 8.58069 13.75 8.75556 13.75 8.9379V15.8129C13.75 15.9952 13.6776 16.1701 13.5486 16.299C13.4197 16.428 13.2448 16.5004 13.0625 16.5004Z" fill="#158CC5" />
                                </svg>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const handleTabClick = (tabName) => {
        console.log(tabName)
        setActiveTab(tabName);
    }

    const handleSubTabClick = (tabName) => {
        setActiveSubTab(tabName);
    }
    const TabBody = () => {
        if (activeTab == 'project') {
            return (
                <>
                    <div className={'tabBodyContainer'}>
                        <div className={'container'}>
                            <div className={'subTabHeader'}>
                                <div className={'subTabItem ' + ( activeSubTab == 'project:howto'? 'activeSubTabItem' : '')} onClick={() => handleSubTabClick('project:howto')}>
                                    How-To
                                </div>
                                <div className={'subTabItem ' + ( activeSubTab == 'project:image'? 'activeSubTabItem' : '')} onClick={() => handleSubTabClick('project:image')}>
                                    Image
                                </div>
                                <div className={'subTabItem ' + ( activeSubTab == 'project:drafts'? 'activeSubTabItem' : '')} onClick={() => handleSubTabClick('project:drafts')}>
                                    Drafts
                                </div>
                            </div>
                            <div className={'grid grid-cols-2 lg:grid-cols-4 gap-4'}>
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={DeletedImg} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                            </div>
                            <Pagination totalPages={10} currentPage={3} />
                        </div>
                    </div>
                </>
            )
        }
        else if (activeTab == 'download') {
            return (
                <>
                    <div className={'tabBodyContainer'}>
                        <div className={'container'}>
                            <DownloadItemCard image={DeletedImg} />
                            <DownloadItemCard image={ItemImage} />
                            <DownloadItemCard image={ItemImage} />
                            <DownloadItemCard image={ItemImage} />
                            <DownloadItemCard image={DeletedImg} />
                            <DownloadItemCard image={ItemImage} />
                            <DownloadItemCard image={ItemImage} />
                            <DownloadItemCard image={ItemImage} />
                            <DownloadItemCard image={ItemImage} />
                            <Pagination totalPages={10} currentPage={3} />
                        </div>
                    </div>
                </>
            )
        }
        else if (activeTab == 'favorites') {
            return (
                <>
                    <div className={'tabBodyContainer'}>
                        <div className={'container'}>
                            <div className={'subTabHeader'}>
                                <div className={'subTabItem ' + ( activeSubTab == 'favorites:howto'? 'activeSubTabItem' : '')} onClick={() => handleSubTabClick('favorites:howto')}>
                                    How-To
                                </div>
                                <div className={'subTabItem ' + ( activeSubTab == 'favorites:image'? 'activeSubTabItem' : '')} onClick={() => handleSubTabClick('favorites:image')}>
                                    Image
                                </div>

                            </div>
                            <div className={'grid grid-cols-2 lg:grid-cols-4 gap-4'}>
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={DeletedImg} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={DeletedImg} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                            </div>
                            <Pagination totalPages={10} currentPage={3} />
                        </div>
                    </div>
                </>
            )
        }
        else if (activeTab == 'likes') {
            return (
                <>
                    <div className={'tabBodyContainer'}>
                        <div className={'container'}>
                            <div className={'subTabHeader'}>
                                <div className={'subTabItem ' + ( activeSubTab == 'likes:howto'? 'activeSubTabItem' : '')} onClick={() => handleSubTabClick('likes:howto')}>
                                    How-To
                                </div>
                                <div className={'subTabItem ' + ( activeSubTab == 'likes:image'? 'activeSubTabItem' : '')} onClick={() => handleSubTabClick('likes:image')}>
                                    Image
                                </div>

                            </div>
                            <div className={'grid grid-cols-2 lg:grid-cols-4 gap-4'}>
                                <ProductCard imageShow={DeletedImg} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={DeletedImg} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={DeletedImg} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                                <ProductCard imageShow={ProductImage} showLikeRate />
                            </div>
                            <Pagination totalPages={10} currentPage={3} />
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (<></>)
        }

    }

    return (
        <>
            <Banner />
            <AuthorSection />
            <TabHeader />
            <TabBody />
        </>
    )
}
export default UserPage