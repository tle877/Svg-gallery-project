import './style.scss'
import { HeartIcons,
    ThumbsupIcons,
    LikeIcons,
    ShareIcons,
    DownloadIcons,
    StarIcons } from '../../assets/Icons/ImageIcons';



// eslint-disable-next-line react/prop-types
const ProductCard = ({showUploadButtons,showLikeRate,showLikeRateButton,imageShow}) => {
    const productImageStyle = {
        backgroundImage: `url(${imageShow})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
    };

  return (
    <div className={'productCard'}>
        <div className="rounded-lg h-full">
            <a href="/inspiration-page" className='product-card grid grid-cols-7 p-2' style={productImageStyle}>       
                {/* <img className="rounded-t-xl main-image" src={ProductImage} alt="product image" /> */}
                <div className='col-span-6 ml-1 mt-1'>
                    {showUploadButtons && (
                    <div className='flex flex-wrap product-image-button gap-3'>
                        <button className='howto-btn'>How-To</button>
                        <button className='download-btn'>
                            <DownloadIcons />File                        
                        </button>
             
                        
                    </div>)}
                </div>
                <div className='grid col-span-1'>
                    {showLikeRateButton && (
                    <div className='flex flex-col gap-2 sm:gap-4 h-3/5'>
                        <HeartIcons />
                        <ThumbsupIcons />
                        <ShareIcons />
                    </div>)}
                </div>
                   
            </a>
            <div className="flex flex-col items-start justify-center sm:flex-row sm:justify-between w-full tracking-wider">
                <p className="py-2 mt-1 text-left text-sm font-normal image-desc ">Christmas SVG,DXF,EPS,JPG</p>
                
                {showLikeRate &&(
                <div className=" sm:py-2 flex gap-2 text-sm text-black rounded-lg ">
                    <div className='flex '>
                        <StarIcons />
                        <span>5.0</span>
                    </div>
                    <div className='flex'>  
                        <LikeIcons />
                        <span>66</span>
                    </div>


                </div>)
                }
            </div>
        </div>     
    </div>
  );
}

export default ProductCard;