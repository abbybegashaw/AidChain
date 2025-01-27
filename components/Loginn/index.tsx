'use client';
import React from 'react';
import LoginContainer from './sub/LoginContainer';
import Image from 'next/image';
import formImg from '@/public/newDesign/form-image.png';
import usePageLoaded from '@/utils/usePageLoaded';
import { LI_LOGIN_PAGE_OPENED } from '@/constants/browserTracking';

const Login = () => {
  usePageLoaded(LI_LOGIN_PAGE_OPENED);

  return (
    <div className="flex justify-between h-screen !relative">
      <LoginContainer />
      <div
        className="bg-cover bg-center w-full hidden md:block"
        style={{ backgroundImage: `url(${formImg.src})` }}
      />
    </div>
  );
};

export default Login;
