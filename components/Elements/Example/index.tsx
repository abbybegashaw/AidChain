import Image from 'next/image';
import React from 'react';
import whyPartner from '@/public/homepageRedesign/whtyPartner/why-partner-bg.png';
import example from '@/public/homepageRedesign/example.png';
import diamondArrow from '@/public/homepageRedesign/diamond-arrow.png';
import pattern from '@/public/homepageRedesign/pattern.svg';

const Example = () => {
  return (
    <>
      <div
        id="why-theah"
        className="lg:bg-cover lg:bg-center md:block lg:min-[950px] lg:p-[60px] md:p-10 px-0 md:px-[22px] py-10 lg:max-h-[950px] relative"
        style={{ backgroundImage: `url(${whyPartner.src})` }}
      >
        <div className="max-content">
          <h2 className="text-white lg:text-[42px] text-[28px] px-[22px] mb-4">
            Theah Example
          </h2>
          <div className="flex flex-col md:flex-row px-0 md:px-28">
            <div className="flex flex-1 flex-row px-[22px]">
              <div className="flex flex-col  space-y-10 mt-32">
                <button className="bg-[#085CF0] text-white rounded-full px-4 py-2 font-medium text-base leading-[20px]">
                  Enter Address
                </button>
                <button className="bg-[#085CF0] text-white rounded-full px-4 py-2 font-medium text-base leading-[20px]">
                  Upload Photos
                </button>
                <button className="bg-[#085CF0] text-white rounded-full px-4 py-2 font-medium text-base leading-[20px]">
                  Upload Floorplan
                </button>
                <button className="bg-[#085CF0] text-white rounded-full px-4 py-2 font-medium text-base leading-[20px]">
                  Add Features
                </button>
              </div>
              <div>
                <Image
                  src={example.src}
                  alt="ex"
                  width={500}
                  height={500}
                  className="h-[560px] w-[250px]"
                />
              </div>
            </div>

            <div className="w-[60%] md:w-[460px] space-y-8 bg-[#BFD7FF4D] px-6 py-4 relative mt-8 md:mt-0">
              <h1 className="text-white font-bold text-base leading-6 text-left">
                30 Woodcroft Avenue, Broomhill, Glasgow, G11 7HY
              </h1>

              {[
                'Stunning two-bedroom flat situated within a traditional red sandstone building in the popular Broomhill district of Glasgow.',
                'Internally, the property offers a spacious lounge with a bay window and an elegant fireplace, a modern kitchen with sleek cabinetry and integrated appliances, two bedrooms with built-in wardrobes, a master en-suite bathroom, and additional cupboard space.',
                'Externally, there is a communal garden space to the rear, bordered by mature trees and greenery. On-street parking is available, and a secure entry system enhances safety.',
                'Located in the vibrant Broomhill area, the property benefits from a variety of local shops and cafes. It is conveniently positioned near Broomhill Primary School and Hyndland Secondary School. Excellent transport links are available with nearby bus stops and Hyndland train station. Victoria Park is within walking distance.',
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-3">
                  <p className="text-white font-light text-[15px] leading-6 text-left">
                    {text}
                  </p>
                  <div className="flex items-center absolute right-0">
                    {' '}
                    {/* Align arrows with the boundary */}
                    <Image
                      src={diamondArrow}
                      width={20}
                      height={20}
                      alt="Arrow Icon"
                      className="w-8 md:w-14 h-2"
                    />
                    <span className="text-white font-medium text-sm ml-2">
                      {index === 0
                        ? 'Professional tone and structure'
                        : index === 1
                        ? 'No ChatGPT exaggeration'
                        : index === 2
                        ? 'Your property features'
                        : 'Local Area Captured'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Image
              src={pattern}
              alt=""
              className="absolute right-10 bottom-10 w-[105px] hidden md:block "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
