import BannerImage from "../../assets/Image/sample-banner.png";
import Avatar from "../../assets/Image/potrait.png"
import './style.scss'
import ProductCard from "../../components/ProductCard/productCard";
import ProductImage from "../../assets/productImage.jpeg"
import Pagination from "../../components/Pagination/Pagination";

const UserPage = () => {
    const Banner = () => {
        return (
            <>
                <div className="w-full">
                    <img src={BannerImage} alt="" />
                </div>
            </>
        )
    }

    const AuthorSection = () => {
        return (
            <>
                <div className={'container'}>
                    <div className={'authorSectionContainer'}>
                        <div className={'authorInfo'}>
                            <div className={'authorAvatar'}>
                                <img src={Avatar} alt="" />
                            </div>
                            <div className={'authorInfoCard'}>
                                <div className={'authorNameContainer'}>
                                    <div className={'authorName'}>William</div>
                                    <div className={'editProfileBtn'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2088 10.6781L9.17751 10.8256H9.17626L9.32376 9.79431L15.66 3.46056C15.7177 3.40086 15.7866 3.35325 15.8629 3.32049C15.9391 3.28774 16.0211 3.2705 16.1041 3.26978C16.1871 3.26905 16.2694 3.28487 16.3462 3.31629C16.423 3.34772 16.4928 3.39413 16.5515 3.45281C16.6102 3.51149 16.6566 3.58128 16.688 3.65809C16.7195 3.7349 16.7353 3.8172 16.7345 3.90018C16.7338 3.98317 16.7166 4.06518 16.6838 4.14143C16.6511 4.21769 16.6035 4.28665 16.5438 4.34431L10.2088 10.6781ZM17.8343 3.184C17.74 2.95643 17.6017 2.74968 17.4275 2.57556V2.57681C17.0759 2.2253 16.5991 2.02783 16.1019 2.02783C15.6047 2.02783 15.1279 2.2253 14.7763 2.57681L8.29376 9.05806C8.19829 9.1538 8.13645 9.27793 8.11751 9.41181L7.82251 11.4743C7.80871 11.5704 7.81749 11.6684 7.84816 11.7606C7.87884 11.8527 7.93056 11.9364 7.99922 12.0051C8.06789 12.0738 8.15161 12.1255 8.24374 12.1562C8.33588 12.1868 8.43389 12.1956 8.53001 12.1818L10.5925 11.8868C10.7265 11.8675 10.8507 11.8052 10.9463 11.7093L17.4275 5.22806C17.6017 5.05393 17.74 4.84718 17.8343 4.61962C17.9286 4.39205 17.9771 4.14814 17.9771 3.90181C17.9771 3.65548 17.9286 3.41156 17.8343 3.184ZM16.4331 9.55891C16.3159 9.67612 16.25 9.8351 16.25 10.0009V16.2509H3.75V3.75085H10C10.1658 3.75085 10.3247 3.68501 10.4419 3.5678C10.5592 3.45059 10.625 3.29162 10.625 3.12585C10.625 2.96009 10.5592 2.80112 10.4419 2.68391C10.3247 2.5667 10.1658 2.50085 10 2.50085H3.125C2.95924 2.50085 2.80027 2.5667 2.68306 2.68391C2.56585 2.80112 2.5 2.96009 2.5 3.12585V16.8759C2.5 17.0416 2.56585 17.2006 2.68306 17.3178C2.80027 17.435 2.95924 17.5009 3.125 17.5009H16.875C17.0408 17.5009 17.1997 17.435 17.3169 17.3178C17.4342 17.2006 17.5 17.0416 17.5 16.8759V10.0009C17.5 9.8351 17.4342 9.67612 17.3169 9.55891C17.1997 9.4417 17.0408 9.37586 16.875 9.37586C16.7092 9.37586 16.5503 9.4417 16.4331 9.55891Z" fill="#3F535E" />
                                        </svg>
                                        <span>Edit Profile</span>
                                    </div>
                                </div>
                                <div className={'tagLine'}>
                                    New York / Crafts / Receive Praise: 2341
                                </div>
                                <div className={'authorDescription'}>
                                    Passionate about crafts, welcome to communicate
                                </div>
                            </div>
                        </div>
                        <div className={'actionBtns'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M1.83594 12.834V18.334C1.83594 19.3465 2.65675 20.1673 3.66927 20.1673H18.3359C19.3485 20.1673 20.1693 19.3465 20.1693 18.334V12.834" stroke="white" stroke-width="1.83333" />
                                <path d="M17.5502 8.3158L11.7165 2.48217C11.3586 2.12418 10.7782 2.12419 10.4202 2.48217L4.58655 8.3158" stroke="white" stroke-width="1.83333" />
                                <line x1="11.0007" y1="2.75098" x2="11.0007" y2="15.5843" stroke="white" stroke-width="1.83333" />
                            </svg>
                            <span>Upload</span>
                        </div>
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
                        <div className={'tabHeaderItem activeItem'}>
                            <span>Projects</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                <path d="M29.2985 33.8578C28.7569 33.8578 28.2186 33.6639 27.752 33.283L19.2137 26.3349C19.0799 26.2256 18.9266 26.2256 18.7896 26.3349L10.2545 33.283C9.45514 33.9354 8.45024 34.0342 7.56607 33.5581C6.60033 33.0396 6 31.9462 6 30.7083V7.28251C6 5.55079 7.2137 4.14355 8.70147 4.14355H29.2985C30.7896 4.14355 32 5.55079 32 7.28251V30.7154C32 31.9533 31.3997 33.0431 30.4339 33.5651C30.075 33.7591 29.6868 33.8578 29.2985 33.8578ZM29.0962 31.3608C29.217 31.4595 29.3279 31.4736 29.4486 31.4066C29.6085 31.322 29.7781 31.0927 29.7781 30.7154V7.28251C29.7781 6.85223 29.5302 6.55244 29.3051 6.55244H8.70799C8.48613 6.55244 8.23491 6.85223 8.23491 7.28251V30.7154C8.23491 31.0963 8.40457 31.322 8.56444 31.4066C8.68842 31.4736 8.79608 31.4595 8.9168 31.3608L17.4551 24.4128C18.385 23.658 19.6313 23.6615 20.5579 24.4128L29.0962 31.3608Z" fill="#158CC5" />
                                <path d="M13.0531 13.6481H19.1816C19.8856 13.6481 20.4574 13.079 20.4574 12.3783C20.4574 11.6775 19.8856 11.1084 19.1816 11.1084H13.0531C12.3491 11.1084 11.7773 11.6775 11.7773 12.3783C11.7773 13.079 12.3491 13.6481 13.0531 13.6481ZM23.7807 17.2051H13.0531C12.3491 17.2051 11.7773 17.7743 11.7773 18.475C11.7773 19.1757 12.3491 19.7449 13.0531 19.7449H23.7807C24.4847 19.7449 25.0565 19.1757 25.0565 18.475C25.0565 17.7743 24.4847 17.2051 23.7807 17.2051Z" fill="#158CC5" />
                            </svg>
                            <div className={'activeLine'}></div>
                        </div>
                        <div className={'tabHeaderItem '}>
                            <span>Download</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                <path d="M12.2783 15.3463L17.8073 20.8777L17.8073 4.75144L20.1823 4.75144L20.1823 20.8919L25.7232 15.3487L27.4023 17.0278L19.8403 24.5898C19.6177 24.8124 19.3157 24.9375 19.0008 24.9375C18.6859 24.9375 18.3839 24.8124 18.1612 24.5898L10.5992 17.0254L12.2783 15.3463Z" fill="#3F535E" />
                                <path d="M4.75 29.6875V21.375H7.125V29.6875C7.125 30.0024 7.25011 30.3045 7.47281 30.5272C7.69551 30.7499 7.99756 30.875 8.3125 30.875H29.6875C30.0024 30.875 30.3045 30.7499 30.5272 30.5272C30.7499 30.3045 30.875 30.0024 30.875 29.6875V21.375H33.25V29.6875C33.25 30.6323 32.8747 31.5385 32.2066 32.2066C31.5385 32.8747 30.6323 33.25 29.6875 33.25H8.3125C7.36767 33.25 6.46153 32.8747 5.79343 32.2066C5.12533 31.5385 4.75 30.6323 4.75 29.6875Z" fill="#3F535E" />
                            </svg>
                        </div>
                        <div className={'tabHeaderItem '}>
                            <span>Favorites</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                <path d="M17.566 10.3034C17.775 10.6146 18.1252 10.8013 18.5 10.8013C18.8748 10.8013 19.225 10.6146 19.434 10.3034C20.7355 8.36511 22.8648 7.125 25.25 7.125C29.1351 7.125 32.375 10.444 32.375 14.6523C32.375 18.5661 30.1544 22.431 27.1507 25.6123C24.3023 28.6292 20.9072 30.8623 18.5 31.8008C16.0928 30.8623 12.6977 28.6292 9.84925 25.6123C6.84555 22.431 4.625 18.5661 4.625 14.6523C4.625 10.444 7.86485 7.125 11.75 7.125C14.1352 7.125 16.2645 8.36511 17.566 10.3034Z" stroke="#3F535E" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className={'tabHeaderItem '}>
                            <span>Likes</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                <rect x="13.8416" y="13.9373" width="0.980043" height="16.6609" stroke="#3F535E" stroke-width="0.980043" />
                                <path d="M20.468 5.09166H20.4698C21.1903 5.09271 21.8856 5.33791 22.4507 5.78203C23.0151 6.2255 23.4178 6.84154 23.6072 7.53194L23.6105 7.54383L23.6135 7.55579L23.6482 7.69312L23.6614 7.69039C24.1258 9.83921 24.0077 12.0794 23.3199 14.1633L29.2897 14.1678L29.3803 14.1678L29.4698 14.1817L29.4782 14.183L29.4887 14.1838C30.0322 14.2079 30.5596 14.3683 31.0256 14.6483C31.498 14.9323 31.8913 15.3295 32.1745 15.8012C32.5085 16.3485 32.6791 16.9811 32.6697 17.6216L32.6695 17.6356L32.669 17.6495L32.662 17.8325L32.6635 17.8709L32.6693 18.0214L32.6373 18.1685L30.2788 28.994L30.2354 29.1935L30.1275 29.3668L30.1137 29.389L30.1042 29.4071C29.8443 29.9442 29.4465 30.4045 28.9474 30.7345L28.9314 30.7451L28.915 30.7552L28.7961 30.8284L28.7807 30.8379L28.7651 30.8468C28.3335 31.0946 27.8517 31.2412 27.3545 31.2735L27.3309 31.275L27.3073 31.2756L27.2391 31.2773L27.2039 31.2782L27.1687 31.277L27.1236 31.2754L7.48801 31.2709L6.30573 31.2706L6.3065 30.0883L6.31468 17.5089L6.31537 16.4574L7.35982 16.3358C10.9839 15.9139 13.1609 15.1747 14.2667 14.2248L20.468 5.09166ZM20.468 5.09166C18.6014 5.09166 17.2121 6.57586 17.2071 8.42789L17.2047 8.58097M20.468 5.09166L17.2047 8.58097M17.2047 8.58097C17.1715 9.43449 16.8496 10.5024 16.298 11.5635C15.7473 12.6227 15.0171 13.5796 14.267 14.2245L17.2047 8.58097ZM23.2329 14.2475L23.239 14.2431L23.2329 14.2475Z" stroke="#3F535E" stroke-width="2.36356" />
                            </svg>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const TabBody = () => {
        return (
            <>
                <div className={'tabBodyContainer'}>
                    <div className={'container'}>
                        <div className={'subTabHeader'}>
                            <div className={'subTabItem activeSubTabItem'}>
                                How-To
                            </div>
                            <div className={'subTabItem'}>
                                Image
                            </div>
                            <div className={'subTabItem'}>
                                Drafts
                            </div>
                        </div>
                        <div className={'grid grid-cols-4 gap-4'}>
                            <ProductCard imageShow={ProductImage} showLikeRate/>
                            <ProductCard imageShow={ProductImage} showLikeRate/>
                            <ProductCard imageShow={ProductImage} showLikeRate/>
                            <ProductCard imageShow={ProductImage} showLikeRate/>
                            <ProductCard imageShow={ProductImage} showLikeRate/>
                            <ProductCard imageShow={ProductImage} showLikeRate/>
                            <ProductCard imageShow={ProductImage} showLikeRate/>
                            <ProductCard imageShow={ProductImage} showLikeRate/>
                            <ProductCard imageShow={ProductImage} showLikeRate/>
                            <ProductCard imageShow={ProductImage} showLikeRate/>
                            <ProductCard imageShow={ProductImage} showLikeRate/>
                            <ProductCard imageShow={ProductImage} showLikeRate/>
                        </div>
                        <Pagination totalPages={10} currentPage={3} />
                    </div>
                </div>
            </>
        )
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