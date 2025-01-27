import React, { useRef, useState } from 'react';
import Image from 'next/image';
// import heroImg from '@/public/homepageRedesign/overlay.png';
import partnership from '@/public/homepageRedesign/partner.png';
import pattern from '@/public/homepageRedesign/pattern.svg';
import '@/styles/heroSection.css';
import { useIsUserLoggedIn } from '@/utils/useIsLoggedIn';
import log from '@/utils/log-browser';
import { HP_HOW_IT_WORKS } from '@/constants/browserTracking';

const Partnerships = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const isLoggedIn = useIsUserLoggedIn();

  const handleOpenModal = () => {
    log.track(HP_HOW_IT_WORKS);
    setModalOpen(true);
  };

  return (
    <>
      <div>
        <div className="lg:max-h-[490px] overflow-hidden bg-[#BFD7FF] relative">
          <div className="">
            <div className="hero-container md:mt-0 flex lg:flex-row flex-col items-center lg:justify-between lg:px-[60px] px-[22px] pb-10 lg:pb-0 lg:pt-0">
              <div className="flex flex-col items-start md:items-center lg:items-start justify-center lg:h-[80vh] lg:mt-0 w-[460px]">
                <h1 className="text-[#0D1342] font-inter text-[24px] font-normal leading-[60px] text-left decoration-skip-ink-none">
                  Integrations and Partnerships
                </h1>
                <p className="font-inter text-[14px] font-normal leading-[24px] text-left decoration-skip-ink-none">
                  Wish you could integrate Theah into your existing property
                  listing CRM or software? We fully support all types of
                  integrations. Please contact us to discuss how we can make
                  Theah part of your existing processes, or to simply to have a
                  chat on how we can improve your day-to-day operations as a
                  whole using the power of AI and automation.
                </p>
              </div>
              <div className="hero-image w-full md:w-1/2 max-h-[500px] overflow-hidden">
                <Image
                  src={partnership}
                  alt=""
                  layout="responsive"
                  width={300}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partnerships;
