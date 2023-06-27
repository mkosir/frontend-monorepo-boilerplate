export type VersionProps = {
  version: string;
};

export const Version = ({ version }: VersionProps) => <div className="text-sm italic text-gray-400">{version}</div>;
