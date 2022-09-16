/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button as ButtonMUI, ButtonTypeMap } from '@mui/material';
import { styled } from '@mui/material/styles';

export type ButtonProps = {
  text: string;
  isDisabled?: boolean;
  size?: ButtonTypeMap['props']['size'];
  onClick: () => void;
};

const ButtonMUIStyled = styled(ButtonMUI)<Omit<ButtonProps, 'text'>>(({ theme, isDisabled }) => ({
  width: isDisabled ? '100%' : undefined,
  backgroundColor: isDisabled ? theme.palette.grey[600] : theme.palette.primary.main,
}));

export const Button = ({ text, isDisabled, size, onClick }: ButtonProps) => {
  return (
    <ButtonMUIStyled variant="contained" disabled={isDisabled} isDisabled={isDisabled} size={size} onClick={onClick}>
      {text}
    </ButtonMUIStyled>
  );
};
