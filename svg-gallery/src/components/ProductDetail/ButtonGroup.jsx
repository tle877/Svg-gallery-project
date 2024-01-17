import Button from "@mui/material/Button";
import "./style.scss";
import { useState } from "react";

const ButtonGroup = () => {
  const [loveHover, setLoveHover] = useState(false)
  const [likeHover, setLikeHover] = useState(false)
  const [shareHover, setShareHover] = useState(false)


  return (
    <>
      <div className="flex mt-5">
        <Button
          className={"menu-btn w-1/4 downloadBtn mr-5"}
          variant="contained"
        >
          Download
        </Button>

        {/* love button */}
        <div className="mr-2" onMouseOver={()=>setLoveHover(true)} onMouseLeave = {()=>setLoveHover(false)}>
          {loveHover ?  
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <g clip-path="url(#clip0_1122_17482)">
                <circle 
                  cx="18" 
                  cy="18" 
                  r="18" 
                  fill="#158CC5"
                />
                <path 
                  d="M13.5 9C10.4624 9 8 11.5825 8 14.7682C8 20.5364 14.5 25.7802 18 27C21.5 25.7802 28 20.5364 28 14.7682C28 11.5825 25.5375 9 22.5 9C20.6398 9 18.9953 9.96848 18 11.4509C17.0047 9.96848 15.3601 9 13.5 9Z" 
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1122_17482">
                  <rect width="36" height="36" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          :
          <svg
             id="love-btn"
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <g clipPath="url(#clip0_1122_17447)">
              <circle
                cx="18"
                cy="18"
                r="17.25"
                fill="#FDFDFD"
                stroke="#158CC5"
                strokeWidth="1.5"
              />
              <path
                d="M17.3773 11.8689C17.5166 12.0764 17.7501 12.2009 18 12.2009C18.2499 12.2009 18.4834 12.0764 18.6227 11.8689C19.4903 10.5767 20.9099 9.75 22.5 9.75C25.0901 9.75 27.25 11.9627 27.25 14.7682C27.25 17.3774 25.7696 19.954 23.7672 22.0748C21.8682 24.0861 19.6048 25.5748 18 26.2005C16.3952 25.5748 14.1318 24.0861 12.2328 22.0748C10.2304 19.954 8.75 17.3774 8.75 14.7682C8.75 11.9627 10.9099 9.75 13.5 9.75C15.0901 9.75 16.5097 10.5767 17.3773 11.8689Z"
                stroke="#158CC5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1122_17447">
                <rect width="36" height="36" fill="white" />
              </clipPath>
            </defs>
          </svg>      
          }
        </div>

        {/* Like Button */}
        <div className="mr-2" onMouseEnter ={()=> setLikeHover(true)} onMouseLeave ={()=> setLikeHover(false)}>
          {likeHover ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <g clip-path="url(#clip0_1122_15116)">
              <circle 
                cx="18" 
                cy="18" 
                r="18" 
                fill="#158CC5"
              />
              <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M18.6 9.66699C17.1484 9.66699 15.9964 10.8003 15.9964 12.2723C15.9964 13.129 15.2557 14.4907 14.432 15.1713C14.1319 15.4193 13.6538 15.64 13.002 15.8266V26.3288L22.623 26.331L22.6297 26.332C22.646 26.333 22.6627 26.3337 22.6794 26.3337C23.1767 26.3337 23.667 26.1937 24.094 25.923L24.1857 25.863C24.5157 25.6341 24.7883 25.3319 24.982 24.98L25.0083 24.9297C25.0852 24.8128 25.1422 24.6835 25.1787 24.547L26.6254 18.1623L26.6404 18.099C26.6584 18.0113 26.667 17.9123 26.6644 17.8113L26.6635 17.7976C26.6967 17.2535 26.5579 16.7123 26.266 16.251L26.215 16.1717C25.7634 15.4963 25.0234 15.0763 24.217 15.0153L24.1647 15.012L24.1447 15.0093C24.0957 15.0033 24.0464 15.0003 23.997 15.0003L21.1564 14.9983L21.1924 14.8253C21.2859 14.3425 21.3329 13.8518 21.3327 13.36C21.3327 12.8033 21.2694 12.2477 21.1477 11.6933L21.134 11.6407C21.1287 11.6233 21.1227 11.6062 21.116 11.5893L21.1067 11.569L21.0934 11.521C20.9319 10.9852 20.6023 10.5157 20.1532 10.1818C19.7042 9.84787 19.1596 9.66738 18.6 9.66699ZM12.002 26.3286V16.0601C11.5604 16.1441 11.0678 16.2171 10.5247 16.278L10.458 16.287C10.146 16.338 9.86219 16.4982 9.65734 16.7391C9.45249 16.98 9.33991 17.2858 9.3397 17.602L9.33503 24.9153L9.33403 24.9203C9.3307 24.9437 9.33203 24.9647 9.33437 24.995L9.33603 25.0617C9.35306 25.4034 9.50085 25.7255 9.7488 25.9613C9.99675 26.1971 10.3259 26.3285 10.668 26.3283L12.002 26.3286Z" 
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1122_15116">
                <rect width="36" height="36" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          :
          <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1122_17451)">
              <circle
                cx="18"
                cy="18"
                r="17.25"
                fill="white"
                stroke="#158CC5"
                strokeWidth="1.5"
              />
            <rect
              x="13.1126"
              y="16.7142"
              width="0.514286"
              height="8.74286"
              stroke="#158CC5"
              strokeWidth="0.514286"
            />
            <path
              d="M18.5983 10.25H18.5994C19.0385 10.2506 19.4656 10.3941 19.8159 10.6589C20.1663 10.9236 20.421 11.2952 20.5415 11.7175L20.5438 11.7253L20.5458 11.7331L20.5677 11.8166L20.5758 11.8149C20.8566 13.0643 20.7927 14.3659 20.3921 15.5807L23.9896 15.5833L24.0448 15.5834L24.0995 15.5915L24.1047 15.5923L24.1111 15.5928C24.4427 15.6069 24.7661 15.701 25.0536 15.8671C25.3452 16.0357 25.591 16.2732 25.7694 16.5588C25.9799 16.8907 26.0889 17.2768 26.0829 17.6697L26.0828 17.6789L26.0824 17.6881L26.0783 17.7924L26.0791 17.8116L26.0831 17.9109L26.0611 18.0077L24.6198 24.3691L24.5904 24.499L24.518 24.6108L24.5108 24.622L24.5066 24.6296C24.3423 24.9557 24.0928 25.2315 23.7844 25.4276L23.7743 25.434L23.764 25.4401L23.6913 25.4831L23.6816 25.4888L23.6718 25.4943C23.4057 25.6412 23.1102 25.7272 22.8068 25.7462L22.7924 25.7471L22.778 25.7475L22.7364 25.7485L22.7149 25.749L22.6934 25.7483L22.6658 25.7473L10.6658 25.7447L9.91551 25.7445L9.91602 24.9942L9.92102 17.6022L9.92147 16.9319L10.5876 16.8573C12.8046 16.6092 14.1316 16.1742 14.8015 15.6209L18.5983 10.25ZM18.5983 10.25C17.469 10.25 16.5812 11.1207 16.5777 12.2652L16.5763 12.3536M18.5983 10.25L16.5763 12.3536M16.5763 12.3536C16.5564 12.8386 16.3651 13.4542 16.0309 14.0722C15.6978 14.6883 15.2558 15.2454 14.8017 15.6208L16.5763 12.3536Z"
              stroke="#158CC5"
              strokeWidth="1.5"
            />
            </g>
            <defs>
              <clipPath id="clip0_1122_17451">
                <rect width="36" height="36" fill="white" />
              </clipPath>
            </defs>
          </svg>
          }   
        </div>

        {/* Share Button */}
        <div className="mr-2" onMouseEnter={()=>setShareHover(true)} onMouseLeave={()=>setShareHover(false)}>
        {shareHover? 
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle 
              cx="18" 
              cy="18" 
              r="18" 
              fill="#158CC5"
            />
            <path 
              d="M23.5 13.9998C24.8807 13.9998 26 12.8805 26 11.4998C26 10.119 24.8807 8.99976 23.5 8.99976C22.1193 8.99976 21 10.119 21 11.4998C21 12.8805 22.1193 13.9998 23.5 13.9998Z" 
              stroke="white" 
              stroke-width="2" 
              stroke-linejoin="round"
            />
            <path 
              d="M12.5 20.4995C13.8807 20.4995 15 19.3802 15 17.9995C15 16.6188 13.8807 15.4995 12.5 15.4995C11.1193 15.4995 10 16.6188 10 17.9995C10 19.3802 11.1193 20.4995 12.5 20.4995Z" 
              stroke="white" 
              stroke-width="2" 
              stroke-linejoin="round"
            />
            <path 
              d="M21.0024 12.7866L14.6719 16.6221" 
              stroke="white" stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
              />
            <path 
              d="M14.668 19.2817L21.3382 23.2232" 
              stroke="white" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
              />
            <path 
              d="M23.5 21.9998C24.8807 21.9998 26 23.1191 26 24.4998C26 25.8805 24.8807 26.9998 23.5 26.9998C22.1193 26.9998 21 25.8805 21 24.4998C21 23.1191 22.1193 21.9998 23.5 21.9998Z" 
              stroke="white" 
              stroke-width="2" 
              stroke-linejoin="round"
              />
          </svg>
          :
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <circle
              cx="18"
              cy="18"
              r="17.25"
              fill="white"
              stroke="#158CC5"
              strokeWidth="1.5"
            />
            <path
              d="M23.5 14C24.8807 14 26 12.8807 26 11.5C26 10.1193 24.8807 9 23.5 9C22.1193 9 21 10.1193 21 11.5C21 12.8807 22.1193 14 23.5 14Z"
              stroke="#158CC5"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 20.5C13.8807 20.5 15 19.3807 15 18C15 16.6193 13.8807 15.5 12.5 15.5C11.1193 15.5 10 16.6193 10 18C10 19.3807 11.1193 20.5 12.5 20.5Z"
              stroke="#158CC5"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M21.0005 12.7891L14.6699 16.6245"
              stroke="#158CC5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.668 19.2812L21.3382 23.2227"
              stroke="#158CC5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.5 22C24.8807 22 26 23.1193 26 24.5C26 25.8807 24.8807 27 23.5 27C22.1193 27 21 25.8807 21 24.5C21 23.1193 22.1193 22 23.5 22Z"
              stroke="#158CC5"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          }
        </div>
      </div>
    </>
  );
};

export default ButtonGroup;
