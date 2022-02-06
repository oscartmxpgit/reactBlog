import { Close } from '#constants/icons';

const Modal = ({ openOrClose, title, Content, isTrue }: Props) => {
  const cancel = () => {
    isTrue(false);
    // openOrClose();
  };
  const confirm = () => {
    isTrue(true);
    // openOrClose();
  };

  return (
    <div className="modal">
      <div className="modalContainer">
        <div className="modalHeader">
          <h2>{title}</h2>
          <button onClick={openOrClose}>
            <Close />
          </button>
        </div>
        <div className="modalBody">
          <Content />
        </div>
        <div className="modalFooter">
          <button onClick={confirm}>Accept</button>
          <button onClick={cancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
interface Props {
  openOrClose: () => any;
  isTrue: (a?: any) => any;
  Content: any;
  title: string;
}

export default Modal;
