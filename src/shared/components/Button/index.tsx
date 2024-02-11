import React, { ReactNode, forwardRef } from "react";
import { StyledButton } from "./Styles";

interface ButtonProps {
  className?: string;
  variant?: string;
  icon?: string;
  children?: ReactNode;
  iconSize?: number;
  disabled?: boolean;
  isActive: boolean;
  onClick: () => void;
}

const defaultProps = {
  className: undefined,
  children: undefined,
  variant: "secondary",
  icon: undefined,
  iconSize: 18,
  disabled: false,
  isWorking: false,
  onClick: () => {},
};

const Button = forwardRef(
  ({
    isActive,
    children,
    variant,
    icon,
    iconSize,
    disabled,
    onClick,
  }: ButtonProps) => {
    const handleClick = () => {
      if (!disabled) {
        onClick();
      }
    };
    return (
      <StyledButton isActive={isActive} onClick={handleClick}>
        {children}
      </StyledButton>
    );
  }
);

export default Button;
