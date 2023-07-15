import { useState } from 'react';

import { DoorNo, MontyHome, OpenDoorNo } from './components/MontyHome';

export const HomePage = () => {
  const [openDoorNo, setOpenDoorNo] = useState<OpenDoorNo>(null);
  const [message, setMessage] = useState<null | string>(null);

  const handleMontyHomeSelected = (doorNo: DoorNo) => {
    switch (doorNo) {
      case 1:
        if (!openDoorNo) {
          setOpenDoorNo(doorNo);
          return;
        }
        setMessage('Sorry, better luck next time. Baaa 🐐');
        return;
      case 2:
        setMessage('Congrats! 🚗');
        return;
      case 3:
        if (!openDoorNo) {
          setOpenDoorNo(doorNo);
          return;
        }
        setMessage('Sorry, better luck next time. Baaa 🐐');
        return;
    }
  };

  return (
    <div className="m-5">
      <div className="mb-3 text-lg font-medium">Home Page</div>
      <MontyHome
        title="Home page (scoped) feature"
        openDoorNo={openDoorNo}
        message={message}
        isTiltEnabled={true}
        onMontyHomeSelected={handleMontyHomeSelected}
      />
    </div>
  );
};
