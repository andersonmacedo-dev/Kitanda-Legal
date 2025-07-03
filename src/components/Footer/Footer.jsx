import React from "react";
import { FaInstagram, FaXTwitter, FaFacebookF, FaLeaf } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12 mt-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex justify-between items-center"
      >
        {/*logo section*/}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-primary">Kitanda</p>
          <p className="text-secondary">Legal</p>
          <FaLeaf className="text-green-500" />
        </div>
        {/*social icons section*/}
        <div className="text-3xl flex items-center gap-4 mt-6 text-gray-700">
          <FaInstagram />
          <FaXTwitter />
          <FaFacebookF />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
