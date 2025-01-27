import React, { useRef, useState } from 'react';
import Image from 'next/image';
// import heroImg from '@/public/homepageRedesign/overlay.png';
import heroImg from '@/public/homepageRedesign/homepage-bg.png';
import heroImgMob from '@/public/homepageRedesign/homepage-bg-mob.png';
import mobileImg from '@/public/homepageRedesign/guide.png';
import pattern from '@/public/homepageRedesign/pattern.svg';
import heroBg from '@/public/homepageRedesign/hero-image.png';
import playIcon from '@/public/homepageRedesign/how-it-works-icon.svg';
import checkmark from '@/public/homepageRedesign/checkmark.svg';
import Link from 'next/link';
import '@/styles/heroSection.css';
import { useIsUserLoggedIn } from '@/utils/useIsLoggedIn';
import log from '@/utils/log-browser';
import { HP_HOW_IT_WORKS } from '@/constants/browserTracking';

const HeroSection = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const isLoggedIn = useIsUserLoggedIn();

  const handleOpenModal = () => {
    log.track(HP_HOW_IT_WORKS);
    setModalOpen(true);
  };

  return (
    <>
      <div>
        <div className="lg:h-screen bg-[#DFE8FB] py-0 md:py-8">
          <div className="max-content">
            {/* <div className="lg:pl-5"></div> */}
            <div className="hero-container  md:mt-0 flex lg:flex-row flex-col items-center lg:justify-between lg:px-[60px] px-[22px] pt-[50px] pb-10 lg:pb-0 lg:pt-0">
              <div className="flex flex-col items-start md:items-center lg:items-start justify-center md:mt-16 lg:mt-0 w-full md:w-[600px]">
                <ul className="space-y-8 ">
                  <li className="space-y-4">
                    <span className="px-4 py-2 rounded-0 bg-[#FFBB0B]">1</span>
                    <h1 className="text-[#OD1342] font-sans text-[20px] font-normal leading-[20px] text-left decoration-skip-ink decoration-skip-from-font">
                      Enter your property details
                    </h1>
                    <p className="w-[75%] text-[#OD1342] font-sans text-[12px] font-light leading-[24px] text-left decoration-skip-ink decoration-skip-from-font">
                      Start by providing Theah with some photos and any key
                      features you would like to include in your property
                      listing description. We accept property photos taken on
                      your mobile, ensuring there is no waiting around for
                      professional photographs before having your listing
                      description ready.
                    </p>
                  </li>
                  <li className="space-y-4">
                    <span className="px-4 py-2 text-white rounded-0 bg-[#085CF0]">
                      2
                    </span>
                    <h1 className="text-[#OD1342] font-sans text-[20px] font-normal leading-[20px] text-left decoration-skip-ink decoration-skip-from-font">
                      Review the property features list
                    </h1>
                    <p className="w-[75%] text-[#OD1342] font-sans text-[12px] font-light leading-[24px] text-left decoration-skip-ink decoration-skip-from-font">
                      Our AI analyses your property address and photos before
                      generating a preliminary list of stand out features for
                      your review. You then add, remove, or edit these features
                      before proceeding to the description creation stage.
                    </p>
                  </li>
                  <li className="space-y-4">
                    <span className="px-4 py-2 text-white rounded-0 bg-[#0D1342]">
                      3
                    </span>
                    <h1 className="text-[#OD1342] font-sans text-[20px] font-normal leading-[20px] text-left decoration-skip-ink decoration-skip-from-font">
                      Receive your listing description
                    </h1>
                    <p className="w-[75%] text-[#OD1342] font-sans text-[12px] font-light leading-[24px] text-left decoration-skip-ink decoration-skip-from-font">
                      Once you press submit, your description is created in
                      seconds. You can then make any final adjustments before
                      sending it directly to your inbox. Have a fully
                      personalised property listing description ready to go
                      before you even leave the property.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-4 flex items-center  justify-center w-[80%] md:w-1/2  ">
                <Image
                  src={mobileImg}
                  alt=""
                  layout="responsive"
                  width={100}
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

export default HeroSection;
