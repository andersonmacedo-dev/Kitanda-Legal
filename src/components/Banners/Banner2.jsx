import React from "react";
import BannerPng from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";
import { IoDownloadOutline } from "react-icons/io5";

const Banner2 = () => {
  return (
    <section className="">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
        {/*Brand Info*/}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              {" "}
              Loja Frutas Online
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Frutas frescas e selecionadas, direto do campo para sua casa com
              praticidade e qualidade garantida. Compre online e receba no
              conforto do seu lar o melhor da natureza, com sabor e frescor em
              cada mordida.
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Frutas selecionadas com carinho, ideais para quem valoriza saúde,
              sabor e praticidade no dia a dia. 
            </motion.p>
            {/*Button section*/}
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2">
                <span>
                  <IoDownloadOutline className="text-xl" />
                </span>
                Download the App
              </button>
            </motion.div>
          </div>
        </div>
        {/*Banner Image*/}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerPng}
            alt=""
            className="w-[360px] md:max-w-[500px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
