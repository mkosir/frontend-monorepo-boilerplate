import { VersionInfo } from '../VersionInfo';

type GetVersionInfo = () => string;

export const getVersionInfo: GetVersionInfo = () => {
  if (VersionInfo.tag !== '') {
    return VersionInfo.tag;
  }

  if (VersionInfo.commit !== '') {
    return `${VersionInfo.branch} [${VersionInfo.commit.substring(0, 7)}]`;
  }

  return 'Local build';
};
