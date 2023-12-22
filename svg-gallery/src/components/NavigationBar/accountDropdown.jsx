import LogoutIcon from "@mui/icons-material/Logout";
const AccountDropdown = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isOpen } = props;
  return (
    <div className={"accountDropdown " + (isOpen ? "block" : "")}>
      <div className={"logoutBtn"}>
        <LogoutIcon />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default AccountDropdown;
