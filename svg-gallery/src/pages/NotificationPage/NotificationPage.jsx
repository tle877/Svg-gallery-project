import './style.scss'
import Avatar from "../../assets/Image/potrait.png"
import ItemImage from '../../assets/Image/item-image.jpg'
import { useState } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss'; // Import the Swiper styles
const NotificationPage = () => {
    const [activeMenu, setActiveMenu] = useState('like');
    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    }

    const MenuMobile = () => {
        return (
          <Swiper
            spaceBetween={0}
            slidesPerView={2.4}
            className={'menuContainer mt-2'}
          >
            <SwiperSlide>
              <div  className={activeMenu === 'like' ? 'menuItem activeMenu' : 'menuItem'} onClick={() => handleMenuClick('like')}>
                Like Notification
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={activeMenu === 'favorite' ? 'menuItem activeMenu' : 'menuItem'}  onClick={() => handleMenuClick('favorite')}>
                Favorite Notification
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={activeMenu === 'comment' ? 'menuItem activeMenu' : 'menuItem'} onClick={() => handleMenuClick('comment')}>
                Comments Notification
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={activeMenu === 'system' ? 'menuItem activeMenu' : 'menuItem'} onClick={() => handleMenuClick('system')}>
                System Notification
              </div>
            </SwiperSlide>
          </Swiper>
        );
      };
      
    const Menu = () => {
        return (
            <>
                <div className={'menuContainer mt-5'}>
                    <div className={activeMenu == 'like'? ' menuItem activeMenu' : 'menuItem'} onClick={() => handleMenuClick('like')}>
                        Like Notification
                    </div>
                    <div className={activeMenu == 'favorite'? ' menuItem activeMenu' : 'menuItem'} onClick={() => handleMenuClick('favorite')}>
                        Favorite Notification
                    </div>
                    <div className={activeMenu == 'comment'? ' menuItem activeMenu' : 'menuItem'} onClick={() => handleMenuClick('comment')}>
                        Comments Notification
                    </div>
                    <div className={activeMenu == 'system'? ' menuItem activeMenu' : 'menuItem'} onClick={() => handleMenuClick('system')}>
                        System Notification
                    </div>
                </div>
            </>
        )
    }

    const CommentNotification = () => {
        return (
            <div className={'notificationCard'}>
                <div className={'userAvatar'}>
                    <img src={Avatar} alt="" />
                </div>
                <div className={'notificationContent'}>
                    <div className={'cardHeader'}>
                        <div className={'userName'}>
                            <span>Bukayo Saka</span>
                        </div>
                        <div className={'notiDate'}>
                            <span>Nov 13, 2023</span>
                        </div>
                    </div>
                    <div className={'notiBody'}>
                        <span>Comment Your Project</span>
                        <span>"That's so good"</span>
                    </div>
                </div>
                <div className={'projectImg'}>
                    <img src={ItemImage} alt="" />
                </div>
            </div>
        )
    }

    const LikeNotification = () => {
        return (
            <div className={'notificationCard'}>
                <div className={'userAvatar'}>
                    <img src={Avatar} alt="" />
                </div>
                <div className={'notificationContent'}>
                    <div className={'cardHeader'}>
                        <div className={'userName'}>
                            <span>Cristiano Ronaldo</span>
                        </div>
                        <div className={'notiDate'}>
                            <span>Nov 13, 2023</span>
                        </div>
                    </div>
                    <div className={'notiBody'}>
                        <span>Like Your Project</span>
                    </div>
                </div>
                <div className={'projectImg'}>
                    <img src={ItemImage} alt="" />
                </div>
            </div>
        )
    }

    const FavoriteNotification = () => {
        return (
            <div className={'notificationCard'}>
                <div className={'userAvatar'}>
                    <img src={Avatar} alt="" />
                </div>
                <div className={'notificationContent'}>
                    <div className={'cardHeader'}>
                        <div className={'userName'}>
                            <span>Taylor Swift</span>
                        </div>
                        <div className={'notiDate'}>
                            <span>Nov 13, 2023</span>
                        </div>
                    </div>
                    <div className={'notiBody'}>
                        <span>Favorite Your Project</span>
                    </div>
                </div>
                <div className={'projectImg'}>
                    <img src={ItemImage} alt="" />
                </div>
            </div>
        )
    }

    const SystemNotification = () => {
        return (
            <div className={'notificationCard'}>
                <div className={'userAvatar'}>
                    <img src={Avatar} alt="" />
                </div>
                <div className={'notificationContent'}>
                    <div className={'cardHeader'}>
                        <div className={'userName'}>
                            <span>Omtech Laser</span>
                        </div>
                        <div className={'notiDate'}>
                            <span>Nov 13, 2023</span>
                        </div>
                    </div>
                    <div className={'notiBody'}>
                        <span>Take a survey and get a chance to win $99.99 Tool Material Package and 300 Tool Points.to win $99.99 Tool Material Package and 300 Tool Points.to win $99.99 Tool Material Package and 300 Tool Points.</span>
                    </div>
                </div>
                <div className={'projectImg'}>
                    <img src={ItemImage} alt="" />
                </div>
            </div>
        )
    }

    const NotificationList = () => {
        return (
            <>
                <div className={'notificationList mt-5'}>
                    <div className={'notificationHeader'}>
                        <div className={'typeName'}>
                            <span>{activeMenu} Notification</span>
                        </div>
                        <div className="deleteNoti sm:block hidden">
                            <span >Delete All Notifications</span>
                        </div>
                    </div>
                    {
                        activeMenu == 'comment' ?
                            <>
                                <CommentNotification />
                                <hr />
                                <CommentNotification />
                                <hr />
                                <CommentNotification />
                                <hr />
                                <CommentNotification />
                                <hr />
                                <CommentNotification />
                                <hr />
                                <CommentNotification />
                                <hr />
                                <Pagination totalPages={8} currentPage={3}/>
                            </>
                            :
                            <></>
                    }

                    {
                        activeMenu == 'favorite' ?
                            <>
                                <FavoriteNotification />
                                <hr />
                                <FavoriteNotification />
                                <hr />
                                <FavoriteNotification />
                                <hr />
                                <FavoriteNotification />
                                <hr />
                            </>
                            :
                            <></>
                    }

                    {
                        activeMenu == 'like' ?
                            <>
                                <LikeNotification />
                                <hr />
                                <LikeNotification />
                                <hr />
                                <LikeNotification />
                                <hr />
                                <LikeNotification />
                                <hr />
                                <LikeNotification />
                                <hr />
                                <LikeNotification />
                            </>
                            :
                            <></>
                    }
                    {
                        activeMenu == 'system' ?
                            <>
                                <SystemNotification />
                                <hr />
                                <SystemNotification />
                                <hr />
                                <SystemNotification />
                                <hr />
                                <SystemNotification />
                            </>
                            :
                            <></>
                    }
                </div>
            </>
        )
    }


    return (
        <>
            <div className={'notificationPage hidden sm:block'}>
                <div className={"container mx-auto mt-5"}>
                    <div className="flex flex-row gap-6">
                        <div className="basis-1/4">
                            <Menu />
                        </div>
                        <div className='basis-3/4'>
                            <NotificationList />
                        </div>
                    </div>
                </div>

            </div>
            <div  className={'notificationPage sm:hidden'}>
                <div className=' mx-auto'>
                    <div className='flex flex-col gap-6'>
                        <MenuMobile />
                    </div>
                    <div>
                    <NotificationList />
                    </div>
                   
                </div>
                
                
            </div>
        </>
    );
}
export default NotificationPage;