import { useEffect, useState } from "react";
import "./style.scss";
import NavigationBar from "../NavigationBar/navigationBar";
import LogoContainer from "./logo";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "../NavigationBar/mobileMenu";
import CloseIcon from '@mui/icons-material/Close';
import { Search, Tune } from "@mui/icons-material";

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const mobileMenuIconClicked = () => {
    setOpenMobileMenu(!openMobileMenu);
  }
  const checkURL = () => {
    const currentURL = window.location.href;
    const inspirationString = "/inspiration-page"
    const containsString = currentURL.includes(inspirationString);
    if (containsString) {
      setShowSearchBar(true)
    }
  }
  useEffect(() => {
    checkURL();
  }, [])
  const SearchBar = () => {
    return (
      <>
        <div className="group flex grow items-center px-5 py-2 bg-blue-40 rounded-full border border-transparent [&:has(input:focus)]:border-blue [&:has(input:focus)]:border">
          <input
            type="text"
            className="grow bg-transparent h-full pl-0 md:pl-[30px] focus-visible:outline-0 focus-visible:border-r pr-4"
            placeholder="Search the creative world of engraving"
          />
          <Search className="ml-4 group-focus-within:stroke-blue group-focus-within:fill-blue" />
        </div>
      </>
    )
  }
  return (
    <div className={"header"}>
      <div className={"container mx-auto headerContainer hidden lg:flex items-center"}>
        <LogoContainer />
        {
          showSearchBar ?
            <SearchBar />
            :
            <></>
        }

        <NavigationBar />
      </div>
      <div className={"container mx-auto mobileHeader flex lg:hidden"}>
        <div className={"headerLeft"}>
          {
            openMobileMenu ?
              <CloseIcon onClick={mobileMenuIconClicked} />
              :
              <MenuIcon onClick={mobileMenuIconClicked} />
          }
          <LogoContainer />
          <MobileMenu isOpen={openMobileMenu} />
        </div>
        <NavigationBar />

      </div>
    </div>
  );
};
export default Header;
