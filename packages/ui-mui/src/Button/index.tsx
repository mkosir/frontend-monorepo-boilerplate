import { ButtonTypeMap } from '@mui/material';

import { ButtonStyled } from './styled';

export type ButtonProps = {
  text: string;
  isDisabled?: boolean;
  size?: ButtonTypeMap['props']['size'];
  onClick: () => void;
};

export const Button = ({ text, isDisabled, size, onClick }: ButtonProps) => {
  return (
    <ButtonStyled variant="contained" disabled={isDisabled} isDisabled={isDisabled} size={size} onClick={onClick}>
      {text}
    </ButtonStyled>
  );
};
