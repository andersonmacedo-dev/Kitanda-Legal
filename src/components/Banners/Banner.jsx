import React from "react";
import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/animation";

const Banner = () => {
  return (
    <section className="bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/*Banner Image*/}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerPng}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
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
              Sobre Nós
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Somos apaixonados por oferecer frutas frescas e de qualidade, com
              um compromisso real com a saúde e o bem-estar dos nossos clientes.
              Cada detalhe é pensado para garantir uma experiência leve, prática
              e saborosa em cada compra.
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Nosso propósito é conectar você à natureza de forma simples,
              valorizando produtos frescos, locais e sustentáveis. Com confiança
              e carinho, entregamos mais do que frutas — entregamos cuidado.
            </motion.p>
            {/*Button section*/}
            <motion.div
              variants={FadeUp(1.1)}
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

export default Banner;
