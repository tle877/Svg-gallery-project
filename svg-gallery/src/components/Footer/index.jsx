const Footer = () => {
  return (
    <div className="footer bg-bg-40 py-12">
      <div className="container text-left">
        <div className="flex flex-wrap justify-center">
          <div className="w-1/4 max-w-[160px]">
            <h4 className="font-bold mb-4">About</h4>
            <div className="">
              <a href="">About Us</a>
            </div>
            <div className="">
              <a href="">FAQ</a>
            </div>
            <div className="">
              <a href="">HTML sitemap</a>
            </div>
            <div className="">
              <a href="">Join Us</a>
            </div>
          </div>
          <div className="w-1/4 max-w-[180px]">
            <h4 className="font-bold mb-4">Contact</h4>
            <div>
              <a href="">Contact Us</a>
            </div>
            <div>
              <a href="">Careers</a>
            </div>
            <div>
              <a href="">Become a Partner</a>
            </div>
          </div>
          <div className="w-1/4 max-w-[220px]">
            <h4 className="font-bold mb-4">Policy</h4>
            <div>
              <a href="">Privacy Policy</a>
            </div>
            <div>
              <a href="">Refund Policy</a>
            </div>
            <div>
              <a href="">Shipping Policy</a>
            </div>
            <div>
              <a href="">Term of Service</a>
            </div>
            <div>
              <a href="">Warranty</a>
            </div>
            <div>
              <a href="">Klarna Policy</a>
            </div>
          </div>
          <div className="w-1/4 max-w-[280px]">
            <h4 className="font-bold mb-4">Demo Room Program</h4>
            <div>
              <a href="">Demo Room Program</a>
            </div>
            <div>
              <a href="">Demo Room Program - Host</a>
            </div>
          </div>
          <div className="w-1/4 max-w-[600px]">
            <div className="flex justify-start mb-5">
              <input
                type="text"
                className="flex-auto max-w-[calc(100%-110px)] border-2 border-black py-2 px-3"
                placeholder="your_email@gmail.com"
              />
              <button className="flex-initial bg-black text-white py-2 px-3 font-bold">
                Subscribe
              </button>
            </div>
            <h4 className="font-bold mb-5">
              SIGN UP FOR EXCLUSIVE NEWS AND EXTRA LASER SAVINGS!
            </h4>
            <div>
              <h4 className="font-bold mb-5">Follow Us</h4>
              <div className="flex flex-wrap"></div>
            </div>
            <div>
              <h4 className="font-bold mb-5">We accept</h4>
              <div className="flex flex-wrap"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
