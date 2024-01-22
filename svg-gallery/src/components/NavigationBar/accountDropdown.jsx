const AccountDropdown = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isOpen } = props;
  return (
    <div className={"accountDropdown " + (isOpen ? "block" : "")}>
      <a href="/profile">
        <div className={"logoutBtn"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">
            <path d="M14.0039 1.80371C15.7278 1.80371 17.3811 2.50139 18.6001 3.74327C19.8191 4.98515 20.5039 6.6695 20.5039 8.42578C20.5039 10.1821 19.8191 11.8664 18.6001 13.1083C17.3811 14.3502 15.7278 15.0478 14.0039 15.0478C12.28 15.0478 10.6267 14.3502 9.40771 13.1083C8.18873 11.8664 7.50391 10.1821 7.50391 8.42578C7.50391 6.6695 8.18873 4.98515 9.40771 3.74327C10.6267 2.50139 12.28 1.80371 14.0039 1.80371M14.0039 18.3589C21.1864 18.3589 27.0039 21.3223 27.0039 24.9809V28.292H1.00391V24.9809C1.00391 21.3223 6.82141 18.3589 14.0039 18.3589Z" stroke="#2F2725" stroke-width="1.875"/>
          </svg>
          <span className="hover:text-custom-blue">Profile</span>
        </div>  
      </a>
      <a href="/login">
        <div className={"logoutBtn"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M15.9945 4H4V28H16" stroke="#2F2725" stroke-width="2.37037" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 22L28 16L22 10" stroke="#2F2725" stroke-width="2.37037" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.668 15.9961H28.0013" stroke="#2F2725" stroke-width="2.37037" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span className="hover:text-custom-blue">Logout</span>
      </div> 
      </a>
        
    </div>
  );
};

export default AccountDropdown;
