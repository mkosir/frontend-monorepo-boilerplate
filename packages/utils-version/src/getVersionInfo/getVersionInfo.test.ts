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

      it('should return as local build when no tag, branch or commit is injected in VersionInfo.ts file', () => {
        expect(getVersionInfo()).toBe<string>('Local build');
      });

      it('should return tag when tag, branch and commit is injected in VersionInfo.ts file', () => {
        VersionInfo.tag = 'v1.0.18';
        VersionInfo.branch = 'main';
        VersionInfo.commit = 'f076db816c6f8f81a42f13dc653711fcb6650f03';

        expect(getVersionInfo()).toBe<string>(VersionInfo.tag);
      });

      it('should return branch name with commit first 7 digits when branch and commit is injected in VersionInfo.ts file', () => {
        VersionInfo.branch = 'main';
        VersionInfo.commit = 'f076db816c6f8f81a42f13dc653711fcb6650f03';

        expect(getVersionInfo()).toBe<string>('main [f076db8]');
      });
    });
  });
});
