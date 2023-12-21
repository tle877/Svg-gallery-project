import { ArrowRightAlt } from '@mui/icons-material';
import {
  IconFacebook,
  IconLinkedin,
  IconTwitter,
  IconWhatsapp,
} from '../../assets/Icons/SocialMediaIcons.jsx';
import {
  IconAmericanExpress,
  IconApplePay,
  IconDinersClub,
  IconDiscover,
  IconMetapay,
  IconGooglePay,
  IconMaster,
  IconPaypal,
  IconShopPay,
  IconVenmo,
  IconVisa,
  IconKlarna,
  IconAffirm,
} from '../../assets/Icons/PaymentIcons.jsx';
import { FooterMenu } from '../FooterMenu';
import { FOOTER_MENU } from './constants';

const Footer = () => {
  return (
    <div className="footer px-8 pt-2 md:bg-bg-40 md:pt-12 md:pb-8">
      <div className="container text-left pt-10 border-t border-border-ft md:pt-0 md:border-t-0">
        <div className="flex flex-wrap justify-between md:gap-4">
          <div className="w-full border-b border-border-ft-item md:hidden">
            <div className="flex justify-start mb-5">
              <input
                type="text"
                className="flex-auto max-w-[calc(100%-110px)] border-2 border-black py-2 px-3"
                placeholder="Email Address"
              />
              <button className="flex-initial bg-black text-white font-bold py-2 px-3 max-w-[110px]">
                <div className="md:hidden">
                  <ArrowRightAlt />
                </div>
                <span className="hidden md:block">Subscribe</span>
              </button>
            </div>
            <h4 className="font-semibold mb-5">
              SIGN UP FOR EXCLUSIVE NEWS AND EXTRA LASER SAVINGS!
            </h4>
          </div>
          {FOOTER_MENU?.map((e) => (
            <FooterMenu menu={e} key={e.title} />
          ))}
          <div className="mt-10 w-full md:w-1/4 md:min-w-[275px] md:mt-0 md:max-w-[600px]">
            <div className="justify-start hidden mb-5 md:flex">
              <input
                type="text"
                className="flex-auto max-w-[calc(100%-110px)] border-2 border-black py-2 px-3"
                placeholder="Email Address"
              />
              <button className="flex-initial bg-black text-white font-bold py-2 px-3 max-w-[110px]">
                Subscribe
              </button>
            </div>
            <h4 className="font-bold hidden mb-5 md:block">
              SIGN UP FOR EXCLUSIVE NEWS AND EXTRA LASER SAVINGS!
            </h4>
            <div className="mb-5">
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <IconFacebook />
                <IconTwitter />
                <IconLinkedin />
                <IconWhatsapp />
              </div>
            </div>
            <div className="mb-5">
              <h4 className="font-bold mb-4">We accept</h4>
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                <IconAmericanExpress />
                <IconApplePay />
                <IconDinersClub />
                <IconDiscover />
                <IconMetapay />
                <IconGooglePay />
                <IconMaster />
                <IconPaypal />
                <IconShopPay />
                <IconVenmo />
                <IconVisa />
                <IconKlarna />
                <IconAffirm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
