import SignUpContainer from '@/components/SignUp/sub/SignUpContainer';
import Image from 'next/image';
import React from 'react';
import heroImg from '../../../public/hero-img.svg';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <Image src={heroImg} alt="" className="hero-bg-img" />
    </div>
  );
};

export default HeroSection;
