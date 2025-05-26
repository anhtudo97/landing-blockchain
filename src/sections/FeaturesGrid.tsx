import React, { useRef } from 'react';
import CutCornerButton from '../components/CutCornerButton';
import TextButton from '../components/TextButton';
import { motion, useScroll, useTransform } from 'framer-motion';

const items = [
  'Experience the power of blockchain technology.',
  'Build and deploy smart contracts with ease.',
  'Interact with the blockchain through our intuitive user interface.',
  'Stay up-to-date with the latest news and updates',
];

const FeaturesGrid = () => {
  const torusKnotRef = useRef(null);
  const firstHemisphereRef = useRef(null);

  // For torus knot animation
  const { scrollYProgress } = useScroll({
    target: torusKnotRef,
    offset: ['start end', 'end start'],
  });

  const torusKnotTranslate = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const torusKnotRotate = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // For first hemisphere animation
  const { scrollYProgress: firstHemisphereProgress } = useScroll({
    target: firstHemisphereRef,
    offset: ['start end', 'end start'],
  });
  const firstHemisphereTranslate = useTransform(
    firstHemisphereProgress,
    [0, 1],
    [50, -50],
  );
  const firstHemisphereRotate = useTransform(
    firstHemisphereProgress,
    [0, 1],
    [-20, -50],
  );

  const coneRef = useRef(null);
  const secondHemisphereRef = useRef(null);

  // For torus knot animation
  const { scrollYProgress: coneProgress } = useScroll({
    target: coneRef,
    offset: ['start end', 'end start'],
  });

  const coneTranslate = useTransform(coneProgress, [0, 1], [100, -100]);
  const coneRotate = useTransform(coneProgress, [0, 1], [12, 45]);

  // For second hemisphere animation
  const { scrollYProgress: secondHemisphereProgress } = useScroll({
    target: secondHemisphereRef,
    offset: ['start end', 'end start'],
  });
  const secondHemisphereTranslate = useTransform(
    secondHemisphereProgress,
    [0, 1],
    [50, -50],
  );
  const secondHemisphereRotate = useTransform(
    secondHemisphereProgress,
    [0, 1],
    [-20, 10],
  );

  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Empowering the future of blockchain.
              </h2>
              <p className="text-xl lg:text-2xl text-zinc-400 mt-8">
                Blockforce provides a suite of blockchain solutions that are
                designed to meet the needs of both developers and end-users.
              </p>
              <ul className="flex flex-col gap-8 mt-12">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full">
                      <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative inline-flex z-0">
                <motion.img
                  src="/assets/images/torus-knot.png"
                  alt="Torus Knot 3D"
                  className="size-96 max-w-none"
                  ref={torusKnotRef}
                  style={{
                    translateY: torusKnotTranslate,
                    rotate: torusKnotRotate,
                  }}
                />
                <motion.img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere 3D"
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                  ref={firstHemisphereRef}
                  style={{
                    translateY: firstHemisphereTranslate,
                    rotate: firstHemisphereRotate,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative hidden md:block">
              <div className="absolute right-0 z-0">
                <motion.img
                  src="/assets/images/cone.png"
                  alt="Cone Knot 3D"
                  className="size-96 max-w-none rotate-12"
                  ref={coneRef}
                  style={{
                    translateY: coneTranslate,
                    rotate: coneRotate,
                  }}
                />
                <motion.img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere 3D"
                  className="absolute top-3/4 -z-10"
                  ref={secondHemisphereRef}
                  style={{
                    translateY: secondHemisphereTranslate,
                    rotate: secondHemisphereRotate,
                  }}
                />
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Blockforce leads the way.
              </h2>
              <div className="flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6">
                <p>
                  Blockforce is a leading blockchain technology company that is
                  committed to providing innovative solutions to the blockchain
                  industry.
                </p>
                <p>
                  Blockforce champions the blockchain industry with its
                  cutting-edge solutions and innovative approach to blockchain
                  technology. Blockforce is a leading blockchain technology
                  company that is committed to providing innovative solutions to
                  the blockchain industry.
                </p>
              </div>
              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
