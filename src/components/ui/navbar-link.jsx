/* eslint-disable no-mixed-operators */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useToasts } from 'react-toast-notifications';
import { logout } from '../../utils/helper';

function NavbarLink({ text, link, callback, dispatch, didLogin, isProfile }) {
  const router = useRouter();
  const { addToast } = useToasts();

  // Styling purposes
  const actions = text === 'Logout' ? () => logout(dispatch, router, addToast) : () => callback(false);
  const loginStyle = text === 'Login' && didLogin ? 'hidden' : text === 'Login' && 'md:hidden';
  const profileStyle = isProfile ? ' md:hidden' : ' ';
  const adminLevel = didLogin === 'admin' && text === 'My Cart';
  const specialStyle = (!didLogin && isProfile || adminLevel ? 'hidden' : 'block') + profileStyle;
  const isCurrentPage = link === router.pathname;
  const defaultLink = `${loginStyle} ${specialStyle} after:border-0 md:after:border-b-2 md:p-0 text-white text-lg md:text-base lg:text-xl list`;
  const listStyle = `${isCurrentPage && 'bg-[#302E2C] md:bg-transparent'}`;
  const defaultList = `${listStyle} ${specialStyle} ${loginStyle} relative cursor-default pr-3 py-1.5 md:p-0 rounded-lg mx-6 md:mx-0 md:rounded-none`;

  return (
    <li className={defaultList} key={text}>
      <Link href={link} passHref>
        <a
          className={`${isCurrentPage && 'list-style'} ${defaultLink}`}
          onClick={actions}
          role="button"
          tabIndex="0"
        >
          {text}
        </a>
      </Link>
    </li>
  );
}

export default NavbarLink;
