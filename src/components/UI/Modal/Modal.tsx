import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

interface ModalProps extends PropsWithChildren {
  closeCart: () => void;
}

interface BackdropProps {
  onClick: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick}></div>;
};

const ModalOverlay: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')!;

const Modal: React.FC<ModalProps> = ({ children, closeCart }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={closeCart} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
