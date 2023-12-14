import { useEffect, useState } from 'react';
import { animated, useSpring, easings } from '@react-spring/web';
import { Greeting } from './greeting';

type Props = {
  changePage: () => void;
};

export const LandingPage = ({ setItems }: any) => {
  return (
    <div className='LandingPage'>
      <Greeting />
    </div>
  );
};
