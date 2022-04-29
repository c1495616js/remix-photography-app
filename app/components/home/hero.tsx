import React from 'react';
import Carousel from 'react-multi-carousel';

import Hero1 from '~/assets/hero-1.jpeg';
import Hero2 from '~/assets/hero-2.jpeg';
import Hero3 from '~/assets/hero-3.jpeg';

const data = [
  { path: Hero1, title: 'Getaway', subTitle: 'We love traveling' },
  { path: Hero2, title: 'Getaway', subTitle: 'We love traveling' },
  { path: Hero3, title: 'Getaway', subTitle: 'We love traveling' },
];

type Props = typeof data[number];
const Item = ({ path, title, subTitle }: Props) => (
  <div className="relative flex flex-col items-center justify-center w-screen h-screen">
    <img
      src={path}
      alt="bg"
      className="object-cover absolute inset-0 w-full h-screen"
    />
    <p className="z-10 text-white text-2xl font-RadioCanada">{title}</p>
    <p className="z-10 text-white text-4xl font-RadioCanada">{subTitle}</p>
  </div>
);

const Hero = () => {
  const responsive = {
    mobile: {
      breakpoint: { max: 9999999, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <section className="w-full">
      <Carousel responsive={responsive} ssr infinite autoPlay={false}>
        {data.map((d) => (
          <Item {...d} key={d.path} />
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;
