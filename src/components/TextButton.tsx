import { type ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

const TextButton = ({
  color,
  className,
  children
}: ComponentPropsWithoutRef<'button'> & { color?: string }) => {
  return (
    <button
      className={twMerge(
        'inline-flex items-center gap-2 text-lg font-semibold text-zinc-500 group-hover:text-zinc-300 transition duration-300',
        color === 'lime' && 'text-lime-500 group-hover:text-lime-300',
        color === 'cyan' && 'text-cyan-500 group-hover:text-cyan-300',
        color === 'violet' && 'text-violet-500 group-hover:text-violet-300',
        className
      )}
    >
      {children}
    </button>
  );
};

export default TextButton;
