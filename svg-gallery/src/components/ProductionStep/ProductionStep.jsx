import "./ProductionStep.scss"
import image1 from "../../assets/Image/image1.jpg"
const ProductionStep = () =>{
    return (
        <div className="productionStep container mx-auto my-10 ">
            <h2 className="mb-10">production step</h2>

            <div className="step mb-10">
                <div className="step-title mb-10">
                    <p className="mb-3 sm:mb-0">1: Did you know that whales use echolocation to help navigate the oceans?</p>
                    <p> Whales are one of the most majestic creatures! This DIY laser engraving project captures that essence. You can create and enjoy whales at your home, or make it for someone special.
                    </p>
                </div>
                <div className="step-picture grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8  ">
                    <img src={image1} alt="my image"></img>
                    <img src={image1} alt="my image"></img>
                    <img src={image1} alt="my image"></img>
                </div>
            </div>

            <div className="step mb-10">
                <div className="step-title mb-10">
                    <p className="mb-3 sm:mb-0">1: Did you know that whales use echolocation to help navigate the oceans?</p>
                    <p> Whales are one of the most majestic creatures! This DIY laser engraving project captures that essence. You can create and enjoy whales at your home, or make it for someone special.
                    </p>
                </div>
                <div className="step-picture grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8  ">
                    <img src={image1} alt="my image"></img>
                    <img src={image1} alt="my image"></img>
                </div>
            </div>


        </div>
    )
}

export default ProductionStep