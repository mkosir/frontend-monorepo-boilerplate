import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ButtonProps } from './';

export const ButtonStyled = styled(Button)<Omit<ButtonProps, 'text'>>(({ theme, isDisabled, size }) => ({
  width: isDisabled ? '100%' : undefined,
  color: size === 'small' ? theme.palette.secondary.dark : undefined,
  '&.Mui-disabled': {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.grey[600],
  },
}));
