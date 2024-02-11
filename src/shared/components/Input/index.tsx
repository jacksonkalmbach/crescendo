import React from "react";
import { InputElement, StyledInput } from "./Styles";

interface InputProps {
  className: string;
  icon: string;
  invalid: boolean;
  onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const defaultProps = {
  className: undefined,
  value: undefined,
  icon: undefined,
  invalid: false,
  filter: undefined,
  onChange: () => {},
};

const Input = ({ icon, className, onChange, placeholder }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value, event);
  };
  return (
    <StyledInput>
      <InputElement onChange={handleChange} placeholder={placeholder} />
    </StyledInput>
  );
};

export default Input;
