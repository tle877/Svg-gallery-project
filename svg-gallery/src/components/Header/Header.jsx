import {useState} from "react";
import "./style.scss";
import NavigationBar from "../NavigationBar/navigationBar";
import LogoContainer from "./logo";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "../NavigationBar/mobileMenu";
import CloseIcon from '@mui/icons-material/Close';
const Header = () => {
  const [openMobileMene, setOpenMobileMenu] = useState(false);

  const mobileMenuIconClicked = () => {
    setOpenMobileMenu(!openMobileMene);
  }
  return (
    <div className={"header"}>
      <div className={"container mx-auto headerContainer"}>
        <LogoContainer />
        <NavigationBar />
      </div>
      <div className={"container mx-auto mobileHeader"}>
        <div className={"headerLeft"}>
          {
            openMobileMene? 
            <CloseIcon onClick={mobileMenuIconClicked}/>
            :
            <MenuIcon onClick={mobileMenuIconClicked}/>
          }
          <LogoContainer />
          <MobileMenu isOpen={openMobileMene}/>
        </div>
        <NavigationBar />

      </div>
    </div>
  );
};
export default Header;
