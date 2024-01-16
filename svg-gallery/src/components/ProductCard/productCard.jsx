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
            <a href="/inspiration-page" className='product-card' style={productImageStyle}>       
                {/* <img className="rounded-t-xl main-image" src={ProductImage} alt="product image" /> */}
                {showUploadButtons && (
                <div className='flex product-image-button w-1/2 justify-between'>
                    <button className='howto-btn'>How-To</button>
                    <button className='download-btn'>
                        <DownloadIcons />File                        
                    </button>
                </div>)}
                {showLikeRateButton && (
                <div className='product-image-icon'>
                    <HeartIcons />
                    <ThumbsupIcons />
                    <ShareIcons />
                </div>)}    
            </a>
            <div className="flex flex-col item-start sm:flex-row sm:justify-between items-center w-full tracking-wider">
                <p className="py-2 mt-1 text-left text-sm font-normal image-desc ">Christmas SVG,DXF,EPS,JPG</p>
                {showLikeRate &&(
                <div className="inline-flex sm:items-center py-2 text-sm text-black rounded-lg ">
                    <StarIcons />
                    <span>5.0</span>
                    <LikeIcons />
                    <span>66</span>
                </div>)
                }
            </div>
        </div>     
    </div>
  );
}

export default ProductCard;