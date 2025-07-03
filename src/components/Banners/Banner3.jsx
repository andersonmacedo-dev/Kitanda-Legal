import React from "react";
import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const bgStyle = {
  backgroundImage: `url(${BannerPng})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Banner3 = () => {
  return (
    <section className="">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
      >
        {/*Blank div*/}
        <div></div>

        {/*Brand Info*/}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              {" "}
              Receba Frutas Fresquinhas
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Oferecemos frutas frescas e selecionadas com qualidade garantida.
              Experimente o sabor natural que faz bem para você e sua família.
            </motion.p>

            {/*Button section*/}
            <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn ">Saiba Mais</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
