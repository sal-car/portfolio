import { useEffect, useState } from 'react';
import { LandingPage } from './landingpage';
import { AboutPage } from './aboutpage';
// import '../dist/output.css';
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web';

function App() {
  const [items, setItems] = useState<any[]>([]);
  const [index, set] = useState(0);

  const transition = [
    {
      content: <LandingPage setItems={setItems} />,
      y: 100,
      delay: 100,
    },
    {
      content: <AboutPage setItems={setItems} />,
      y: 100,
      delay: 100,
    },
  ];

  const changePage = () => {};
  // const [items, setItems] = useState<any[]>([]);

  const transitions = useTransition(index, {
    from: { opacity: 0, height: '100vh', y: 500 },
    enter: (i) => ({
      opacity: 1,
      height: '90vh',
      y: transition[i].y,
      delay: transition[i].delay,
    }),
    leave: (i) => ({
      opacity: 1,
      height: '100vh',
      y: -1700,
      delay: transition[i].delay,
    }),
  });

  return (
    <div className='App h-[100vh] flex justify-center align-middle'>
      <button
        className='h-52 text-white text-9xl absolute'
        onClick={() => {
          set((state) => (state + 1) % transition.length);
        }}
      >
        Click
      </button>
      {transitions((style, i) => {
        return (
          <animated.div
            className=' overflow-hidden  w-full absolute'
            style={style}
          >
            {transition[i].content}
          </animated.div>
        );
      })}
      {/* <LandingPage changePage={changePage} /> */}
    </div>
  );
}

export default App;

/* 
export default function App() {
  const [index, set] = useState(0)
  const onClick = () => set(state => (state + 1) % 3)
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  useEffect(() => {
    transRef.start()
  }, [index])
  return (
    <div className={`flex fill ${styles.container}`} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>

*/
