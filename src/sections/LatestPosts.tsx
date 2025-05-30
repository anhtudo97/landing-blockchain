import type { CollectionEntry } from 'astro:content';
import Card from '../components/Card';
import { useRef, type ComponentPropsWithoutRef } from 'react';
import { getPostColorFromCategory } from '../utils';
import Tag from '../components/Tag';
import CutCornerButton from '../components/CutCornerButton';
import { twMerge } from 'tailwind-merge';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

type LatestPostsProps = {
  latestPosts: CollectionEntry<'blog'>[];
};

const LatestPosts = ({
  latestPosts,
}: ComponentPropsWithoutRef<'section'> & LatestPostsProps) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start center'],
  });

  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);

  return (
    <section className="py-60">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Your portal to everything blockchain
          </h2>
          <p className="text-xl lg:text-2xl text-center text-zinc-400 mt-8">
            Keep up to date with the latest news, articles, and resources on
            blockchain technology.
          </p>
        </div>
        <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            {latestPosts.map(({ data, id }, i) => {
              const { category, description, title } = data;
              return (
                <Card
                  key={i}
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  className={twMerge((i === 1 || i === 3) && 'md:hidden')}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>

                  <h3 className="font-heading font-black text-3xl mt-4">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-6">{description}</p>
                </Card>
              );
            })}
          </div>
          <motion.div
            className="hidden md:flex flex-col gap-8 mt-16"
            style={{
              marginTop,
            }}
            ref={targetRef}
          >
            {latestPosts.map(({ data, id }, i) => {
              const { category, description, title } = data;
              return (
                <Card
                  key={i}
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  className={twMerge((i === 0 || i === 2) && 'md:hidden')}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>

                  <h3 className="font-heading font-black text-3xl mt-4">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-6">{description}</p>
                </Card>
              );
            })}
          </motion.div>
        </div>
        <div className="flex items-center justify-center mt-48 md:mt-32">
          <CutCornerButton>Read the blog</CutCornerButton>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
