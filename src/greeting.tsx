import { animated, useSpring, easings } from '@react-spring/web';

export const Greeting = () => {
  const Sally = useSpring({
    delay: 700,
    from: {
      y: 210,
    },
    to: {
      y: 0,
    },
    config: { easing: easings.easeInOutBack, duration: 1000 },
  });
  const Iam = useSpring({
    delay: 600,
    from: {
      y: 210,
    },
    to: {
      y: 0,
    },
    config: { easing: easings.easeInOutBack, duration: 1000 },
  });
  const Hi = useSpring({
    delay: 0,
    from: {
      y: 200,
    },
    to: {
      y: 0,
    },
    config: { easing: easings.easeInOutBack, duration: 1000 },
  });

  return (
    <div className=' w-full justify-center'>
      <div className='  pt-24 pb-6'>
        {/* <div className='flex flex-col overflow-hidden'> */}
        <div className='overflow-hidden h-[226px]'>
          <animated.div style={{ height: '240px', ...Hi }}>
            <h1 className='text-[10rem] text-center text-white font-bold flex flex-col'>
              Hey!
            </h1>
          </animated.div>
        </div>
        <div className='overflow-hidden flex justify-center gap-10 h-[230px]'>
          <animated.div style={{ height: '240px', ...Iam }}>
            <h1 className='text-[10rem] text-center text-white font-bold flex flex-col'>
              I'm
            </h1>
          </animated.div>
          <animated.div style={{ height: '240px', ...Sally }}>
            <h1 className='text-[10rem] text-center text-white font-bold flex flex-col'>
              Sally
            </h1>
          </animated.div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
