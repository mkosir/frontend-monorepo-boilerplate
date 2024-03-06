import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Button } from 'ui-tailwind';

type DoorNo = 1 | 2 | 3;
type OpenDoorNo = DoorNo | null;

export type MontyHomeProps = {
  title: string;
  isTiltEnabled?: boolean;
};

export const MontyHome = ({ title, isTiltEnabled }: MontyHomeProps) => {
  const [openDoorNo, setOpenDoorNo] = useState<OpenDoorNo>(null);
  const [message, setMessage] = useState<null | string>(null);

  const handleMontyHomeSelected = (doorNo: DoorNo) => {
    switch (doorNo) {
      case 1:
        if (!openDoorNo) {
          setOpenDoorNo(3);
          return;
        }
        setMessage('Sorry, better luck next time. Baaa 🐐');
        return;
      case 2:
        if (!openDoorNo) {
          setOpenDoorNo(Math.random() < 0.5 ? 1 : 3);
          return;
        }
        setMessage('Congrats! 🚗');
        return;
      case 3:
        if (!openDoorNo) {
          setOpenDoorNo(1);
          return;
        }
        setMessage('Sorry, better luck next time. Baaa 🐐');
        return;
    }
  };

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
            {openDoorNo === 1 ? ' 🐐 ' : <Button onClick={() => handleMontyHomeSelected(1)}>Home 1</Button>}
            {openDoorNo === 2 ? (
              ' 🐐 '
            ) : (
              <Button className="mx-3" onClick={() => handleMontyHomeSelected(2)}>
                Home 2
              </Button>
            )}
            {openDoorNo === 3 ? ' 🐐 ' : <Button onClick={() => handleMontyHomeSelected(3)}>Home 3</Button>}
          </div>
        )}
      </div>
    </Tilt>
  );
};
