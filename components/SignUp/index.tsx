'use client';
import React, { useContext, useMemo } from 'react';
import formImg from '@/public/newDesign/form-image.png';
import SignUpContainer from './sub/SignUpContainer';
import Image from 'next/image';
import usePageLoaded from '@/utils/usePageLoaded';
import { SU_SIGNUP_PAGE_OPENED } from '@/constants/browserTracking';

const SignUp = () => {
  usePageLoaded(SU_SIGNUP_PAGE_OPENED);

  return (
    <div className="">
      <SignUpContainer />
      
    </div>
  );
};

export default SignUp;
