import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: 'The user experience is top notch. I love the app.',
    author: 'John Doe',
    title: 'CEO',
    avatar: '/assets/images/avatar-erica-wyatt.jpg',
  },
  {
    text: 'Our product is amazing so happy to use it.',
    author: 'Noel Smith',
    title: 'Product Manager - BlockLink',
    avatar: '/assets/images/avatar-noel-baldwin.jpg',
  },
  {
    text: 'The user experience is top notch. I love the app.',
    author: 'Kai Wang',
    title: 'Lead Developer - BlockLink',
    avatar: '/assets/images/avatar-harry-bender.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimonials.map(({ author, avatar, text, title }, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className={twMerge(index === 2 && 'md:hidden lg:block')}
            >
              <p className="font-heading text-3xl lg:text-4xl font-black">
                &ldquo;{text}&ldquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div>
                    <div
                      className="size-16 bg-zinc-700 rounded-full bg-cover"
                      style={{
                        backgroundImage: `url(${avatar})`,
                      }}
                    ></div>
                  </div>
                  <div>
                    <div className="text-lg not-italic font-black">
                      {author}
                    </div>
                    <div className="text-zinc-400 not-italic">{title}</div>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
