import { VersionInfo } from '../VersionInfo';

export const getVersionInfo = (): string => {
  if (VersionInfo.tag) {
    return VersionInfo.tag;
  }

  if (VersionInfo.commit) {
    let branchCommit = '';
    branchCommit = VersionInfo.branch ? VersionInfo.branch : '';
    branchCommit += VersionInfo.commit ? ` [${VersionInfo.commit.substring(0, 7)}]` : '';
    return branchCommit;
  }

  return 'Local build';
};
