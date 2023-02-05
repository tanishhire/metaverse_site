'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'tween', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img className="w-full md:w-[270px] h-[250px] rounded-[32px] object-cover" src={imgUrl} alt={title} />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="cursor-pointer font-bold text-secondary-white text-[26px] lg:text-[48px]">{title}</h4>
        <p className="mt-[16px] lg:text-[20px] text-[14px] text-secondary-white font-normal">{subtitle}</p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent  border-[1px] border-white ">
        <img src="/arrow.svg" alt="arrow" className="w-[40%] object-contain h-[40%]" />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
