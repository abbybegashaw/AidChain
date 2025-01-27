import React, { CSSProperties, useState } from 'react';
import Image from 'next/image';
import logo from '../../public/newDesign/logo-white-text.svg';
import menuIcon from '../../public/newDesign/menu-hamburger.svg';
import closeIcon from '../../public/newDesign/Close-x.svg';
import linkedin from '../../public/newDesign/theahvschatgpt/linkedin.svg';
import twitter from '../../public/newDesign/theahvschatgpt/twitter.svg';
import instagram from '../../public/newDesign/theahvschatgpt/instagram.svg';
import theahImg from '../../public/newDesign/theahvschatgpt/theah-mob.svg';
import Link from 'next/link';
import playIcon from '@/public/homepageRedesign/how-it-works-icon.svg';
import Button from './Button';
import { useIsUserLoggedIn } from '@/utils/useIsLoggedIn';

const NavBar = ({
  style,
  handleOpenModal,
}: {
  style?: CSSProperties;
  handleOpenModal?: () => void;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const isLoggedIn = useIsUserLoggedIn();

  const handleMobileNav = () => {
    setIsMobile(!isMobile);
  };

  const NAVBAR_ITEMS = [
    { item: 'Home', link: '/' },
    // { item: 'Get Started', link: isLoggedIn ? '/profile' : '/register' },
    { item: 'About Us', link: isLoggedIn ? '/about-us' : '/about-us' },
    { item: 'Why Theah', link: '/#why-theah' },
    // { item: 'Theah In Action', link: '/#theah-action' },
    { item: 'Pricing', link: '/#pricing' },
    // { item: 'Theah vs ChatGPT', link: '/theah-vs-chatgpt' },
  ];

  return (
    <div
      className="lg:pl-10 lg:pr-[60px] flex items-center justify-between lg:py-10"
      style={style}
    >
      <Link href={'/'}>
        <Image src={logo} alt="" className="hidden lg:block" />
      </Link>

      <ul className=" hidden lg:flex items-center gap-7">
        {NAVBAR_ITEMS.map(({ item, link }, i) => {
          return (
            <div
              key={i}
              className={`text-sm font-medium hover:text-[#FFBB0B] ${
                link ===
                (typeof window !== 'undefined' && window.location.pathname)
                  ? 'text-[#FFBB0B]'
                  : 'text-white '
              }`}
            >
              <Link href={link}>
                <li className="">{item}</li>
              </Link>
            </div>
          );
        })}
        {/* <div>
          <button
            onClick={handleOpenModal}
            className="bg-[#0D1342] text-white text-sm w-full p-2 flex items-center gap-2 justify-center border border-[#FFFFFF33] hover:bg-[#085CF0]"
          >
            <Image src={playIcon} alt="" />
            How It Works
          </button>
        </div> */}
        {/* {isLoggedIn ? (
          <Link href="/profile">
            <Button text="Dashboard" style={{ padding: '8px 30px' }} />
          </Link>
        ) : (
          <Link href={'/login'}>
            <Button text="Login" style={{ padding: '8px 30px' }} />
          </Link>
        )} */}
      </ul>
      <div
        className="w-full lg:hidden flex flex-col z-50"
        style={isMobile ? { backgroundColor: '#0D1342' } : {}}
      >
        <div className="p-[22px] md:px-10 flex items-center justify-between w-full fixed bg-app-dark">
          <Link href={'/'}>
            <Image src={logo} alt="" />
          </Link>
          <Image
            src={!isMobile ? menuIcon : closeIcon}
            alt=""
            onClick={handleMobileNav}
            className="transition-all lg:hidden cursor-pointer"
          />
        </div>
        {isMobile && (
          <>
            <ul
              className="transition-all duration-300 flex items-start px-[22px] md:px-10 flex-col gap-4 md:gap-5 fixed z-50 bg-[#0D1342] w-full top-[70px] lg:hidden pt-10"
              style={{ height: 'calc(100dvh - 6dvh)' }}
            >
              {NAVBAR_ITEMS.map(({ item, link }, i) => {
                return (
                  <div
                    key={i}
                    className={`text-[22px] z-50 hover:text-[#FFBB0B] active:text-[#FFBB0B] font-medium ${
                      link ===
                      (typeof window !== 'undefined' &&
                        window.location.pathname)
                        ? 'text-[#FFBB0B]'
                        : 'text-white '
                    }`}
                  >
                    <Link href={link}>
                      <li onClick={() => setIsMobile(false)}>{item}</li>
                    </Link>
                  </div>
                );
              })}
              {/* <div className="w-full">
                <button
                  onClick={handleOpenModal}
                  className="bg-[#0D1342] text-white text-sm w-full py-4 flex items-center gap-2 justify-center border border-[#FFFFFF33] hover:bg-[#085CF0]"
                >
                  <Image src={playIcon} alt="" />
                  How It Works
                </button>
              </div> */}

              <div className="flex flex-col md:items-start  items-end gap-3 md:gap-5 w-full md:mt-5">
                <Link
                  target="_blank"
                  href={'https://www.linkedin.com/in/theah-ai'}
                  className="bg-[#0D266D] h-[37px] w-[37px] md:h-[45px] md:w-[45px] border border-[#313A84] rounded-full flex items-center justify-center"
                >
                  <Image src={linkedin} alt="" />
                </Link>
                <Link
                  target="_blank"
                  href={'https://twitter.com/theah_ai'}
                  className="bg-[#0D266D] h-[37px] w-[37px] md:h-[45px] md:w-[45px] border border-[#313A84] rounded-full flex items-center justify-center"
                >
                  <Image src={twitter} alt="" />
                </Link>
                <Link
                  target="_blank"
                  href={'https://www.instagram.com/theah_ai'}
                  className="bg-[#0D266D] h-[37px] w-[37px] md:h-[45px] md:w-[45px] border border-[#313A84] rounded-full flex items-center justify-center"
                >
                  <Image src={instagram} alt="" />
                </Link>
              </div>
              {isLoggedIn ? (
                <Link
                  href={'/profile'}
                  className="absolute bottom-[30px] md:static md:mt-5 w-[calc(100%_-_50px)] md:w-[200px] mb-7"
                >
                  <Button text="Dashboard" />
                </Link>
              ) : (
                <Link
                  href={'/login'}
                  className="absolute bottom-[30px] md:static md:mt-5 w-[calc(100%_-_50px)] md:w-[200px] mb-7"
                >
                  <Button text="Log In" />
                </Link>
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
