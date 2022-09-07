import Tilt from 'react-parallax-tilt';
import { Button } from 'ui';

export type ButtonsHomeProps = {
  title: string;
  isTiltEnabled: boolean;
};

export const ButtonsHome = ({ title, isTiltEnabled }: ButtonsHomeProps) => {
  return (
    <Tilt tiltEnable={isTiltEnabled} tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.03} style={{ maxWidth: '400px' }}>
      <div
        style={{
          backgroundColor: '#64b0ce17',
          margin: '14px',
          padding: '13px',
          borderRadius: '5px',
          boxShadow: '0 4px 8px 0 #3d9cc23b',
        }}
      >
        <div style={{ display: 'flex' }}>
          <h3>{title}</h3>
          <Button text="Home 1" onClick={() => console.log('Home 1')} />
          <Button text="Home 2" onClick={() => console.log('Home 2')} />
          <Button text="Home 3" onClick={() => console.log('Home 3')} />
        </div>
      </div>
    </Tilt>
  );
};
