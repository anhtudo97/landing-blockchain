import { useEffect, useState } from 'react';
import CutCornerButton from '../components/CutCornerButton';
import Hexagon from '../components/Hexagon';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Careers',
    href: '/careers',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleBar = () => {
    console.log('run');
    setIsOpen((pre) => !pre);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-zinc-900/50 backdrop-blur-lg">
        <div className="container">
          <div className="flex justify-between items-center h-24 md:h-28">
            <div>
              <img src="/assets/images/logo.svg" alt="Block logo" />
            </div>
            <div className="flex gap-4 items-center">
              <CutCornerButton className="hidden md:inline-flex">
                Get Started
              </CutCornerButton>
              <div className="size-10 relative" onClick={handleToggleBar}>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      'w-5 h-0.5 bg-zinc-300 -translate-y-1 transition-all duration-500',
                      isOpen && 'translate-y-0 rotate-45',
                    )}
                  ></div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      'w-5 h-0.5 bg-zinc-300 translate-y-1 transition-all duration-500',
                      isOpen && 'translate-y-0 -rotate-45',
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="fixed size-full top-0 left-0 z-30 bg-zinc-900"
          >
            <div className="absolute inset-2 rounded-md bg-zinc-800 mt-24 md:mt-28 z-0">
              <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                <Hexagon size={700} />
              </div>
              <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                <Hexagon size={1100} />
              </div>
              <div className="h-full flex justify-center items-center">
                <nav className="flex flex-col items-center gap-12 md:gap-16">
                  {navLinks.map(({ href, title }, index) => {
                    return (
                      <motion.a
                        key={`${index}-${title}`}
                        href={href}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: 'linear',
                          delay: 0.15 * index,
                        }}
                      >
                        <span className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-zinc-500 hover:text-zinc-300 transition duration-300">
                          {title}
                        </span>
                      </motion.a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderSection;
