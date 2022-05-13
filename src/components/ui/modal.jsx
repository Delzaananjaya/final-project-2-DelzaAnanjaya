import { RiCloseCircleFill } from 'react-icons/ri';
import Button from './button';
import { TOGGLE_MODAL } from '../../reducers/actions';
import { useProductContext } from '../../context/product-context';

function Modal() {
  const { state, dispatch } = useProductContext();
  const mainDiv = `${state.isModalOpen ? 'fixed' : 'hidden'} min-w-full min-h-screen backdrop-blur-sm origin-top-right top-0 right-0 z-50 px-[10%] py-[40%] md:py-[25%] md:px-[20%] lg:py-[15%] lg:px-[30%]`;

  const closeButton = () => dispatch({ type: TOGGLE_MODAL, payload: false });

  const applyButton = () => {
    state.actions();
    closeButton();
  };

  return (
    <div className={mainDiv} tabIndex="-1">
      <div className="w-full px-3 py-3 bg-white border rounded-md shadow-md border-dark">
        <div className="flex items-center justify-between bg-white">
          <h3 className="text-xl font-bold">Checkout</h3>
          <Button className="text-dark" eventHandler={closeButton}>
            <RiCloseCircleFill className="min-h-[30px] min-w-[30px]" />
          </Button>
        </div>
        <div className="w-full px-1 pt-3 pb-8 text-center border-t-2 border-dark md:text-left">
          <p>{state.message}</p>
        </div>
        <div className="flex justify-end w-full pt-3 space-x-2">
          <Button
            className="px-6 border-2 border-dark text-dark"
            text="No"
            eventHandler={closeButton}
          />
          <Button
            className="px-6 text-white border-2 border-dark bg-dark"
            text="Yes"
            eventHandler={applyButton}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
