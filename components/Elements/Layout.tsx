import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import menuIcon from '@/public/newDesign/menu-hamburger.svg';
import closeIcon from '@/public/newDesign/Close-x.svg';
import creditBar from '../../public/newDesign/credit-bar.svg';
import logout from '../../public/newDesign/logout-icon.svg';
import logo from '../../public/newDesign/logo-slidebar.svg';
import Image from 'next/image';
import PannelSetting from '../ProfileSettings/sub/PannelSetting';
import Button from './Button';
import Link from 'next/link';
import theahWhite from '@/public/theah-white.svg';
import { AppContext } from '@/utils/context';
import ContactUs from '../ContactUs/Form';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { remove } from '@/utils/storage';
import log from '@/utils/log-browser';
import {
  CD_CREATE_DESCRIPTION_CLICKED,
  SB_CONTACT_SALES_CLICKED,
  SB_LOGOUT_CLICKED,
  SB_UPGRADE_TO_FULL_ACCESS_CLICKED,
} from '@/constants/browserTracking';

interface IProps {
  children: React.ReactElement;
  style?: string;
  heroStyle?: React.CSSProperties;
}

const paths = ['/profile-settings', '/profile', '/faq'];

function Layout({ children, style, heroStyle }: IProps) {
  const {
    context: { user },
  } = useContext(AppContext);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef() as any;
  const createRef = useRef() as any;
  const [showContactForm, setShowContactForm] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  const pathIndex = useMemo(() => {
    const ind = paths.findIndex((e) => e == pathname);
    if (ind < 0) return 0;
    return ind;
  }, [pathname]);

  useEffect(() => {
    setActiveIndex(pathIndex);
  }, [pathIndex]);

  const totalCount = useMemo(() => {
    return 1;
  }, []);

  const handleClick = (i: number) => {
    setActiveIndex(i);
  };

  const handleCreateNewDescriptoin = () => {
    log.track(CD_CREATE_DESCRIPTION_CLICKED)
    router.push('/app');
  };

  const handleUpgradeClick = () => {
    log.track(SB_UPGRADE_TO_FULL_ACCESS_CLICKED);
    router.push('/app?page=upgrade');
  };

  const handlecContactSales = () => {
    log.track(SB_CONTACT_SALES_CLICKED);
    setShowContactForm(true);
  };


  useEffect(() => {
    createRef?.current?.classList?.add('create-button-open');
    setTimeout(() => {
      createRef?.current?.classList?.remove('create-button-open');
    }, 5000);
  }, [createRef]);

  useEffect(() => {
    if (isSidebarOpened) {
      setTimeout(() => {
        ref?.current?.classList?.add('translate-x-0');
      }, 50);
    }
  }, [isSidebarOpened]);

  const hide = () => {
    ref?.current?.classList?.remove('translate-x-0');
    setTimeout(() => {
      setIsSidebarOpened(false);
    }, 400);
  };

  return (
    <>
      <div className="md:grid md:grid-cols-[246px_1fr]">
        <div
          className={`${
            isSidebarOpened ? 'flex justify-between' : 'hidden'
          } z-50 md:block w-full bg-[#0D1342] bg-opacity-30 fixed md:relative top-0 left-0 overflow-auto h-[100dvh] md:h-screen`}
        >
          <div
            className="bg-app-dark w-3/4 h-full md:w-full transition-transform duration-500 transform -translate-x-full md:-translate-x-0 overflow-auto"
            ref={ref}
          >
            {/*Do changes here*/}
            <div className="p-10">
              <Link href={'/'}>
                <Image src={logo} alt="mainLogo" />
              </Link>
            </div>
            <div className="flex flex-col justify-between w-full gap-32">
              <PannelSetting activeIndex={activeIndex} onClick={handleClick} />
              <div className="flex flex-col gap-16 absolute bottom-8 w-full">
                <div className="bg-[#1E2566] p-3 mx-4">
                  <h3 className="text-[#FFFFFF] text-sm font-medium mb-6">
                    {user?.subscription?.status === 'NULL'
                      ? 'Free Trial'
                      : user?.subscription?.status === 'EXPIRED'
                      ? 'Subscription Expired'
                      : user?.subscription?.status === 'ACTIVE'
                      ? 'Subscription Active'
                      : user?.subscription?.status === 'CANCELED'
                      ? 'Subscription Canceled'
                      : ''}
                  </h3>
                  <div className="w-full h-2 bg-[#0D1342] overflow-hidden">
                    <div
                      className={`h-full bg-[#FFBB0B]`}
                      style={{
                        width:
                          ((user?.requestCount || 0) / totalCount) * 100 + '%',
                      }}
                    />
                  </div>
                  <p className="text-white text-xs mt-[10px] mb-6">
                    {user?.requestCount || 0} Credit
                    {user?.requestCount === 1 ? '' : 's'} Available
                  </p>
                  <div className="flex flex-col gap-3">
                    {user?.id ? (
                      user?.subscription?.status === 'ACTIVE' ? null : (
                        <Link href={'/app?page=upgrade'}>
                          <Button
                            text="Upgrade to Full Access"
                            style={{
                              padding: '10px',
                              fontSize: '13px',
                              fontWeight: '400',
                            }}
                            onClick={handleUpgradeClick}
                          />
                        </Link>
                      )
                    ) : null}
                    <Button
                      text="Contact Sales"
                      style={{
                        padding: '10px',
                        fontSize: '13px',
                        fontWeight: '400',
                        backgroundColor: 'transparent',
                        border: '1px solid #FFBB0B',
                      }}
                      onClick={handlecContactSales}
                    />
                  </div>
                </div>
                <span
                  onClick={() => {
                    log.track(SB_LOGOUT_CLICKED);
                    Cookies.remove('token');
                    remove('user');
                    window.location.href = '/login';
                  }}
                  className="cursor-pointer"
                >
                  <div className="flex gap-3 px-6">
                    <Image src={logout} alt="" />
                    <p className="text-[#B7C7E0] text-[13px] font-normal ">
                      Logout
                    </p>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <span className="md:hidden">
            <span className="mx-4 my-8 p-4" onClick={hide}>
              <Image src={closeIcon} alt="" />
            </span>
          </span>
        </div>
        <div className="max-h-screen overflow-auto relative">
          <div
            className={
              'bg-app-dark md:hidden min-h-[64px] flex justify-between items-center p-4 w-full ' +
              (isSidebarOpened ? 'opacity-0' : 'fixed mb-5 z-50')
            }
          >
            <Link href="/">
              <Image src={logo} alt="mainLogo" />
            </Link>
            <span onClick={() => setIsSidebarOpened(true)}>
              <Image src={menuIcon} alt="menu" />
            </span>
          </div>
          <div
            className={style + ' mt-20 md:mt-16 px-8 mb-28'}
            style={heroStyle}
          >
            <div className="max-w-[1200px] mx-auto">{children}</div>
          </div>
          <div className="fixed bottom-6 w-[324px] flex justify-center items-center left-[calc(50vw_-_162px)] md:left-[calc(50vw_-_40px)]">
            <div
              ref={createRef}
              className="overflow-hidden rounded-full h-16 w-16 transition-width duration-500 hover:w-[324px] flex justify-center items-center border-[6px] border-color-[#085CF0] border-opacity-10 bg-opacity-10"
            >
              <div
                className="cursor-pointer bg-[#085CF0] flex gap-6 justify-between p-4 overflow-hidden w-[324px]"
                onClick={() => handleCreateNewDescriptoin()}
              >
                <Image src={theahWhite} alt="" />
                <span className="whitespace-nowrap block w-[250px] text-sm text-white font-medium">
                  Create New Property Description
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showContactForm && (
        <ContactUs onClose={() => setShowContactForm(false)} />
      )}
    </>
  );
}

export default Layout;
