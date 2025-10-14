import React from "react";

import "./NavigationButton.styles.scss";
import { NavigationButtonProps } from "./NavigationButton.types";

const NavigationButton: React.FC<NavigationButtonProps> = ({
  children,
  active = false,
  disabled = false,
  icon,
  // href,
  "aria-label": ariaLabel,
  ...rest
}) => {
  console.log(icon);
  return (
    <button
      className={`navigation-button ${
        active ? " navigation-button--active" : ""
      }${disabled ? " navigation-button--disabled" : ""}`}
      aria-label={ariaLabel}
      aria-current={active ? "page" : undefined}
      disabled={disabled}
      {...rest}
    >
      <span className="navigation-button__label">{children}</span>

      {/* // * TODO: Add icon rendering */}
      {icon && <span className="navigation-button__icon">{icon}</span>}
    </button>
  );
};

export default NavigationButton;
