'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-1/2 inset-0 gradient-01" />
    <div className={`${styles.innerWidth} justify-between gap-8 mx-auto flex`}>
      <img className="w-[24px] object-contain h-[24px]" src="/search.svg" alt="search" />
      <h2 className="leadings-[30px] text-white font-extrabold text-[24px]">METAVERSUS</h2>
      <img className="w-[24px] h-[24px] object-contain" src="/menu.svg" alt="menu" />
    </div>
  </motion.nav>
);

export default Navbar;
