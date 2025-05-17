import { twMerge } from 'tailwind-merge';
import TextButton from '../components/TextButton';
import Card from '../components/Card';

const data = [
  {
    image: '/assets/images/pill.png', // Replace with your image path
    title: 'Revolutionary Blockchain API',
    description:
      'Effortlessly integrate with our advanced blockchain API to access real-time data and streamline your application development process.',
    color: 'fuchsia',
  },
  {
    image: '/assets/images/cuboid.png', // Replace with your image path
    title: 'Decentralized Blockchain API',
    description:
      'Empower your blockchain development with our cutting-edge API solution. Seamlessly integrate and harness the power of blockchain technology to build innovative and scalable applications.',
    color: 'lime',
  },
  {
    image: '/assets/images/cone.png', // Replace with your image path
    title: 'Next Generation Blockchain API',
    description:
      'Unlock the potential of blockchain technology with our cutting-edge API solution. Seamlessly integrate and harness the power of blockchain to build innovative and scalable applications.',
    color: 'cyan',
  },
  {
    image: '/assets/images/icosahedron.png', // Replace with your image path
    title: 'Seamless Integration with Blockchain API',
    description:
      'Integrate with our cutting-edge blockchain API to streamline your blockchain development process and unlock the full potential of blockchain technology.',
    color: 'violet',
  },
];

const FeaturesCards = () => {
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl text-center">
          Discover the future of blockchain technology with our cutting-edge
          solutions.
        </h2>

        <div className="mt-36 md:mt-48 flex">
          <div className="flex flex-none gap-8">
            {data.map(({ color, description, image, title }, i) => {
              return (
                <Card
                  key={i}
                  color={color}
                  description={description}
                  className="max-w-sm md:max-w-md group"
                >
                  <div className="flex justify-center -mt-28">
                    <div className="relative inline-flex">
                      <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30 transition duration-300"></div>
                      <img
                        src={image}
                        className="size-40 group-hover:-translate-y-6 duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="font-heading font-black text-3xl mt-12">
                    {title}
                  </h3>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="inline-flex bg-zinc-950 gap-4 p-2.5 rounded-full">
            {data.map(({ title }) => {
              return (
                <div
                  key={title}
                  className="size-2.5 bg-zinc-500 rounded-full cursor-pointer  "
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;
