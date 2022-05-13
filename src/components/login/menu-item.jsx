import { useRouter } from 'next/router';
import { useToasts } from 'react-toast-notifications';
import { useProductContext } from '../../context/product-context';
import { logout } from '../../utils/helper';

function MenuItem() {
  const { state, dispatch } = useProductContext();
  const router = useRouter();
  const { addToast } = useToasts();

  const divStyle = state?.user?.level === 'admin' ? 'origin-top-right right-0' : 'origin-top-left left-0';

  return (
    <div
      className={`${divStyle} hidden absolute  mt-2.5 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none group-focus-within:block`}
      role="menu"
      aria-orientation="vertical"
    >
      <a
        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200"
        role="menuitem"
        onClick={() => logout(dispatch, router, addToast)}
        tabIndex="-1"
      >
        Logout
      </a>
    </div>
  );
}

export default MenuItem;
