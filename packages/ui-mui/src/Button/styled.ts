import { Button, styled } from '@mui/material';
import { shouldForwardProp } from 'utils-mui';

import { ButtonProps } from '.';

export const ButtonStyled = styled(Button, {
  shouldForwardProp: shouldForwardProp<ButtonProps>(['isDisabled', 'bgColor']),
})<ButtonProps>(({ theme, isDisabled, size, bgColor }) => ({
  width: isDisabled ? '100%' : undefined,
  color: size === 'small' ? theme.palette.secondary.main : undefined,
  backgroundColor: bgColor,
  '&.Mui-disabled': {
    color: theme.brand.green,
    backgroundColor: theme.palette.grey[600],
  },
}));
