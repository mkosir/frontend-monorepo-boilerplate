import { Button as ButtonMUI } from '@mui/material';

export type ButtonProps = {
  text: string;
  isDisabled?: boolean;
  onClick: () => void;
};

export const Button = ({ text, isDisabled, onClick }: ButtonProps) => {
  return (
    <ButtonMUI variant="contained" disabled={isDisabled} onClick={onClick}>
      {text}
    </ButtonMUI>
  );
};
