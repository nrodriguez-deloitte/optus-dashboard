import "./Button.styles.scss";
import { ButtonProps } from "./IButton.types";

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  children,
  ...props
}: ButtonProps) => {
  const mode = primary ? "button--primary" : "button--secondary";
  return (
    <button type="button" className={["button", `button--${size}`, mode].join(" ")} {...props}>
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
      {children}
    </button>
  );
};

export default Button;
