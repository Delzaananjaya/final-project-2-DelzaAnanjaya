import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu, GiShoppingCart } from 'react-icons/gi';
import { Button, NavbarLink } from '../ui';
import { navbarLinks, profileLinks } from '../../utils/constant';
import { useProductContext } from '../../context/product-context';
import { Notification, Profile } from '../login';
import { getUserFromLocalStorage, totalCarts } from '../../utils/helper';
import { POST_LOGIN } from '../../reducers/actions';

function Navbar() {
  const { state, dispatch } = useProductContext();
  const [navbar, setNavbar] = useState(false);

  const isAdmin = state?.user?.level === 'admin';
  const isNavbarOpen = navbar
    ? 'flex flex-col absolute right-0 space-y-2 py-2 top-14 bg-dark w-full md:w-auto !text-right'
    : 'hidden md:flex';

  const navbarTogglers = () => setNavbar((nav) => !nav);
  const NavbarLinks = navbarLinks.map((link) => (
    <NavbarLink {...link} key={link.text} callback={setNavbar} />
  ));
  const AdminLinks = NavbarLinks.filter(({ key }) => key === 'History' || key === 'Home');

  useEffect(
    () => dispatch({ type: POST_LOGIN, payload: getUserFromLocalStorage() }),
    [dispatch],
  );

  return (
    <nav className="relative flex items-center justify-between px-8 shadow-md bg-black md:py-0 lg:py-5 lg:px-16">
      <Link href="/" passHref>
        <a className="relative ml-5 scale-125 top-2 md:ml-0 lg:scale-[1.75] lg:top-0 z-50" role="button">
          <h4 className="text-2xl text-blue-500 font-bold leading-2 uppercase md:text-2xl">
            TOKO BIRU
          </h4>
        </a>
      </Link>
      <ul className={`${isNavbarOpen} z-10 text-center md:static md:flex-row md:items-center md:space-y-0 md:space-x-9 lg:space-x-28`}>
        {isAdmin
          ? AdminLinks
          : NavbarLinks.filter(({ key }) => key !== 'History')}
        {profileLinks.map((link) => (
          <NavbarLink
            {...link}
            key={link.text}
            callback={setNavbar}
            dispatch={dispatch}
            didLogin={state?.user?.level}
            isProfile
          />
        ))}
      </ul>
      <div className="flex items-center bg-black">
        <Button className="md:hidden" eventHandler={navbarTogglers}>
          <GiHamburgerMenu className="text-4xl text-white md:hidden" />
        </Button>
        {state?.user?.token ? (
          <>
            <Profile username={state?.user?.username} />
            {!isAdmin && (
              <Button className="relative hidden ml-0 md:ml-5 md:block" to="checkout">
                <Notification total={totalCarts(state?.carts)} dispatch={dispatch} />
                <GiShoppingCart className="hidden text-4xl text-white md:block" />
              </Button>
            )}
          </>
        ) : (
          <Button
            className="hidden md:block py-0.5 font-semibold ml-8 text-white min-h-[15px] min-w-[15px] text-lg border-2 border-white bg-black lg:py-1 px-6 lg:text-xl duration-300 ease-in-out hover:bg-white hover:text-dark"
            text="Login"
            to="login"
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
