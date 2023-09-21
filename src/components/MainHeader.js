import { useMemo } from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MainHeader = ({
  propCursor,
  propCursor1,
  propCursor2,
  propCursor3,
  propCursor4,
  propCursor5,
  onLogoFramContainerClick,
  onLogoImageClick,
  onContactContainerClick,
  onContactContainer1Click,
  onProductsTextClick,
  onSingoutClick,
  onIconUserClick,
  onCa2ImageClick,
}) => {
  const logoFramStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const logoIconStyle = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  const contactStyle = useMemo(() => {
    return {
      cursor: propCursor2,
    };
  }, [propCursor2]);

  const contact1Style = useMemo(() => {
    return {
      cursor: propCursor3,
    };
  }, [propCursor3]);

  const productsStyle = useMemo(() => {
    return {
      cursor: propCursor4,
    };
  }, [propCursor4]);

  const ca2IconStyle = useMemo(() => {
    return {
      cursor: propCursor5,
    };
  }, [propCursor5]);

  return (
    <div className="absolute top-[0px] left-[0px] bg-gray-4200 w-[1518px] h-20 text-left text-16xl text-dwhite font-popins">
      <div
        className="absolute top-[calc(50%_-_41px)] left-[calc(50%_-_720px)] w-[248px] h-[73px] flex flex-row pt-[7px] px-0 pb-[3px] box-border items-center justify-between"
        style={logoFramStyle}
        onClick={onLogoFramContainerClick}
      >
        <img
          className="relative -left-10 w-[246.5px] h-[82px] object-cover cursor-pointer"
          alt=""
          src="/logo1@2x.png"
          onClick={onLogoImageClick}
          style={logoIconStyle}
        />
      </div>
      <div
        className="absolute w-[calc(100%_-_1274px)] top-[24px] right-[666px] left-[608px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start"
        style={contactStyle}
        onClick={onContactContainerClick}
      >
        <div className="relative leading-[24px] text-black font-medium">Payments</div>
      </div>
      <div
        className="absolute w-[calc(100%_-_1325px)] top-[26px] right-[444.5px] left-[880.5px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start cursor-pointer"
        onClick={onContactContainer1Click}
        style={contact1Style}
      >
        <div className="relative leading-[24px] text-black font-medium">Orders</div>
      </div>
      <div
        className="absolute top-[24px] left-[355px] leading-[24px] text-black font-medium flex items-center w-40 h-7 cursor-pointer"
        onClick={onProductsTextClick}
        style={productsStyle}
      >
        Products
      </div>
      <img
        className="absolute top-[20px] left-[1274px] w-[50x] h-[37px] object-cover cursor-pointer"
        alt=""
        src="/carti.png"
        onClick={onCa2ImageClick}
        style={ca2IconStyle}
      />
      {/* <img
        className="absolute h-[78.75%] w-[4.93%] top-[11.25%] right-[1.74%] bottom-[10%] left-[93.33%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/-icon-user.svg"
        onClick={onIconUserClick}
      /> */}
               <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="absolute h-[78.75%] w-[4.93%] top-6 right-[1.74%] bottom-[10%] left-[93.33%] max-w-full  flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="absolute -top-3 h-15 w-12 rounded-full"
                        src="/profile.png"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-black')} onClick={onIconUserClick}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-black')} onClick={onSingoutClick}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
      
    </div>
  );
};

export default MainHeader;
