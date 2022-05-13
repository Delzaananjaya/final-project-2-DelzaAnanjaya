import {
  AiOutlineLoading3Quarters,
  AiOutlineLock,
  AiOutlineUser,
} from 'react-icons/ai';
import { useRouter } from 'next/router';
import { useToasts } from 'react-toast-notifications';
import { useEffect, useState } from 'react';
import { Button } from '../ui';
import { getPreviousPath, getUser } from '../../utils/helper';
import { useProductContext } from '../../context/product-context';
import { POST_LOGIN } from '../../reducers/actions';
import { messageNotifications } from '../../utils/constant';
import InputForm from './input-form';

function LoginForm() {
  const router = useRouter();
  const { addToast } = useToasts();
  const { state, dispatch } = useProductContext();
  const [userInput, setUserInput] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { LOGIN_FAILED, LOGIN_SUCCESS } = messageNotifications;
  const { username, password } = userInput;
  const buttonStyle = `${isLoading && 'cursor-not-allowed'} text-xl w-full mt-12 mb-0.5 text-white rounded-full bg-dark lg:py-3.5 hover:shadow-md duration-300 ease-in-out`;

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  const adminLogin = async () => {
    const user = await getUser('admin');
    if (user.email === username && user.password === password) {
      setLoginInfo('Admin', 'admin', user.token);
    } else {
      userLogin();
    }
  };

  const userLogin = async () => {
    const data = { username, password };
    const user = await getUser('user', 'post', data);

    if (user) {
      setLoginInfo(username, 'user', user.token);
    } else {
      addToast(LOGIN_FAILED.message, LOGIN_FAILED.status);
      setIsLoading(false);
    }
  };

  const submitHandler = async (event) => {
    setIsLoading(true);
    if (event.key === 'Enter' || event?.type === 'click') {
      if (username && password) {
        adminLogin();
      } else {
        addToast(LOGIN_FAILED.message, LOGIN_FAILED.status);
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line no-shadow
  const setLoginInfo = (username, level, token) => {
    dispatch({ type: POST_LOGIN, payload: { username, level, token } });
    addToast(LOGIN_SUCCESS.message(level), LOGIN_SUCCESS.status);

    const { isFromProductPath, previousPath } = getPreviousPath();
    const isUser = level === 'user';
    const redirect = isFromProductPath && isUser ? previousPath : '/';

    router.replace(redirect);
    setIsLoading(false);
  };

  return (
    <form className="flex flex-col w-full text-dark md:px-28 lg:w-1/2 lg:px-10">
      <h1 className="mb-5 text-4xl font-bold text-center text-blue-500 md:text-5xl lg:text-6xl">
        TOKO BIRU
      </h1>
      <div className="space-y-12">
        <InputForm callback={setUserInput} value={userInput} name="username">
          <AiOutlineUser className="relative text-2xl left-3 top-2 lg:top-3" />
        </InputForm>
        <InputForm
          callback={setUserInput}
          value={userInput}
          name="password"
          type="password"
          actions={submitHandler}
        >
          <AiOutlineLock className="relative text-2xl left-3 top-2 lg:top-3" />
        </InputForm>
      </div>
      <Button
        className={buttonStyle}
        text="Login"
        eventHandler={submitHandler}
        disabled={isLoading}
      >
        <AiOutlineLoading3Quarters
          className={isLoading ? 'inline-block animate-spin' : 'hidden'}
        />
      </Button>
      <small className="font-bold text-center">DEMO</small>
      <small className="text-center">username: johnd</small>
      <small className="text-center">password: m38rmF$</small>
    </form>
  );
}

export default LoginForm;
