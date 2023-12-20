import "./style.scss";
import NavigationBar from "../NavigationBar/navigationBar";
import LogoContainer from "./logo";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  return (
    <div className={"header"}>
      <div className={"container mx-auto headerContainer"}>
        <LogoContainer />
        <NavigationBar />
      </div>
      <div className={"container mx-auto mobileHeader"}>
        <div className={"headerLeft"}>
          <MenuIcon />
          <LogoContainer />
        </div>

        <NavigationBar />
      </div>
    </div>
  );
};
export default Header;
