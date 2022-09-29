import { VersionInfoCI } from './VersionInfoCI';

export const getVersionInfo = (): string => {
  if (VersionInfoCI.tag) {
    return VersionInfoCI.tag;
  }

  if (VersionInfoCI.commit) {
    let branchCommit = '';
    branchCommit = VersionInfoCI.branch ? VersionInfoCI.branch : '';
    branchCommit += VersionInfoCI.commit ? ` [${VersionInfoCI.commit.substring(0, 8)}]` : '';
    return branchCommit;
  }

  return 'Local build';
};
