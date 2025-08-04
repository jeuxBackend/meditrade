import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SplashImage from "./Assets/SplashImage.png";

const Websplash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex justify-center items-center mx-5 h-screen bg-white" >
      <img src={SplashImage} alt="Splash" className="w-100" />
    </motion.div>
  );
};

export default Websplash;
