import { type ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const Circle = ({ className, children, animate }: ComponentPropsWithoutRef<'div'> & {animate?: boolean}) => {
  return (
    <div
      className={twMerge(
        'bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full',
        'left-[200px] top-[270px] relative',
        className,
      )}
    >
      <motion.div
       className={
        twMerge(
          "absolute inset-0 outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 border-[6px] border-transparent rounded-full",
          animate && "border-t-fuchsia-500/30"
        )
       }
       animate={animate &&{
         rotate: 360, 
       }}
       transition={{
         ease: 'linear',
         repeat: Infinity,
         duration: 15 ,
       }}
       />
      {children}
    </div>
  );
};

export default Circle;
