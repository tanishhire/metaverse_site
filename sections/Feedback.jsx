'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion';
// import { NewFeatures, TitleText, TypingText } from '../components';
// import { newFeatures } from '../constants';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 `}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[360px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">Samantha</h4>
          <p className="mt-4 font-normal text-[12px] sm:text-[16px] sm:leading-[22px] leading[16px] text-white">Founder | Metaversus</p>
        </div>
        <p className="mt-8 font-normal text-[12px] sm:text-[16px] sm:leading-[45px] leading[39px] text-white">
          “With the development of today's technology, metaverse is
          very useful for today's work,
          or can be called web 3.0. by using metaverse you can use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <img className="w-full object-cover rounded-[32px] lg:h-[610px] min-h-[210px] shadow" src="/planet-09.png" alt="planet-09" />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="hidden lg:block absolute -left-[10%] top-[3%]"
        >
          <img className="hover:animate-spin animate-pulse cursor-pointer w-[155px] h-[155px]" src="/stamp.png" alt="stamp" />

        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
