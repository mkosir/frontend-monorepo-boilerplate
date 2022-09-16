import { Button as ButtonMUI, ButtonTypeMap } from '@mui/material';

export type ButtonProps = {
  text: string;
  isDisabled?: boolean;
  size?: ButtonTypeMap['props']['size'];
  onClick: () => void;
};

export const Button = ({ text, isDisabled, size, onClick }: ButtonProps) => {
  return (
    <ButtonMUI variant="contained" disabled={isDisabled} size={size} onClick={onClick}>
      {text}
    </ButtonMUI>
  );
};
