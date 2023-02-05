'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';
// import { newFeatures } from '../constants

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col  `}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center" />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative flex w-full h-[550px] mt-[68px]"
      >
        <img src="/map.png" alt="png" className="object-cover w-full h-full" />

        <div className="absolute w-[70px] h-[70px] p-[6px] z-20 bottom-20 right-20 rounded-full bg-[#5d6800]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute w-[70px] h-[70px] p-[6px] z-20 top-10 left-20 rounded-full bg-[#5d6800]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute w-[70px] h-[70px] p-[6px] z-20 top-1/2 left-[45%] rounded-full bg-[#5d6800]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute w-1/2 h-1/2 p-[6px] z-20 top- left-[45%] ">
          <img src="/group-68.png" alt="people" className="w-full h-full object-contain" />
        </div>

        <div className="absolute w-1/2 h-1/2 p-[6px] z-20 top-1/2 left-[15px]">
          <img src="/group-69.png" alt="people" className="w-full h-full object-contain" />
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default World;
