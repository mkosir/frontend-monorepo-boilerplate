import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ButtonProps } from './';

export const ButtonStyled = styled(Button)<Omit<ButtonProps, 'text'>>(({ theme, isDisabled, size }) => ({
  width: isDisabled ? '100%' : undefined,
  color: size === 'small' ? theme.palette.secondary.main : undefined,
  backgroundColor: theme.palette.secondary.main,
  '&.Mui-disabled': {
    color: theme.brand.green,
    backgroundColor: theme.palette.grey[600],
  },
}));
