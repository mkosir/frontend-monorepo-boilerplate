import { CSSProperties } from 'react';

import { shouldForwardProp } from '.';

type CustomComponentProps = {
  isDisabled: boolean;
  bgColor?: CSSProperties['backgroundColor'];
};

describe('packages', () => {
  describe('utils-mui', () => {
    describe('shouldForwardProp', () => {
      it('should not forward prop when it exists in custom component props', () => {
        expect(shouldForwardProp<CustomComponentProps>(['isDisabled', 'bgColor'])('isDisabled')).toBeFalsy();
      });

      it('should forward prop when it does not exists in custom component props', () => {
        expect(shouldForwardProp<CustomComponentProps>(['isDisabled', 'bgColor'])('notExistingProp')).toBeTruthy();
      });
    });
  });
});
