import { ButtonTypeMap } from '@mui/material';
import { CSSProperties, ReactNode } from 'react';

import { ButtonStyled } from './styled';

export type ButtonProps = {
  children: ReactNode;
  isDisabled?: boolean;
  size?: ButtonTypeMap['props']['size'];
  bgColor?: CSSProperties['backgroundColor'];
  onClick: () => void;
};

export const Button = ({ children, isDisabled, size, bgColor, onClick }: ButtonProps) => {
  return (
    <ButtonStyled
      variant="contained"
      disabled={isDisabled}
      isDisabled={isDisabled}
      size={size}
      bgColor={bgColor}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};
