import React, { type ComponentPropsWithoutRef } from 'react';
import TextButton from './TextButton';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  description?: string;
  color?: string;
  buttonText?: string;
}

const Card = ({
  color,
  description,
  children,
  className,
  buttonText
}: ComponentPropsWithoutRef<'div'> & CardProps) => {
  return (
    <div className={twMerge('relative z-0 p-8 md:p-10 group', className)}>
      <div
        className={twMerge(
          'absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300',
          color === 'lime' && 'bg-lime-500',
          color === 'cyan' && 'bg-cyan-500',
          color === 'violet' && 'bg-violet-500',
        )}
      ></div>
      <div
        className={twMerge(
          'absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 group-hover:bg-fuchsia-400 transition duration-300',
          color === 'lime' && 'bg-lime-500 group-hover:bg-lime-400',
          color === 'cyan' && 'bg-cyan-500 group-hover:bg-cyan-400',
          color === 'violet' && 'bg-violet-500 group-hover:bg-violet-400',
        )}
      ></div>
      <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
      {children}
      {/* <div className="flex justify-center -mt-28">
        <div className="relative inline-flex">
          <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30 transition duration-300"></div>
          <img
            src={image}
            className="size-40 group-hover:-translate-y-6 duration-300"
          />
        </div>
      </div> */}
      {/* <h3 className="font-heading font-black text-3xl mt-12">{title}</h3> */}
      <p className="text-lg text-zinc-400 mt-4">{description}</p>
      <div className="flex justify-between mt-12">
        <TextButton color={color}>{buttonText || "Learn More"}</TextButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Card;
