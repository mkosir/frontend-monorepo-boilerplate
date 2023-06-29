import Tilt from 'react-parallax-tilt';
import { Button } from 'ui-tailwind';

export type DoorNo = 1 | 2 | 3;
export type OpenDoorNo = DoorNo | null;

export type MontyHomeProps = {
  title: string;
  openDoorNo: OpenDoorNo;
  message: string | null;
  isTiltEnabled?: boolean;
  onMontyHomeSelected: (door: DoorNo) => void;
};

export const MontyHome = ({ title, openDoorNo, message, isTiltEnabled, onMontyHomeSelected }: MontyHomeProps) => {
  return (
    <Tilt tiltEnable={isTiltEnabled} tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.03} style={{ maxWidth: '550px' }}>
      <div className="flex flex-col items-center rounded-md bg-blue-100 p-12 shadow-lg">
        <div className="font-normal">{title}</div>
        <a
          href="https://en.wikipedia.org/wiki/Monty_Hall_problem"
          className="mb-3 mt-0.5 text-sm italic text-blue-400 hover:text-blue-500 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Monty Home Problem
        </a>
        {message ? (
          <div className="animate-text-appear text-sm text-blue-500 ">{message}</div>
        ) : (
          <div className="my-2 flex justify-between">
            {openDoorNo === 1 ? ' 🐐 ' : <Button onClick={() => onMontyHomeSelected(1)}>Home 1</Button>}
            {openDoorNo === 2 ? (
              ' 🐐 '
            ) : (
              <Button className="mx-3" onClick={() => onMontyHomeSelected(2)}>
                Home 2
              </Button>
            )}
            {openDoorNo === 3 ? ' 🐐 ' : <Button onClick={() => onMontyHomeSelected(3)}>Home 3</Button>}
          </div>
        )}
      </div>
    </Tilt>
  );
};
