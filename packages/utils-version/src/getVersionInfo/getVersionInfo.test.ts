import { getVersionInfo } from '.';

describe('packages', () => {
  describe('utils-version', () => {
    describe('getVersionInfo', () => {
      it('should return as local build when no tab, branch or commit is injected in VersionInfo.ts file', () => {
        expect(getVersionInfo()).toBe<string>('Local build');
      });
    });
  });
});
