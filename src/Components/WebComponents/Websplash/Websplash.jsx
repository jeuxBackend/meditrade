import React, { useEffect } from 'react';
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
    <div className="flex justify-center items-center mx-5 h-screen bg-white">
      <img src={SplashImage} alt="Splash" className="w-100" />
    </div>
  );
};

export default Websplash;
