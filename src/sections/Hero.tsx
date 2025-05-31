import { useRef } from 'react';
import Circle from '../components/Circle';
import CutCornerButton from '../components/CutCornerButton';
import Hexagon from '../components/Hexagon';
import { useScroll, useTransform, motion } from 'framer-motion';

const HeroSection = () => {
  const cuboidRef = useRef(null);
  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: cuboidRef,
    offset: ['start end', 'end start'],
  });
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [20, -20]);

  const torusRef = useRef(null);
  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ['start end', 'end start'],
  });
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [20, -20]);

  const cubeRef = useRef(null);
  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: ['start end', 'end start'],
  });
  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -45]);

  const icosahedronRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: icosahedronRef,
    offset: ['start end', 'end start'],
  });
  const icosahedronRotate = useTransform(scrollYProgress, [0, 1], [30, -45]);
  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Introducing Blockforce
        </p>
        <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4 max-w-3xl mx-auto">
          The future of Blockchain is Here
        </h1>
        <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">
          Blockforce is pioneering smart contract integrity with cutting-edge
          data solutions.
        </p>
        <div className="flex justify-center mt-10">
          <CutCornerButton className="hidden md:inline-flex">
            Get Started
          </CutCornerButton>
        </div>
        <div className="flex justify-center mt-24 ">
          <div className="inline-flex relative z-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon size={1100} />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon size={1800} reverse />
            </div>

            {/* CUBE */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] -top-[900px]" animate>
                <motion.img
                  src="/assets/images/cube.png"
                  alt="Cube 3D image"
                  className="size-[140px]"
                  ref={cubeRef}
                  style={{
                    rotate: cubeRotate,
                  }}
                />
              </Circle>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] top-[270px]" animate>
                <motion.img
                  src="/assets/images/cuboid.png"
                  alt="Cuboid 3D image"
                  className="size-[140px]"
                  ref={cuboidRef}
                  style={{
                    rotate: cuboidRotate,
                  }}
                />
              </Circle>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[600px] -top-[80px]" animate>
                <motion.img
                  src="/assets/images/torus.png"
                  alt="Torus 3D image"
                  className="size-[140px]"
                  ref={torusRef}
                  style={{
                    rotate: torusRotate,
                  }}
                />
              </Circle>
            </div>
            <motion.div
              ref={icosahedronRef}
              className="inline-flex"
              style={{
                rotate: icosahedronRotate,
              }}
            >
              <img
                src="/assets/images/icosahedron.png"
                alt="Icosahedron 3D image"
                className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[15%] brightness-[4%] hue-rotate-[240deg]"
              />
              <img
                src="/assets/images/icosahedron.png"
                alt="Icosahedron 3D image"
                className="w-[500px]"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center gap-4 mt-40 md:mt-80">
          <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full">
            <motion.div
              animate={{
                translateY: 12,
                opacity: 0.2,
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'linear',
                repeatType: 'loop',
              }}
              className="h-3 w-1 bg-fuchsia-500 rounded-full"
            />
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
