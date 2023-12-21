import './style.scss'
import { HeartIcons,
    ThumbsupIcons,
    LikeIcons,
    ShareIcons,
    DownloadIcons,
    StarIcons } from '../../assets/Icons/ImageIcons';
import ProductImage from "../../assets/productImage.jpeg"


const ProductCard = () => {
    const productImageStyle = {
        backgroundImage: `url(${ProductImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
    };

  return (
    <div className={'productCard'}>
        <div className="rounded-lg h-full">
            <a href="#" className='product-card' style={productImageStyle}>       
                {/* <img className="rounded-t-xl main-image" src={ProductImage} alt="product image" /> */}
                <div className='flex product-image-button w-1/2 justify-between'>
                    <button className='howto-btn'>How-To</button>
                    <button className='download-btn'>
                        <DownloadIcons />File                        
                    </button>
                </div>
                <div className='product-image-icon'>
                    <HeartIcons />
                    <ThumbsupIcons />
                    <ShareIcons />
                </div>
            </a>

            
        
            <div className="inline-flex justify-between w-full tracking-wider">
                <p className="py-2 font-normal image-desc">Christmas SVG,DXF,EPS,JPG</p>
                <div className="inline-flex items-center py-2 text-sm text-black rounded-lg ">
                    <StarIcons />
                    <span>5.0</span>
                    <LikeIcons />
                    <span>66</span>
                </div>
            </div>
        </div>     
    </div>
  );
}

export default ProductCard;