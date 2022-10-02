import { VersionInfo } from '../VersionInfo';

import { getVersionInfo } from '.';

describe('packages', () => {
  describe('utils-version', () => {
    describe('getVersionInfo', () => {
      beforeEach(() => {
        VersionInfo.tag = '';
        VersionInfo.branch = '';
        VersionInfo.commit = '';
      });

      it('should return as local build when no tab, branch or commit is injected in VersionInfo.ts file', () => {
        expect(getVersionInfo()).toBe<string>('Local build');
      });
    });
  });
});
