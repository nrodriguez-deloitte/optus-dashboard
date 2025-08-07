import "./Navigation.styles.scss";
import { INavigationProps } from "./INavigation.types";
import Link from "next/link";

export const Navigation = (props: INavigationProps) => {
  const { id, activeTab } = props;

  return (
    <div id={id} className="navigation">
      <div className="navigation__logo">
        <div className="navigation__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none">
            <g clipPath="url(#clip0_116_1781)">
              <path
                d="M4.65998 2.2267C5.93161 1.49152 7.41044 1.19688 8.86673 1.38856C10.323 1.58024 11.6752 2.24751 12.7133 3.2867L8.93997 7.05995M2.66666 4H2.67332M1.52665 6.4134C1.27671 7.43144 1.27037 8.49407 1.50813 9.51502C1.7459 10.536 2.22107 11.4865 2.89507 12.2893C3.56907 13.0922 4.4229 13.7248 5.38725 14.1358C6.35159 14.5468 7.39926 14.7246 8.4452 14.6548C9.49115 14.5849 10.5059 14.2694 11.407 13.7339C12.3082 13.1983 13.0703 12.4578 13.6316 11.5724C14.1929 10.6871 14.5374 9.68186 14.6374 8.63836C14.7373 7.59486 14.5897 6.54251 14.2066 5.56673M10.8266 5.17328C10.443 4.78739 9.98462 4.48384 9.47961 4.28119C8.97459 4.07855 8.43354 3.98108 7.88955 3.99475C7.34557 4.00842 6.81009 4.13294 6.31589 4.36068C5.82168 4.58843 5.37915 4.91462 5.01535 5.31929C4.65156 5.72396 4.37415 6.19861 4.20012 6.71418C4.02608 7.22976 3.95907 7.77542 4.00319 8.31778C4.04731 8.86015 4.20162 9.38781 4.45669 9.86848C4.71176 10.3492 5.06223 10.7727 5.48664 11.1133M7.99999 12H8.00666M11.9933 7.77327C12.0296 8.40752 11.9143 9.04129 11.6569 9.6221C11.3995 10.2029 11.0075 10.7141 10.5133 11.1133M9.33332 8C9.33332 8.73638 8.73637 9.33333 7.99999 9.33333C7.26361 9.33333 6.66666 8.73638 6.66666 8C6.66666 7.26362 7.26361 6.66667 7.99999 6.66667C8.73637 6.66667 9.33332 7.26362 9.33332 8Z"
                stroke="#FAFAFA"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_116_1781">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <h2>
          CCAP <span>Communications Assurance Platform</span>
        </h2>
      </div>

      <div className="navigation__links">
        <h3>Platform</h3>
        <ul className="w-full">
          <li>
            <Link
              href="/"
              className={activeTab === "overview" ? "--active" : ""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <path
                  d="M6 2H2.66667C2.29848 2 2 2.29848 2 2.66667V7.33333C2 7.70152 2.29848 8 2.66667 8H6C6.36819 8 6.66667 7.70152 6.66667 7.33333V2.66667C6.66667 2.29848 6.36819 2 6 2Z"
                  stroke="#06B6D4"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3333 2H10C9.63181 2 9.33333 2.29848 9.33333 2.66667V4.66667C9.33333 5.03486 9.63181 5.33333 10 5.33333H13.3333C13.7015 5.33333 14 5.03486 14 4.66667V2.66667C14 2.29848 13.7015 2 13.3333 2Z"
                  stroke="#06B6D4"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3333 8H10C9.63181 8 9.33333 8.29848 9.33333 8.66667V13.3333C9.33333 13.7015 9.63181 14 10 14H13.3333C13.7015 14 14 13.7015 14 13.3333V8.66667C14 8.29848 13.7015 8 13.3333 8Z"
                  stroke="#06B6D4"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 10.6667H2.66667C2.29848 10.6667 2 10.9651 2 11.3333V13.3333C2 13.7015 2.29848 14 2.66667 14H6C6.36819 14 6.66667 13.7015 6.66667 13.3333V11.3333C6.66667 10.9651 6.36819 10.6667 6 10.6667Z"
                  stroke="#06B6D4"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Overview <span>15</span>
            </Link>
          </li>

          <li>
            <Link
              href="/outages"
              className={activeTab === "outages" ? "--active" : ""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <path
                  d="M11.3333 8H10L8.66667 11.3333L7.33333 4.66667L6 8H4.66667M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2Z"
                  stroke="#06B6D4"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Outages
            </Link>
          </li>

          <li>
            <Link
              href="/communication-record"
              className={
                activeTab === "communication-record" ? "--active" : ""
              }>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <path
                  d="M14 6.66668V5.33335C13.9998 5.09953 13.938 4.86989 13.821 4.66746C13.704 4.46503 13.5358 4.29692 13.3333 4.18002L8.66667 1.51335C8.46397 1.39633 8.23405 1.33472 8 1.33472C7.76595 1.33472 7.53603 1.39633 7.33333 1.51335L2.66667 4.18002C2.46418 4.29692 2.29599 4.46503 2.17897 4.66746C2.06196 4.86989 2.00024 5.09953 2 5.33335V10.6667C2.00024 10.9005 2.06196 11.1301 2.17897 11.3326C2.29599 11.535 2.46418 11.7031 2.66667 11.82L7.33333 14.4867C7.53603 14.6037 7.76595 14.6653 8 14.6653C8.23405 14.6653 8.46397 14.6037 8.66667 14.4867L10 13.7267M5 2.84676L11 6.28009M2.19336 4.66675L8.00003 8.00008M8.00003 8.00008L13.8067 4.66675M8.00003 8.00008L8 14.6667M13.5133 11.5134L14.6667 12.6668M14 10.3334C14 11.2539 13.2538 12.0001 12.3333 12.0001C11.4129 12.0001 10.6667 11.2539 10.6667 10.3334C10.6667 9.41294 11.4129 8.66675 12.3333 8.66675C13.2538 8.66675 14 9.41294 14 10.3334Z"
                  stroke="#06B6D4"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Communication record
            </Link>
          </li>
        </ul>
      </div>

      <div className="navigation__links">
        <h3>Links</h3>
        <ul className="w-full">
          <li>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <path
                  d="M10 2H14M14 2V6M14 2L6.66667 9.33333M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
                  stroke="#06B6D4"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              ACMA Reports (Confluence)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
