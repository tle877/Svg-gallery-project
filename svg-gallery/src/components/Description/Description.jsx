import "./Description.scss";

const Description = () => {
  return (
    <div className="desc container mx-auto mb-5">
      <h2 className="mb-10">Description</h2>
      <p className="mb-20 sm:mb-14">
        Did you know that whales use echolocation to help navigate the oceans?
        Whales are one of the most majestic creatures! This DIY laser engraving
        project captures that essence. You can create and enjoy whales at your
        home, or make it for someone special.
      </p>
      <div className="grid grid-rows-5 desc_table px-7 ">
        <div className="items flex border-b py-7 items-center">
          <h3>Machine</h3>
          <p className="w-5/12 ml-auto">CO2 Laser Machine</p>
        </div>
        <div className="items flex border-b py-7 items-center">
          <h3>Laser Output</h3>
          <p className="w-5/12 ml-auto">50-100W</p>
        </div>
        <div className="items flex border-b py-7 items-center">
          <h3>Production time (minutes)</h3>
          <p className="w-5/12 5 ml-auto">15min</p>
        </div>
        <div className="items flex border-b py-7 items-center">
          <h3>Material</h3>
          <p className="w-5/12 ml-auto">acrylic sheet</p>
        </div>
        <div className="items flex py-7 items-center">
          <h3>Products</h3>
          <p className="w-5/12 ml-auto">Residential</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
